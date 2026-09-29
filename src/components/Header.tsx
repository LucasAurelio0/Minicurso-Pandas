import { useState } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    function closeMenu() {
        setMenuOpen(false)
    }

    return (
        <header className="header">
            <div className="container header-content">
                <a
                    href="#inicio"
                    className="logo"
                    onClick={closeMenu}
                >
                    <span>Minicurso</span>
                    <strong>IA + Pandas</strong>
                </a>

                <button
                    type="button"
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={
                        menuOpen
                            ? 'Fechar menu'
                            : 'Abrir menu'
                    }
                    aria-expanded={menuOpen}
                    aria-controls="main-navigation"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>

                <nav
                    id="main-navigation"
                    className={`navigation ${menuOpen ? 'navigation-open' : ''
                        }`}
                    aria-label="Navegação principal"
                >
                    <a href="#inicio" onClick={closeMenu}>
                        Início
                    </a>

                    <a href="#aula" onClick={closeMenu}>
                        Aula
                    </a>

                    <a href="#pratica" onClick={closeMenu}>
                        Prática
                    </a>

                    <a href="#ia" onClick={closeMenu}>
                        Aprendendo com IA
                    </a>

                    <a href="#avaliacao" onClick={closeMenu}>
                        Avaliação
                    </a>

                    <a href="#referencias" onClick={closeMenu}>
                        Referências
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header