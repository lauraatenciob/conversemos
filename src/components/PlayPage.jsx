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
  const [questions, setQuestions] = useState(
    generateQuestionBank(selectedCategories)
  );

  const [question, setQuestion] = useState(
    generateRandomQuestion(questions)[0]
  );

  function handlePlayClick() {
    const questionsBank =
      questions.length === 0
        ? generateQuestionBank(selectedCategories)
        : questions;

    const [newQuestion, newQuestionsBank] =
      generateRandomQuestion(questionsBank);
    setQuestion(newQuestion);
    setQuestions(newQuestionsBank);
  }

  const currentCategory = categories.find(
    (category) => category.id === question.idCategory
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
        <div id="question-container">
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
      </div>
    </>
  );
}

export default PlayPage;
