import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="quick-links">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#about">Sobre o Evento</a></li>
            <li><a href="#schedule">Programação</a></li>
            <li><a href="https://www.mundo-ticket.com/pt/evento/iem-rio-2024" target="_blank" rel="noopener noreferrer">Comprar Ingressos</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="location">
          <h4>Localização</h4>
          <p>Farmasi Arena, Rio de Janeiro, Brasil</p>
          <a href="https://goo.gl/maps/link_para_o_local" target="_blank" rel="noopener noreferrer">Ver no Google Maps</a>
        </div>

        <div className="social-media">
          <h4>Redes Sociais</h4>
          <ul>
            <li><a href="https://facebook.com/iem" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/iem" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com/iem" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>

        <div className="footer-note">
          <p>© 2024 Intel Extreme Masters. Todos os direitos reservados.</p>
          <p><a href="#privacy-policy">Política de Privacidade</a> | <a href="#terms">Termos de Uso</a></p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: rgb(16, 28, 102);
          color: #fff;
          padding: 20px;
          text-align: center;
        }

        .footer-content {
          max-width: 1000px;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer h4 {
          margin-bottom: 10px;
          font-size: 18px;
          color: #FFA500;
        }

        .footer p, .footer a {
          color: #fff;
          font-size: 14px;
          line-height: 1.5;
          margin: 5px 0;
          text-decoration: none;
        }

        .footer a:hover {
          color: #ff6600;
        }

        .footer ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer ul li {
          margin: 5px 0;
        }

        .footer-note {
          text-align: center;
          margin-top: 20px;
          font-size: 12px;
        }

        .footer-note a {
          color: #fff;
          text-decoration: underline;
        }

        .footer-note a:hover {
          color: #ff6600;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
