import React, { useState } from 'react';

const teamsByRegion = {
  EU: [
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
  ],
  NA: [

    {
      name: "TEAM LIQUID",
      logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2023/11/team-liquid-2.png?w=300",
      description: "A Team Liquid é uma organização de eSports norte-americana, fundada em 2000, que se consolidou como uma das equipes mais respeitadas e bem-sucedidas no cenário de Counter-Strike. Desde sua entrada no CS, a Liquid se destacou por suas performances em torneios internacionais, alcançando várias finais e conquistando títulos importantes, incluindo o IEM World Championship em 2020 e o Blast Premier Global Final em 2021. Com uma forte base de fãs e uma presença significativa em diversas competições, a Team Liquid continua a se esforçar para permanecer entre as melhores equipes de CS2, combinando a experiência de veteranos com o potencial de novos talentos."
    },
    {
      name: "LEGACY",
      logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2024/03/Legacy.png?w=300",
      description: "A Legacy é uma organização de eSports australiana, fundada em 2015, que se destacou no cenário de Counter-Strike, especialmente na região da Oceania. Ao longo dos anos, a equipe conquistou vários títulos importantes, incluindo o ESEA Australia, onde frequentemente se posicionou entre as melhores equipes do circuito. Além de seus sucessos regionais, a equipe tem buscado competir em torneios internacionais, com o objetivo de expandir sua presença global."
    },
    {
      name: "PARTY-ASTRONAUTS",
      logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2023/03/Party-Astronauts.png?w=300",
      description: "A Party Astronauts é uma equipe de eSports norte-americana, conhecida por sua dedicação e performances no cenário de Counter-Strike. Desde sua fundação em 2020, a equipe rapidamente se destacou nas competições regionais, conquistando títulos em ligas como a ESEA e a CEVO, onde demonstraram um forte desempenho contra adversários variados. A Party Astronauts também tem participado de diversos torneios de classificação, buscando expandir sua presença e visibilidade no cenário competitivo. A organização é reconhecida por sua capacidade de desenvolver talentos, promovendo um ambiente colaborativo e de crescimento entre os jogadores.",
    },
    {
      name: "LAG GAMING",
      logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2024/03/LAG-Gaming.png?w=300",
      description: "A LAG Gaming é uma organização de eSports internacional, conhecida principalmente no cenário de Counter-Strike. Desde sua fundação, a equipe se destacou por suas performances em competições regionais e internacionais, acumulando uma série de conquistas significativas. A LAG tem participado de diversas ligas, onde conquistou títulos em torneios como a ESEA e a Funspark ULTI, demonstrando sua habilidade e determinação no competitivo. A organização é reconhecida por investir em talentos emergentes, proporcionando uma plataforma para jogadores se destacarem.",
    }
  ],
  SA: [
    {
      name: "MIBR",
      logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2023/03/MIBR.png?w=300",
      description: "A MIBR é uma das organizações mais icônicas de eSports no Brasil, com uma rica história no cenário de Counter-Strike. Fundada em 2003, a MIBR rapidamente ganhou notoriedade, especialmente durante os anos de ouro do CS 1.6, conquistando títulos importantes como a World Cyber Games e a Extreme Masters. Após um período de reestruturação, a organização voltou a se destacar em 2017 com uma nova formação em CS, alcançando a final do ESL Pro League e conquistando o título do BLAST Premier em 2020. A MIBR é conhecida por sua paixão e lealdade dos fãs, representando o Brasil em competições internacionais e buscando constantemente retornar ao topo do cenário global. Com um foco no desenvolvimento de talentos locais, a MIBR continua a ser uma força significativa no eSports, mantendo viva a tradição do cenário brasileiro.",
    },
    {
      name: "PAIN GAMING",
      logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2023/03/pain-gaming.png?w=300",
      description: "A paiN Gaming é uma das organizações de eSports mais renomadas do Brasil, fundada em 2010. Desde sua criação, a paiN tem se destacado em várias modalidades, incluindo o cenário de Counter-Strike. A equipe de CS conquistou diversos títulos importantes, incluindo o Campeonato Brasileiro de e-Sports e competições na Gamers Club, consolidando sua posição como uma das principais forças do país. Com uma abordagem voltada para o desenvolvimento de talentos, a paiN Gaming tem se focado em formar jogadores promissores e tem sido um verdadeiro celeiro de talentos para o cenário competitivo brasileiro.",
    },
    {
      name: "RED CANIDS",
      logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2023/05/RED-Canids.png?w=300",
      description: "A RED Canids é uma organização de eSports brasileira, fundada em 2019, que rapidamente se destacou no cenário competitivo, especialmente em jogos como League of Legends e Counter-Strike. A equipe de CS tem mostrado um crescimento constante, conquistando títulos em competições regionais, como a Gamers Club, e se destacando em torneios importantes como a Liga Brasileira de Counter-Strike.",
    },
    {
      name: "IMPERIAL",
      logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2023/05/Imperial-Sportsbet.png?w=300",
      description: "A Imperial é uma organização de eSports brasileira, fundada em 2021, que rapidamente se destacou no cenário competitivo de Counter-Strike. Desde sua criação, a equipe tem se concentrado em reunir talentos locais, buscando fortalecer sua presença nas principais competições. A Imperial conquistou títulos importantes em torneios regionais, como a Liga Brasileira de Counter-Strike e a Gamers Club, demonstrando um desempenho consistente e competitivo. A equipe também participou de torneios internacionais, como as qualificatórias para eventos da ESL e BLAST, onde buscou se afirmar no cenário global.",
    },

  ],
  ASIA: [
    {
      name: "TYLOO",
      logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2023/05/TYLOO.png?w=300",
      description: "A TYLOO é uma das organizações de eSports mais reconhecidas da China, especialmente no cenário de Counter-Strike. Fundada em 2015, a equipe rapidamente se destacou, conquistando diversos títulos importantes na região asiática. Entre suas conquistas, destaca-se o título da ESL One: New York 2016, onde se tornou a primeira equipe chinesa a vencer um torneio internacional de grande escala. Além disso, a TYLOO tem se destacado em competições como a WESG e a IEM Beijing. Com um elenco talentoso e uma forte presença em torneios regionais, a TYLOO continua a buscar novas conquistas e a elevar o status do CS na China, solidificando sua posição como uma das principais equipes da região.",
    },
    {
      name: "ATOX",
      logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2023/05/ATOX-1.png?w=300",
      description: "A Atox é uma equipe de eSports asiática que se destacou no cenário de Counter-Strike nos últimos anos. Conhecida por seu talento e dedicação, a Atox tem conquistado espaço em competições regionais e internacionais. A equipe participou de diversas ligas, destacando-se em torneios como o ESEA e a Asia Championships, onde demonstrou um desempenho sólido contra adversários competitivos.",
    },
    {
      name: "RARE ATOM",
      logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2023/03/rare-atom.png?w=300",
      description: "A Rare Atom é uma organização de eSports que se destacou no cenário de Counter-Strike, especialmente na região asiática. Desde sua formação, a equipe tem se concentrado em desenvolver talentos locais e competir em várias ligas e torneios. A Rare Atom conquistou títulos importantes em competições regionais, incluindo a ESEA e a APAC Championships, demonstrando um desempenho sólido e competitivo. Além de suas vitórias em torneios locais, a Rare Atom também participou de eventos internacionais, buscando expandir sua visibilidade e reconhecimento no cenário global.",
    },
    {
      name: "CATEVIL",
      logo: "https://eslpro.imgix.net/tour/wp-content/uploads/2024/03/CatEvil.png?w=300",
      description: "A Catevil é uma organização de eSports asiática que se destacou no cenário de Counter-Strike. Desde sua fundação, a equipe tem focado em competir em várias ligas e torneios, mostrando um desempenho sólido contra adversários desafiadores. A Catevil conquistou reconhecimento ao participar de competições regionais, incluindo a ESEA e eventos da APAC, onde demonstrou seu talento e habilidade.",
    },

  ],
};

function Teams() {
  const [selectedRegion, setSelectedRegion] = useState('EU'); // Região padrão "EU"

  return (
    <div className="teams-container">
      <ul className="title">
        <li className="top">Times Participantes</li>
      </ul>
      <div className="region-selector">
        {Object.keys(teamsByRegion).map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`region-button ${selectedRegion === region ? 'active' : ''}`}
          >
            {region}
          </button>
        ))}
      </div>
      <div className="teams-grid">
        {teamsByRegion[selectedRegion].map((team, index) => (
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
          margin-top: 20px;
        }

        .region-selector {
          margin: 20px 0;
        }

        .region-button {
          margin: 0 5px;
          padding: 8px 16px;
          border: none;
          background-color: rgb(16, 28, 102);
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .region-button.active, .region-button:hover {
          background-color: #FFA500;
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
