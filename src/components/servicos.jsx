import React from 'react';

function Services() {
  return (
    <div className="services-container">
      <h1 id="services-title">Hospedagem e Dicas Locais</h1>

      {/* Seção de Hospedagem */}
      <section className="section hospedagem">
        <h2 id="hospedagem-title">Hospedagem Próxima</h2>
        <p id="hospedagem-description">Confira algumas opções de hospedagem próximas à Farmasi Arena:</p>
        <ul>
          <li>
            <strong>Hotel Barra Palace:</strong> R$350/noite - Conforto e conveniência a 1 km do evento. 
            <p>Serviços de Táxi: Central Táxi Barra (24h, próximo à arena).</p>
          </li>
          <li>
            <strong>Grand Hyatt Rio de Janeiro:</strong> R$800/noite - Luxo e vista para a praia.
            <p>Serviços de Táxi: Táxi Oeste (dá suporte na Barra e redondezas).</p>
          </li>
          <li>
            <strong>Windsor Marapendi Hotel:</strong> R$600/noite - Confortável e acessível, próximo ao transporte.
            <p>Serviços de Táxi: CooperTáxi Barra.</p>
          </li>
        </ul>
      </section>

      {/* Seção Como Chegar */}
      <section className="section como-chegar">
        <h2 id="como-chegar-title">Como Chegar</h2>
        <p id="como-chegar-description">A Farmasi Arena está localizada na Barra da Tijuca e pode ser acessada de várias formas:</p>
        <ul>
          <li><strong>Transporte Público:</strong> Pegue a linha de ônibus 332 direto para a Barra da Tijuca ou utilize as linhas BRT até a estação Terminal Alvorada. De lá, há opções de ônibus locais para a arena.</li>
          <li><strong>Carro:</strong> Endereço: Av. Embaixador Abelardo Bueno, 3401, Barra da Tijuca, RJ.</li>
          <li><strong>Taxi ou Apps de Transporte:</strong> Uber e 99 são opções recomendadas com paradas na entrada da arena.</li>
        </ul>
      </section>

      {/* Seção Restaurantes Próximos */}
      <section className="section restaurantes">
        <h2 id="restaurantes-title">Restaurantes Próximos</h2>
        <p id="restaurantes-description">Confira o que você pode encontrar nos restaurantes próximos à arena:</p>
        <ul>
          <li>
            <strong>Madero Steak House:</strong>
            <ul>
              <li>Pratos:
                <ul>
                  <li>Hambúrguer Clássico - R$40,00</li>
                  <li>Picanha Grelhada - R$85,00</li>
                  <li>Salada Caesar - R$35,00</li>
                </ul>
              </li>
              <li>Bebidas:
                <ul>
                  <li>Cerveja Artesanal - R$15,00</li>
                  <li>Suco Natural - R$12,00</li>
                  <li>Refrigerante - R$8,00</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Outback Steakhouse:</strong>
            <ul>
              <li>Pratos:
                <ul>
                  <li>Ribs on the Barbie - R$90,00</li>
                  <li>Aussie Cheese Fries - R$50,00</li>
                  <li>Bloomin' Onion - R$45,00</li>
                </ul>
              </li>
              <li>Bebidas:
                <ul>
                  <li>Chopp Outback - R$18,00</li>
                  <li>Limonada com Morango - R$12,00</li>
                  <li>Água com Gás - R$6,00</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Bibi Sucos:</strong>
            <ul>
              <li>Pratos:
                <ul>
                  <li>Açaí Bowl - R$25,00</li>
                  <li>Tapioca de Queijo - R$20,00</li>
                  <li>Wrap de Frango - R$28,00</li>
                </ul>
              </li>
              <li>Bebidas:
                <ul>
                  <li>Suco de Laranja - R$10,00</li>
                  <li>Vitamina de Morango - R$15,00</li>
                  <li>Água de Coco - R$7,00</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Seção Serviços Próximos */}
      <section className="section servicos">
        <h2 id="servicos-title">Serviços Próximos</h2>
        <p id="servicos-description">Para qualquer necessidade adicional, veja alguns serviços próximos à Farmasi Arena:</p>
        <ul>
          <li><strong>Shopping Metropolitano Barra:</strong> Com farmácias, caixas eletrônicos e praça de alimentação completa.</li>
          <li><strong>Farmácia Drogasil:</strong> Ideal para compras de emergência e medicamentos, localizada a 5 minutos da arena.</li>
          <li><strong>Posto de Gasolina Ipiranga:</strong> Abastecimento e conveniência para quem vai de carro.</li>
        </ul>
      </section>

      <style jsx>{`
        .services-container {
          padding: 20px;
          background-color: #f4f4f9;
          color: #333;
          max-width: 800px;
          margin: auto;
        }

        .section {
          margin-bottom: 20px;
        }

        #services-title {
          color: #103c66;
          font-size: 32px;
          margin-bottom: 20px;
          text-align: center;
        }

        #hospedagem-title,
        #como-chegar-title,
        #restaurantes-title,
        #servicos-title {
          color: #103c66;
          font-size: 24px;
          margin-bottom: 10px;
        }

        #hospedagem-description,
        #como-chegar-description,
        #restaurantes-description,
        #servicos-description {
          font-size: 16px;
          margin-bottom: 10px;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          font-size: 16px;
          margin-bottom: 8px;
        }

        strong {
          color: #ff6600;
        }
      `}</style>
    </div>
  );
}

export default Services;
