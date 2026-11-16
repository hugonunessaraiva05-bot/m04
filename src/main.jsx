import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Ex01 from '../ex01/App';
import Ex02 from '../ex02/App';
import Ex03 from '../ex03/App';
import Ex04 from '../ex04/App';
import Ex05 from '../ex05/App';
import Ex06 from '../ex06/App';
import Ex07 from '../ex07/App';
import './style.css';
const exercises = [ ['First Component', 'Uma página, cinco componentes.'], ['Props', 'Um componente, várias possibilidades.'], ['Component Tree', 'Organizar para crescer.'], ['State', 'Uma interface que responde.'], ['React Forms', 'Dados certos desde o primeiro campo.'], ['useEffect', 'Ligar a interface ao mundo.'], ['React Router', 'Várias páginas, uma aplicação.'] ];
function Index() { return <><section className="hero"><span className="eyebrow">LICENCIATURA EM INFORMÁTICA · MÓDULO 04</span><h1>Pequenos componentes.<br/><em>Grandes possibilidades.</em></h1><p>Sete exercícios para explorar React, dos primeiros componentes à navegação de uma aplicação.</p><div className="tags"><span>React</span><span>JavaScript</span><span>Vite</span></div></section><section aria-labelledby="exercises-title"><div className="section-heading"><h2 id="exercises-title">Laboratório de React</h2><span>01 — 07</span></div><div className="exercise-grid">{exercises.map(([title, description], i) => <Link className="exercise-card" key={title} to={`/ex0${i+1}`}><span className="number">EX0{i+1} <span>↗</span></span><h3>{title}</h3><p>{description}</p><span className="open">Abrir exercício →</span></Link>)}</div></section></> }
function Shell() { const location = useLocation(); return <><header className="site-header"><Link className="brand" to="/">SARAIVA<span>TECH</span><small>APRENDER. CRIAR. EVOLUIR.</small></Link><Link className="index-link" to="/">Índice dos exercícios ↗</Link></header><main className="container">{location.pathname !== '/' && <Link className="back" to="/">← Todos os exercícios</Link>}<Routes><Route path="/" element={<Index/>}/><Route path="/ex01" element={<Ex01/>}/><Route path="/ex02" element={<Ex02/>}/><Route path="/ex03" element={<Ex03/>}/><Route path="/ex04" element={<Ex04/>}/><Route path="/ex05" element={<Ex05/>}/><Route path="/ex06" element={<Ex06/>}/><Route path="/ex07/*" element={<Ex07/>}/><Route path="*" element={<><h1>Página não encontrada</h1><Link to="/">Voltar ao índice</Link></>}/></Routes></main><footer className="site-footer"><span>Saraiva Tech · Laboratório de aprendizagem</span><span>Hugo Nunes · 881942 · 2026</span></footer></> }
createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><Shell/></BrowserRouter></React.StrictMode>);
