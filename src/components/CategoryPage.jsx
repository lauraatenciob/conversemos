import { categories } from "../data";
import { addCategory, removeCategory } from "../redux/slices/categories";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function CategoryPage() {
  const selectedCategories = useSelector((state) => state.categories.selected);
  const dispatch = useDispatch();

  function handleCategoryClick(id, isChecked) {
    dispatch(isChecked ? removeCategory(id) : addCategory(id));
  }

  return (
    <div className="container">
      <h1 className="title">Categorías</h1>

      {categories.map((category) => {
        const isChecked = selectedCategories.includes(category.id);

        return (
          <div
            className="category-card"
            key={category.id}
            id={category.id}
            style={{
              background: category.background,
            }}
            onClick={() => handleCategoryClick(category.id, isChecked)}
          >
            <div className="description">
              <input
                type="checkbox"
                className="category-checkbox"
                checked={isChecked}
              ></input>
              <p className="subtitle">{category.name}</p>
              <p className="small-text">{category.description}</p>
            </div>
            <category.icon className="category-icon" />
          </div>
        );
      })}
      <Link to="/play">
        <button className="button main-button" id="category-button">Empezar</button>
      </Link>
    </div>
  );
}

export default CategoryPage;
