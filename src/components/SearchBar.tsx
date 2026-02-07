interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  return (
    <div className="mt-8 mb-6">
      <div className="container">
        <div style={{ 
          position: 'relative', 
          maxWidth: '600px', 
          margin: '0 auto'
        }}>
          <div style={{
            position: 'absolute',
            left: 'var(--space-4)',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)',
            zIndex: 2,
            pointerEvents: 'none'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-6-6-6-6-6 6 6 6 6-6 6z"></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Buscar motos por nombre, marca o modelo..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="form-input"
            style={{ 
              paddingLeft: 'var(--space-12)',
              fontSize: 'var(--text-base)',
              fontFamily: 'var(--font-secondary)',
              background: 'var(--surface)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              height: '56px'
            }}
          />
        </div>
      </div>
    </div>
  );
};