const Button = ({ onClickSubmit }) => {
  return (
    <button className="submit-btn" onClick={onClickSubmit}>
      <img src={process.env.PUBLIC_URL + "/assets/icon-arrow.svg"} alt="" />
    </button>
  );
};

export default Button;
