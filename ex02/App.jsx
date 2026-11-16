import ProductCard from './ProductCard';
import { products } from '../src/data';
export default function App() { return <><span className="eyebrow">EX02 · PROPS</span><h1>O mesmo componente.<br/>Diferentes produtos.</h1><p>Os dados mudam. A estrutura mantém-se reutilizável.</p><h2>Variante padrão</h2><div className="product-grid">{products.map(product => <ProductCard key={product.id} {...product}/>)}</div><h2>Variante compacta · bónus</h2><div className="product-grid">{products.map(product => <ProductCard key={product.id} {...product} variant="compact"/>)}</div></>; }
