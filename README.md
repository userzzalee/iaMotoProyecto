# 🏍️ OtroMotos - Ecommerce de Motos

Una aplicación web completa de comercio electrónico de motos desarrollada con React, TypeScript y Vite.

## ✅ Características Implementadas

### 🏪 Funcionalidades del Ecommerce
- **Catálogo completo**: 18 modelos de motos de diferentes tipos
- **Sistema de carrito funcional**: Añadir, eliminar y modificar cantidades
- **Persistencia con localStorage**: El carrito se mantiene al recargar la página
- **Búsqueda en tiempo real**: Por nombre, marca o modelo
- **Filtros avanzados**: Por tipo de moto y rango de precios
- **Diseño responsive**: Adaptable a dispositivos móviles y tablets

### 🛵 Tipos de Motos Disponibles
- **Deportivas**: Yamaha YZF-R1, Honda CBR600RR, Kawasaki Ninja ZX-10R
- **Scooters**: Honda PCX 150, Yamaha NMAX 155, Vespa GTS 300
- **Naked**: Ducati Monster 821, KTM Duke 390, Yamaha MT-07
- **Off-Road**: KTM 350 EXC-F, Honda CRF250R, Yamaha YZ250F
- **Custom**: Harley-Davidson Iron 883, Triumph Bonneville, Indian Scout
- **Turismo**: BMW R 1250 RT, Honda Gold Wing, Yamaha FJR1300ES

### 🎨 Componentes Principales
- **Header**: Navegación con logo y contador del carrito
- **Hero**: Sección destacada con estadísticas
- **SearchBar**: Buscador con autocomplete visual
- **Filters**: Filtros combinables por tipo y precio
- **MotoCard**: Tarjetas de producto con información completa
- **Cart**: Carrito lateral deslizable con gestión de productos

### 🛠️ Aspectos Técnicos
- **TypeScript**: Tipado seguro para toda la aplicación
- **React Hooks**: useState, useMemo, useEffect, useReducer
- **Context API**: Gestión del estado del carrito
- **CSS Custom Properties**: Sistema de diseño consistente
- **Componentes reutilizables**: Arquitectura modular
- **Mock Data**: Datos simulados realistas

## 🚀 Cómo Ejecutar el Proyecto

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   ```

4. **Previsualizar producción**:
   ```bash
   npm run preview
   ```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes de UI
│   ├── Button.tsx      # Botón reutilizable
│   ├── Cart.tsx        # Carrito de compras
│   ├── Filters.tsx     # Filtros de búsqueda
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección hero
│   ├── MotoCard.tsx    # Tarjeta de producto
│   └── SearchBar.tsx   # Barra de búsqueda
├── context/            # Contextos de React
│   └── CartContext.tsx # Gestión del carrito
├── data/               # Datos de la aplicación
│   └── motos.ts        # Mock data de productos
├── types/              # Tipos TypeScript
│   └── index.ts        # Definiciones de tipos
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales
```

## 🎯 Detalles de Implementación

### Estado del Carrito
- Utiliza `useReducer` para gestionar acciones complejas
- Persistencia automática con `localStorage`
- Cálculo de totales en tiempo real
- Validación de stock

### Sistema de Filtros
- Búsqueda combinada con múltiples criterios
- Memorización con `useMemo` para optimización
- Actualización en tiempo real sin delay

### Diseño Responsive
- Mobile-first approach
- Grid system adaptativo
- Componentes flexibles
- Optimizado para touch en móviles

## 💡 Características Adicionales

### UX/UI
- Animaciones suaves al hover
- Indicadores de stock bajo
- Contador de productos en el header
- Feedback visual inmediato
- Diseño moderno y profesional

### Accesibilidad
- Estructura semántica HTML5
- Navegación por teclado
- Contraste adecuado
- Etiquetas descriptivas

### Optimización
- Componentes memoizados
- CSS optimizado
- Imágenes placeholder optimizadas
- Clean code y buenas prácticas

---

**Desarrollado con ❤️ utilizando React + TypeScript + Vite**