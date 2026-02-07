import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onRemoveFromCart: (motoId: string) => void;
  onUpdateQuantity: (motoId: string, quantity: number) => void;
  onClose: () => void;
  total: number;
}

export const Cart = ({
  items,
  onRemoveFromCart,
  onUpdateQuantity,
  onClose,
  total
}: CartProps) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        maxWidth: '420px',
        height: '100vh',
        background: 'var(--background)',
        boxShadow: '-4px 0 12px rgba(0, 0, 0, 0.15)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font-primary)'
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: 'var(--space-6)',
          borderBottom: '1px solid var(--border-color)',
          background: 'var(--surface)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: 'var(--text-xl)',
            fontWeight: '600',
            color: 'var(--text-primary)'
          }}
        >
          Tu Carrito
        </h2>

        <button
          onClick={onClose}
          className="btn btn-secondary btn-sm"
          aria-label="Cerrar carrito"
          style={{
            padding: 'var(--space-2)',
            borderRadius: 'var(--radius)',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: 'auto', padding: 'var(--space-4)' }}>
        {items.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: 'var(--space-12) var(--space-4)',
              color: 'var(--text-muted)'
            }}
          >
            <div
              style={{
                fontSize: '48px',
                marginBottom: 'var(--space-4)',
                opacity: 0.3
              }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="9" cy="21" r="1" />
                <path d="M9 7V3m0 0a2 2 0 0 1 2 2 2 2 0 0 1-2 2m6 0a2 2 0 0 1 2 2 2 2 0 0 1-2 2" />
              </svg>
            </div>

            <h3
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: '600',
                marginBottom: 'var(--space-2)',
                color: 'var(--text-secondary)'
              }}
            >
              Carrito vacío
            </h3>

            <p
              style={{
                fontSize: 'var(--text-sm)',
                fontFamily: 'var(--font-secondary)',
                margin: 0
              }}
            >
              Añade motos para comenzar tu compra
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {items.map(item => (
              <div
                key={item.moto.id}
                className="card"
                style={{
                  padding: 'var(--space-4)',
                  background: 'var(--surface)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div className="flex gap-4">
                  <img
                    src={item.moto.imagen}
                    alt={item.moto.nombre}
                    style={{
                      width: '80px',
                      height: '60px',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius)',
                      flexShrink: 0
                    }}
                  />

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4
                      style={{
                        margin: '0 0 var(--space-2) 0',
                        fontSize: 'var(--text-base)',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {item.moto.nombre}
                    </h4>

                    <div
                      style={{
                        fontSize: 'var(--text-sm)', // ← ERROR CORREGIDO
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-secondary)',
                        marginBottom: 'var(--space-2)'
                      }}
                    >
                      {item.moto.marca} {item.moto.modelo}
                    </div>

                    <div
                      style={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: '600',
                        color: 'var(--primary)',
                        fontFamily: 'var(--font-display)'
                      }}
                    >
                      €{item.moto.precio.toLocaleString('es-ES')}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 items-end">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          item.cantidad > 1 &&
                          onUpdateQuantity(item.moto.id, item.cantidad - 1)
                        }
                        className="btn btn-secondary btn-sm"
                        aria-label="Disminuir cantidad"
                        style={{
                          padding: 'var(--space-1)',
                          width: '28px',
                          height: '28px'
                        }}
                      >
                        −
                      </button>

                      <span
                        style={{
                          minWidth: '30px',
                          textAlign: 'center',
                          fontSize: 'var(--text-sm)',
                          fontWeight: '500'
                        }}
                      >
                        {item.cantidad}
                      </span>

                      <button
                        onClick={() =>
                          onUpdateQuantity(item.moto.id, item.cantidad + 1)
                        }
                        className="btn btn-secondary btn-sm"
                        aria-label="Aumentar cantidad"
                        style={{
                          padding: 'var(--space-1)',
                          width: '28px',
                          height: '28px'
                        }}
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveFromCart(item.moto.id)}
                      className="btn btn-danger btn-sm"
                      style={{
                        fontSize: 'var(--text-xs)',
                        padding: 'var(--space-2) var(--space-3)'
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {items.length > 0 && (
        <div
          style={{
            padding: 'var(--space-6)',
            borderTop: '1px solid var(--border-color)',
            background: 'var(--surface)'
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <span style={{ fontWeight: '500' }}>Total</span>
            <span
              style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: '700',
                color: 'var(--primary)'
              }}
            >
              €{total.toLocaleString('es-ES')}
            </span>
          </div>

          <button className="btn btn-primary" style={{ width: '100%' }}>
            Proceder al Pago
          </button>
        </div>
      )}
    </div>
  );
};
