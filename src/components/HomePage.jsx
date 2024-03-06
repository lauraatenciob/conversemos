import homeImage from "../assets/home-image.png";
import aboutImage from "../assets/about-image.png";
import howToPlayImage from "../assets/play-image.png";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <Nav />

      <div id="home" className="container">
        <div id="home-image">
          <img src={homeImage} alt="background-emojis"></img>
        </div>

        <h1 className="subtitle" id="welcome-text">
          Inicia las conversaciones más interesantes con tus amigos
        </h1>

        <div id="buttons-container">
          <Link to="/categories">
            <button className="button main-button">Ir a categorias</button>
          </Link>
          <Link to="/play">
            <button className=" button outlined-button">Jugar</button>
          </Link>
        </div>

        <div id="info-section">
          <div id="about-section" className="section-about">
            <div className="about-image">
              <img src={aboutImage} alt="emoji-wine"></img>
            </div>
            <div>
              <p className="subtitle about">¿En qué consiste?</p>
              <p className="text">
                En este juego encontrarás una amplia variedad de preguntas
                categorizadas para iniciar conversaciones interesantes con tus
                amigos. Desde temas casuales y divertidos hasta cuestiones
                profundas y trascendentales ¡La calidad de una buena
                conversación está garantizada!
              </p>
            </div>
          </div>
          <div id="how-to-play-section" className="section-about">
            <div className="about-image">
              <img src={howToPlayImage} alt="cloud-emoji"></img>
            </div>
            <div>
              <p className="subtitle about">¿Cómo jugar?</p>
              <p className="text">
                Simplemente elige por lo menos una categoría que te llame la
                atención, ¡y deja que las preguntas inicien la diversión! Toma
                turnos respondiendo y profundizando en las respuestas para
                conocer mejor a tus amigos y pasar momentos inolvidables juntos.
              </p>
            </div>
          </div>
        </div>
        <Link to="/play" className="to-play">
          <button className="button main-button">Empezar</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
