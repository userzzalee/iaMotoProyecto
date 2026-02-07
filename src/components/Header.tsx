interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  currentPage: string;
  onNavigate: (page: 'inicio' | 'catalogo' | 'contacto') => void;
}

export const Header = ({
  cartItemCount,
  onCartClick,
  currentPage,
  onNavigate,
}: HeaderProps) => {
  const linkStyle = (page: string) => ({
    color: currentPage === page ? 'var(--primary)' : 'var(--text-secondary)',
    textDecoration: 'none',
    fontWeight: currentPage === page ? '600' : '500',
    paddingBottom: 'var(--space-3)',
    borderBottom:
      currentPage === page ? '2px solid var(--primary)' : 'none',
    transition: 'all var(--transition-base)',
  });

  return (
    <header
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderBottom: '1px solid var(--border-color)',
        padding: 'var(--space-4) 0',
        boxShadow: 'var(--shadow-sm)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div
              style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
                color: 'var(--primary)',
                letterSpacing: '-0.025em',
              }}
            >
              OTROMOTOS
            </div>

            <nav aria-label="Navegación principal">
              <ul
                className="flex gap-8"
                style={{ listStyle: 'none', margin: 0, padding: 0 }}
              >
                <li>
                  <a
                    href="#inicio"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('inicio');
                    }}
                    style={linkStyle('inicio')}
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#catalogo"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('catalogo');
                    }}
                    style={linkStyle('catalogo')}
                  >
                    Catálogo
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('contacto');
                    }}
                    style={linkStyle('contacto')}
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <button
            onClick={onCartClick}
            className="btn btn-secondary"
            aria-label="Abrir carrito de compras"
            style={{
              position: 'relative',
              fontSize: 'var(--text-sm)',
              padding: 'var(--space-3) var(--space-5)',
              fontWeight: 500,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span style={{ marginLeft: 'var(--space-2)' }}>Carrito</span>

            {cartItemCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-6px',
                  background: 'var(--danger)',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  fontSize: 'var(--text-xs)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                }}
              >
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
