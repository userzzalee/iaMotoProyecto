export const Hero = () => {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--primary-900), var(--primary-700))',
      color: 'white',
      padding: 'var(--space-32) 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: '0.03',
        backgroundImage: `
          radial-gradient(circle at 20% 50%, transparent 30%, var(--neutral-0) 30.5%),
          radial-gradient(circle at 80% 20%, transparent 40%, var(--neutral-0) 40.5%),
          radial-gradient(circle at 40% 80%, transparent 25%, var(--neutral-0) 25.5%)
        `
      }} />
      
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'var(--space-12)', alignItems: 'center' }}>
          {/* Título a la izquierda */}
          <div style={{ justifySelf: 'start', textAlign: 'left' }}>
            <h1 style={{ 
              fontSize: 'var(--text-5xl)', 
              fontWeight: '700',
              marginBottom: 'var(--space-4)',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.025em',
              lineHeight: '1.1',
              margin: 0
            }}>
              OTROMOTOS
            </h1>
          </div>
          
          {/* Texto descriptivo al lado derecho */}
          <div style={{ 
            justifySelf: 'start',
            fontFamily: 'var(--font-secondary)',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '500px',
            fontSize: 'var(--text-lg)',
            lineHeight: '1.5'
          }}>
            Tu tienda especializada de motos con más de una década de experiencia
          </div>
        </div>

        {/* Contenido principal debajo */}
        <div style={{ marginTop: 'var(--space-16)', textAlign: 'center' }}>
          <div className="flex gap-6 justify-center flex-wrap" style={{ marginBottom: 'var(--space-8)' }}>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: 'var(--space-6) var(--space-8)', 
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              minWidth: '140px',
              transition: 'all var(--transition-slow)'
            }}>
              <div style={{ 
                fontSize: 'var(--text-4xl)', 
                fontWeight: '700',
                marginBottom: 'var(--space-2)',
                fontFamily: 'var(--font-display)'
              }}>
                18
              </div>
              <div style={{ 
                fontSize: 'var(--text-sm)', 
                opacity: 0.8,
                fontFamily: 'var(--font-secondary)',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Modelos
              </div>
            </div>
            
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: 'var(--space-6) var(--space-8)', 
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              minWidth: '140px',
              transition: 'all var(--transition-slow)'
            }}>
              <div style={{ 
                fontSize: 'var(--text-4xl)', 
                fontWeight: '700',
                marginBottom: 'var(--space-2)',
                fontFamily: 'var(--font-display)'
              }}>
                6
              </div>
              <div style={{ 
                fontSize: 'var(--text-sm)', 
                opacity: 0.8,
                fontFamily: 'var(--font-secondary)',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Categorías
              </div>
            </div>
            
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: 'var(--space-6) var(--space-8)', 
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              minWidth: '140px',
              transition: 'all var(--transition-slow)'
            }}>
              <div style={{ 
                fontSize: 'var(--text-4xl)', 
                fontWeight: '700',
                marginBottom: 'var(--space-2)',
                fontFamily: 'var(--font-display)'
              }}>
                3K-26K
              </div>
              <div style={{ 
                fontSize: 'var(--text-sm)', 
                opacity: 0.8,
                fontFamily: 'var(--font-secondary)',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Rango Precios
              </div>
            </div>
          </div>

          {/* Texto descriptivo principal */}
          <p style={{ 
            fontSize: 'var(--text-xl)', 
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '700px',
            margin: '0 auto var(--space-8)',
            lineHeight: '1.6',
            fontFamily: 'var(--font-secondary)'
          }}>
            Descubre la selección más exclusiva de motos de alta gama. 
            Desde deportivas de competición hasta clásicos atemporales, 
            tenemos la máquina perfecta para cada tipo de piloto con 
            <span style={{ fontWeight: '600', color: 'white' }}>calidad garantizada</span> y 
            <span style={{ fontWeight: '600', color: 'white' }}>servicio excepcional</span>.
          </p>
        </div>
      </div>
    </section>
  );
};