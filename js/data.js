const products = [
  {
    id: 1,
    name: 'Mango Tommy',
    category: 'frutas',
    price: 4500,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop',
    description: 'Mango Tommy maduro y dulce, ideal para jugos y postres.',
    stock: 50
  },
  {
    id: 2,
    name: 'Aguacate Hass',
    category: 'frutas',
    price: 8500,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=400&h=300&fit=crop',
    description: 'Aguacate Hass de primera calidad, cremoso y delicioso.',
    stock: 35
  },
  {
    id: 3,
    name: 'Yuca Fresca',
    category: 'verduras',
    price: 3200,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1597685202902-89ce1896a680?w=400&h=300&fit=crop',
    description: 'Yuca blanca fresca, perfecta para sancocho y frituras.',
    stock: 60
  },
  {
    id: 4,
    name: 'Plátano Verde',
    category: 'verduras',
    price: 2500,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b8f0a6c6a?w=400&h=300&fit=crop',
    description: 'Plátano verde para patacones, tajadas y cocidos.',
    stock: 80
  },
  {
    id: 5,
    name: 'Pescado Tilapia',
    category: 'carnes',
    price: 22000,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&h=300&fit=crop',
    description: 'Tilapia fresca del día, limpia y lista para cocinar.',
    stock: 20
  },
  {
    id: 6,
    name: 'Carne de Res',
    category: 'carnes',
    price: 28000,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=300&fit=crop',
    description: 'Carne de res seleccionada, corte especial para asar.',
    stock: 25
  },
  {
    id: 7,
    name: 'Leche Entera',
    category: 'lacteos',
    price: 3800,
    unit: 'L',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop',
    description: 'Leche entera fresca, producida en fincas locales.',
    stock: 40
  },
  {
    id: 8,
    name: 'Queso Campesino',
    category: 'lacteos',
    price: 12000,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1634487359989-3e90c9432133?w=400&h=300&fit=crop',
    description: 'Queso campesino artesanal, suave y delicioso.',
    stock: 15
  },
  {
    id: 9,
    name: 'Arroz Blanco',
    category: 'granos',
    price: 4500,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
    description: 'Arroz blanco de grano largo, calidad superior.',
    stock: 100
  },
  {
    id: 10,
    name: 'Frijol Rojo',
    category: 'granos',
    price: 6800,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1551462140-0b8c8b0eb486?w=400&h=300&fit=crop',
    description: 'Frijol rojo fresco, cocción rápida y sabor tradicional.',
    stock: 70
  },
  {
    id: 11,
    name: 'Panela',
    category: 'canasta',
    price: 4200,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1585480710160-39610c7e3671?w=400&h=300&fit=crop',
    description: 'Panela natural sin conservantes, endulzante tradicional.',
    stock: 45
  },
  {
    id: 12,
    name: 'Café Orgánico',
    category: 'canasta',
    price: 18500,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    description: 'Café orgánico molido, aroma inigualable.',
    stock: 30
  },
  {
    id: 13,
    name: 'Piña Dulce',
    category: 'frutas',
    price: 5500,
    unit: 'unidad',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop',
    description: 'Piña madura y dulce, cultivada en la región.',
    stock: 25
  },
  {
    id: 14,
    name: 'Pollo Entero',
    category: 'carnes',
    price: 18500,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=300&fit=crop',
    description: 'Pollo entero fresco, de corral, alimentación natural.',
    stock: 30
  },
  {
    id: 15,
    name: 'Tomate Chonto',
    category: 'verduras',
    price: 3800,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop',
    description: 'Tomate chonto maduro, ideal para ensaladas y salsas.',
    stock: 55
  },
  {
    id: 16,
    name: 'Cebolla Cabezona',
    category: 'verduras',
    price: 3500,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1508747703722-1be44a1e3ef4?w=400&h=300&fit=crop',
    description: 'Cebolla cabezona blanca, fresca y de buen tamaño.',
    stock: 60
  }
];

const categories = [
  { id: 'todas', name: 'Todas', icon: '🛒' },
  { id: 'frutas', name: 'Frutas', icon: '🍎' },
  { id: 'verduras', name: 'Verduras', icon: '🥕' },
  { id: 'carnes', name: 'Carnes & Pollo', icon: '🥩' },
  { id: 'lacteos', name: 'Lácteos', icon: '🥛' },
  { id: 'granos', name: 'Granos', icon: '🌾' },
  { id: 'canasta', name: 'Canasta Familiar', icon: '🧺' }
];
