function Ebook() {
    return (
        <div className="section ebook-section">
            <div className="container">
                <span className="section-label">
                    E-BOOK INTERATIVO
                </span>

                <h2>
                    Aprenda a aplicar o método em outros conteúdos
                </h2>

                <p className="section-intro">
                    Agora que você já viu a estratégia em ação,
                    explore este guia interativo para aprender a
                    escolher o que estudar, fazer boas perguntas,
                    identificar lacunas, verificar informações e
                    testar se você realmente aprendeu.
                </p>

                <div className="ebook-wrapper">
                    <div className="ebook-embed">
                        <iframe
                            title="Aprender com IA sem terceirizar o pensamento"
                            src="https://view.genially.com/6ae7926b34648d810157710a"
                            allowFullScreen
                            scrolling="yes"
                        />
                    </div>

                    <div className="ebook-help">
                        <div
                            className="ebook-help-icon"
                            aria-hidden="true"
                        >
                            ⛶
                        </div>

                        <div>
                            <strong className="ebook-help-title">
                                Prefere ler em tela cheia?
                            </strong>

                            <p>
                                <strong>Clique sobre o e-book</strong>{' '}
                                e use o ícone de{' '}
                                <strong>tela cheia</strong> no{' '}
                                <strong>canto inferior direito</strong>.
                                Você também pode abrir o material diretamente
                                em uma nova aba usando o{' '}
                                <strong>link abaixo</strong>.
                            </p>
                        </div>
                    </div>

                    <a
                        href="https://view.genially.com/6ae7926b34648d810157710a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button ebook-button"
                    >
                        Abrir e-book em nova aba ↗
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Ebook