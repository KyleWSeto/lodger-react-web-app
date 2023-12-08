import LodgerNavigation from "./LodgerNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Search from "./Search";
import SearchHotel from "./SearchHotel";
import Profile from "./Profile";
import Edit from "./Profile/Edit";
import store from "./store";
import { Provider } from "react-redux";

function Lodger() {
    return (
    <Provider store={store}>
      <div>
          <LodgerNavigation />
          <div>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Search" element={<Search />} />
            <Route path="/Search/Hotel" element={<SearchHotel />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="/Profile/Edit" element={<Edit />} />
          </Routes>
          </div>
      </div>
    </Provider>
    );
 }
 export default Lodger;