function Infografico() {
    return (
        <div className="section infographic-section">
            <div className="container">
                <span className="section-label">
                    GUIA VISUAL
                </span>

                <h2>
                    Consulte o método durante seus estudos
                </h2>

                <p className="section-intro">
                    Use este mapa visual como referência rápida para decidir
                    como estudar com apoio da IA sem terceirizar seu raciocínio.
                </p>

                <div className="infographic-wrapper">
                    <img
                        src="/infografico.png"
                        alt="Mapa visual sobre como estudar com IA sem terceirizar o pensamento. O fluxo orienta o estudante a preparar o terreno, pedir a ajuda certa, verificar informações, testar a aprendizagem e observar sinais de dependência."
                        className="infographic-image"
                    />

                    <a
                        href="/infografico.png"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button infographic-button"
                    >
                        Abrir guia visual em tamanho completo ↗
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Infografico