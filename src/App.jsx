import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Category from "./components/Category/Category.jsx";
import Login from "./components/Login/Login.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import MealDetail from "./components/Meal Detail/MealDetail.jsx";
import Onboarding from "./components/Onboarding/Onboarding.jsx";
import Onboarding2 from "./components/Onboarding/Onboarding2.jsx";
import Dashboard from "./pages/restaurant/Dashboard.jsx";
import AddMeal from "./pages/restaurant/AddMeal.jsx";


function App() {
  return (
    <>
      <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="Onboarding" element={<Onboarding />} />
          <Route path="Onboarding2" element={<Onboarding2 />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="category" element={<Category />} />
            <Route path="profile" element={<Profile />} />
            <Route path="mealDetail" element={<MealDetail />} />
            <Route path="restaurant/Dashboard" element={<Dashboard />} />
            <Route path="restaurant/addMeal" element={<AddMeal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
