import React from 'react';

const SchedulePage = () => {
  const schedule = {
    'Sexta-feira': [
      { time: '09:00 - 9:30', activity: 'Entrada Prioritária Experiência' },
      { time: '9:30 - 11:45', activity: 'Entrada Geral e Entrada para assentos' },
      { time: '11:45 - 12:00', activity: 'Cerimonia de Abertura' },
      { time: '12:00', activity: 'Quartas-de-Final #1 | BO3' },
      { time: '15:15', activity: 'Quartas-de-Final #2 | BO3' },
      { time: '20:00', activity: 'Fechamento dos Portões' },
    ],
    'Sábado': [
        { time: '09:00 - 9:30', activity: 'Entrada Prioritária Experiência' },
        { time: '9:30 - 11:45', activity: 'Entrada Geral e Entrada para assentos' },
        { time: '11:45 - 12:00', activity: 'Cerimonia de Abertura' },
        { time: '12:00', activity: 'Quartas-de-Final #1 | BO3' },
        { time: '15:15', activity: 'Quartas-de-Final #2 | BO3' },
        { time: '20:00', activity: 'Fechamento dos Portões' },
    ],
    'Domingo': [
      { time: '09:30 - 10:00', activity: 'Entrada Prioritária Experiência' },
      { time: '10:00 - 12:00', activity: 'Entrada Geral e Entrada para assentos' },
      { time: '12:00 - 13:45', activity: 'All-Star Hour' },
      { time: '13:45 - 14:00', activity: 'Cerimonia de Abertura' },
      { time: '14:00', activity: 'Grande Final' },
      { time: '20:00', activity: 'Fechamento dos Portões' },
    ],
  };

  return (
    <div className="schedule-page">
        <ul className="title">
          <li className="top">Programação</li>
        </ul>
      {Object.keys(schedule).map((day) => (
        <div key={day} className="schedule-day">
          <h2>{day}</h2>
          <ul className="schedule-list">
            {schedule[day].map((item, index) => (
              <li key={index} className="schedule-item">
                <span className="schedule-time">{item.time}</span> - <span className="schedule-activity">{item.activity}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <style jsx>{`
        .schedule-page {
          background-color: rgb(16, 28, 102);
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          margin: 0 auto;
        }

        .schedule-page ul.title {
          text-align: center;
          color: #FFA500;
          margin-top: 20px;
        }

        .schedule-day {
          margin: 20px 0;
        }

        h2 {
          color: #fff;
          text-align: center;
        }

        .schedule-list {
          list-style-type: none;
          padding: 0;
        }

        .schedule-item {
          background-color: #ffffff;
          margin: 10px 0;
          padding: 15px;
          border-radius: 5px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .schedule-item:hover {
          transform: scale(1.02);
        }

        .schedule-time {
          font-weight: bold;
          color: rgb(16, 28, 102);
        }

        .schedule-activity {
          color: #000;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default SchedulePage;
