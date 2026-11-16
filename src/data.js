export const products = [
  { id: 'teclado', name: 'Teclado mecânico', price: 79.9, category: 'Periféricos', image: '/images/teclado.svg', description: 'Precisão e conforto para cada linha de código.' },
  { id: 'auscultadores', name: 'Auscultadores Studio', price: 59.5, category: 'Áudio', image: '/images/auscultadores.svg', description: 'Concentração para as tuas melhores ideias.' },
  { id: 'monitor', name: 'Monitor de 27 polegadas', price: 229, category: 'Monitores', image: '/images/monitor.svg', description: 'Mais espaço para criar, aprender e trabalhar.' }
];
export const euros = value => new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(value);
