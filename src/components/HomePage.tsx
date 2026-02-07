export const HomePage = () => {
  return (
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
          lineHeight: 1.6
        }}>
          Bienvenido a OTROMOTOS — tu tienda especializada en motocicletas. Aquí encontrarás
          una selección cuidada de motos nuevas y de ocasión, asesoramiento experto y
          servicios postventa para que disfrutes tu moto con total tranquilidad.
        </p>

        <p style={{
          marginTop: 'var(--space-8)',
          color: 'var(--text-muted)'
        }}>
          Usa la sección "Catálogo" para explorar nuestras motos disponibles.
        </p>
      </div>
    </div>
  );
};