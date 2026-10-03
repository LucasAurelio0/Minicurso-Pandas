import Aula from './Aula'
import Pratica from './Pratica'
import IA from './IA'
import Avaliacao from './Avaliacao'
import Referencias from './Referencias'

function Home() {
    return (
        <main id="inicio">
            {/* INÍCIO */}
            <section className="hero">
                <div className="container hero-content">
                    <div className="hero-text">
                        <span className="eyebrow">
                            MINICURSO · COMPUTAÇÃO · IA
                        </span>

                        <h1>
                            Aprendizagem e ensino de Computação com IA
                        </h1>

                        <p className="hero-subtitle">
                            Exploração inicial de dados com Pandas por meio
                            da explicação e do diálogo com IA.
                        </p>

                        <p className="hero-description">
                            Aprenda a explorar um conjunto de dados utilizando
                            Pandas e desenvolva uma compreensão dos principais
                            comandos por meio da explicação, do questionamento
                            e do diálogo com Inteligência Artificial.
                        </p>

                        <a href="#aula" className="primary-button">
                            Começar o curso
                        </a>
                    </div>

                    <div className="hero-cards">
                        <article className="hero-card">
                            <div className="hero-card-icon">🐼</div>

                            <h2>Explorar</h2>

                            <p>
                                Conheça os dados e compreenda sua estrutura.
                            </p>
                        </article>

                        <article className="hero-card">
                            <div className="hero-card-icon">🤖</div>

                            <h2>Dialogar</h2>

                            <p>
                                Utilize a IA para questionar e aprofundar sua
                                compreensão.
                            </p>
                        </article>

                        <article className="hero-card">
                            <div className="hero-card-icon">💡</div>

                            <h2>Explicar</h2>

                            <p>
                                Expresse com suas próprias palavras o que você
                                aprendeu.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <span className="section-label">
                        SOBRE O CURSO
                    </span>

                    <h2>Informações do minicurso</h2>

                    <div className="cards">
                        <article className="card">
                            <span className="card-icon">👤</span>
                            <h3>Autor</h3>
                            <p>
                                Lucas Aurélio dos Santos Vieira.
                            </p>
                        </article>

                        <article className="card">
                            <span className="card-icon">🎓</span>
                            <h3>Público-alvo</h3>
                            <p>
                                Estudantes de Ciência da Computação e áreas
                                relacionadas que possuam conhecimentos básicos
                                de Python e estatística.
                            </p>
                        </article>

                        <article className="card">
                            <span className="card-icon">📚</span>
                            <h3>Experiência prévia</h3>
                            <p>
                                Não é necessário ter experiência anterior
                                com Pandas. Os conhecimentos prévios necessários
                                são apresentados na próxima seção.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <span className="section-label">
                        ANTES DE COMEÇAR
                    </span>

                    <h2>O que você precisa saber?</h2>

                    <p className="section-intro">
                        Para acompanhar o minicurso, não é necessário ter
                        experiência prévia com Pandas. Entretanto, alguns
                        conhecimentos e recursos serão necessários.
                    </p>

                    <div className="cards">
                        <article className="card">
                            <span className="card-icon">🐍</span>
                            <h3>Python básico</h3>
                            <p>
                                Conhecimentos básicos de programação em Python,
                                como variáveis, funções e estruturas de dados.
                            </p>
                        </article>

                        <article className="card">
                            <span className="card-icon">📊</span>
                            <h3>Estatística básica</h3>
                            <p>
                                Familiaridade com conceitos estatísticos básicos
                                será suficiente para acompanhar as atividades.
                            </p>
                        </article>

                        <article className="card">
                            <span className="card-icon">💻</span>
                            <h3>Recursos necessários</h3>
                            <p>
                                Computador com internet, navegador, conta Google
                                para utilizar o Colab e acesso a uma ferramenta
                                de IA.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <span className="section-label">
                        OBJETIVOS DE APRENDIZAGEM
                    </span>

                    <h2>O que você vai aprender?</h2>

                    <p className="section-intro">
                        Neste minicurso, você realizará uma exploração inicial
                        de dados utilizando a biblioteca Pandas, enquanto
                        desenvolve estratégias para aprender por meio da
                        explicação e do diálogo com IA.
                    </p>

                    <div className="cards">
                        <article className="card">
                            <span className="card-icon">📊</span>
                            <h3>Exploração de dados</h3>
                            <p>
                                Aprenda a observar a estrutura e as características
                                iniciais de um conjunto de dados utilizando Pandas.
                            </p>
                        </article>

                        <article className="card">
                            <span className="card-icon">🐼</span>
                            <h3>Pandas</h3>
                            <p>
                                Compreenda o propósito dos principais comandos
                                utilizados durante a exploração inicial.
                            </p>
                        </article>

                        <article className="card">
                            <span className="card-icon">🤖</span>
                            <h3>Diálogo com IA</h3>
                            <p>
                                Utilize a IA para fazer perguntas, testar sua
                                compreensão e identificar possíveis dúvidas.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <span className="section-label">
                        COMO ESTUDAR NESTE CURSO
                    </span>

                    <h2>Uma aprendizagem baseada em diálogo</h2>

                    <div className="steps">
                        <div className="step">
                            <span>01</span>
                            <div>
                                <h3>Assista</h3>
                                <p>
                                    Acompanhe a videoaula e conheça os conceitos
                                    apresentados.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <span>02</span>
                            <div>
                                <h3>Explore</h3>
                                <p>
                                    Utilize Pandas para realizar uma exploração
                                    inicial do conjunto de dados.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <span>03</span>
                            <div>
                                <h3>Dialogue</h3>
                                <p>
                                    Faça perguntas à IA e compare as respostas
                                    com sua própria compreensão.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <span>04</span>
                            <div>
                                <h3>Explique</h3>
                                <p>
                                    Explique os comandos com suas próprias palavras
                                    e verifique as informações em fontes confiáveis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AULA */}
            <section id="aula">
                <Aula />
            </section>

            {/* PRÁTICA */}
            <section id="pratica">
                <Pratica />
            </section>

            {/* APRENDENDO COM IA */}
            <section id="ia">
                <IA />
            </section>

            {/* AVALIAÇÃO */}
            <section id="avaliacao">
                <Avaliacao />
            </section>

            {/* REFERÊNCIAS */}
            <section id="referencias">
                <Referencias />
            </section>
        </main>
    )
}

export default Home