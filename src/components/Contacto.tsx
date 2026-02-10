import React, { useState } from 'react';

interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

export const Contacto = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio';
    } else if (!/^[0-9]{9}$/.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'El teléfono debe tener 9 dígitos';
    }

    if (!formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es obligatorio';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio';
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error cuando el usuario empieza a escribir
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitSuccess(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contacto" style={{ 
      background: 'linear-gradient(135deg, var(--background) 0%, rgba(var(--accent-rgb), 0.05) 100%)',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
        padding: 'var(--space-20) 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '400px',
          height: '400px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          transform: 'translate(100px, -100px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '300px',
          height: '300px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          transform: 'translate(-100px, 100px)'
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h1 style={{ 
              fontSize: 'var(--text-5xl)', 
              fontWeight: '700', 
              marginBottom: 'var(--space-4)',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.025em'
            }}>
              Hablemos de Motos
            </h1>
            <p style={{ 
              fontSize: 'var(--text-xl)', 
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontFamily: 'var(--font-secondary)',
              opacity: 0.95
            }}>
              Nuestro equipo está listo para ayudarte. Contáctanos por tu medio preferido y responderemos en menos de 24 horas.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div className="container" style={{ marginTop: '-60px', position: 'relative', zIndex: 2, marginBottom: 'var(--space-20)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6)' }}>
          {/* Llamar */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: 'var(--space-6)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '2px solid var(--background)'
          }} 
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto var(--space-4)',
              color: 'white'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: '600', marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
              Llamar
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-2)' }}>
              Disponible 9:00 - 20:00
            </p>
            <p style={{ fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--primary)' }}>
              900 123 456
            </p>
          </div>

          {/* Email */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: 'var(--space-6)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '2px solid var(--background)'
          }}
          onClick={() => {
            const element = document.getElementById('form-contacto');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, var(--accent), var(--secondary))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto var(--space-4)',
              color: 'white'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: '600', marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
              Email
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-2)' }}>
              Respuesta en 24h
            </p>
            <p style={{ fontSize: 'var(--text-base)', fontWeight: '600', color: 'var(--accent)' }}>
              info@otromotos.com
            </p>
          </div>

          {/* Ubicación */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: 'var(--space-6)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '2px solid var(--background)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, var(--secondary), var(--success))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto var(--space-4)',
              color: 'white'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: '600', marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
              Ubicación
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-2)' }}>
              Calle de la Moto, 123
            </p>
            <p style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--secondary)' }}>
              Madrid
            </p>
          </div>

          {/* Chat */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: 'var(--space-6)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '2px solid var(--background)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, var(--success), var(--primary))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto var(--space-4)',
              color: 'white'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: '600', marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
              Chat
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-2)' }}>
              Soporte en vivo
            </p>
            <p style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--success)' }}>
              Disponible ahora
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 'var(--space-20)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Información de contacto mejorada */}
          <div>
            {/* Horarios y direcciones */}
            <div className="card" style={{ 
              padding: 'var(--space-8)',
              marginBottom: 'var(--space-8)',
              background: 'linear-gradient(135deg, rgba(var(--primary-rgb), 0.05) 0%, rgba(var(--accent-rgb), 0.05) 100%)',
              border: '1px solid rgba(var(--primary-rgb), 0.1)',
              borderRadius: '16px'
            }}>
              <h2 style={{ 
                fontSize: 'var(--text-2xl)', 
                fontWeight: '600', 
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-primary)'
              }}>
                Nuestra Ubicación
              </h2>

              <div style={{ marginBottom: 'var(--space-6)' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-6)',
                  padding: 'var(--space-4)',
                  background: 'white',
                  borderRadius: '12px',
                  border: '1px solid var(--background)'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, var(--secondary), var(--success))',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'white'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: '700', 
                      marginBottom: 'var(--space-1)',
                      color: 'var(--text-primary)',
                      fontSize: 'var(--text-base)',
                      fontFamily: 'var(--font-primary)'
                    }}>
                      Concesionario Principal
                    </div>
                    <div style={{ 
                      fontSize: 'var(--text-sm)', 
                      color: 'var(--text-secondary)',
                      marginBottom: 'var(--space-2)',
                      fontFamily: 'var(--font-secondary)',
                      lineHeight: '1.5'
                    }}>
                      Calle de la Moto, 123<br />
                      28001 Madrid, España<br />
                      <span style={{ fontWeight: '600', color: 'var(--primary)' }}>+34 900 123 456</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 style={{
                fontSize: 'var(--text-lg)',
                fontWeight: '600',
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-primary)'
              }}>
                Horarios de Atención
              </h3>

              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: 'var(--space-2)',
                fontSize: 'var(--text-sm)',
                fontFamily: 'var(--font-secondary)'
              }}>
                <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Lunes - Viernes:</span>
                <span style={{ color: 'var(--text-secondary)' }}>9:00 AM - 8:00 PM</span>

                <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Sábados:</span>
                <span style={{ color: 'var(--text-secondary)' }}>10:00 AM - 2:00 PM</span>

                <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Domingos:</span>
                <span style={{ color: 'var(--danger)' }}>Cerrado</span>
              </div>
            </div>

            {/* Servicios */}
            <div className="card" style={{ 
              padding: 'var(--space-8)',
              borderRadius: '16px',
              background: 'white',
              border: '1px solid var(--background)'
            }}>
              <h3 style={{ 
                fontSize: 'var(--text-2xl)', 
                fontWeight: '600', 
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-primary)'
              }}>
                Servicios Disponibles
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {[
                  { icon: '🎯', title: 'Asesoramiento personalizado', desc: 'Totalmente gratuito' },
                  { icon: '🏍️', title: 'Pruebas de manejo', desc: 'Sin compromiso' },
                  { icon: '💳', title: 'Financiación flexible', desc: 'Al instante' },
                  { icon: '🔧', title: 'Servicio postventa 24/7', desc: 'Siempre disponible' },
                  { icon: '📦', title: 'Entrega a domicilio', desc: 'En toda la península' }
                ].map((service, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-4)',
                    padding: 'var(--space-4)',
                    background: 'rgba(var(--primary-rgb), 0.05)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease'
                  }} 
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(var(--primary-rgb), 0.1)';
                    e.currentTarget.style.transform = 'translateX(8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(var(--primary-rgb), 0.05)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}>
                    <span style={{ fontSize: '24px' }}>{service.icon}</span>
                    <div>
                      <div style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-primary)' }}>
                        {service.title}
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-secondary)' }}>
                        {service.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div>
            <div id="form-contacto" className="card" style={{ 
              padding: 'var(--space-8)',
              borderRadius: '16px',
              background: 'white',
              border: '1px solid var(--background)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
            }}>
              <div style={{ marginBottom: 'var(--space-8)' }}>
                <h2 style={{ 
                  fontSize: 'var(--text-2xl)', 
                  fontWeight: '700', 
                  marginBottom: 'var(--space-2)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-primary)'
                }}>
                  Envíanos tu Consulta
                </h2>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-secondary)'
                }}>
                  Responderemos en menos de 24 horas
                </p>
              </div>

              {submitSuccess && (
                <div style={{ 
                  padding: 'var(--space-4)',
                  background: 'rgba(74, 222, 128, 0.1)',
                  border: '1px solid rgba(74, 222, 128, 0.3)',
                  borderRadius: '12px',
                  marginBottom: 'var(--space-6)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span style={{ 
                    color: '#22c55e',
                    fontSize: 'var(--text-sm)',
                    fontWeight: '500',
                    fontFamily: 'var(--font-secondary)'
                  }}>
                    ¡Mensaje enviado correctamente! Te responderemos en menos de 24 horas.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                  {/* Nombre */}
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: 'var(--space-2)', 
                      fontSize: 'var(--text-sm)',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-primary)'
                    }}>
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className={`form-input ${errors.nombre ? 'error' : ''}`}
                      placeholder="Tu nombre"
                      style={{
                        padding: 'var(--space-3) var(--space-4)',
                        borderRadius: '10px',
                        border: `1px solid ${errors.nombre ? '#ef4444' : 'var(--background)'}`,
                        fontSize: 'var(--text-sm)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                    {errors.nombre && (
                      <div style={{ 
                        color: '#ef4444',
                        fontSize: 'var(--text-xs)',
                        marginTop: 'var(--space-2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-1)'
                      }}>
                        <span>⚠</span> {errors.nombre}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: 'var(--space-2)', 
                      fontSize: 'var(--text-sm)',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-primary)'
                    }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="tu@email.com"
                      style={{
                        padding: 'var(--space-3) var(--space-4)',
                        borderRadius: '10px',
                        border: `1px solid ${errors.email ? '#ef4444' : 'var(--background)'}`,
                        fontSize: 'var(--text-sm)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                    {errors.email && (
                      <div style={{ 
                        color: '#ef4444',
                        fontSize: 'var(--text-xs)',
                        marginTop: 'var(--space-2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-1)'
                      }}>
                        <span>⚠</span> {errors.email}
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                  {/* Teléfono */}
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: 'var(--space-2)', 
                      fontSize: 'var(--text-sm)',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-primary)'
                    }}>
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className={`form-input ${errors.telefono ? 'error' : ''}`}
                      placeholder="600 123 456"
                      style={{
                        padding: 'var(--space-3) var(--space-4)',
                        borderRadius: '10px',
                        border: `1px solid ${errors.telefono ? '#ef4444' : 'var(--background)'}`,
                        fontSize: 'var(--text-sm)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                    {errors.telefono && (
                      <div style={{ 
                        color: '#ef4444',
                        fontSize: 'var(--text-xs)',
                        marginTop: 'var(--space-2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-1)'
                      }}>
                        <span>⚠</span> {errors.telefono}
                      </div>
                    )}
                  </div>

                  {/* Asunto */}
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: 'var(--space-2)', 
                      fontSize: 'var(--text-sm)',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-primary)'
                    }}>
                      Asunto
                    </label>
                    <select
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleInputChange}
                      className={`form-input ${errors.asunto ? 'error' : ''}`}
                      style={{
                        padding: 'var(--space-3) var(--space-4)',
                        borderRadius: '10px',
                        border: `1px solid ${errors.asunto ? '#ef4444' : 'var(--background)'}`,
                        fontSize: 'var(--text-sm)',
                        transition: 'all 0.3s ease',
                        backgroundColor: 'white',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="informacion">Solicitud de información</option>
                      <option value="cita">Pedir cita de prueba</option>
                      <option value="financiacion">Información sobre financiación</option>
                      <option value="postventa">Servicio postventa</option>
                      <option value="otro">Otro motivo</option>
                    </select>
                    {errors.asunto && (
                      <div style={{ 
                        color: '#ef4444',
                        fontSize: 'var(--text-xs)',
                        marginTop: 'var(--space-2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-1)'
                      }}>
                        <span>⚠</span> {errors.asunto}
                      </div>
                    )}
                  </div>
                </div>

                {/* Mensaje */}
                <div className="mb-8">
                  <label style={{ 
                    display: 'block', 
                    marginBottom: 'var(--space-2)', 
                    fontSize: 'var(--text-sm)',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-primary)'
                  }}>
                    Tu Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className={`form-input form-textarea ${errors.mensaje ? 'error' : ''}`}
                    rows={4}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    style={{
                      padding: 'var(--space-3) var(--space-4)',
                      borderRadius: '10px',
                      border: `1px solid ${errors.mensaje ? '#ef4444' : 'var(--background)'}`,
                      fontSize: 'var(--text-sm)',
                      transition: 'all 0.3s ease',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                  {errors.mensaje && (
                    <div style={{ 
                      color: '#ef4444',
                      fontSize: 'var(--text-xs)',
                      marginTop: 'var(--space-2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-1)'
                    }}>
                      <span>⚠</span> {errors.mensaje}
                    </div>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ 
                    width: '100%',
                    padding: 'var(--space-4)',
                    fontSize: 'var(--text-base)',
                    fontWeight: '600',
                    height: '52px',
                    background: isSubmitting ? 'var(--primary-dim, rgba(255,107,0,0.6))' : 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: 'var(--font-primary)',
                    boxShadow: isSubmitting ? 'none' : '0 8px 24px rgba(255,107,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--space-2)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,107,0,0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,107,0,0.3)';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        style={{ animation: 'spin 1s linear infinite' }}
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <path d="M12 5v6m4-2l-4.24 4.24M12 19v-6m-4-2l4.24-4.24"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="tel"]:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: var(--primary) !important;
          box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.1);
        }
      `}</style>
    </div>
  );
};
