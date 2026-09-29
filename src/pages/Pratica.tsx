function Pratica() {
    return (
        <div className="section pratica-section">
            <div className="container">
                <span className="section-label">
                    PRÁTICA
                </span>

                <h1>Atividade prática</h1>

                <p className="section-intro">
                    Agora é sua vez de explorar o conjunto exemplificado na aula utilizando
                    Pandas. Você irá aplicar os conceitos
                    apresentados na aula e utilizar a explicação e o diálogo
                    com IA para aprofundar sua compreensão e resolver o exercício disponibilizado.
                </p>

                <section className="practice-instructions">
                    <h2>Antes de começar</h2>

                    <ol>
                        <li>
                            Abra o notebook da atividade no Google Colab.
                        </li>

                        <li>
                            Crie uma cópia do notebook no seu Google Drive.
                        </li>

                        <li>
                            Leia as instruções de cada etapa antes de executar
                            os comandos.
                        </li>

                        <li>
                            Tente explicar com suas próprias palavras o que
                            cada comando está realizando.
                        </li>

                        <li>
                            Utilize uma ferramenta de IA para fazer perguntas,
                            esclarecer dúvidas e verificar sua compreensão.
                        </li>
                    </ol>
                </section>

                <section className="practice-action">
                    <h2>Notebook da atividade</h2>

                    <p>
                        A atividade será realizada no Google Colab.
                        Clique no botão abaixo para abrir o notebook.
                    </p>

                    <a
                        href="https://colab.research.google.com/github/LucasAurelio0/Minicurso-Pandas/blob/main/public/notebooks/Exercicio_Exploracao_Pandas_IA.ipynb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button"
                    >
                        Abrir no Google Colab
                    </a>
                </section>
            </div>
        </div>
    )
}

export default Pratica