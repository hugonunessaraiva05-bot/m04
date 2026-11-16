import ProductCard from '../ex02/ProductCard';
import { products } from '../src/data';
export function Header() { return <header><span className="eyebrow">EX03 · COMPONENT TREE</span><h1>O teu próximo equipamento.</h1><p>App → Header, ProductList e Footer. ProductList → ProductCard.</p></header>; }
export function ProductList({ products }) { return <section className="product-grid" aria-label="Catálogo de produtos">{products.map(product => <ProductCard key={product.id} {...product}/>)}</section>; }
export function Footer() { return <footer className="exercise-footer">Catálogo Saraiva Tech · {products.length} produtos para descobrir.</footer>; }
export default function App() { return <><Header/><ProductList products={products}/><Footer/></>; }
