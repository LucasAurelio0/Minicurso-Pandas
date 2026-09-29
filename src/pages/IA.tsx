function IA() {
    return (
        <div className="section ia-section">
            <div className="container">
                <span className="section-label">
                    APRENDENDO COM IA
                </span>

                <h1>Aprender com IA vai além do Pandas</h1>

                <p className="section-intro">
                    A estratégia que você experimentou neste minicurso pode ser
                    utilizada em muitos outros conteúdos. A IA pode participar do
                    seu processo de aprendizagem como uma interlocutora.
                </p>

                <section className="ai-method">
                    <h2>Leve esta estratégia com você</h2>

                    <div className="ai-flow">
                        <div className="ai-step">
                            <span className="ai-step-icon">💬</span>
                            <strong>Explique</strong>
                            <p>
                                Tente explicar o conteúdo com suas próprias palavras.
                            </p>
                        </div>

                        <span className="ai-arrow" aria-hidden="true">
                            <span className="arrow-desktop">→</span>
                            <span className="arrow-mobile">↓</span>
                        </span>

                        <div className="ai-step">
                            <span className="ai-step-icon">🔎</span>
                            <strong>Questione</strong>
                            <p>
                                Converse com a IA e faça perguntas para aprofundar.
                            </p>
                        </div>

                        <span className="ai-arrow" aria-hidden="true">
                            <span className="arrow-desktop">→</span>
                            <span className="arrow-mobile">↓</span>
                        </span>

                        <div className="ai-step">
                            <span className="ai-step-icon">🧠</span>
                            <strong>Revise</strong>
                            <p>
                                Reavalie sua explicação e confirme o que aprendeu.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="ai-applications">
                    <h2>Onde você pode aplicar isso?</h2>

                    <div className="cards">
                        <article className="card">
                            <span className="card-icon">💻</span>
                            <h3>Programação</h3>
                            <p>
                                Explique seu código e peça à IA que faça perguntas
                                sobre suas decisões.
                            </p>
                        </article>

                        <article className="card">
                            <span className="card-icon">📊</span>
                            <h3>Análise de dados</h3>
                            <p>
                                Interprete um resultado e converse com a IA sobre
                                possíveis interpretações ou dúvidas.
                            </p>
                        </article>

                        <article className="card">
                            <span className="card-icon">🧮</span>
                            <h3>Algoritmos</h3>
                            <p>
                                Explique um algoritmo com suas palavras e peça
                                exemplos que testem sua compreensão.
                            </p>
                        </article>

                        <article className="card">
                            <span className="card-icon">📚</span>
                            <h3>Conceitos</h3>
                            <p>
                                Tente explicar um conceito antes de pedir uma
                                definição ou explicação à IA.
                            </p>
                        </article>

                        <article className="card">
                            <span className="card-icon">🔍</span>
                            <h3>Resolução de problemas</h3>
                            <p>
                                Apresente seu raciocínio e peça perguntas que ajudem
                                a identificar possíveis lacunas.
                            </p>
                        </article>
                    </div>
                </section>

                <section className="ai-highlight">
                    <span className="ai-highlight-icon">💡</span>

                    <div>
                        <h2>A IA não precisa entregar a resposta.</h2>

                        <p>
                            Ela também pode ajudar você a{' '}
                            <strong>pensar sobre a resposta</strong>.
                        </p>
                    </div>
                </section>

                <section className="ai-challenge">
                    <span className="section-label">
                        AGORA É COM VOCÊ
                    </span>

                    <h2>Leve essa estratégia para outro conteúdo</h2>

                    <p>
                        Escolha um assunto que você esteja estudando e experimente:
                    </p>

                    <div className="challenge-flow">
                        <span>Explique</span>

                        <span
                            className="challenge-arrow"
                            aria-hidden="true"
                        >
                            <span className="arrow-desktop">→</span>
                            <span className="arrow-mobile">↓</span>
                        </span>

                        <span>Converse</span>

                        <span
                            className="challenge-arrow"
                            aria-hidden="true"
                        >
                            <span className="arrow-desktop">→</span>
                            <span className="arrow-mobile">↓</span>
                        </span>

                        <span>Questione</span>

                        <span
                            className="challenge-arrow"
                            aria-hidden="true"
                        >
                            <span className="arrow-desktop">→</span>
                            <span className="arrow-mobile">↓</span>
                        </span>

                        <span>Revise</span>
                    </div>

                    <p className="challenge-description">
                        O objetivo não é obter uma resposta pronta, mas terminar
                        o diálogo entendendo melhor o assunto.
                    </p>

                </section>
            </div>

        </div>
    )
}

export default IA