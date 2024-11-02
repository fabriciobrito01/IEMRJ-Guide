import React from 'react';

const teams = [
  {
    name: "HEROIC",
    logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2022/09/heroic-red-outline.png?w=300",
    description: "A Heroic é uma organização de eSports dinamarquesa que surgiu em 2016 e rapidamente se destacou no cenário de Counter-Strike. Conhecida por sua dedicação ao desenvolvimento de talentos escandinavos, a Heroic cresceu e conquistou espaço entre as melhores equipes do mundo. A organização ganhou grande visibilidade ao vencer o ESL One Cologne Online em 2020, chegar às eliminatórias do PGL Major Stockholm 2021, PGL Major Antwerp 2022 e BLAST Paris Major 2023. Eles também ficaram em segundo lugar no IEM Rio Major 2022, perdendo para a Outsiders nas grandes finais. Feitos significativos que consolidaram seu status internacional. Hoje, é uma das equipes mais respeitadas de CS2, reconhecida por sua consistência e determinação.",
  },
  {
    name: "TEAM FALCONS",
    logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2022/09/Team-Falcons.png?w=300",
    description: "Team Falcons é uma organização profissional de esports da Arábia Saudita. No cenário de Counter-Strike 2 a equipe é conhecida por seu estilo de jogo estratégico e agressivo. Um dos marcos significativos na trajetória da Falcons foi a conquista do campeonato da Gamers8 2023, um evento de grande prestígio na Arábia Saudita que atraiu equipes de destaque de todo o mundo. Essa vitória não apenas elevou o perfil da equipe, mas também destacou o potencial do cenário de eSports na região. A organização vem investindo em jogadores de renome para competir no cenário global. Sua line-up atual é composta por talentos internacionais que combinam experiência e habilidade, tornando-os um adversário respeitável.",
  },
  {
    name: "ETERNAL FIRE",
    logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2023/10/Eternal-Fire.png?w=300",
    description: "Eternal Fire é uma equipe de CS da Turquia, formada em 2021. Criada por alguns dos maiores nomes do cenário turco, incluindo XANTARES, a equipe rapidamente chamou atenção por seu alto nível de habilidade e agressividade no jogo. O objetivo do time é competir em torneios internacionais e elevar o nível do CS na Turquia. Desde sua fundação, a Eternal Fire tem se destacado em diversas competições regionais e internacionais, conquistando títulos importantes, como a CCT 2022 Series 2 e a Thunderpick Bitcoin Series, que solidificaram sua posição como uma das principais equipes da região.",
  },
  {
    name: "3DMAX",
    logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2023/11/3DMAX.png?w=300",
    description: "A 3DMax é uma organização de eSports fundada em 2014, com sede na Europa, que se destacou inicialmente no cenário de Counter-Strike. Reconhecida por sua dedicação ao desenvolvimento de talentos, a 3DMax rapidamente se tornou uma equipe respeitada no CS, participando de diversas competições regionais e internacionais. A equipe conquistou títulos importantes, como o ESL Premiership e a DreamHack Open, demonstrando seu potencial em um cenário competitivo cada vez mais desafiador.",
  },
  {
    name: "OG",
    logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2022/09/OG-300x300-1.png?w=300",
    description: "A OG é uma organização europeia de eSports que se consolidou no cenário mundial primeiramente com seu sucesso em Dota 2, onde venceu quatro Majors e dois campeonatos The International, sendo a única equipe a conquistar esse feito consecutivamente. Em 2019, a OG expandiu sua presença para o Counter-Strike, trazendo sua visão de competitividade e inovação para o jogo de tiro tático. Desde sua entrada no CS, a OG tem buscado construir um elenco forte e coeso, participando de competições importantes e conquistando títulos como o IEM Major em 2020.",
  },
  {
    name: "FNATIC",
    logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2022/04/fnatic.png?w=300",
    description: "A Fnatic é uma organização de eSports histórica, fundada em 2004 no Reino Unido, e uma das pioneiras no cenário de Counter-Strike. Desde os primeiros dias do CS, a Fnatic estabeleceu seu legado ao conquistar diversos campeonatos e, em 2015, se tornou uma das primeiras equipes a vencer três Majors de CS. Conhecida por promover grandes talentos suecos e internacionais, a organização é responsável por revelar alguns dos maiores jogadores da história do jogo.",
  },
  {
    name: "CLOUD9",
    logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2022/04/cloud9.png?w=300",
    description: "A Cloud9 é uma organização norte-americana de eSports, fundada em 2013, que rapidamente se tornou uma potência no cenário de Counter-Strike. Embora tenha participado de várias modalidades de eSports, a C9 é especialmente lembrada por sua histórica vitória no Major de Boston em 2018, sendo a primeira equipe norte-americana a conquistar um título desse nível em CS. Ao longo dos anos, a organização passou por diversas reformulações e buscou talentos internacionais para se manter entre as melhores do mundo.",
  },
  {
    name: "B8",
    logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2021/09/B8_Logo_white.png?w=300",
    description: "A B8 é uma organização de eSports ucraniana fundada em 2020 pelo lendário jogador de Dota 2, Dendi. Embora tenha suas raízes no Dota, a B8 expandiu rapidamente para outras modalidades, incluindo Counter-Strike, com o objetivo de competir entre as melhores equipes da região CIS e da Europa. Focada em desenvolver talentos emergentes, a B8 construiu sua reputação através de jogadores jovens e promissores, buscando consolidar seu nome no cenário competitivo.",
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
          color: #FFA500;
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
