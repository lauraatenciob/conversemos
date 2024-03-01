import { categories } from "../data";
import { addCategory, removeCategory } from "../redux/slices/categories";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function CategoryPage() {
  const selectedCategories = useSelector((state) => state.categories.selected);
  const dispatch = useDispatch();

  function handleCategoryClick(id, isChecked) {
    dispatch(isChecked ? removeCategory(id) : addCategory(id));
  }

  return (
    <>
      <Nav />
      <div className="container">
        <h1 className="title">Categorías</h1>
        <div id="cards-container">
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
        </div>

        <Link to="/play">
          <button
            disabled={selectedCategories.length === 0}
            className="button main-button"
            id="category-button"
          >
            Empezar
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default CategoryPage;
