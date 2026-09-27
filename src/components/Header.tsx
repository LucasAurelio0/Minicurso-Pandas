import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    function closeMenu() {
        setMenuOpen(false)
    }

    return (
        <header className="header">
            <div className="container header-content">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <span>Minicurso</span>
                    <strong>IA + Pandas</strong>
                </Link>

                <button
                    type="button"
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={menuOpen}
                    aria-controls="main-navigation"
                >
                    ☰
                </button>

                <nav
                    id="main-navigation"
                    className={`navigation ${menuOpen ? 'navigation-open' : ''}`}
                    aria-label="Navegação principal"
                >
                    <Link to="/" onClick={closeMenu}>Início</Link>
                    <Link to="/aula" onClick={closeMenu}>Aula</Link>
                    <Link to="/pratica" onClick={closeMenu}>Prática</Link>
                    <Link to="/ia" onClick={closeMenu}>Aprendendo com IA</Link>
                    <Link to="/avaliacao" onClick={closeMenu}>Avaliação</Link>
                    <Link to="/referencias" onClick={closeMenu}>Referências</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header