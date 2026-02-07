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
      padding: 'var(--space-20) 0', 
      background: 'var(--background)',
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
            Contacto
          </h1>
          <p style={{ 
            fontSize: 'var(--text-xl)', 
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: 'var(--font-secondary)'
          }}>
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte. 
            Contáctanos y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Información de contacto */}
          <div>
            <div className="card" style={{ padding: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
              <h2 style={{ 
                fontSize: 'var(--text-3xl)', 
                fontWeight: '600', 
                marginBottom: 'var(--space-6)',
                color: 'var(--primary)',
                fontFamily: 'var(--font-primary)'
              }}>
                Información de Contacto
              </h2>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--primary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M22 16.92v3a2 2 0 0 1-2h-3a2 2 0 0 1-2h-2a2 2 0 0 1-2zm1-6a2 2 0 0 0-2 2H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5 4a1 1 0 0 1 1h2a1 1 0 0 1-1H6a1 1 0 0 0-1 1H4a1 1 0 0 0-1 1z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: '600', 
                      marginBottom: 'var(--space-1)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-primary)'
                    }}>
                      Teléfono
                    </div>
                    <div style={{ 
                      fontSize: 'var(--text-base)', 
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-secondary)'
                    }}>
                      900 123 456
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--accent)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M4 4h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2 2V6c0-1.1-.9-2-2-2zm0 2v4c0 1.1.9 2 2h1c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1c-1.1 0-2 .9-2 2v4z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: '600', 
                      marginBottom: 'var(--space-1)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-primary)'
                    }}>
                      Email
                    </div>
                    <div style={{ 
                      fontSize: 'var(--text-base)', 
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-secondary)'
                    }}>
                      info@otromotos.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--success)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M21 10c0 7-9 9.13-9 9.13S9 17 2 10s9-2 9.13-9 9.13S9 3 10 2m7 0c1.11 0 2 .89 2 2H5a2 2 0 0 1-2 2v10a2 2 0 0 1-2 2h6a2 2 0 0 1-2 2V5a2 2 0 0 1-2-2m14 0v9h-2v4h2zm-5 2a1 1 0 0 1 1h8a1 1 0 0 1 1 1 0 0 1-1-1h-8a1 1 0 0 1-1 1z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: '600', 
                      marginBottom: 'var(--space-1)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-primary)'
                    }}>
                      Dirección
                    </div>
                    <div style={{ 
                      fontSize: 'var(--text-base)', 
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-secondary)'
                    }}>
                      Calle de la Moto, 123<br />
                      28001 Madrid<br />
                      España
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--secondary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M12 8v4l3 3m6 0l-3-3m9 14H4a2 2 0 0 1-2 2V6a2 2 0 0 0-2-2h16a2 2 0 0 0 2 2v2a2 2 0 0 0 2-2h2a2 2 0 0 0 2-2v4a2 2 0 0 0 2-2h2a2 2 0 0 0 2-2z"/>
                      <path d="M3 3h18M3 21h18"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: '600', 
                      marginBottom: 'var(--space-1)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-primary)'
                    }}>
                      Horario
                    </div>
                    <div style={{ 
                      fontSize: 'var(--text-base)', 
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-secondary)'
                    }}>
                      Lunes a Viernes: 9:00 - 20:00<br />
                      Sábados: 10:00 - 14:00<br />
                      Domingos: Cerrado
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 'var(--space-8)' }}>
              <h3 style={{ 
                fontSize: 'var(--text-2xl)', 
                fontWeight: '600', 
                marginBottom: 'var(--space-6)',
                color: 'var(--primary)',
                fontFamily: 'var(--font-primary)'
              }}>
                Servicios Adicionales
              </h3>
              
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                color: 'var(--text-secondary)',
                fontSize: 'var(--text-sm)',
                lineHeight: '1.6',
                fontFamily: 'var(--font-secondary)'
              }}>
                <li style={{ marginBottom: 'var(--space-4)', paddingLeft: 'var(--space-6)' }}>
                  Asesoramiento personalizado gratuito
                </li>
                <li style={{ marginBottom: 'var(--space-4)', paddingLeft: 'var(--space-6)' }}>
                  Pruebas de manejo sin compromiso
                </li>
                <li style={{ marginBottom: 'var(--space-4)', paddingLeft: 'var(--space-6)' }}>
                  Financiación al instante
                </li>
                <li style={{ marginBottom: 'var(--space-4)', paddingLeft: 'var(--space-6)' }}>
                  Servicio postventa 24/7
                </li>
                <li style={{ marginBottom: 'var(--space-4)', paddingLeft: 'var(--space-6)' }}>
                  Entrega en toda la península
                </li>
              </ul>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div>
            <div className="card" style={{ padding: 'var(--space-8)' }}>
              <h2 style={{ 
                fontSize: 'var(--text-3xl)', 
                fontWeight: '600', 
                marginBottom: 'var(--space-6)',
                color: 'var(--primary)',
                fontFamily: 'var(--font-primary)'
              }}>
                Envíanos un Mensaje
              </h2>

              {submitSuccess && (
                <div className="success-message" style={{ marginBottom: 'var(--space-6)' }}>
                  Mensaje enviado correctamente. Te responderemos en menos de 24 horas.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label style={{ 
                    display: 'block', 
                    marginBottom: 'var(--space-2)', 
                    fontSize: 'var(--text-sm)',
                    fontWeight: '500',
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
                    placeholder="Introduce tu nombre completo"
                  />
                  {errors.nombre && (
                    <div className="error-message">
                      {errors.nombre}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label style={{ 
                    display: 'block', 
                    marginBottom: 'var(--space-2)', 
                    fontSize: 'var(--text-sm)',
                    fontWeight: '500',
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
                  />
                  {errors.email && (
                    <div className="error-message">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label style={{ 
                    display: 'block', 
                    marginBottom: 'var(--space-2)', 
                    fontSize: 'var(--text-sm)',
                    fontWeight: '500',
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
                  />
                  {errors.telefono && (
                    <div className="error-message">
                      {errors.telefono}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label style={{ 
                    display: 'block', 
                    marginBottom: 'var(--space-2)', 
                    fontSize: 'var(--text-sm)',
                    fontWeight: '500',
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
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="informacion">Solicitud de información</option>
                    <option value="cita">Pedir cita de prueba</option>
                    <option value="financiacion">Información sobre financiación</option>
                    <option value="postventa">Servicio postventa</option>
                    <option value="otro">Otro motivo</option>
                  </select>
                  {errors.asunto && (
                    <div className="error-message">
                      {errors.asunto}
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <label style={{ 
                    display: 'block', 
                    marginBottom: 'var(--space-2)', 
                    fontSize: 'var(--text-sm)',
                    fontWeight: '500',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-primary)'
                  }}>
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className={`form-input form-textarea ${errors.mensaje ? 'error' : ''}`}
                    rows={6}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                  {errors.mensaje && (
                    <div className="error-message">
                      {errors.mensaje}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ 
                    width: '100%',
                    padding: 'var(--space-4)',
                    fontSize: 'var(--text-base)',
                    fontWeight: '600',
                    height: '52px',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading"></span>
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensaje'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};