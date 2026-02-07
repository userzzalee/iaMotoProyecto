export const MainPage = () => {
  return (
    <div style={{ background: 'var(--background)' }}>
      {/* Hero Section */}
      <div id="inicio" style={{
        padding: 'var(--space-20) 0',
        background: 'linear-gradient(135deg, var(--primary) 0%, #1a5f7a 50%, var(--background) 100%)',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.05)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.03)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            {/* Left Column - Content */}
            <div>
              <div style={{
                display: 'inline-block',
                background: 'rgba(255, 255, 255, 0.15)',
                padding: 'var(--space-2) var(--space-4)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--space-6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <span style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: '600',
                  color: '#fff',
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px'
                }}>
                  Bienvenido a
                </span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                color: '#fff',
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.025em',
                lineHeight: 1.1
              }}>
                OTROMOTOS
              </h1>

              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'rgba(255, 255, 255, 0.95)',
                maxWidth: 500,
                lineHeight: 1.8,
                marginBottom: 'var(--space-8)',
                fontFamily: 'var(--font-secondary)'
              }}>
                Tu tienda especializada en motocicletas. Descubre una selección cuidada de motos nuevas y de ocasión, con asesoramiento experto y servicios postventa excepcionales.
              </p>

              <div style={{
                display: 'flex',
                gap: 'var(--space-4)',
                flexWrap: 'wrap',
                marginBottom: 'var(--space-8)'
              }}>
                <button style={{
                  padding: 'var(--space-4) var(--space-8)',
                  fontSize: 'var(--text-base)',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  background: '#fff',
                  color: 'var(--primary)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-base)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  fontFamily: 'var(--font-primary)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                }}>
                  Explorar Catálogo
                </button>
                
                <button style={{
                  padding: 'var(--space-4) var(--space-8)',
                  fontSize: 'var(--text-base)',
                  fontWeight: '600',
                  border: '2px solid #fff',
                  borderRadius: 'var(--radius-md)',
                  background: 'transparent',
                  color: '#fff',
                  cursor: 'pointer',
                  transition: 'all var(--transition-base)',
                  fontFamily: 'var(--font-primary)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  Contactar
                </button>
              </div>

              {/* Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'var(--space-6)',
                paddingTop: 'var(--space-8)',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div>
                  <div style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 'bold',
                    color: '#fff',
                    marginBottom: 'var(--space-2)'
                  }}>
                    500+
                  </div>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: 'var(--font-secondary)'
                  }}>
                    Motos Vendidas
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 'bold',
                    color: '#fff',
                    marginBottom: 'var(--space-2)'
                  }}>
                    10+
                  </div>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: 'var(--font-secondary)'
                  }}>
                    Años de Experiencia
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 'bold',
                    color: '#fff',
                    marginBottom: 'var(--space-2)'
                  }}>
                    100%
                  </div>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: 'var(--font-secondary)'
                  }}>
                    Satisfacción
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              perspective: '1000px'
            }}>
              <div style={{
                width: '100%',
                maxWidth: '400px',
                height: '400px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                borderRadius: 'var(--radius-xl)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(20px)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                  pointerEvents: 'none'
                }} />
                
                <svg 
                  width="280" 
                  height="280" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#fff" 
                  strokeWidth="1.5"
                  style={{ position: 'relative', zIndex: 1 }}
                >
                  <path d="M7 18C6.5 16 5 14 5 10C5 5.58 8.13 2 12 2C15.87 2 19 5.58 19 10C19 14 17.5 16 17 18M9 21H15M10 18H14" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="8" opacity="0.1"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'bounce 2s infinite'
        }}>
          <span style={{
            fontSize: 'var(--text-xs)',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: 'var(--space-2)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontWeight: '600'
          }}>
            Descubre más
          </span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(10px); }
          }
        `}</style>
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
