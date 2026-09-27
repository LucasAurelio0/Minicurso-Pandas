function Aula() {
    return (
        <main className="section">
            <div className="container">
                <span className="section-label">
                    AULA
                </span>

                <h1>Exploração inicial de dados com Pandas</h1>

                <p className="section-intro">
                    Nesta aula, você aprenderá os primeiros passos para realizar
                    uma exploração inicial de dados utilizando Pandas e compreenderá
                    o propósito dos principais comandos utilizados nesse processo.
                </p>

                <section className="lesson-preparation">
                    <h2>Antes de assistir</h2>

                    <p>
                        Para aproveitar melhor a aula, é recomendado que você tenha
                        conhecimentos básicos de Python e estatística. Não é necessário
                        ter experiência prévia com Pandas.
                    </p>

                    <p>
                        Durante o minicurso, você utilizará o Google Colab para realizar
                        as atividades práticas e uma ferramenta de Inteligência Artificial
                        para apoiar seu processo de aprendizagem.
                    </p>
                </section>

                <section className="lesson-video">
                    <h2>Videoaula</h2>

                    <div className="video-container">
                        <iframe
                            src="https://www.youtube.com/embed/QAZLHAmT46c"
                            title="Videoaula do minicurso"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Aula