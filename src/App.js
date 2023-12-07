import './App.css';
import Lodger from "./Lodger";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/"         element={<Navigate to="/Lodger" />}/>
          <Route path="/Lodger/*" element={<Lodger />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
