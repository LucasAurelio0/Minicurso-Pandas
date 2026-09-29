import { useEffect, useRef, useState } from 'react'

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
        question:
            'Qual é o principal objetivo da exploração inicial de um conjunto de dados?',
        options: [
            'Criar imediatamente um modelo de Machine Learning.',
            'Conhecer a estrutura, os tipos e algumas características dos dados.',
            'Excluir todas as colunas que possuem valores ausentes.',
            'Transformar todas as variáveis em números.',
        ],
        correctAnswer: 1,
        feedback: [
            'A exploração inicial acontece antes da construção de modelos e serve para conhecer os dados.',
            'Correto! A exploração inicial permite compreender a estrutura, os tipos, os valores e possíveis problemas presentes nos dados.',
            'Valores ausentes não devem ser simplesmente excluídos sem antes compreender por que estão ausentes.',
            'Nem todas as variáveis precisam ou devem ser transformadas em números.',
        ],
        explanation:
            'A exploração inicial ajuda a compreender o conjunto de dados antes de realizar análises mais avançadas ou construir modelos.',
    },
    {
        question:
            'O que podemos descobrir utilizando o atributo `shape` de um DataFrame?',
        options: [
            'Os nomes de todas as colunas.',
            'A quantidade de valores ausentes.',
            'A quantidade de linhas e colunas.',
            'A média de cada coluna numérica.',
        ],
        correctAnswer: 2,
        feedback: [
            'Os nomes das colunas podem ser observados utilizando, por exemplo, `columns`.',
            'A quantidade de valores ausentes pode ser investigada com outros comandos, como `isna()`.',
            'Correto! O atributo `shape` informa a quantidade de linhas e colunas do DataFrame.',
            'A média das colunas numéricas pode ser obtida por meio de métodos estatísticos, como `mean()`.',
        ],
        explanation:
            'O atributo `shape` retorna uma tupla no formato `(linhas, colunas)`, permitindo conhecer rapidamente as dimensões do DataFrame.',
    },
    {
        question:
            'Para que o comando `df.head()` é utilizado durante uma exploração inicial?',
        options: [
            'Para visualizar as primeiras linhas do DataFrame.',
            'Para excluir as primeiras linhas do DataFrame.',
            'Para calcular a média das colunas.',
            'Para descobrir apenas os valores ausentes.',
        ],
        correctAnswer: 0,
        feedback: [
            'Correto! `head()` permite visualizar as primeiras linhas do DataFrame.',
            'O comando `head()` apenas visualiza os dados; ele não exclui linhas.',
            'O cálculo de médias pode ser realizado com métodos estatísticos, como `mean()`.',
            'Para investigar valores ausentes, podemos utilizar comandos como `isna()`.',
        ],
        explanation:
            'Visualizar algumas linhas é uma forma simples de começar a entender como os dados estão organizados.',
    },
    {
        question:
            'Por que observar os tipos das colunas é importante durante a exploração inicial?',
        options: [
            'Porque todas as colunas precisam ter exatamente o mesmo tipo.',
            'Porque permite verificar se os dados estão representados de maneira adequada.',
            'Porque transforma automaticamente todas as colunas em números.',
            'Porque elimina valores ausentes.',
        ],
        correctAnswer: 1,
        feedback: [
            'Um DataFrame pode possuir diferentes tipos de dados, como números, textos e datas.',
            'Correto! Verificar os tipos ajuda a identificar se os dados estão representados de maneira adequada para a análise.',
            'Observar os tipos não transforma automaticamente as colunas.',
            'A verificação dos tipos não elimina valores ausentes.',
        ],
        explanation:
            'Uma coluna que deveria representar números, por exemplo, pode estar armazenada como texto. Identificar situações assim é importante antes de continuar a análise.',
    },
    {
        question:
            'Qual é uma boa forma de utilizar uma IA durante a aprendizagem de Pandas?',
        options: [
            'Pedir que a IA faça toda a atividade sem tentar compreender os comandos.',
            'Copiar qualquer resposta fornecida pela IA sem verificar.',
            'Explicar o que você entendeu e utilizar a IA para questionar e aprofundar sua compreensão.',
            'Evitar fazer perguntas para a IA durante o estudo.',
        ],
        correctAnswer: 2,
        feedback: [
            'O objetivo da estratégia do minicurso é utilizar a IA como apoio à compreensão, e não apenas como executora da atividade.',
            'As respostas da IA podem conter erros e devem ser analisadas e verificadas.',
            'Correto! Explicar, questionar e revisar transforma a IA em uma interlocutora do processo de aprendizagem.',
            'Fazer perguntas é justamente uma das formas propostas para utilizar a IA durante a aprendizagem.',
        ],
        explanation:
            'A proposta é tentar compreender primeiro, explicar com suas próprias palavras e então utilizar a IA para questionar, esclarecer e aprofundar o conteúdo.',
    },
    {
        question:
            'Depois de receber uma explicação da IA sobre um comando do Pandas, qual atitude é mais adequada?',
        options: [
            'Aceitar a resposta automaticamente.',
            'Ignorar a resposta e continuar a atividade.',
            'Verificar a explicação e comparar com fontes confiáveis.',
            'Pedir para a IA responder novamente até obter uma resposta diferente.',
        ],
        correctAnswer: 2,
        feedback: [
            'Respostas geradas por IA não devem ser aceitas automaticamente.',
            'Ignorar a resposta elimina uma oportunidade de utilizar o diálogo para aprofundar a compreensão.',
            'Correto! Verificar a informação em fontes confiáveis ajuda a identificar possíveis erros e consolidar o aprendizado.',
            'Obter outra resposta da mesma IA não garante que a informação esteja correta.',
        ],
        explanation:
            'A IA pode ser útil para explicar e questionar, mas suas respostas precisam ser analisadas e, quando necessário, verificadas em documentação e outras fontes confiáveis.',
    },
    {
        question:
            'Qual destas situações representa melhor a estratégia de aprendizagem proposta no minicurso?',
        options: [
            'Executar todos os comandos sem tentar compreender o que fazem.',
            'Explicar o que entendeu, conversar com a IA, identificar dúvidas e revisar sua explicação.',
            'Utilizar a IA para responder todas as questões antes de tentar resolvê-las.',
            'Memorizar os comandos do Pandas sem compreender sua finalidade.',
        ],
        correctAnswer: 1,
        feedback: [
            'Executar comandos sem compreender seu propósito não corresponde à estratégia apresentada.',
            'Correto! A estratégia combina explicação, diálogo, questionamento e revisão para aprofundar a compreensão.',
            'A proposta é utilizar a IA como apoio ao processo de aprendizagem, e não como substituta da tentativa do estudante.',
            'Memorizar comandos não garante compreensão sobre quando ou por que utilizá-los.',
        ],
        explanation:
            'A estratégia pode ser resumida como: tentar compreender, explicar, dialogar com a IA, questionar, revisar e verificar.',
    },
]

function loadBestResult(): BestResult | null {
    try {
        const savedResult = localStorage.getItem(STORAGE_KEY)

        if (!savedResult) {
            return null
        }

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

    const feedbackRef = useRef<HTMLDivElement>(null)
    const questionRef = useRef<HTMLDivElement>(null)
    const resultRef = useRef<HTMLDivElement>(null)

    const question = questions[currentQuestion]
    const answered = selectedAnswer !== null
    const isCorrect = selectedAnswer === question.correctAnswer

    /*
     * Depois que o aluno responde, leva automaticamente
     * para a área onde aparece a justificativa.
     */
    useEffect(() => {
        if (answered && feedbackRef.current) {
            feedbackRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        }
    }, [answered])

    /*
     * Quando uma nova pergunta é carregada, leva o aluno
     * automaticamente para o início da questão.
     */
    useEffect(() => {
        if (currentQuestion > 0 && !answered && questionRef.current) {
            questionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }, [currentQuestion, answered])

    useEffect(() => {
        if (finished && resultRef.current) {
            resultRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }, [finished])

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
        if (!answered) {
            return
        }

        if (currentQuestion === questions.length - 1) {
            const finalScore = score
            const finalPercentage = Math.round(
                (finalScore / questions.length) * 100,
            )

            const finalXp = finalScore * 100

            const finalBestStreak = bestStreak

            const newResult: BestResult = {
                score: finalScore,
                xp: finalXp,
                percentage: finalPercentage,
                bestStreak: finalBestStreak,
            }

            const previousBest = loadBestResult()

            const isNewRecord =
                !previousBest ||
                finalXp > previousBest.xp ||
                finalBestStreak > previousBest.bestStreak

            if (isNewRecord) {
                localStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify(newResult),
                )

                setBestResult(newResult)
            } else {
                setBestResult(previousBest)
            }

            setScore(finalScore)
            setBestStreak(finalBestStreak)
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

        setTimeout(() => {
            document
                .getElementById('avaliacao')
                ?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
        }, 50)
    }

    function handleClearRecord() {
        localStorage.removeItem(STORAGE_KEY)
        setBestResult(null)
    }

    if (finished) {
        const finalPercentage = Math.round(
            (score / questions.length) * 100,
        )

        const finalXp = score * 100

        const isNewRecord =
            bestResult !== null &&
            finalXp >= bestResult.xp &&
            bestStreak >= bestResult.bestStreak

        return (
            <div className="section avaliacao-section">
                <div className="container">
                    <span className="section-label">
                        AVALIAÇÃO
                    </span>

                    <div
                        ref={resultRef}
                        className="quiz-result"
                    >
                        <div className="result-icon">
                            {finalPercentage >= 70 ? '🎉' : '📚'}
                        </div>

                        <div className="result-text">
                            <h1>
                                {finalPercentage >= 70
                                    ? 'Avaliação concluída!'
                                    : 'Avaliação concluída'}
                            </h1>

                            <p>
                                Você concluiu todas as questões do minicurso.
                            </p>
                        </div>

                        {isNewRecord && (
                            <div className="new-record">
                                🏆 Novo recorde!
                            </div>
                        )}

                        <div className="result-stats">
                            <div className="result-stat">
                                <strong>{score}</strong>
                                <span>de {questions.length}</span>
                                <small>Acertos</small>
                            </div>

                            <div className="result-stat">
                                <strong>{finalPercentage}%</strong>
                                <span>aproveitamento</span>
                                <small>Resultado</small>
                            </div>

                            <div className="result-stat">
                                <strong>{finalXp}</strong>
                                <span>XP</span>
                                <small>Pontuação</small>
                            </div>

                            <div className="result-stat">
                                <strong>{bestStreak}</strong>
                                <span>seguidas</span>
                                <small>Melhor sequência</small>
                            </div>
                        </div>

                        {bestResult && (
                            <div className="personal-record">
                                <h2>Seu melhor resultado</h2>

                                <p>
                                    {bestResult.score} de{' '}
                                    {questions.length} acertos ·{' '}
                                    {bestResult.percentage}% ·{' '}
                                    {bestResult.xp} XP · sequência de{' '}
                                    {bestResult.bestStreak}
                                </p>
                            </div>
                        )}

                        <p className="result-message">
                            {finalPercentage >= 70
                                ? 'Você demonstrou uma boa compreensão dos conceitos trabalhados no minicurso.'
                                : 'Revise os conteúdos da aula e tente novamente. O objetivo é compreender os conceitos, não apenas acertar as questões.'}
                        </p>

                        <div className="result-actions">
                            <button
                                type="button"
                                className="primary-button"
                                onClick={handleRestart}
                            >
                                Refazer avaliação
                            </button>

                            <a
                                href="#inicio"
                                className="secondary-button"
                            >
                                Voltar ao início
                            </a>
                        </div>

                        {bestResult && (
                            <button
                                type="button"
                                className="clear-record-button"
                                onClick={handleClearRecord}
                            >
                                Limpar meu recorde
                            </button>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    const progress =
        ((currentQuestion + 1) / questions.length) * 100

    return (
        <div className="section avaliacao-section">
            <div className="container">
                <div className="quiz-header">
                    <span className="section-label">
                        AVALIAÇÃO
                    </span>

                    <h1>Teste sua compreensão</h1>

                    <p className="section-intro">
                        Responda às questões abaixo para verificar sua
                        compreensão dos conteúdos apresentados no minicurso.
                        Depois de escolher uma alternativa, leia a
                        justificativa antes de continuar.
                    </p>
                </div>

                {bestResult && (
                    <div className="previous-record">
                        <span>🏆</span>

                        <div>
                            <strong>
                                Seu melhor resultado
                            </strong>

                            <p>
                                {bestResult.score} de{' '}
                                {questions.length} acertos ·{' '}
                                {bestResult.percentage}% ·{' '}
                                {bestResult.xp} XP
                            </p>
                        </div>
                    </div>
                )}

                <div className="quiz-game">
                    <div className="quiz-topbar">
                        <div className="quiz-progress-info">
                            <strong>
                                Questão {currentQuestion + 1}
                            </strong>

                            <span>
                                de {questions.length}
                            </span>
                        </div>

                        <div className="quiz-streak">
                            🔥 {streak}
                        </div>
                    </div>

                    <div
                        className="progress-bar"
                        aria-label={`Progresso: questão ${currentQuestion + 1
                            } de ${questions.length}`}
                    >
                        <div
                            className="progress-bar-fill"
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>

                    <div
                        ref={questionRef}
                        className="quiz-question"
                    >
                        <span className="question-number">
                            {String(
                                currentQuestion + 1,
                            ).padStart(2, '0')}
                        </span>

                        <h2>{question.question}</h2>

                        <div className="quiz-options">
                            {question.options.map(
                                (option, index) => {
                                    const isSelected =
                                        selectedAnswer === index

                                    const isCorrectOption =
                                        index ===
                                        question.correctAnswer

                                    let optionClass =
                                        'quiz-option'

                                    if (answered) {
                                        if (
                                            isCorrectOption
                                        ) {
                                            optionClass +=
                                                ' correct'
                                        } else if (
                                            isSelected
                                        ) {
                                            optionClass +=
                                                ' incorrect'
                                        } else {
                                            optionClass +=
                                                ' disabled'
                                        }
                                    }

                                    return (
                                        <button
                                            key={option}
                                            type="button"
                                            className={optionClass}
                                            onClick={() =>
                                                handleAnswer(
                                                    index,
                                                )
                                            }
                                            disabled={answered}
                                        >
                                            <span className="option-letter">
                                                {String.fromCharCode(
                                                    65 + index,
                                                )}
                                            </span>

                                            <span className="option-text">
                                                {option}
                                            </span>

                                            {answered &&
                                                isCorrectOption && (
                                                    <span
                                                        className="option-icon"
                                                        aria-hidden="true"
                                                    >
                                                        ✓
                                                    </span>
                                                )}

                                            {answered &&
                                                isSelected &&
                                                !isCorrectOption && (
                                                    <span
                                                        className="option-icon"
                                                        aria-hidden="true"
                                                    >
                                                        ✕
                                                    </span>
                                                )}
                                        </button>
                                    )
                                },
                            )}
                        </div>
                    </div>

                    {answered && (
                        <div
                            ref={feedbackRef}
                            className={`quiz-feedback ${isCorrect
                                ? 'feedback-correct'
                                : 'feedback-incorrect'
                                }`}
                            role="status"
                            aria-live="polite"
                            tabIndex={-1}
                        >
                            <div className="feedback-heading">
                                <span className="feedback-icon">
                                    {isCorrect ? '✓' : '✕'}
                                </span>

                                <strong>
                                    {isCorrect
                                        ? 'Resposta correta!'
                                        : 'Resposta incorreta'}
                                </strong>
                            </div>

                            <p>
                                {question.feedback[
                                    selectedAnswer
                                ]}
                            </p>

                            <div className="feedback-explanation">
                                <strong>
                                    Por que isso importa?
                                </strong>

                                <p>
                                    {question.explanation}
                                </p>
                            </div>

                            <button
                                type="button"
                                className="feedback-button"
                                onClick={handleNext}
                            >
                                {currentQuestion ===
                                    questions.length - 1
                                    ? 'Ver resultado'
                                    : 'Próxima questão'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Avaliacao