const products = [
  {
    id: 1,
    name: 'Mango Tommy',
    category: 'frutas',
    price: 4500,
    unit: 'kg',
    image: 'https://loremflickr.com/400/300/mango,fruit?random=1',
    description: 'Mango Tommy maduro y dulce, ideal para jugos y postres.',
    stock: 50
  },
  {
    id: 2,
    name: 'Aguacate Hass',
    category: 'frutas',
    price: 8500,
    unit: 'kg',
    image: 'https://loremflickr.com/400/300/avocado,fruit?random=2',
    description: 'Aguacate Hass de primera calidad, cremoso y delicioso.',
    stock: 35
  },
  {
    id: 3,
    name: 'Yuca Fresca',
    category: 'verduras',
    price: 3200,
    unit: 'kg',
    image: 'https://loremflickr.com/400/300/cassava,vegetable?random=3',
    description: 'Yuca blanca fresca, perfecta para sancocho y frituras.',
    stock: 60
  },
  {
    id: 4,
    name: 'Plátano Verde',
    category: 'verduras',
    price: 2500,
    unit: 'kg',
    image: 'https://loremflickr.com/400/300/plantain,vegetable?random=4',
    description: 'Plátano verde para patacones, tajadas y cocidos.',
    stock: 80
  },
  {
    id: 5,
    name: 'Pescado Tilapia',
    category: 'carnes',
    price: 22000,
    unit: 'kg',
    image: 'https://loremflickr.com/400/300/tilapia,fish?random=5',
    description: 'Tilapia fresca del día, limpia y lista para cocinar.',
    stock: 20
  },
  {
    id: 6,
    name: 'Carne de Res',
    category: 'carnes',
    price: 28000,
    unit: 'kg',
    image: 'https://loremflickr.com/400/300/beef,meat?random=6',
    description: 'Carne de res seleccionada, corte especial para asar.',
    stock: 25
  },
  {
    id: 7,
    name: 'Leche Entera',
    category: 'lacteos',
    price: 3800,
    unit: 'L',
    image: 'https://loremflickr.com/400/300/milk,dairy?random=7',
    description: 'Leche entera fresca, producida en fincas locales.',
    stock: 40
  },
  {
    id: 8,
    name: 'Queso Campesino',
    category: 'lacteos',
    price: 12000,
    unit: 'kg',
    image: 'https://loremflickr.com/400/300/cheese,dairy?random=8',
    description: 'Queso campesino artesanal, suave y delicioso.',
    stock: 15
  },
  {
    id: 9,
    name: 'Arroz Blanco',
    category: 'granos',
    price: 4500,
    unit: 'kg',
    image: 'https://loremflickr.com/400/300/rice,grain?random=9',
    description: 'Arroz blanco de grano largo, calidad superior.',
    stock: 100
  },
  {
    id: 10,
    name: 'Frijol Rojo',
    category: 'granos',
    price: 6800,
    unit: 'kg',
    image: 'https://loremflickr.com/400/300/beans,grain?random=10',
    description: 'Frijol rojo fresco, cocción rápida y sabor tradicional.',
    stock: 70
  },
  {
    id: 11,
    name: 'Panela',
    category: 'canasta',
    price: 4200,
    unit: 'kg',
    image: 'https://loremflickr.com/400/300/panela,sugar?random=11',
    description: 'Panela natural sin conservantes, endulzante tradicional.',
    stock: 45
  },
  {
    id: 12,
    name: 'Café Orgánico',
    category: 'canasta',
    price: 18500,
    unit: 'kg',
    image: 'https://loremflickr.com/400/300/coffee,beans?random=12',
    description: 'Café orgánico molido, aroma inigualable.',
    stock: 30
  },
  {
    id: 13,
    name: 'Piña Dulce',
    category: 'frutas',
    price: 5500,
    unit: 'unidad',
    image: 'https://loremflickr.com/400/300/pineapple,fruit?random=13',
    description: 'Piña madura y dulce, cultivada en la región.',
    stock: 25
  },
  {
    id: 14,
    name: 'Pollo Entero',
    category: 'carnes',
    price: 18500,
    unit: 'kg',
    image: 'https://loremflickr.com/400/300/chicken,meat?random=14',
    description: 'Pollo entero fresco, de corral, alimentación natural.',
    stock: 30
  },
  {
    id: 15,
    name: 'Tomate Chonto',
    category: 'verduras',
    price: 3800,
    unit: 'kg',
    image: 'https://loremflickr.com/400/300/tomato,vegetable?random=15',
    description: 'Tomate chonto maduro, ideal para ensaladas y salsas.',
    stock: 55
  },
  {
    id: 16,
    name: 'Cebolla Cabezona',
    category: 'verduras',
    price: 3500,
    unit: 'kg',
    image: 'https://loremflickr.com/400/300/onion,vegetable?random=16',
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
