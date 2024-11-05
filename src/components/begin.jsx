import React from 'react';

function Begin() {
  return (
    <div className="begin-section">
      <p className="evento">IEM<span> Rio 2024</span></p>
      <p className="sobre">
        Retornando para o Brasil e Rio de Janeiro pelo terceiro ano consecutivo, o Intel Extreme Masters terá os melhores 16 times junto com os milhares de fãs apaixonados na Farmasi Arena! A torcida fervorosa da multidão Brasileira, diversas atividades e um fim de semana de muito Counter-Strike é algo que você não quer perder! Garanta seus ingressos agora e presencie quem vai se tornar o campeão do IEM Rio em 2024.
      </p>
      <div className="botao">
        <a href="https://www.mundo-ticket.com/pt/evento/iem-rio-2024" target="_blank" rel="noopener noreferrer">Comprar ingresso</a>
      </div>
      <style jsx>{`
        .begin-section {
          text-align: center;
          padding: 40px 20px;
          background-color: #f0f0f0;
        }

        .evento {
          font-size: 2.5em;
          color: rgb(16, 28, 102);
          margin-bottom: 10px;
          font-weight: bold;
        }

        .evento span {
          color: #FFA500;
          font-style: italic;
        }

        .sobre {
          font-size: 1.2em;
          color: #333;
          max-width: 800px;
          margin: 0 auto 20px;
          line-height: 1.6;
        }

        .botao {
          margin-top: 40px;
        }

        .botao a {
          text-decoration: none;
          color: white;
          background-color: rgb(16, 28, 102);
          padding: 10px 20px;
          border-radius: 5px;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .botao a:hover {
          background-color: #ff6600;
        }
      `}</style>
    </div>
  );
}

export default Begin;
