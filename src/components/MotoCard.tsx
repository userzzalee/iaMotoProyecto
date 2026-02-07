import { Moto } from '../types';

interface MotoCardProps {
  moto: Moto;
  onOpen?: (moto: Moto) => void;
  layout?: 'grid' | 'list';
}

export const MotoCard = ({ moto, onOpen, layout = 'grid' }: MotoCardProps) => {
  // Lista: imagen a la izquierda, contenido a la derecha
  if (layout === 'list') {
    return (
      <article
        role="button"
        onClick={() => onOpen && onOpen(moto)}
        style={{
          display: 'flex',
          gap: 16,
          alignItems: 'center',
          padding: 'var(--space-4)',
          borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(248,250,252,0.02))',
          border: '1px solid rgba(16,24,32,0.04)',
          cursor: 'pointer'
        }}>
        <div style={{ flex: '0 0 160px', height: 100, overflow: 'hidden', borderRadius: 12 }}>
          <img src={moto.imagen} alt={moto.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{moto.marca} · {moto.modelo}</div>
          <h3 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 700 }}>{moto.nombre}</h3>
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 13 }}>{moto.descripcion}</p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <span style={{ background: 'rgba(37,99,235,0.08)', color: '#2563eb', padding: '6px 8px', borderRadius: 8, fontWeight: 700, fontSize: 12 }}>{moto.tipo}</span>
              <span style={{ background: 'rgba(15,23,42,0.04)', color: 'var(--text-muted)', padding: '6px 8px', borderRadius: 8, fontSize: 12 }}>{moto.cilindrada}cc</span>
            </div>

            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ fontWeight: 800, color: 'var(--primary)' }}>€{moto.precio.toLocaleString('es-ES')}</div>
              {moto.stock > 0 ? (
              <div style={{ padding: '8px 12px', borderRadius: 8, background: 'rgba(37,99,235,0.08)', color: '#2563eb', fontWeight: 700 }}>Ver</div>
              ) : (
                <div style={{ padding: '8px 12px', borderRadius: 8, background: '#f1f5f9', color: '#94a3b8' }}>Agotado</div>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Grid: imagen arriba (dentro del flujo), sin solapamientos
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen && onOpen(moto)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen && onOpen(moto); }}
      style={{
        position: 'relative',
        transition: 'all var(--transition-slow)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: 'var(--radius-lg)',
        background: 'linear-gradient(180deg, rgba(255,249,240,1), rgba(245,250,255,1))',
        border: '1px solid rgba(16,24,32,0.04)',
        cursor: 'pointer'
      }}>
      <div style={{ position: 'absolute', right: -36, top: -28, width: 120, height: 120, borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle at 30% 30%, rgba(37,99,235,0.14), transparent 40%)' }} />

      <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
        <img
          src={moto.imagen}
          alt={moto.nombre}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .45s ease' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 56, background: 'linear-gradient(180deg, rgba(255,255,255,0), rgba(12,58,84,0.06))' }} />
        {moto.stock <= 3 && (
          <div style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: 'linear-gradient(90deg,#ff7a7a,#ff4d4d)',
            color: '#fff',
            padding: '6px 10px',
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 800
          }}>Últimas</div>
        )}
      </div>

      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{moto.marca} · {moto.modelo}</div>
        <h3 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 700 }}>{moto.nombre}</h3>
        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.4, marginTop: 6 }}>{moto.descripcion}</p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ background: 'linear-gradient(90deg,#7dd3fc,#60a5fa)', color: '#064e3b', padding: '6px 8px', borderRadius: 8, fontWeight: 700, fontSize: 12 }}>{moto.tipo}</span>
            <span style={{ background: 'rgba(15,23,42,0.04)', color: 'var(--text-muted)', padding: '6px 8px', borderRadius: 8, fontSize: 12 }}>{moto.cilindrada}cc</span>
          </div>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ fontWeight: 800, color: 'var(--primary)' }}>€{moto.precio.toLocaleString('es-ES')}</div>
            {moto.stock > 0 ? (
              <button
                onClick={(e) => { e.stopPropagation(); onOpen && onOpen(moto); }}
                style={{ padding: '8px 12px', borderRadius: 8, background: 'linear-gradient(90deg,var(--primary),#1a5f7a)', color: '#fff', border: 'none', fontWeight: 700, cursor: 'pointer' }}
              >
                Ver
              </button>
            ) : (
              <div style={{ padding: '8px 12px', borderRadius: 8, background: '#f1f5f9', color: '#94a3b8' }}>Agotado</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
