import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieSearch from "./movies/pages/MovieSearch";
import "./App.css";

function App() {
  const routes = (
    <>
      <Route path="/" element={<MovieSearch />} />
    </>
  );
  return (
    <div className="App">
      <Router>
        <Routes>{routes}</Routes>
      </Router>
    </div>
  );
}

export default App;
