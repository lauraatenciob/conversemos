import { ReactComponent as ProfundasIcon } from "../assets/nesting-dolls.svg";

function CategoryPage() {
  return (
    <div>
      <h1 className="title">Categorías</h1>
      <div className="category-card">
        <div className="description">
          <input type="checkbox" className="category-checkbox"></input>
          <p className="subtitle">Profundas</p>
          <p className="small-text">Cosas que nunca habías pensado</p>
        </div>
        <ProfundasIcon className="category-icon"/>
      </div>
    </div>
  );
}

export default CategoryPage;
