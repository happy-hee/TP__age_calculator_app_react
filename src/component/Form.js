const Form = ({
  setAgeInputYear,
  yearErrorText,
  setAgeInputMonth,
  monthErrorText,
  setAgeInputDay,
  dayErrorText,
}) => {
  return (
    <>
      {/* Year */}
      <div className="form form__year">
        <label className="age-label" htmlFor="year">
          Year
        </label>
        <input
          className="age-input"
          type="text"
          id="year"
          placeholder="YYYY"
          maxLength="4"
          onChange={(e) => setAgeInputYear(e.target.value)}
        />
        <div className="error-text">{yearErrorText}</div>
      </div>
      {/* Month */}
      <div className="form form__month">
        <label className="age-label" htmlFor="month">
          Month
        </label>
        <input
          className="age-input"
          type="text"
          id="month"
          placeholder="MM"
          maxLength="2"
          onChange={(e) => setAgeInputMonth(e.target.value)}
        />
        <div className="error-text">{monthErrorText}</div>
      </div>
      {/* Day */}
      <div className="form form__day">
        <label className="age-label" htmlFor="day">
          Day
        </label>
        <input
          className="age-input"
          type="text"
          id="day"
          placeholder="DD"
          maxLength="2"
          onChange={(e) => setAgeInputDay(e.target.value)}
        />
        <div className="error-text">{dayErrorText}</div>
      </div>
    </>
  );
};

export default Form;
