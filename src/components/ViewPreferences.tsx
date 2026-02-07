import React, { useState, useEffect } from 'react';

interface ViewPreferencesProps {
  onLayoutChange: (layout: 'horizontal' | 'vertical') => void;
}

export const ViewPreferences = ({ onLayoutChange }: ViewPreferencesProps) => {
  const [layout, setLayout] = useState<'horizontal' | 'vertical'>(() => {
    const saved = localStorage.getItem('motoLayout');
    return (saved as 'horizontal' | 'vertical') || 'grid'; // Por defecto grid
  });

  // Guardar preferencia en localStorage
  useEffect(() => {
    localStorage.setItem('motoLayout', layout);
  }, [layout]);

  const handleLayoutChange = (newLayout: 'horizontal' | 'vertical') => {
    setLayout(newLayout);
    onLayoutChange(newLayout);
  };

  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border-color)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-4)',
      marginBottom: 'var(--space-8)'
    }}>
      <div className="container">
        <div className="flex items-center justify-between" style={{ gap: 'var(--space-4)' }}>
          <div>
            <h3 style={{ 
              fontSize: 'var(--text-lg)', 
              fontWeight: '600',
              marginBottom: 'var(--space-3)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-primary)'
            }}>
              Vista del Catálogo
            </h3>
            <p style={{ 
              fontSize: 'var(--text-sm)', 
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-secondary)',
              margin: 0
            }}>
              Elige cómo prefieres visualizar las motos
            </p>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={() => handleLayoutChange('horizontal')}
              className={`btn ${layout === 'horizontal' ? 'btn-primary' : 'btn-secondary'}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)'
              }}
            >
              <svg width="20" height="16" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="8" rx="2"/>
              </svg>
              Horizontal
            </button>

            <button 
              onClick={() => handleLayoutChange('vertical')}
              className={`btn ${layout === 'vertical' ? 'btn-primary' : 'btn-secondary'}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)'
              }}
            >
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="3" width="8" height="14" rx="2"/>
              </svg>
              Vertical
            </button>

            <button 
              onClick={() => handleLayoutChange('grid')}
              className={`btn ${layout === 'grid' ? 'btn-primary' : 'btn-secondary'}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="4" height="4" rx="1"/>
                <rect x="9" y="9" width="4" height="4" rx="1"/>
                <rect x="3" y="15" width="4" height="4" rx="1"/>
                <rect x="9" y="15" width="4" height="4" rx="1"/>
              </svg>
              Cuadrícula
            </button>
          </div>
        </div>

        <div style={{
          marginTop: 'var(--space-4)',
          padding: 'var(--space-4)',
          background: 'var(--neutral-50)',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--border-color)'
        }}>
          <h4 style={{ 
            fontSize: 'var(--text-base)', 
            fontWeight: '600', 
            marginBottom: 'var(--space-2)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-primary)'
          }}>
            Vista actual: {layout === 'grid' ? 'Cuadrícula' : layout === 'horizontal' ? 'Horizontal' : 'Vertical'}
          </h4>
          <div style={{ 
            fontSize: 'var(--text-sm)', 
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-secondary)',
            lineHeight: '1.5'
          }}>
            {layout === 'grid' && (
              <>
                <strong>Cuadrícula:</strong> Visualización tradicional en filas y columnas. 
                Ideal para comparar rápidamente múltiples motos.
              </>
            )}
            {layout === 'horizontal' && (
              <>
                <strong>Horizontal:</strong> Desplazamiento lateral de motos. 
                Permite navegar como si estuvieras en un escaparate.
              </>
            )}
            {layout === 'vertical' && (
              <>
                <strong>Vertical:</strong> Motos apiladas verticalmente. 
                Perfecta para móviles y pantallas estrechas.
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};