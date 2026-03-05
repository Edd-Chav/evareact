import React, { useState } from 'react';
import './Metodologias.css';

const metodologias = [
  { nombre: 'CASCADA', img: process.env.PUBLIC_URL + '/cascada.png', color: '#1673ff' },
  { nombre: 'MODELO V', img: process.env.PUBLIC_URL + '/modelov.png', color: '#6c757d' },
  { nombre: 'ÁGILES', img: process.env.PUBLIC_URL + '/metodologia.png', color: '#218c5a' },
  { nombre: 'SCRUM', img: process.env.PUBLIC_URL + '/scrum.png', color: '#d32f3f' },
  { nombre: 'KANBAN', img: process.env.PUBLIC_URL + '/kanban.png', color: '#ffc400', text: '#222' },
  { nombre: 'XP', img: process.env.PUBLIC_URL + '/xp.png', color: '#00cfff', text: '#222' },
  { nombre: 'HÍBRIDAS', img: process.env.PUBLIC_URL + '/hibridas-modernas.png', color: '#23272b' },
];

function Metodologias() {
  const [img, setImg] = useState(null);
  return (
    <div className="metodologias-container">
      <h1 className="metodologias-title">METODOLOGÍAS DE DESARROLLO DE SW</h1>
      <h2 className="metodologias-subtitle">¿Qué es una metodología de desarrollo de software?</h2>
      <p className="metodologias-desc">
        Las metodologías de desarrollo de software son un conjunto de técnicas y métodos organizativos que se aplican para diseñar soluciones de software informático. El objetivo de las distintas metodologías es el de intentar organizar los equipos de trabajo para que estos desarrollen las funciones de un programa de la mejor manera posible.
      </p>
      <h2 className="metodologias-tipos">TIPOS DE METODOLOGÍAS</h2>
      <div className="metodologias-badges">
        {metodologias.map((m) => (
          <button
            key={m.nombre}
            className="badge"
            style={{ background: m.color, color: m.text || '#fff' }}
            onClick={() => setImg(m.img)}
          >
            {m.nombre}
          </button>
        ))}
      </div>
      {img && (
        <div className="metodologias-img-modal" onClick={() => setImg(null)}>
          <img src={img} alt="metodologia" className="metodologias-img" />
        </div>
      )}
      <div className="metodologias-link">
        <h2>LINK A TABLERO DE TRABAJO</h2>
        <a href="https://home.atlassian.com/o/9b9b608d-f379-4784-b2cc-fbfcfafcfe3f/projects?cloudId=365e9563-148f-4c86-a691-5b2beb0198c0" className="metodologias-jira" target="_blank" rel="noopener noreferrer">---- JIRA ----</a>
      </div>
    </div>
  );
}

export default Metodologias;
