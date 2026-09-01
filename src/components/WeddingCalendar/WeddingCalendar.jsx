import "./WeddingCalendar.css";

const WeddingCalendar = ({ year = 2026, weddingDay = 24 }) => {
  // Octubre 2026 comienza en jueves.
  // Domingo = 0 ... Sábado = 6
  const firstDay = new Date(year, 9, 1).getDay();
  const daysInMonth = new Date(year, 10, 0).getDate();

  const days = [];

  // Espacios antes del primer día
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Días del mes
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return (
    <section className="wedding-calendar">
      <div className="calendar-inner">
        <div className="month-container">
          <h2>OCTUBRE 2026</h2>
        </div>

        <div className="weekdays">
          <span>D</span>
          <span>L</span>
          <span>M</span>
          <span>M</span>
          <span>J</span>
          <span>V</span>
          <span>S</span>
        </div>

        <div className="calendar-grid">
          {days.map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${day === weddingDay ? "wedding-day" : ""}`}
            >
              {day && (
                <>
                  {day === weddingDay && (
                    <span className="day-heart">
                      <svg
                        className="heart"
                        viewBox="0 0 100 100"
                        fill="red"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M 10,30
A 20,20 0,0,1 50,30
A 20,20 0,0,1 90,30
Q 90,60 50,90
Q 10,60 10,30 z"
                        ></path>
                      </svg>
                    </span>
                  )}

                  <span className="day-wedding">{day}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingCalendar;
