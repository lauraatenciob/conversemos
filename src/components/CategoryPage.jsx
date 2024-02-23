import { categories } from "../data";

function CategoryPage() {
  return (
    <div className="container">
      <h1 className="title">Categorías</h1>

      {categories.map((category) => (
        <div className="category-card" key={category.id} id={category.id} style={{
            background: category.background
        }}>
          <div className="description">
            <input type="checkbox" className="category-checkbox"></input>
            <p className="subtitle">{category.name}</p>
            <p className="small-text">{category.description}</p>
          </div>
          <category.icon className="category-icon" />
        </div>
      ))}

      <button className="button main-button" id="category-button">Empezar</button>
    </div>
  );
}

export default CategoryPage;
