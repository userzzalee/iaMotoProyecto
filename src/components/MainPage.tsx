export const MainPage = () => {
  return (
    <div style={{ background: 'var(--background)' }}>
      {/* Hero Section */}
      <div id="inicio" style={{
        padding: 'var(--space-20) 0',
        background: 'var(--background)',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: 'var(--text-5xl)',
            fontWeight: 700,
            marginBottom: 'var(--space-6)',
            color: 'var(--text-primary)'
          }}>OTROMOTOS</h1>

          <p style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--text-secondary)',
            maxWidth: 800,
            margin: '0 auto',
            lineHeight: 1.6,
            marginBottom: 'var(--space-8)'
          }}>
            Bienvenido a OTROMOTOS — tu tienda especializada en motocicletas. Aquí encontrarás
            una selección cuidada de motos nuevas y de ocasión, asesoramiento experto y
            servicios postventa para que disfrutes tu moto con total tranquilidad.
          </p>

          <p style={{
            color: 'var(--text-muted)'
          }}>
            Usa la sección "Catálogo" para explorar nuestras motos disponibles.
          </p>
        </div>
      </div>

      {/* Nosotros Section */}
      <div id="nosotros" style={{ 
        padding: 'var(--space-20) 0', 
        background: 'var(--surface)',
        minHeight: '80vh'
      }}>
        <div className="container">
          <div className="text-center mb-8">
            <h1 style={{ 
              fontSize: 'var(--text-5xl)', 
              fontWeight: '700', 
              marginBottom: 'var(--space-4)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.025em'
            }}>
              Sobre OtroMotos
            </h1>
            <p style={{ 
              fontSize: 'var(--text-xl)', 
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontFamily: 'var(--font-secondary)'
            }}>
              Tu tienda especializada con más de una década de experiencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 style={{ 
                fontSize: 'var(--text-3xl)', 
                fontWeight: '600', 
                marginBottom: 'var(--space-6)',
                color: 'var(--primary)',
                fontFamily: 'var(--font-primary)'
              }}>
                Nuestra Historia
              </h2>
              <p style={{ 
                lineHeight: '1.6', 
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-4)',
                fontFamily: 'var(--font-secondary)'
              }}>
                Fundada en 2013, OtroMotos nació de la pasión de un grupo de expertos en motocicletas que 
                querían crear un espacio donde los verdaderos amantes de las dos ruedas pudieran encontrar 
                no solo una moto, sino la experiencia de conducción perfecta.
              </p>
              <p style={{ 
                lineHeight: '1.6', 
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-secondary)'
              }}>
                Lo que comenzó como un pequeño taller especializado ha crecido hasta convertirnos en referente del sector, 
                manteniendo siempre nuestros valores originales: calidad técnica, atención personalizada y 
                servicio postventa excepcional.
              </p>
            </div>

            <div>
              <h2 style={{ 
                fontSize: 'var(--text-3xl)', 
                fontWeight: '600', 
                marginBottom: 'var(--space-6)',
                color: 'var(--primary)',
                fontFamily: 'var(--font-primary)'
              }}>
                Nuestra Filosofía
              </h2>
              <p style={{ 
                lineHeight: '1.6', 
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-4)',
                fontFamily: 'var(--font-secondary)'
              }}>
                En OtroMotos creemos que cada moto es mucho más que un vehículo: es una extensión de la personalidad 
                de su dueño. Por eso, nuestro compromiso va más allá de la venta.
              </p>
              <p style={{ 
                lineHeight: '1.6', 
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-secondary)'
              }}>
                Buscamos entender tus necesidades, asesorarte con honestidad y acompañarte en cada etapa del proceso, 
                desde la elección hasta el mantenimiento.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card text-center" style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
              <div style={{ 
                fontSize: 'var(--text-4xl)', 
                marginBottom: 'var(--space-4)',
                color: 'var(--primary)'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m6 2a2 2 0 0 1 2 2 2 0 0 1-2 2m-6 9a2 2 0 0 1-2 2 2 2 0 0 1-2-2m6 4a2 2 0 0 1 2 2 2 0 0 1-2-2"></path>
                </svg>
              </div>
              <h3 style={{ 
                fontSize: 'var(--text-xl)', 
                fontWeight: '600', 
                marginBottom: 'var(--space-3)',
                color: 'var(--text-primary)'
              }}>
                Excelencia Técnica
              </h3>
              <p style={{ 
                fontSize: 'var(--text-sm)', 
                color: 'var(--text-secondary)',
                lineHeight: '1.5',
                fontFamily: 'var(--font-secondary)'
              }}>
                Selección rigurosa de las mejores marcas y modelos, 
                garantizando calidad y fiabilidad en cada venta.
              </p>
            </div>

            <div className="card text-center" style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
              <div style={{ 
                fontSize: 'var(--text-4xl)', 
                marginBottom: 'var(--space-4)',
                color: 'var(--primary)'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="1"></circle>
                  <path d="M21 16a4 4 0 0 0-4-4M9 5a4 4 0 0 1 4 4M5 12a7 7 0 0 1 7-7 7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7"></path>
                </svg>
              </div>
              <h3 style={{ 
                fontSize: 'var(--text-xl)', 
                fontWeight: '600', 
                marginBottom: 'var(--space-3)',
                color: 'var(--text-primary)'
              }}>
                Confianza Garantizada
              </h3>
              <p style={{ 
                fontSize: 'var(--text-sm)', 
                color: 'var(--text-secondary)',
                lineHeight: '1.5',
                fontFamily: 'var(--font-secondary)'
              }}>
                Más de 5,000 clientes confían en nosotros para encontrar 
                su compañera de aventuras.
              </p>
            </div>

            <div className="card text-center" style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
              <div style={{ 
                fontSize: 'var(--text-4xl)', 
                marginBottom: 'var(--space-4)',
                color: 'var(--primary)'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v20m10-10H2"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h3 style={{ 
                fontSize: 'var(--text-xl)', 
                fontWeight: '600', 
                marginBottom: 'var(--space-3)',
                color: 'var(--text-primary)'
              }}>
                Servicio Premium
              </h3>
              <p style={{ 
                fontSize: 'var(--text-sm)', 
                color: 'var(--text-secondary)',
                lineHeight: '1.5',
                fontFamily: 'var(--font-secondary)'
              }}>
                Nuestro equipo de expertos está disponible para asesorarte y 
                garantizar tu satisfacción total.
              </p>
            </div>
          </div>

          <div className="card" style={{ padding: 'var(--space-8)' }}>
            <h2 style={{ 
              fontSize: 'var(--text-3xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-6)',
              color: 'var(--primary)',
              fontFamily: 'var(--font-primary)'
            }}>
              Nuestros Compromisos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--success)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 style={{ 
                    fontWeight: '600', 
                    marginBottom: 'var(--space-2)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-primary)'
                  }}>
                    Garantía Extendida
                  </h4>
                  <p style={{ 
                    fontSize: 'var(--text-sm)', 
                    color: 'var(--text-secondary)',
                    margin: 0,
                    fontFamily: 'var(--font-secondary)'
                  }}>
                    Todas nuestras motos incluyen garantía de hasta 3 años con cobertura nacional.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M12 5v14M5 12h14"></path>
                  </svg>
                </div>
                <div>
                  <h4 style={{ 
                    fontWeight: '600', 
                    marginBottom: 'var(--space-2)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-primary)'
                  }}>
                    Financiación Flexible
                  </h4>
                  <p style={{ 
                    fontSize: 'var(--text-sm)', 
                    color: 'var(--text-secondary)',
                    margin: 0,
                    fontFamily: 'var(--font-secondary)'
                  }}>
                    Planes de pago personalizados adaptados a tus posibilidades.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M5 12h14M12 5v14"></path>
                  </svg>
                </div>
                <div>
                  <h4 style={{ 
                    fontWeight: '600', 
                    marginBottom: 'var(--space-2)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-primary)'
                  }}>
                    Entrega Inmediata
                  </h4>
                  <p style={{ 
                    fontSize: 'var(--text-sm)', 
                    color: 'var(--text-secondary)',
                    margin: 0,
                    fontFamily: 'var(--font-secondary)'
                  }}>
                    Recibe tu moto en menos de 48h en toda la península.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M5 12h14M12 5v14"></path>
                  </svg>
                </div>
                <div>
                  <h4 style={{ 
                    fontWeight: '600', 
                    marginBottom: 'var(--space-2)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-primary)'
                  }}>
                    Asesoramiento Experto
                  </h4>
                  <p style={{ 
                    fontSize: 'var(--text-sm)', 
                    color: 'var(--text-secondary)',
                    margin: 0,
                    fontFamily: 'var(--font-secondary)'
                  }}>
                    Equipo especializado para ayudarte a tomar la mejor decisión.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <h2 style={{ 
              fontSize: 'var(--text-4xl)', 
              fontWeight: 'bold', 
              marginBottom: 'var(--space-8)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)'
            }}>
              Nuestros Números
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div style={{
                background: 'linear-gradient(135deg, var(--primary), var(--primary-hover))',
                color: 'white',
                padding: 'var(--space-8)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-lg)',
                height: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 'bold' }}>500+</div>
                <div style={{ fontSize: 'var(--text-sm)', opacity: 0.9 }}>Motos Vendidas</div>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, var(--accent), var(--accent-600))',
                color: 'white',
                padding: 'var(--space-8)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-lg)',
                height: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 'bold' }}>18</div>
                <div style={{ fontSize: 'var(--text-sm)', opacity: 0.9 }}>Marcas Premium</div>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, var(--success), var(--success-700))',
                color: 'white',
                padding: 'var(--space-8)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-lg)',
                height: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 'bold' }}>4.9⭐</div>
                <div style={{ fontSize: 'var(--text-sm)', opacity: 0.9 }}>Valoración Media</div>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, var(--secondary), var(--secondary-700))',
                color: 'white',
                padding: 'var(--space-8)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-lg)',
                height: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 'bold' }}>24h</div>
                <div style={{ fontSize: 'var(--text-sm)', opacity: 0.9 }}>Soporte Técnico</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
