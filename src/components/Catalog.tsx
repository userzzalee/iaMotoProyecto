import { useState, useMemo, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import { Filters } from './Filters';
import { MotoCard } from './MotoCard';
import { motos, motoTypes, priceRanges } from '../data/motos';

interface CatalogProps {
  onAddToCart: (moto: any) => void;
}

type LayoutType = 'grid' | 'vertical';

export const Catalog = ({ onAddToCart }: CatalogProps) => {
  const [viewLayout, setViewLayout] = useState<LayoutType>(() => {
    return (localStorage.getItem('motoLayout') as LayoutType) || 'grid';
  });
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Guardar preferencia en localStorage
  useEffect(() => {
    localStorage.setItem('motoLayout', viewLayout);
  }, [viewLayout]);

  const filteredMotos = useMemo(() => {
    return motos.filter(moto => {
      const text = `${moto.nombre} ${moto.marca} ${moto.modelo}`.toLowerCase();
      const matchesSearch = text.includes(searchTerm.toLowerCase());
      const matchesType = !selectedType || moto.tipo === selectedType;
      const matchesPrice =
        !selectedPriceRange ||
        (() => {
          const range = priceRanges.find(r => r.value === selectedPriceRange);
          return range ? moto.precio >= range.min && moto.precio <= range.max : true;
        })();
      return matchesSearch && matchesType && matchesPrice;
    });
  }, [searchTerm, selectedType, selectedPriceRange]);

  const getGridStyle = (): React.CSSProperties => {
    switch (viewLayout) {
      case 'grid':
        return {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 'var(--space-6)',
        };
      case 'vertical':
        return {
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-6)',
        };
      default:
        return {};
    }
  };

  return (
    <div id="catalogo" style={{ 
      background: 'linear-gradient(180deg, var(--background) 0%, #f8fafc 100%)',
      minHeight: '100vh',
      paddingTop: 'var(--space-12)',
      paddingBottom: 'var(--space-20)'
    }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 'var(--space-12)', textAlign: 'center' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-display)',
            marginBottom: 'var(--space-4)',
            letterSpacing: '-0.025em'
          }}>
            Nuestro Catálogo
          </h1>
          <p style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Explora nuestra selección de motocicletas de calidad premium
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        {/* Toolbar: Filter Button + View Preferences */}
        <div style={{
          display: 'flex',
          gap: 'var(--space-4)',
          marginBottom: 'var(--space-8)',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }}>
          {/* Filters Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: 'var(--space-3) var(--space-6)',
              background: showFilters ? 'var(--primary)' : 'rgba(26, 95, 122, 0.1)',
              color: showFilters ? '#fff' : 'var(--primary)',
              border: `2px solid ${showFilters ? 'var(--primary)' : 'var(--border-color)'}`,
              borderRadius: 'var(--radius-lg)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: 'var(--text-base)',
              fontWeight: '600',
              fontFamily: 'var(--font-primary)'
            }}
            onMouseEnter={(e) => {
              if (!showFilters) {
                e.currentTarget.style.background = 'rgba(26, 95, 122, 0.15)';
              }
            }}
            onMouseLeave={(e) => {
              if (!showFilters) {
                e.currentTarget.style.background = 'rgba(26, 95, 122, 0.1)';
              }
            }}>
            🔍 Filtros
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{
              transform: showFilters ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          {/* View Preferences */}
          <div style={{
            display: 'flex',
            gap: 'var(--space-3)',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-3)'
          }}>
            {[
              { id: 'grid', icon: '⊞', label: 'Grid', title: 'Vista Grid (3 columnas)' },
              { id: 'vertical', icon: '▯', label: 'Vertical', title: 'Vista Lista' }
            ].map(view => (
              <button
                key={view.id}
                onClick={() => setViewLayout(view.id as LayoutType)}
                title={view.title}
                style={{
                  padding: 'var(--space-3) var(--space-4)',
                  border: viewLayout === view.id ? '2px solid var(--primary)' : '2px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  background: viewLayout === view.id ? 'var(--primary)' : 'var(--surface)',
                  color: viewLayout === view.id ? '#fff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: '600',
                  fontSize: 'var(--text-xs)',
                  fontFamily: 'var(--font-primary)'
                }}
                onMouseEnter={(e) => {
                  if (viewLayout !== view.id) {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.background = 'rgba(26, 95, 122, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (viewLayout !== view.id) {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.background = 'var(--surface)';
                  }
                }}>
                {view.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Filters Panel - Collapsible */}
        {showFilters && (
          <div style={{
            marginBottom: 'var(--space-8)',
            animation: 'slideDown 0.3s ease'
          }}>
            <style>{`
              @keyframes slideDown {
                from {
                  opacity: 0;
                  transform: translateY(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
            <Filters
              selectedType={selectedType}
              selectedPriceRange={selectedPriceRange}
              onTypeChange={setSelectedType}
              onPriceRangeChange={setSelectedPriceRange}
              motoTypes={[...motoTypes]}
              priceRanges={[...priceRanges]}
            />
          </div>
        )}

        {/* Results Counter */}
        <div style={{
          marginBottom: 'var(--space-6)',
          padding: 'var(--space-4)',
          background: 'rgba(26, 95, 122, 0.05)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(26, 95, 122, 0.1)'
        }}>
          <p style={{
            margin: 0,
            fontSize: 'var(--text-sm)',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-secondary)'
          }}>
            <strong style={{ color: 'var(--text-primary)', fontWeight: '700' }}>
              {filteredMotos.length}
            </strong>
            {' '}
            {filteredMotos.length === 1 ? 'moto encontrada' : 'motos encontradas'}
          </p>
        </div>

        {/* Motos Grid/List */}
        {filteredMotos.length > 0 ? (
          <div style={getGridStyle()}>
            {filteredMotos.map(moto => (
              <MotoCard key={moto.id} moto={moto} onAddToCart={onAddToCart} />
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-16)',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: 'var(--space-4)' }}>🏍️</div>
            <h3 style={{
              fontSize: 'var(--text-xl)',
              fontWeight: '700',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-primary)',
              marginBottom: 'var(--space-2)'
            }}>
              No se encontraron motos
            </h3>
            <p style={{
              fontSize: 'var(--text-base)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-secondary)',
              margin: 0
            }}>
              Intenta ajustar los filtros o realiza una nueva búsqueda
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
