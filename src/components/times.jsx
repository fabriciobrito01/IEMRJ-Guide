import React from 'react';

const teams = [
  {
    name: "HEROIC",
    logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2022/09/heroic-red-outline.png?w=300",
    description: "Heroic é uma organização de esportes eletrônicos de origem dinamarquesa e com sede na Noruega, com equipes competindo em Counter-Strike: Global Offensive, PlayerUnknown's Battlegrounds,  Rainbow Six Siege e em simuladores de corrida. A organização é mais conhecida por sua equipe de Counter-Strike, que chegou às eliminatórias do PGL Major Stockholm 2021, PGL Major Antwerp 2022 e BLAST Paris Major 2023. Eles também ficaram em segundo lugar no IEM Rio Major 2022, perdendo para a Outsiders nas grandes finais.",
  },
  {
    name: "TEAM FALCONS",
    logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2022/09/Team-Falcons.png?w=300",
    description: "Team Falcons (conhecida como Falcons Esports antes do final de 2022) é uma organização profissional de esports da Arábia Saudita . Junto com uma equipe de Counter-Strike 2 , a organização também hospeda equipes em VALORANT , Rocket League e PUBG , entre outros títulos. No cenário de Counter-Strike 2 a equipe é conhecida por seu estilo de jogo estratégico e agressivo. A organização vem investindo em jogadores de renome para competir no cenário global. Sua line-up atual é composta por talentos internacionais que combinam experiência e habilidade, tornando-os um adversário respeitável",
  },
  {
    name: "ETERNAL FIRE",
    logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2023/10/Eternal-Fire.png?w=300",
    description: "Eternal Fire é uma equipe de CS da Turquia, formada em 2021. Criada por alguns dos maiores nomes do cenário turco, incluindo XANTARES, a equipe rapidamente chamou atenção por seu alto nível de habilidade e agressividade no jogo. O objetivo do time é competir em torneios internacionais e elevar o nível do CS na Turquia. Desde sua formação, a Eternal Fire conseguiu bons resultados em torneios regionais e se classificou para eventos internacionais, consolidando sua presença no cenário competitivo europeu de CS.",
  },
  {
    name: "3DMAX",
    logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2023/11/3DMAX.png?w=300",
    description: "3DMAX é uma organização francesa de eSports fundada em 2009 que em sua iteração original hospedou uma série de escalações de Counter-Strike: Global Offensive , Counter-Strike: Source e Counter-Strike . Após a organização ser revivida em 16 de maio de 2018, a 3DMAX assinou com a NOBO , retornando à cena do Counter-Strike: Global Offensive até se separar da equipe no início de 2019. A 3DMAX então retornou para hospedar uma escalação de Counter-Strike 2 , assinando com a Looking4Org em novembro de 2023.",
  },
  {
    name: "OG",
    logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2022/09/OG-300x300-1.png?w=300",
    description: "A OG é uma organização europeia de eSports que se consolidou no cenário mundial primeiramente com seu sucesso em Dota 2, onde venceu quatro Majors e dois campeonatos The International, sendo a única equipe a conquistar esse feito consecutivamente. Em 2019, a OG expandiu sua presença para o Counter-Strike, trazendo sua visão de competitividade e inovação para o jogo de tiro tático. Desde então, a equipe passou por várias formações, mantendo o foco em desenvolver um elenco que pudesse competir entre as melhores organizações de CS.",
  },
  {
    name: "FNATIC",
    logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2022/04/fnatic.png?w=300",
    description: "Descrição do Time F, que tem uma rica história no cenário.",
  },
  {
    name: "CLOUD9",
    logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2022/04/cloud9.png?w=300",
    description: "",
  },
  {
    name: "B8",
    logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2021/09/B8_Logo_white.png?w=300",
    description: "",
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
          background-color: rgb(16, 28, 102);
          border-radius: 10px;
          padding: 15px;
          transition: transform 0.3s;
        }

        .team-card:hover {
          transform: scale(1.05);
        }

        .team-logo {
          width: 40%;
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
