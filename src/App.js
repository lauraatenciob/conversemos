import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import PlayPage from "./components/PlayPage";
import Nav from "./components/Nav"


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/categories' element={ <CategoryPage/> } />
        <Route path='/play' element={ <PlayPage /> } />
      </Routes>
    </div>
  );
}

export default App;
