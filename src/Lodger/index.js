import LodgerNavigation from "./LodgerNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Search from "./Search";
import SearchHotel from "./SearchHotel";
import Profile from "./Profile";
import UserDetails from "./Profile/userProfile";
import Edit from "./Profile/Edit";
import CurrentUser from "./users/currentUser";
import store from "./store";
import { Provider } from "react-redux";

function Lodger() {
    return (
    <Provider store={store}>
      <CurrentUser>
      <div>
          <LodgerNavigation />
          <div>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Search" element={<Search />} />
            <Route path="/SearchHotel/:id" element={<SearchHotel />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Profile/:id" element={<UserDetails />} />
            <Route path="/Profile/Edit" element={<Edit />} />
          </Routes>
          </div>
      </div>
      </CurrentUser>
    </Provider>
    );
 }
 export default Lodger;