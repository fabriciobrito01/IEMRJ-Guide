import React from 'react';

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
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.314455917666!2d-43.390500499999995!3d-22.9754614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb87a8ddf7d7%3A0x6394757ee9c58a05!2sFarmasi%20Arena!5e0!3m2!1spt-BR!2sbr!4v1727068851261!5m2!1spt-BR!2sbr"
            width="900px" height="500px" allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

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
          font-color: #FFEE51;
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
          color: #ff6600; /* Cor diferente para destacar */
        }

        #map {
          margin: auto; /* Centraliza o mapa na página */
        }

        @media (max-width: 600px) {
          #map iframe {
            width: 100%; /* Ajusta o tamanho do mapa em telas pequenas */
          }
        }
      `}</style>
    </div>
  );
}

export default Map;
