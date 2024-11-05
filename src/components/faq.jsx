import React, { useEffect } from 'react';

function FAQ() {
  // useEffect para rolar a página para o topo ao montar o componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="faq-container">
      <h1>Perguntas Frequentes - IEMRJ 2024</h1>
      <div className="faq-section">
        <div className="faq-item">
          <h2>1. O que é o IEMRJ 2024?</h2>
          <p>O Intel Extreme Masters Rio 2024 é um campeonato global de eSports que reúne os melhores times do mundo em uma competição intensa. Este evento será realizado no Rio de Janeiro, Brasil, na famosa Farmasi Arena.</p>
        </div>

        <div className="faq-item">
          <h2>2. Quando e onde será o evento?</h2>
          <p>O IEMRJ 2024 ocorrerá em 10-12 de abril de 2024 na Farmasi Arena, localizada no Rio de Janeiro, Brasil.</p>
        </div>

        <div className="faq-item">
          <h2>3. Como posso comprar ingressos?</h2>
          <p>Os ingressos estão disponíveis online. Você pode comprá-los acessando <a href="https://www.mundo-ticket.com/pt/evento/iem-rio-2024" target="_blank" rel="noopener noreferrer">este link</a>.</p>
        </div>

        <div className="faq-item">
          <h2>4. Há alguma restrição de idade para o evento?</h2>
          <p>Sim, é necessário ter pelo menos 16 anos para participar do evento. Menores de 18 anos devem estar acompanhados por um responsável legal.</p>
        </div>

        <div className="faq-item">
          <h2>5. Que medidas de segurança estarão em vigor?</h2>
          <p>Haverá uma equipe de segurança dedicada, além de monitoramento constante para garantir a segurança dos participantes. Todos os participantes passarão por controle de segurança na entrada.</p>
        </div>

        <div className="faq-item">
          <h2>6. Posso levar comida e bebida?</h2>
          <p>Não é permitido levar comida e bebida. Haverá diversos stands de alimentação disponíveis no local.</p>
        </div>

        <div className="faq-item">
          <h2>7. Como posso chegar ao local do evento?</h2>
          <p>O evento será realizado na Farmasi Arena, que é acessível por transporte público e carros de aplicativos. Mais informações sobre transporte estarão disponíveis no site oficial.</p>
        </div>

        <div className="faq-item">
          <h2>8. Como posso obter mais informações?</h2>
          <p>Para mais informações, fique atento ao site oficial e às redes sociais do IEMRJ, onde atualizações serão publicadas regularmente.</p>
        </div>
      </div>

      <style jsx>{`
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f5f5f5;
          padding-top: 50px;
        }

        h1 {
          text-align: center;
          color: #102866;
        }

        .faq-section {
          margin-top: 20px;
        }

        .faq-item {
          margin-bottom: 15px;
          color: #333;
        }

        h2 {
          font-size: 18px;
          color: #FFA500;
          margin-bottom: 5px;
        }

        p {
          font-size: 16px;
          line-height: 1.6;
        }

        a {
          color: #FFA500;
          text-decoration: none;
        }

        a:hover {
          color: #ff6600;
        }

        .footer h4 {
          margin-top: -5px;
        }
      `}</style>
    </div>
  );
}

export default FAQ;
