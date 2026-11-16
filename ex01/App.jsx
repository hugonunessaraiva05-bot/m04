import { Link } from 'react-router-dom';
export function Header() { return <header><span className="eyebrow">EX01 · FIRST COMPONENT</span><h1>Bem-vindo à Saraiva Tech.</h1><p>O primeiro passo começa com um componente.</p></header>; }
export function Navigation() { return <nav className="local-nav" aria-label="Navegação do exercício 01"><a href="#sobre">Sobre</a><a href="#aprender">Aprender</a><Link to="/ex02">Explorar produtos</Link></nav>; }
export function Main() { return <main><section id="sobre" className="panel"><h2>Tecnologia com propósito</h2><p>Na Saraiva Tech, transformamos curiosidade em conhecimento. Esta página junta componentes pequenos e independentes.</p></section><section id="aprender" className="panel"><h2>Aprender a construir</h2><p>Header apresenta, Navigation orienta, Main organiza e Footer encerra. App reúne todos os componentes.</p></section></main>; }
export function Footer() { return <footer className="exercise-footer">Saraiva Tech · O teu próximo passo na tecnologia.</footer>; }
export default function App() { return <article><Header/><Navigation/><Main/><Footer/></article>; }
