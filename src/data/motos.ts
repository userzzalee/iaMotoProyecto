import { Moto } from '../types';

export const motos: Moto[] = [
  {
    id: '1',
    nombre: 'Yamaha YZF-R1',
    tipo: 'deportiva',
    precio: 18500,
    imagen: 'https://yamahamotorsports.com/media/images/icons/products/26_r1.png',
    marca: 'Yamaha',
    modelo: 'YZF-R1',
    cilindrada: 1000,
    descripcion: 'Moto deportiva de alta velocidad con tecnología de competición',
    stock: 5
  },
  {
    id: '2',
    nombre: 'Honda CBR600RR',
    tipo: 'deportiva',
    precio: 12400,
    imagen: 'https://images.unsplash.com/photo-1558981283-27a968d34130?w=400&q=80',
    marca: 'Honda',
    modelo: 'CBR600RR',
    cilindrada: 600,
    descripcion: 'Deportiva ligera y ágil ideal para curvas',
    stock: 8
  },
  {
    id: '3',
    nombre: 'Kawasaki Ninja ZX-10R',
    tipo: 'deportiva',
    precio: 16999,
    imagen: 'https://images.unsplash.com/photo-1571069316984-605c22867cb3?w=400&q=80',
    marca: 'Kawasaki',
    modelo: 'Ninja ZX-10R',
    cilindrada: 998,
    descripcion: 'Supercarga de adrenalina con motor superbike',
    stock: 3
  },
  {
    id: '4',
    nombre: 'Honda PCX 150',
    tipo: 'scooter',
    precio: 3200,
    imagen: 'https://images.unsplash.com/photo-1559065040-a155d6b38202?w=400&q=80',
    marca: 'Honda',
    modelo: 'PCX 150',
    cilindrada: 150,
    descripcion: 'Scooter urbano perfecto para la ciudad',
    stock: 15
  },
  {
    id: '5',
    nombre: 'Yamaha NMAX 155',
    tipo: 'scooter',
    precio: 3500,
    imagen: 'https://images.unsplash.com/photo-1611520251318-6f9d2ecfe3c7?w=400&q=80',
    marca: 'Yamaha',
    modelo: 'NMAX 155',
    cilindrada: 155,
    descripcion: 'Scooter deportivo con tecnología moderna',
    stock: 12
  },
  {
    id: '6',
    nombre: 'Vespa GTS 300',
    tipo: 'scooter',
    precio: 6200,
    imagen: 'https://images.unsplash.com/photo-1561645168897-72102cb16378?w=400&q=80',
    marca: 'Vespa',
    modelo: 'GTS 300',
    cilindrada: 300,
    descripcion: 'Icono italiano con estilo clásico y rendimiento moderno',
    stock: 7
  },
  {
    id: '7',
    nombre: 'Ducati Monster 821',
    tipo: 'naked',
    precio: 11200,
    imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    marca: 'Ducati',
    modelo: 'Monster 821',
    cilindrada: 821,
    descripcion: 'Naked potente con diseño italiano minimalista',
    stock: 6
  },
  {
    id: '8',
    nombre: 'KTM Duke 390',
    tipo: 'naked',
    precio: 5800,
    imagen: 'https://images.unsplash.com/photo-1581539269563-7cc14c85b6b8?w=400&q=80',
    marca: 'KTM',
    modelo: 'Duke 390',
    cilindrada: 390,
    descripcion: 'Naked agresiva y ligera perfecta para debutantes',
    stock: 10
  },
  {
    id: '9',
    nombre: 'Yamaha MT-07',
    tipo: 'naked',
    precio: 7200,
    imagen: 'https://yamahamotorsports.com/media/images/icons/products/26_mt07_1.png',
    marca: 'Yamaha',
    modelo: 'MT-07',
    cilindrada: 689,
    descripcion: 'Hyper Naked con divertido motor twin',
    stock: 9
  },
  {
    id: '10',
    nombre: 'KTM 350 EXC-F',
    tipo: 'off-road',
    precio: 9800,
    imagen: 'https://images.unsplash.com/photo-1584271437679-f82b7b337dd4?w=400&q=80',
    marca: 'KTM',
    modelo: '350 EXC-F',
    cilindrada: 350,
    descripcion: 'Enduro ligera y potente para terrenos difíciles',
    stock: 4
  },
  {
    id: '11',
    nombre: 'Honda CRF250R',
    tipo: 'off-road',
    precio: 8500,
    imagen: 'https://images.unsplash.com/photo-1590736969955-63cc06b36a32?w=400&q=80',
    marca: 'Honda',
    modelo: 'CRF250R',
    cilindrada: 250,
    descripcion: 'Moto cross competitiva con cuatro tiempos',
    stock: 6
  },
  {
    id: '12',
    nombre: 'Yamaha YZ250F',
    tipo: 'off-road',
    precio: 7900,
    imagen: 'https://yamahamotorsports.com/media/images/icons/products/2026_YZ250FTL.png',
    marca: 'Yamaha',
    modelo: 'YZ250F',
    cilindrada: 250,
    descripcion: 'Campeona del circuito con motor reverso',
    stock: 5
  },
  {
    id: '13',
    nombre: 'Harley-Davidson Iron 883',
    tipo: 'custom',
    precio: 13500,
    imagen: 'https://images.unsplash.com/photo-1558981806-ec58e69c34c67?w=400&q=80',
    marca: 'Harley-Davidson',
    modelo: 'Iron 883',
    cilindrada: 883,
    descripcion: 'Custom oscuro y agresivo con estilo bobber',
    stock: 3
  },
  {
    id: '14',
    nombre: 'Triumph Bonneville T100',
    tipo: 'custom',
    precio: 11200,
    imagen: 'https://images.unsplash.com/photo-1571062358526-8c4a40d5a69d?w=400&q=80',
    marca: 'Triumph',
    modelo: 'Bonneville T100',
    cilindrada: 900,
    descripcion: 'Clásico británico moderno con estilo atemporal',
    stock: 4
  },
  {
    id: '15',
    nombre: 'Indian Scout Bobber',
    tipo: 'custom',
    precio: 14200,
    imagen: 'https://images.unsplash.com/photo-1581833971238-2d5bc3be4cd1?w=400&q=80',
    marca: 'Indian',
    modelo: 'Scout Bobber',
    cilindrada: 1133,
    descripcion: 'Custom americano con diseño minimalista',
    stock: 2
  },
  {
    id: '16',
    nombre: 'BMW R 1250 RT',
    tipo: 'turismo',
    precio: 18900,
    imagen: 'https://images.unsplash.com/photo-1550418772-96853c692b4e?w=400&q=80',
    marca: 'BMW',
    modelo: 'R 1250 RT',
    cilindrada: 1254,
    descripcion: 'Touring de lujo con tecnología y confort',
    stock: 4
  },
  {
    id: '17',
    nombre: 'Honda Gold Wing',
    tipo: 'turismo',
    precio: 25900,
    imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
    marca: 'Honda',
    modelo: 'Gold Wing',
    cilindrada: 1833,
    descripcion: 'La reina del turismo con máximo confort',
    stock: 2
  },
  {
    id: '18',
    nombre: 'Yamaha FJR1300ES',
    tipo: 'turismo',
    precio: 16800,
    imagen: 'https://yamahamotorsports.com/media/images/icons/products/24_fjr1300es.png',
    marca: 'Yamaha',
    modelo: 'FJR1300ES',
    cilindrada: 1298,
    descripcion: 'Deportiva de turismo con gran autonomía',
    stock: 3
  }
];

export const motoTypes = [
  { value: 'deportiva', label: 'Deportivas' },
  { value: 'scooter', label: 'Scooters' },
  { value: 'naked', label: 'Naked' },
  { value: 'off-road', label: 'Off-Road' },
  { value: 'custom', label: 'Custom' },
  { value: 'turismo', label: 'Turismo' }
] as const;

export const priceRanges = [
  { value: '0-5000', label: 'Hasta €5.000', min: 0, max: 5000 },
  { value: '5000-10000', label: '€5.000 - €10.000', min: 5000, max: 10000 },
  { value: '10000-15000', label: '€10.000 - €15.000', min: 10000, max: 15000 },
  { value: '15000+', label: 'Más de €15.000', min: 15000, max: Infinity }
] as const;