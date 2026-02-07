import { useState, useEffect, useMemo } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { SearchBar } from './components/SearchBar';
import { Filters } from './components/Filters';
import { MotoCard } from './components/MotoCard';
import { Cart } from './components/Cart';
import { Nosotros } from './components/Nosotros';
import { Contacto } from './components/Contacto';
import { ViewPreferences } from './components/ViewPreferences';
import { motos, motoTypes, priceRanges } from './data/motos';

type LayoutType = 'horizontal' | 'vertical' | 'grid';
type PageType = 'inicio' | 'catalogo' | 'nosotros' | 'contacto';

function AppContent(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<PageType>('inicio');
  const [viewLayout, setViewLayout] = useState<LayoutType>(() => {
    return (localStorage.getItem('motoLayout') as LayoutType) || 'grid';
  });
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');
  const [showCart, setShowCart] = useState<boolean>(false);

  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();



  /* ===== Save layout ===== */
  useEffect(() => {
    localStorage.setItem('motoLayout', viewLayout);
  }, [viewLayout]);

  /* ===== Filter motos ===== */
  const filteredMotos = useMemo(() => {
    return motos.filter(moto => {
      const text = `${moto.nombre} ${moto.marca} ${moto.modelo}`.toLowerCase();
      const matchesSearch = text.includes(searchTerm.toLowerCase());
      const matchesType = !selectedType || moto.tipo === selectedType;
      const matchesPrice =
        !selectedPriceRange ||
        (() => {
          const range = priceRanges.find(r => r.value === selectedPriceRange);
          return range ? moto.precio >= range.min && moto.precio <= range.max : true;
        })();
      return matchesSearch && matchesType && matchesPrice;
    });
  }, [searchTerm, selectedType, selectedPriceRange]);

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

      {currentPage === 'inicio' && <HomePage />}

      {currentPage === 'catalogo' && (
        <div id="catalogo" style={{ background: 'var(--background)' }}>
          <div className="container">
            <ViewPreferences onLayoutChange={setViewLayout} />

            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

            <Filters
              selectedType={selectedType}
              selectedPriceRange={selectedPriceRange}
              onTypeChange={(value: string) => setSelectedType(value)}
              onPriceRangeChange={(value: string) => setSelectedPriceRange(value)}
              motoTypes={[...motoTypes]}
              priceRanges={[...priceRanges]}
            />

            <div
              style={{
                display: viewLayout === 'horizontal' ? 'flex' : 'grid',
                gridAutoFlow: viewLayout === 'grid' ? 'column' : undefined,
                gridTemplateRows: viewLayout === 'grid' ? 'repeat(4, auto)' : undefined,
                gridTemplateColumns:
                  viewLayout === 'grid' ? 'auto' : viewLayout === 'vertical' ? '1fr' : '1fr',
                gap: 16,
                padding: 24,
                overflowX: viewLayout === 'horizontal' ? 'auto' : 'visible',
              }}
            >
              {filteredMotos.map(moto => (
                <MotoCard key={moto.id} moto={moto} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </div>
        </div>
      )}

      {currentPage === 'nosotros' && <Nosotros />}
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
