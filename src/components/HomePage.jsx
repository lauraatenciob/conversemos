import homeImage from "../assets/home-image.png";
import aboutImage from "../assets/about-image.png";
import howToPlayImage from "../assets/play-image.png";

function HomePage() {
  return (
    <div id="home" className="container">
      <div id="home-image">
        <img src={homeImage} alt="background-emojis"></img>
      </div>
      <h1 className="subtitle" id="welcome-text">
        Inicia las conversaciones más interesantes con tus amigos
      </h1>
      <button className="button main-button">Ir a categorias</button>
      <button className=" button outlined-button">Jugar</button>
      <div id="info-section">
        <div id="about-section" className="section-about">
          <div className="about-image">
            <img src={aboutImage} alt="emoji-wine"></img>
          </div>
          <div>
            <p className="subtitle about">¿En qué consiste?</p>
            <p className="text">
              Este juego es ideal para esas ocasiones en las que quieres romper
              el hielo e iniciar una buena conversación con tu amigos.
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
              Reúne a tus amigos, define la dinámica, elige mínimo una
              categoría, lee la pregunta en voz alta y comienza a tener la mejor
              conversación grupal.
            </p>
          </div>
        </div>  
      </div>
      <button className="button main-button">Empezar</button>
    </div>
  );
}

export default HomePage;
