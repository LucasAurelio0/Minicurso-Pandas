import { useState } from 'react'
import NextStep from '../components/NextStep'

type Question = {
    question: string
    options: string[]
    correctAnswer: number
    feedback: string[]
    explanation: string
}

type BestResult = {
    score: number
    xp: number
    percentage: number
    bestStreak: number
}

const STORAGE_KEY = 'minicurso-pandas-best-result'

const questions: Question[] = [
    {
        question: 'Qual é um dos principais objetivos de uma exploração inicial de dados?',
        options: [
            'Criar um modelo de inteligência artificial imediatamente.',
            'Compreender a estrutura, características e possíveis problemas dos dados.',
            'Excluir automaticamente todas as linhas que possuem valores ausentes.',
            'Transformar todas as colunas em valores numéricos.',
        ],
        correctAnswer: 1,
        feedback: [
            'A exploração inicial acontece antes disso. Primeiro é importante compreender os dados que estão sendo analisados.',
            'Isso! A exploração inicial ajuda a compreender a estrutura dos dados, identificar padrões e perceber possíveis problemas.',
            'Valores ausentes precisam ser analisados antes de decidir como tratá-los. Excluir automaticamente os registros pode causar perda de informação.',
            'Nem todas as colunas devem ser numéricas. Dados textuais e categóricos também podem ser importantes para a análise.',
        ],
        explanation:
            'A exploração inicial permite conhecer o conjunto de dados antes de tomar decisões sobre limpeza, transformação ou análise.',
    },

    {
        question: 'O que o comando df.head() permite observar?',
        options: [
            'As primeiras linhas do DataFrame.',
            'A quantidade de valores ausentes de cada coluna.',
            'A média de todas as colunas numéricas.',
            'Apenas os nomes das colunas.',
        ],
        correctAnswer: 0,
        feedback: [
            'Correto! Por padrão, df.head() apresenta as primeiras linhas do DataFrame.',
            'Essa não é a função principal de df.head(). Para investigar valores ausentes, existem outras abordagens.',
            'A média dos valores não é calculada por df.head().',
            'Os nomes das colunas podem aparecer junto com os dados, mas o objetivo é visualizar as primeiras linhas.',
        ],
        explanation:
            'Visualizar as primeiras linhas é uma forma rápida de observar como os dados estão organizados e ter uma primeira impressão do conteúdo.',
    },

    {
        question: 'Por que utilizar df.info() durante a exploração inicial?',
        options: [
            'Para criar automaticamente gráficos para todas as colunas.',
            'Para excluir colunas que possuem muitos valores ausentes.',
            'Para obter informações sobre a estrutura do DataFrame, incluindo tipos de dados e valores não nulos.',
            'Para ordenar todas as linhas do DataFrame.',
        ],
        correctAnswer: 2,
        feedback: [
            'df.info() não cria gráficos. Ele apresenta informações estruturais sobre o DataFrame.',
            'O método informa características dos dados, mas não decide nem executa automaticamente a exclusão de colunas.',
            'Correto! df.info() fornece informações importantes sobre a estrutura do DataFrame, como colunas, tipos e valores não nulos.',
            'A ordenação dos dados é outra operação e não é realizada por df.info().',
        ],
        explanation:
            'Conhecer os tipos das colunas e a quantidade de valores não nulos ajuda a identificar como os dados podem ser trabalhados posteriormente.',
    },

    {
        question: 'Ao encontrar uma coluna com valores ausentes, qual atitude é mais adequada?',
        options: [
            'Sempre excluir imediatamente todas as linhas com valores ausentes.',
            'Sempre substituir os valores ausentes por zero.',
            'Ignorar o problema porque o Pandas consegue resolver automaticamente.',
            'Investigar o contexto dos dados antes de decidir como tratar os valores ausentes.',
        ],
        correctAnswer: 3,
        feedback: [
            'Excluir linhas pode ser adequado em alguns casos, mas não deve ser uma decisão automática.',
            'Zero possui um significado próprio e pode representar uma informação incorreta quando usado para substituir um valor ausente.',
            'O tratamento depende do contexto e das características do conjunto de dados.',
            'Correto! Antes de tratar valores ausentes, é necessário entender o que eles representam e quais consequências cada estratégia pode trazer.',
        ],
        explanation:
            'O tratamento de dados não deve ser apenas mecânico. Uma decisão adequada depende do significado dos dados e do objetivo da análise.',
    },

    {
        question: 'Qual destas situações representa melhor a proposta de aprendizagem com IA apresentada no minicurso?',
        options: [
            'Copiar a primeira resposta da IA e utilizá-la sem verificar.',
            'Pedir para a IA resolver toda a atividade antes de tentar compreender o problema.',
            'Explicar o que você entendeu, conversar com a IA, questionar a resposta e revisar sua compreensão.',
            'Utilizar a IA somente quando a atividade estiver completamente pronta.',
        ],
        correctAnswer: 2,
        feedback: [
            'A proposta não é aceitar respostas automaticamente. É importante compreender e verificar as informações.',
            'Resolver tudo antes de tentar compreender reduz a oportunidade de utilizar a IA como parte do processo de aprendizagem.',
            'Isso! A ideia é utilizar a IA como interlocutora para explicar, questionar, identificar lacunas e revisar a própria compreensão.',
            'A IA pode participar de diferentes momentos do processo de aprendizagem, não apenas no final.',
        ],
        explanation:
            'O minicurso propõe uma relação ativa com a IA: o estudante formula explicações, faz perguntas, analisa as respostas e revisa seu entendimento.',
    },

    {
        question: 'Você executou df.describe() e recebeu resultados estatísticos. Qual seria uma boa atitude?',
        options: [
            'Aceitar os resultados sem verificar porque o Pandas já interpretou os dados.',
            'Tentar compreender o que cada estatística representa e relacioná-la às características dos dados.',
            'Excluir todas as colunas que não aparecem no resultado.',
            'Considerar que os resultados estatísticos são sempre suficientes para compreender todo o conjunto de dados.',
        ],
        correctAnswer: 1,
        feedback: [
            'Ferramentas podem produzir resultados corretamente sem que o usuário compreenda o que eles significam. A interpretação continua sendo importante.',
            'Correto! O objetivo é interpretar os resultados e relacioná-los ao contexto dos dados.',
            'A ausência de uma coluna nesse resultado não significa que ela deva ser excluída.',
            'Estatísticas descritivas são úteis, mas representam apenas uma parte da exploração dos dados.',
        ],
        explanation:
            'A exploração não termina quando um comando é executado. É necessário interpretar o resultado e relacioná-lo ao problema analisado.',
    },

    {
        question: 'Qual comportamento demonstra melhor uma utilização crítica da IA durante os estudos?',
        options: [
            'Usar a IA como única fonte de informação.',
            'Evitar questionar respostas para não interromper o fluxo de estudo.',
            'Comparar as respostas da IA com seu próprio raciocínio e, quando necessário, consultar fontes confiáveis.',
            'Pedir respostas cada vez mais curtas para terminar a atividade rapidamente.',
        ],
        correctAnswer: 2,
        feedback: [
            'A IA pode apresentar informações incorretas ou incompletas. Por isso, não deve ser tratada como única fonte.',
            'Questionar é justamente uma das estratégias utilizadas para aprofundar a aprendizagem.',
            'Correto! Comparar, questionar e verificar informações ajuda a manter o estudante ativo no processo de aprendizagem.',
            'Ser objetivo pode ser útil, mas terminar rapidamente não significa necessariamente compreender melhor o conteúdo.',
        ],
        explanation:
            'O diálogo com IA funciona melhor como parte de um processo de reflexão e verificação, e não como substituição do raciocínio do estudante.',
    },
]

function loadBestResult(): BestResult | null {
    const savedResult = localStorage.getItem(STORAGE_KEY)

    if (!savedResult) {
        return null
    }

    try {
        return JSON.parse(savedResult) as BestResult
    } catch {
        return null
    }
}

function Avaliacao() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [score, setScore] = useState(0)
    const [streak, setStreak] = useState(0)
    const [bestStreak, setBestStreak] = useState(0)
    const [finished, setFinished] = useState(false)
    const [bestResult, setBestResult] = useState<BestResult | null>(() =>
        loadBestResult(),
    )

    const question = questions[currentQuestion]
    const answered = selectedAnswer !== null
    const isCorrect = selectedAnswer === question.correctAnswer

    const xp = score * 100

    function handleAnswer(index: number) {
        if (answered) {
            return
        }

        setSelectedAnswer(index)

        if (index === question.correctAnswer) {
            const newStreak = streak + 1

            setScore((previous) => previous + 1)
            setStreak(newStreak)

            if (newStreak > bestStreak) {
                setBestStreak(newStreak)
            }
        } else {
            setStreak(0)
        }
    }

    function handleNext() {
        if (currentQuestion === questions.length - 1) {
            const finalScore = score
            const finalPercentage = Math.round(
                (finalScore / questions.length) * 100,
            )
            const finalXp = finalScore * 100

            const newResult: BestResult = {
                score: finalScore,
                xp: finalXp,
                percentage: finalPercentage,
                bestStreak,
            }

            const previousBest = loadBestResult()

            const isNewRecord =
                !previousBest ||
                finalXp > previousBest.xp ||
                bestStreak > previousBest.bestStreak

            if (isNewRecord) {
                localStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify(newResult),
                )

                setBestResult(newResult)
            } else {
                setBestResult(previousBest)
            }

            setFinished(true)
            return
        }

        setCurrentQuestion((previous) => previous + 1)
        setSelectedAnswer(null)
    }

    function handleRestart() {
        setCurrentQuestion(0)
        setSelectedAnswer(null)
        setScore(0)
        setStreak(0)
        setBestStreak(0)
        setFinished(false)
    }

    function handleClearRecord() {
        localStorage.removeItem(STORAGE_KEY)
        setBestResult(null)
    }

    function getResultMessage() {
        const percentage = (score / questions.length) * 100

        if (percentage === 100) {
            return {
                title: 'Missão concluída! 🏆',
                text: 'Você demonstrou domínio dos principais conceitos trabalhados no minicurso.',
            }
        }

        if (percentage >= 70) {
            return {
                title: 'Muito bem! 🚀',
                text: 'Você apresentou uma boa compreensão dos conceitos. Revise os pontos que geraram dúvidas.',
            }
        }

        if (percentage >= 50) {
            return {
                title: 'Quase lá! 💡',
                text: 'Você já possui alguns conhecimentos importantes. Vale a pena revisar os pontos que geraram dúvidas.',
            }
        }

        return {
            title: 'Hora de explorar novamente 🔎',
            text: 'Revisar a aula e refazer a atividade prática pode ajudar a consolidar os conceitos.',
        }
    }

    if (finished) {
        const result = getResultMessage()
        const percentage = Math.round((score / questions.length) * 100)

        const isNewRecord =
            bestResult !== null &&
            xp >= bestResult.xp &&
            bestStreak >= bestResult.bestStreak

        return (
            <main className="section">
                <div className="container">
                    <div className="quiz-result">
                        <span className="result-icon">
                            {percentage === 100 ? '🏆' : '🎯'}
                        </span>

                        <span className="section-label">
                            RESULTADO
                        </span>

                        <h1>{result.title}</h1>

                        <p className="result-text">
                            {result.text}
                        </p>

                        {isNewRecord && (
                            <div className="new-record">
                                🎉 Novo recorde!
                            </div>
                        )}

                        <div className="result-stats">
                            <div className="result-stat">
                                <strong>
                                    {score}/{questions.length}
                                </strong>
                                <span>Acertos</span>
                            </div>

                            <div className="result-stat">
                                <strong>{percentage}%</strong>
                                <span>Aproveitamento</span>
                            </div>

                            <div className="result-stat">
                                <strong>{xp} XP</strong>
                                <span>Pontuação</span>
                            </div>

                            <div className="result-stat">
                                <strong>{bestStreak} 🔥</strong>
                                <span>Sequência</span>
                            </div>
                        </div>

                        {bestResult && (
                            <div className="personal-record">
                                <div>
                                    <span>🏆</span>
                                    <div>
                                        <strong>Seu melhor resultado</strong>
                                        <p>
                                            {bestResult.score}/{questions.length} acertos ·{' '}
                                            {bestResult.percentage}% · {bestResult.xp} XP
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleClearRecord}
                                >
                                    Apagar recorde
                                </button>
                            </div>
                        )}

                        <div className="result-message">
                            <strong>Continue aprendendo!</strong>

                            <p>
                                O objetivo da avaliação não é apenas verificar respostas
                                corretas, mas ajudar você a identificar o que já compreendeu
                                e o que pode ser revisado.
                            </p>
                        </div>

                        <div className="result-actions">
                            <button
                                type="button"
                                className="primary-button"
                                onClick={handleRestart}
                            >
                                Refazer avaliação
                            </button>

                            <a
                                href="/"
                                className="secondary-button"
                            >
                                Voltar ao início
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    const progress = ((currentQuestion + 1) / questions.length) * 100

    return (
        <main className="section">
            <div className="container">
                <div className="quiz-header">
                    <span className="section-label">
                        DESAFIO FINAL
                    </span>

                    <h1>
                        Hora de colocar o que você aprendeu em prática!
                    </h1>

                    <p className="section-intro">
                        Responda às questões e use o feedback para refletir
                        sobre suas respostas.
                    </p>
                </div>

                {bestResult && (
                    <div className="previous-record">
                        <span>🏆</span>

                        <div>
                            <strong>Seu melhor resultado</strong>

                            <p>
                                {bestResult.score}/{questions.length} acertos ·{' '}
                                {bestResult.percentage}% · {bestResult.xp} XP
                            </p>
                        </div>
                    </div>
                )}

                <section className="quiz-game">
                    <div className="quiz-topbar">
                        <div className="quiz-progress-info">
                            <span>
                                Questão {currentQuestion + 1} de {questions.length}
                            </span>

                            <span>{xp} XP</span>
                        </div>

                        <div
                            className="progress-bar"
                            aria-label={`Progresso: ${currentQuestion + 1} de ${questions.length}`}
                        >
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        <div className="quiz-streak">
                            <span>
                                🔥 Sequência: <strong>{streak}</strong>
                            </span>

                            <span>
                                Pontos: <strong>{score}</strong>
                            </span>
                        </div>
                    </div>

                    <div className="quiz-question">
                        <span className="question-number">
                            QUESTÃO {String(currentQuestion + 1).padStart(2, '0')}
                        </span>

                        <h2>{question.question}</h2>

                        <div className="quiz-options">
                            {question.options.map((option, index) => {
                                let optionClass = 'quiz-option'

                                if (answered) {
                                    if (index === question.correctAnswer) {
                                        optionClass += ' correct'
                                    } else if (index === selectedAnswer) {
                                        optionClass += ' incorrect'
                                    } else {
                                        optionClass += ' disabled'
                                    }
                                }

                                return (
                                    <button
                                        key={option}
                                        type="button"
                                        className={optionClass}
                                        onClick={() => handleAnswer(index)}
                                        disabled={answered}
                                    >
                                        <span className="option-letter">
                                            {String.fromCharCode(65 + index)}
                                        </span>

                                        <span className="option-text">
                                            {option}
                                        </span>

                                        {answered &&
                                            index === question.correctAnswer && (
                                                <span
                                                    className="option-icon"
                                                    aria-label="Resposta correta"
                                                >
                                                    ✓
                                                </span>
                                            )}

                                        {answered &&
                                            index === selectedAnswer &&
                                            index !== question.correctAnswer && (
                                                <span
                                                    className="option-icon"
                                                    aria-label="Resposta incorreta"
                                                >
                                                    ×
                                                </span>
                                            )}
                                    </button>
                                )
                            })}
                        </div>

                        {answered && (
                            <div
                                className={`quiz-feedback ${isCorrect
                                    ? 'feedback-correct'
                                    : 'feedback-incorrect'
                                    }`}
                                role="status"
                                aria-live="polite"
                            >
                                <div className="feedback-heading">
                                    <span className="feedback-icon">
                                        {isCorrect ? '✓' : '💡'}
                                    </span>

                                    <strong>
                                        {isCorrect
                                            ? 'Resposta correta!'
                                            : 'Vamos analisar essa resposta.'}
                                    </strong>
                                </div>

                                <p>
                                    {question.feedback[selectedAnswer]}
                                </p>

                                <div className="feedback-explanation">
                                    <strong>Por que isso importa?</strong>

                                    <p>{question.explanation}</p>
                                </div>

                                <button
                                    type="button"
                                    className="primary-button feedback-button"
                                    onClick={handleNext}
                                >
                                    {currentQuestion === questions.length - 1
                                        ? 'Ver resultado'
                                        : 'Próxima questão →'}
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            <NextStep
                label="Referências e materiais de apoio"
                to="/referencias"
            />
        </main>
    )
}

export default Avaliacao