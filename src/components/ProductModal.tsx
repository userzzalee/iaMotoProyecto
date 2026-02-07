import React from 'react';
import { createPortal } from 'react-dom';
import { Moto } from '../types';

interface ProductModalProps {
  moto: Moto;
  onClose: () => void;
  onAddToCart: (moto: Moto) => void;
}

const ProductModal = ({ moto, onClose, onAddToCart }: ProductModalProps) => {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(6px)',
          zIndex: 1200
        }}
        onClick={onClose}
      />

      <div style={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1201,
        maxWidth: 920,
        width: '90%',
        borderRadius: 12,
        boxShadow: '0 20px 60px rgba(2,6,23,0.6)',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #fff, #f8fafc)'
      }}>
        <div style={{ display: 'flex', gap: 0, alignItems: 'stretch', minHeight: 320 }}>
          <div style={{ flex: '0 0 48%', minHeight: 320, overflow: 'hidden' }}>
            <img src={moto.imagen} alt={moto.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{moto.marca} · {moto.modelo}</div>
                <h2 style={{ margin: '6px 0 0', fontSize: '1.4rem' }}>{moto.nombre}</h2>
                <div style={{ marginTop: 6, color: 'var(--text-secondary)' }}>{moto.descripcion}</div>
              </div>

              <button onClick={onClose} style={{ background: 'transparent', border: 'none', fontSize: 20, cursor: 'pointer' }}>✕</button>
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
              <div style={{ background: 'rgba(37,99,235,0.08)', color: '#2563eb', padding: '6px 10px', borderRadius: 8, fontWeight: 700 }}>{moto.tipo}</div>
              <div style={{ background: 'rgba(15,23,42,0.04)', color: 'var(--text-muted)', padding: '6px 10px', borderRadius: 8 }}>{moto.cilindrada}cc</div>
              <div style={{ marginLeft: 'auto', fontWeight: 800, color: 'var(--primary)' }}>€{moto.precio.toLocaleString('es-ES')}</div>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', gap: 12, alignItems: 'center' }}>
              {moto.stock > 0 ? (
                <button onClick={() => onAddToCart(moto)} style={{ padding: '12px 18px', borderRadius: 10, background: 'var(--primary)', color: '#fff', border: 'none', fontWeight: 800, cursor: 'pointer' }}>Añadir a la cesta</button>
              ) : (
                <div style={{ padding: '12px 18px', borderRadius: 10, background: '#f1f5f9', color: '#94a3b8' }}>Agotado</div>
              )}

              <button onClick={onClose} style={{ padding: '10px 14px', borderRadius: 10, background: 'transparent', border: '1px solid var(--border-color)', cursor: 'pointer' }}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default ProductModal;
