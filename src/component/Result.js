const Result = ({ resultYear, resultMonth, resultDay }) => {
  return (
    <div className="result">
      <div className="result__year">
        <span className="result__date result__date--year">{resultYear}</span>
        years
      </div>
      <div className="result__month">
        <span className="result__date result__date--month">{resultMonth}</span>
        months
      </div>
      <div className="result__days">
        <span className="result__date result__date--day">{resultDay}</span>days
      </div>
    </div>
  );
};

export default Result;
