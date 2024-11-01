import React from 'react';

const teams = [
  {
    name: "Time A",
    logo: "https://example.com/logo-a.png", // URL da imagem do logo
    description: "Descrição do Time A, que é um dos favoritos para o torneio.",
  },
  {
    name: "Time B",
    logo: "https://example.com/logo-b.png",
    description: "Descrição do Time B, conhecido por seu estilo agressivo.",
  },
  {
    name: "Time C",
    logo: "https://example.com/logo-c.png",
    description: "Descrição do Time C, que sempre traz surpresas.",
  },
  {
    name: "Time D",
    logo: "https://example.com/logo-d.png",
    description: "Descrição do Time D, uma equipe com muitos talentos.",
  },
  {
    name: "Time E",
    logo: "https://example.com/logo-e.png",
    description: "Descrição do Time E, com uma forte base de fãs.",
  },
  {
    name: "Time F",
    logo: "https://example.com/logo-f.png",
    description: "Descrição do Time F, que tem uma rica história no cenário.",
  },
  // Adicione mais times conforme necessário
];

function Teams() {
  return (
    <div className="teams-container">
        <ul className="title">
          <li className="top">Times Participantes</li>
        </ul>
      <div className="teams-grid">
        {teams.map((team, index) => (
          <div className="team-card" key={index}>
            <img src={team.logo} alt={`${team.name} Logo`} className="team-logo" />
            <h2>{team.name}</h2>
            <p>{team.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .teams-container {
          text-align: center;
          padding: 20px;
          background-color: #f0f0f0;
          color: #fff;
        }

        ul.title li.top {
          margin-bottom: 20px;
          font-size: 24px;
          font-weight: 900;
          color: #ff6600;
        }

        .teams-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
          padding: 0 20px;
        }

        .team-card {
          background-color: #222;
          border-radius: 10px;
          padding: 15px;
          transition: transform 0.3s;
        }

        .team-card:hover {
          transform: scale(1.05);
        }

        .team-logo {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        .team-card h2 {
          margin: 10px 0;
          font-size: 18px;
        }

        .team-card p {
          font-size: 14px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}

export default Teams;
