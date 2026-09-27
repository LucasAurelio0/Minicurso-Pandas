import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <div className="container header-content">
                <Link to="/" className="logo">
                    <span>Minicurso</span>
                    <strong>IA + Pandas</strong>
                </Link>

                <nav className="navigation" aria-label="Navegação principal">
                    <Link to="/">Início</Link>
                    <Link to="/aula">Aula</Link>
                    <Link to="/pratica">Prática</Link>
                    <Link to="/ia">Aprendendo com IA</Link>
                    <Link to="/avaliacao">Avaliação</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header