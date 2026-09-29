function Referencias() {
    return (
        <div className="section referencias-page-section">
            <div className="container">
                <span className="section-label">
                    REFERÊNCIAS
                </span>

                <h1>Referências e materiais de apoio</h1>

                <p className="section-intro">
                    Nesta página estão reunidos os materiais utilizados como base
                    para o conteúdo do minicurso e recursos que podem ser consultados
                    para aprofundar os conhecimentos apresentados.
                </p>

                <section className="references-section">
                    <h2>Referências principais</h2>

                    <div className="reference-list">
                        <article className="reference-item">
                            <h3>
                                pandas — Python Data Analysis Library
                            </h3>

                            <p>
                                Documentação oficial da biblioteca Pandas, utilizada como
                                referência para os conceitos e comandos apresentados na
                                exploração inicial de dados.
                            </p>

                            <a
                                href="https://pandas.pydata.org/docs/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Acessar documentação do Pandas →
                            </a>
                        </article>

                        <article className="reference-item">
                            <h3>
                                Python Documentation
                            </h3>

                            <p>
                                Documentação oficial da linguagem Python, utilizada como
                                material de apoio para os conhecimentos básicos necessários
                                ao minicurso.
                            </p>

                            <a
                                href="https://docs.python.org/3/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Acessar documentação do Python →
                            </a>
                        </article>

                        <article className="reference-item">
                            <h3>
                                Google Colab
                            </h3>

                            <p>
                                Ambiente utilizado para a realização da atividade prática
                                com Pandas, permitindo executar notebooks diretamente no
                                navegador.
                            </p>

                            <a
                                href="https://research.google.com/colaboratory/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Acessar Google Colab →
                            </a>
                        </article>
                    </div>
                </section>

                <section className="references-note">
                    <h2>Sobre o uso das referências</h2>

                    <p>
                        As referências apresentadas servem como materiais de apoio para
                        consulta e aprofundamento. Durante as atividades, a utilização
                        de Inteligência Artificial deve ser acompanhada de análise,
                        questionamento e verificação das informações em fontes confiáveis.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Referencias