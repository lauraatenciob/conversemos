import { ReactComponent as ProfundasIcon } from "../assets/nesting-dolls.svg";

function PlayPage() {
  return (
    <div id="play-page">
      <ProfundasIcon className="large-icon" height={188} width={188}/>
      <p className="small-text">Profundas</p>
      <h1 id="question" className="subtitle">
        ¿Cuando fué la ultima vez que te sacaste un gran peso de encima?
      </h1>
      <button className="button main-button">Siguiente</button>
    </div>
  );
}

export default PlayPage;
