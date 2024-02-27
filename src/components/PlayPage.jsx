import {
  categories,
  generateQuestionBank,
  generateRandomQuestion,
} from "../data";
import { useSelector } from "react-redux";
import Nav from "./Nav";
import { useState } from "react";

function PlayPage() {
  const selectedCategories = useSelector((state) => state.categories.selected);
  const questions = generateQuestionBank(selectedCategories);

  const [question, setQuestion] = useState(generateRandomQuestion(questions));

  function handlePlayClick() {
    setQuestion(generateRandomQuestion(questions));
  }

  const currentCategory = categories.find(
    (category) => category.id === question.categoryId
  );

  return (
    <>
      <Nav colorWhite />
      <div
        id="play-page"
        style={{
          background: currentCategory.background,
        }}
      >
        <div className="icon-container">
          <currentCategory.icon className="large-icon" />
        </div>
        <p className="small-text">{currentCategory.name}</p>
        <h1 id="question" className="subtitle">
          {question.text}
        </h1>
        <button
          className="button main-button"
          id="play-button"
          style={{
            color: currentCategory.color,
          }}
          onClick={handlePlayClick}
        >
          Siguiente
        </button>
      </div>
    </>
  );
}

export default PlayPage;
