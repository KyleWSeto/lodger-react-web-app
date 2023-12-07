import LodgerNavigation from "./LodgerNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Search from "./Search";
import SearchHotel from "./SearchHotel";
import Profile from "./Profile";
import Edit from "./Profile/Edit";

function Lodger() {
    return (
    <div>
        <LodgerNavigation />
        <div>
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Search" element={<Search />} />
          <Route path="/Search/:id" element={<SearchHotel />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="/Profile/Edit" element={<Edit />} />
        </Routes>
        </div>
    </div>
    );
 }
 export default Lodger;