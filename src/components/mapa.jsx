import React from 'react';
import Evento from '../assets/iem_rio_2024_map-with-monster.avif'

function Map() {
  return (
    <div className="map-container">
      <div className="location-info">
        <ul className="title">
          <li className="top">Local do Evento</li>
        </ul>
        <ul className="address">
          <li className="bottom">
            <span className="txt">Farmasi Arena</span> - Av. Embaixador Abelardo Bueno, 3401 - Barra da Tijuca, Rio de Janeiro - RJ, 22775-040
          </li>
        </ul>
      </div>

      <section>
        <div id="map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.314455917666!2d-43.390500499999995!3d-22.9754614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb87a8ddf7d7%3A0x6394757ee9c58a05!2sFarmasi%20Arena!5e0!3m2!1spt-BR!2sbr!4v1727068851261!5m2!1spt-BR!2sbr"
            width="900px" height="500px" allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <div className="mapa-evento">
        <ul className="title-evento">
          <li className="nome-evento">Mapa do Evento</li>
          <li className="txt-evento">Confira o mapa do Intel® Extreme Masters Rio e planeje sua experiência ao máximo! Explore as atividades disponíveis, localize as áreas importantes e aproveite cada momento do evento sem perder nada!</li>
        </ul>
        
        <div>
          <img src={Evento} alt="Mapa do Evento" />
        </div>
      </div>

      <style jsx>{`
        .map-container {
          text-align: center;
          padding: 20px;
          background-color: rgb(16, 28, 102);
          color: #fff;
        }
        .location-info {
          margin-bottom: 20px;
        }

        .title {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .title .top {
          font-size: 24px;
          font-weight: bold;
          color: #FFA500;
          margin-top: 60px;
        }

        .address {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 16px;
        }

        .address .bottom {
          margin-top: 10px;
        }

        .txt-logo {
          color: #ff6600;
        }

        .txt {
          font-weight: bold;
          font-size: 18px;
        }

        .mapa-evento {
          margin: auto;
          margin-top: 20px;
          margin-bottom: 20px;
          text-align: center;
        }

        .nome-evento {
          font-size: 24px;
          font-weight: bold;
          color: #FFA500;
          margin-bottom: 10px;
        }

        .title-evento {
          list-style: none;
          padding: 0;
          margin: 0;
          margin-bottom: 20px;
        }

        .txt-evento {
          font-size: 16px;
          margin-bottom: 10px;
        }

        .mapa-evento img {
          width: 900px;
        }

        @media (max-width: 600px) {
          .mapa-evento img {
            width: 100%;
          }
        }

        #map-frame {
          margin: auto;
        }

        @media (max-width: 600px) {
          #map-frame iframe {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Map;
