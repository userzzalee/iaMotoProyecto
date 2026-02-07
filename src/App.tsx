import { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { MainPage } from './components/MainPage';
import { Catalog } from './components/Catalog';
import { Cart } from './components/Cart';
import { Contacto } from './components/Contacto';
import { motos } from './data/motos';

type PageType = 'inicio' | 'catalogo' | 'contacto';

function AppContent(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<PageType>('inicio');
  const [showCart, setShowCart] = useState<boolean>(false);

  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  const handleAddToCart = (moto: typeof motos[number]) => {
    addToCart(moto);
    setShowCart(true);
  };

  /* =========================
  RENDER
  ========================= */
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Header
        cartItemCount={cart.itemCount}
        onCartClick={() => setShowCart(!showCart)}
        currentPage={currentPage}
        onNavigate={(p) => setCurrentPage(p as any)}
      />

      {currentPage === 'inicio' && <MainPage onNavigate={setCurrentPage} />}

      {currentPage === 'catalogo' && (
        <Catalog onAddToCart={handleAddToCart} />
      )}

      {currentPage === 'contacto' && <Contacto />}

      {showCart && (
        <>
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,.5)',
              zIndex: 999,
            }}
            onClick={() => setShowCart(false)}
          />
          <Cart
            items={cart.items}
            total={cart.total}
            onRemoveFromCart={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onClose={() => setShowCart(false)}
          />
        </>
      )}
    </div>
  );
}

/* =========================
APP WRAPPER
========================= */
function App(): JSX.Element {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
