export const MainPage = ({ onNavigate }: { onNavigate: (page: 'inicio' | 'catalogo' | 'contacto') => void }) => {
  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

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
                <button 
                  onClick={() => onNavigate('catalogo')}
                  style={{
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
                
                <button 
                  onClick={() => onNavigate('contacto')}
                  style={{
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
        <div 
          onClick={() => scrollToSection('nosotros')}
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            animation: 'bounce 2s infinite',
            cursor: 'pointer',
            transition: 'all var(--transition-base)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
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
        background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(26, 95, 122, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, var(--primary), #1a5f7a)',
              padding: 'var(--space-3) var(--space-6)',
              borderRadius: 'var(--radius-full)',
              marginBottom: 'var(--space-6)'
            }}>
              <span style={{
                fontSize: 'var(--text-xs)',
                fontWeight: '700',
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                fontFamily: 'var(--font-primary)'
              }}>
                Nuestra Historia
              </span>
            </div>

            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800', 
              marginBottom: 'var(--space-6)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.025em',
              lineHeight: 1.1
            }}>
              Sobre OtroMotos
            </h1>
            <p style={{ 
              fontSize: 'var(--text-lg)', 
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.7',
              fontFamily: 'var(--font-secondary)'
            }}>
              Más de una década de pasión, experiencia y compromiso con nuestros clientes
            </p>
          </div>

          {/* History & Philosophy Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-8)',
            marginBottom: 'var(--space-16)',
            gridTemplateRows: 'auto'
          }}>
            {/* Historia */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdrop: 'blur(10px)',
              border: '1px solid rgba(26, 95, 122, 0.1)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-10)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.04)';
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, var(--primary), #1a5f7a)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--space-6)',
                boxShadow: '0 10px 25px rgba(26, 95, 122, 0.2)'
              }}>
                <span style={{ fontSize: '28px' }}>📖</span>
              </div>

              <h3 style={{ 
                fontSize: 'var(--text-2xl)', 
                fontWeight: '700', 
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-primary)'
              }}>
                Nuestra Historia
              </h3>
              <p style={{ 
                lineHeight: '1.7', 
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-4)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-base)'
              }}>
                Fundada en 2013, OtroMotos nació de la pasión de un grupo de expertos que querían crear algo diferente. Lo que comenzó como un pequeño taller ha evolucionado hasta convertirse en un referente del sector.
              </p>
              <p style={{ 
                lineHeight: '1.7', 
                color: '#64748b',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-sm)'
              }}>
                Hoy contamos con cientos de clientes satisfechos y una reputación basada en la confianza, la calidad y la excelencia técnica.
              </p>
            </div>

            {/* Filosofía */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdrop: 'blur(10px)',
              border: '1px solid rgba(26, 95, 122, 0.1)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-10)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.04)';
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--space-6)',
                boxShadow: '0 10px 25px rgba(59, 130, 246, 0.2)'
              }}>
                <span style={{ fontSize: '28px' }}>💡</span>
              </div>

              <h3 style={{ 
                fontSize: 'var(--text-2xl)', 
                fontWeight: '700', 
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-primary)'
              }}>
                Nuestra Filosofía
              </h3>
              <p style={{ 
                lineHeight: '1.7', 
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-4)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-base)'
              }}>
                Creemos que cada moto es más que un vehículo: es libertad, pasión y una extensión de ti. Por eso, nuestro compromiso va más allá de vender.
              </p>
              <p style={{ 
                lineHeight: '1.7', 
                color: '#64748b',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-sm)'
              }}>
                Buscamos entender tus necesidades, asesorarte con honestidad y acompañarte en cada etapa del viaje, desde la elección hasta el mantenimiento.
              </p>
            </div>
          </div>

          {/* Valores Section */}
          <div style={{ marginBottom: 'var(--space-16)' }}>
            <h2 style={{ 
              fontSize: 'var(--text-3xl)', 
              fontWeight: '700', 
              marginBottom: 'var(--space-10)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)',
              textAlign: 'center'
            }}>
              Nuestros Valores
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-6)'
            }}>
              {[
                { icon: '⚙️', title: 'Excelencia Técnica', desc: 'Selección rigurosa de marcas premium con garantía de calidad y fiabilidad' },
                { icon: '🤝', title: 'Confianza', desc: '5,000+ clientes confían en nosotros para encontrar su compañera ideal' },
                { icon: '⭐', title: 'Premium Service', desc: 'Equipo experto disponible para asesorarte y garantizar tu satisfacción' }
              ].map((valor, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.6))',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(26, 95, 122, 0.1)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-8)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(26, 95, 122, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)';
                  }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '120px',
                    height: '120px',
                    background: 'radial-gradient(circle, rgba(26, 95, 122, 0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    transform: 'translate(40%, -40%)',
                    pointerEvents: 'none'
                  }} />

                  <div style={{
                    fontSize: '48px',
                    marginBottom: 'var(--space-4)',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {valor.icon}
                  </div>
                  <h4 style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-3)',
                    fontFamily: 'var(--font-primary)',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {valor.title}
                  </h4>
                  <p style={{
                    fontSize: 'var(--text-sm)',
                    color: '#64748b',
                    lineHeight: '1.6',
                    fontFamily: 'var(--font-secondary)',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {valor.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Compromisos Section */}
          <div style={{ marginBottom: 'var(--space-16)' }}>
            <h2 style={{ 
              fontSize: 'var(--text-3xl)', 
              fontWeight: '700', 
              marginBottom: 'var(--space-10)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)',
              textAlign: 'center'
            }}>
              Lo que te Comprometemos
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--space-6)'
            }}>
              {[
                { icon: '✓', title: 'Garantía Extendida', desc: 'Hasta 3 años con cobertura nacional', color: '#10b981' },
                { icon: '🔄', title: 'Financiación Flexible', desc: 'Planes adaptados a tus posibilidades', color: '#f59e0b' },
                { icon: '🚀', title: 'Entrega Rápida', desc: 'En menos de 48h en toda la península', color: '#3b82f6' },
                { icon: '👨‍💼', title: 'Asesoría Expert', desc: 'Especialistas para tu mejor decisión', color: '#8b5cf6' }
              ].map((compromiso, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#fff',
                    border: `2px solid ${compromiso.color}20`,
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-6)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    gap: 'var(--space-4)',
                    alignItems: 'flex-start'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${compromiso.color}05`;
                    e.currentTarget.style.borderColor = `${compromiso.color}40`;
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#fff';
                    e.currentTarget.style.borderColor = `${compromiso.color}20`;
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: compromiso.color,
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '20px',
                    flexShrink: 0,
                    boxShadow: `0 4px 12px ${compromiso.color}40`
                  }}>
                    {compromiso.icon}
                  </div>
                  <div>
                    <h4 style={{
                      fontWeight: '700',
                      marginBottom: 'var(--space-2)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-primary)'
                    }}>
                      {compromiso.title}
                    </h4>
                    <p style={{
                      fontSize: 'var(--text-sm)',
                      color: '#64748b',
                      margin: 0,
                      fontFamily: 'var(--font-secondary)'
                    }}>
                      {compromiso.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, #1a5f7a 100%)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'var(--space-12)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
            color: '#fff'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-10%',
              width: '400px',
              height: '400px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '50%',
              pointerEvents: 'none'
            }} />

            <h2 style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: '700',
              marginBottom: 'var(--space-10)',
              fontFamily: 'var(--font-display)',
              position: 'relative',
              zIndex: 1
            }}>
              Por Números
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: 'var(--space-8)',
              position: 'relative',
              zIndex: 1
            }}>
              {[
                { numero: '500+', label: 'Motos Vendidas' },
                { numero: '10+', label: 'Años Experiencia' },
                { numero: '5K+', label: 'Clientes Felices' },
                { numero: '24h', label: 'Soporte Técnico' }
              ].map((stat, idx) => (
                <div key={idx} style={{ padding: 'var(--space-4)' }}>
                  <div style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: '800',
                    marginBottom: 'var(--space-2)',
                    fontFamily: 'var(--font-display)'
                  }}>
                    {stat.numero}
                  </div>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    opacity: 0.9,
                    fontFamily: 'var(--font-secondary)'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
