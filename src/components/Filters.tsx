interface FiltersProps {
  selectedType: string;
  selectedPriceRange: string;
  onTypeChange: (type: string) => void;
  onPriceRangeChange: (range: string) => void;
  motoTypes: Array<{ value: string; label: string }>;
  priceRanges: Array<{ value: string; label: string; min: number; max: number }>;
}

export const Filters = ({ 
  selectedType, 
  selectedPriceRange, 
  onTypeChange, 
  onPriceRangeChange,
  motoTypes,
  priceRanges
}: FiltersProps) => {
  return (
    <div className="mb-8">
      <div className="container">
        <div style={{
          background: 'var(--surface)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-6)',
          border: '1px solid var(--border-color)',
          marginBottom: 'var(--space-4)'
        }}>
          <h3 style={{
            fontSize: 'var(--text-lg)',
            fontWeight: '600',
            marginBottom: 'var(--space-4)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-primary)'
          }}>
            Filtrar Catálogo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: 'var(--space-2)', 
                fontSize: 'var(--text-sm)',
                fontWeight: '500',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-secondary)'
              }}>
                Tipo de Moto
              </label>
              <select
                value={selectedType}
                onChange={(e) => onTypeChange(e.target.value)}
                className="form-input"
                style={{
                  fontSize: 'var(--text-base)',
                  fontFamily: 'var(--font-secondary)',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M6 9l6 6 6-6'/%3e%3c/svg%3e")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right var(--space-3) center',
                  backgroundSize: '20px',
                  paddingRight: 'var(--space-10)'
                }}
              >
                <option value="">Todos los tipos</option>
                {motoTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: 'var(--space-2)', 
                fontSize: 'var(--text-sm)',
                fontWeight: '500',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-secondary)'
              }}>
                Rango de Precio
              </label>
              <select
                value={selectedPriceRange}
                onChange={(e) => onPriceRangeChange(e.target.value)}
                className="form-input"
                style={{
                  fontSize: 'var(--text-base)',
                  fontFamily: 'var(--font-secondary)',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M6 9l6 6 6-6'/%3e%3c/svg%3e")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right var(--space-3) center',
                  backgroundSize: '20px',
                  paddingRight: 'var(--space-10)'
                }}
              >
                <option value="">Todos los precios</option>
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Filtros activos */}
        {(selectedType || selectedPriceRange) && (
          <div style={{
            display: 'flex',
            gap: 'var(--space-2)',
            alignItems: 'center',
            fontFamily: 'var(--font-secondary)',
            fontSize: 'var(--text-sm)',
            color: 'var(--text-muted)'
          }}>
            <span>Filtros activos:</span>
            {selectedType && (
              <span style={{
                background: 'var(--primary)',
                color: 'white',
                padding: 'var(--space-1) var(--space-3)',
                borderRadius: 'var(--radius)',
                fontSize: 'var(--text-xs)',
                fontWeight: '500'
              }}>
                {motoTypes.find(t => t.value === selectedType)?.label}
              </span>
            )}
            {selectedPriceRange && (
              <span style={{
                background: 'var(--primary)',
                color: 'white',
                padding: 'var(--space-1) var(--space-3)',
                borderRadius: 'var(--radius)',
                fontSize: 'var(--text-xs)',
                fontWeight: '500'
              }}>
                {priceRanges.find(r => r.value === selectedPriceRange)?.label}
              </span>
            )}
            <button
              onClick={() => {
                onTypeChange('');
                onPriceRangeChange('');
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: 'var(--text-sm)',
                textDecoration: 'underline',
                padding: 'var(--space-1)',
                borderRadius: 'var(--radius)'
              }}
            >
              Limpiar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};