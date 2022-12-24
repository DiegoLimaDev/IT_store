export interface IProducts {
  id: number;
  description: string;
  price: number;
  paymethod: string;
  img: string;
  stock: number;
}

export const products = [
  {
    id: 1,
    description: 'Mouse gamer',
    price: 439.0,
    paymethod: 'À vista no PIX',
    img: '/assets/mouse-3.jpg',
    stock: 10,
  },
  {
    id: 2,
    description: 'Monitor muito bom',
    price: 1200.5,
    paymethod: 'À vista no PIX',
    desconto: 2000.0,
    img: '/assets/monitor-1.jpg',
    stock: 5,
  },
  {
    id: 3,
    description: 'Teclado excelente',
    price: 749.99,
    paymethod: 'À vista no PIX',
    img: '/assets/teclado-1.jpg',
    stock: 3,
  },
  {
    id: 4,
    description: 'Fone para quem joga FPS',
    price: 599.99,
    paymethod: 'À vista no PIX',
    img: '/assets/fone-de-ouvido-2.jpg',
    stock: 20,
  },
  {
    id: 5,
    description: 'Fone de ouvido',
    price: 299.99,
    paymethod: 'À vista no PIX',
    img: '/assets/fone-de-ouvido-1.jpg',
    stock: 16,
  },
  {
    id: 6,
    description: 'Fone de ouvido bom',
    price: 399.99,
    paymethod: 'À vista no PIX',
    img: '/assets/fone-de-ouvido-3.jpg',
    stock: 1,
  },
  {
    id: 7,
    description: 'HD 1TB',
    price: 499.99,
    paymethod: 'À vista no PIX',
    img: '/assets/hd.jpg',
    stock: 10,
  },
  {
    id: 8,
    description: 'Combo de placa de vídeos',
    price: 18449.99,
    paymethod: 'À vista no PIX',
    img: '/assets/placa-video.jpg',
    stock: 8,
  },
  {
    id: 9,
    description: 'Processador Ryzen',
    price: 1000,
    paymethod: 'À vista no PIX',
    img: '/assets/processador.jpg',
    stock: 3,
  },
  {
    id: 10,
    description: 'Notebook bom',
    price: 2500,
    paymethod: 'À vista no PIX',
    img: '/assets/laptop-1.jpg',
    stock: 50,
  },
  {
    id: 11,
    description: 'Notebook excelente',
    price: 4500,
    paymethod: 'À vista no PIX',
    img: '/assets/laptop-2.jpg',
    stock: 30,
  },
  {
    id: 12,
    description: 'Mouse barato',
    price: 20,
    paymethod: 'À vista no PIX',
    img: '/assets/mouse-1.png',
    stock: 11,
  },
  {
    id: 13,
    description: 'Mouse ótimo',
    price: 200,
    paymethod: 'À vista no PIX',
    img: '/assets/mouse-2.jpg',
    stock: 6,
  },
  {
    id: 14,
    description: 'Mouse pequeno',
    price: 50,
    paymethod: 'À vista no PIX',
    img: '/assets/mouse-4.jpg',
    stock: 7,
  },
  {
    id: 15,
    description: 'Teclado bom',
    price: 159.99,
    paymethod: 'À vista no PIX',
    img: '/assets/teclado-2.jpg',
    stock: 10,
  },
];
