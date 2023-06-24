import { useState } from "react";
import Button from "./Button";
import Form from "./Form";
import Result from "./Result";

const Content = () => {
  const [ageInputYear, setAgeInputYear] = useState("");
  const [ageInputMonth, setAgeInputMonth] = useState("");
  const [ageInputDay, setAgeInputDay] = useState("");
  const [yearErrorText, setYearErrorText] = useState("");
  const [monthErrorText, setMonthErrorText] = useState("");
  const [dayErrorText, setDayErrorText] = useState("");
  const [resultYear, setResultYear] = useState("- -");
  const [resultMonth, setResultMonth] = useState("- -");
  const [resultDay, setResultDay] = useState("- -");

  const onClickSubmit = () => {
    // Year 유효성 검사
    const crrYear = new Date().getFullYear();
    const formYear = document.querySelector(".form__year");
    if (!ageInputYear) {
      formYear.classList.add("form--error");
      setYearErrorText("연도를 입력해 주세요");
    } else if (ageInputYear > crrYear) {
      // year이 미래일 경우
      formYear.classList.add("form--error");
      setYearErrorText("이런! 너무 미래예요");
    } else if (isNaN(Number(ageInputYear))) {
      formYear.classList.add("form--error");
      setYearErrorText("유효한 연도를 입력해 주세요");
    } else {
      formYear.classList.remove("form--error");
      setYearErrorText("");
    }

    // Month 유효성 검사
    const formMonth = document.querySelector(".form__month");
    if (!ageInputMonth) {
      formMonth.classList.add("form--error");
      setMonthErrorText("월을 입력해 주세요");
    } else if (
      1 > ageInputMonth ||
      ageInputMonth > 12 ||
      isNaN(Number(ageInputMonth))
    ) {
      formMonth.classList.add("form--error");
      setMonthErrorText("유효한 월을 입력해 주세요");
    } else {
      formMonth.classList.remove("form--error");
      setMonthErrorText("");
    }

    // Day 유효성 검사
    const monthLastDay = new Date(ageInputYear, ageInputMonth, 0).getDate(); // 월의 마지막 날짜
    const formDay = document.querySelector(".form__day");
    if (!ageInputDay) {
      formDay.classList.add("form--error");
      setDayErrorText("일을 입력해 주세요.");
    } else if (
      1 > ageInputDay ||
      ageInputDay > 31 ||
      monthLastDay < ageInputDay ||
      isNaN(Number(ageInputDay))
    ) {
      formDay.classList.add("form--error");
      setDayErrorText("유효한 일을 입력해 주세요.");
    } else {
      formDay.classList.remove("form--error");
      setDayErrorText("");
    }

    // 나이 날짜 (month의 경우 0부터 11까지의 숫자로 표현하기 때문에 - 1을 해줌)
    const ageDate = new Date(ageInputYear, ageInputMonth - 1, ageInputDay);
    // 현재 날짜
    const crrDate = new Date();
    // 현재 날짜와 나이 날짜의 시간 차이 계산
    const timeDiff = Math.abs(crrDate.getTime() - ageDate.getTime());
    // 일 수 차이 기반 새로운 Date 생성
    const diffDate = new Date(timeDiff);
    const ageYear = diffDate.getFullYear() - 1970;
    const ageMonth = diffDate.getMonth();
    const ageDay = diffDate.getDate() - 1;

    // 에러 갯수
    const errorCount = document.querySelectorAll(".form--error");

    // 나이 출력

    // NaN, 에러 예외처리
    if (
      !isNaN(ageYear) &&
      !isNaN(ageMonth) &&
      !isNaN(ageDay) &&
      errorCount.length === 0
    ) {
      setResultYear(ageYear);
      setResultMonth(ageMonth);
      setResultDay(ageDay);
    }
  };

  return (
    <div className="content">
      <div className="form-wrapper">
        <Form
          setAgeInputYear={setAgeInputYear}
          yearErrorText={yearErrorText}
          setAgeInputMonth={setAgeInputMonth}
          monthErrorText={monthErrorText}
          setAgeInputDay={setAgeInputDay}
          dayErrorText={dayErrorText}
        />
        <Button onClickSubmit={onClickSubmit} />
      </div>
      <Result
        resultYear={resultYear}
        resultMonth={resultMonth}
        resultDay={resultDay}
      />
    </div>
  );
};

export default Content;
