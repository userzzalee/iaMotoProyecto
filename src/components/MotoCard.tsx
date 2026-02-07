import { Moto } from '../types';

interface MotoCardProps {
  moto: Moto;
  onAddToCart: (moto: Moto) => void;
}

export const MotoCard = ({ moto, onAddToCart }: MotoCardProps) => {
  return (
    <div className="card" style={{ 
      transition: 'all var(--transition-slow)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      <div style={{ 
        height: '240px', 
        overflow: 'hidden',
        position: 'relative'
      }}>
        <img 
          src={moto.imagen} 
          alt={moto.nombre}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transition: 'transform var(--transition-slow)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        
        {moto.stock <= 3 && (
          <div style={{
            position: 'absolute',
            top: 'var(--space-4)',
            right: 'var(--space-4)',
            background: 'var(--danger)',
            color: 'white',
            padding: 'var(--space-1) var(--space-2)',
            borderRadius: 'var(--radius)',
            fontSize: 'var(--text-xs)',
            fontWeight: '600',
            boxShadow: 'var(--shadow-md)'
          }}>
            Últimas unidades
          </div>
        )}
      </div>
      
      <div style={{ 
        padding: 'var(--space-6)', 
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ 
          fontSize: 'var(--text-sm)', 
          color: 'var(--text-muted)',
          marginBottom: 'var(--space-2)',
          fontFamily: 'var(--font-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          {moto.marca} {moto.modelo}
        </div>
        
        <h3 style={{ 
          fontSize: 'var(--text-lg)', 
          fontWeight: '600', 
          marginBottom: 'var(--space-3)',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-primary)',
          lineHeight: '1.3'
        }}>
          {moto.nombre}
        </h3>
        
        <div className="flex items-center gap-2" style={{ marginBottom: 'var(--space-4)' }}>
          <span className="badge" style={{
            background: 'var(--primary-light)',
            color: 'var(--primary)',
            fontWeight: '500',
            textTransform: 'capitalize'
          }}>
            {moto.tipo}
          </span>
          <span className="badge" style={{
            background: 'var(--secondary-100)',
            color: 'var(--secondary-700)',
            fontWeight: '500'
          }}>
            {moto.cilindrada}cc
          </span>
        </div>
        
        <p style={{ 
          fontSize: 'var(--text-sm)', 
          color: 'var(--text-secondary)',
          marginBottom: 'var(--space-6)',
          fontFamily: 'var(--font-secondary)',
          lineHeight: '1.5',
          flex: 1
        }}>
          {moto.descripcion}
        </p>
        
        <div className="flex justify-between items-end" style={{ gap: 'var(--space-4)' }}>
          <div>
            <div style={{ 
              fontSize: 'var(--text-2xl)', 
              fontWeight: '700',
              color: 'var(--primary)',
              fontFamily: 'var(--font-display)'
            }}>
              €{moto.precio.toLocaleString('es-ES')}
            </div>
            {moto.stock > 0 && (
              <div style={{ 
                fontSize: 'var(--text-xs)', 
                color: 'var(--text-muted)',
                marginTop: 'var(--space-1)',
                fontFamily: 'var(--font-secondary)'
              }}>
                Stock: {moto.stock} unidades
              </div>
            )}
          </div>
          
          <button 
            onClick={() => onAddToCart(moto)}
            className="btn btn-primary"
            style={{ 
              padding: 'var(--space-3) var(--space-5)',
              fontSize: 'var(--text-sm)',
              fontWeight: '500',
              boxShadow: 'var(--shadow-sm)',
              minWidth: '120px',
              height: '44px'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <path d="M9 7V3m0 0a2 2 0 0 1 2 2 2 0 0 1-2 2m6 0a2 2 0 0 1 2 2 2 0 0 1-2 2"></path>
            </svg>
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};