import { Outlet } from "react-router-dom";
import FeatureBar from "./FeatureBar/FeatureBar";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user)

  const fecthUser = async () => {
    if(userData) return;
    try {
      const user = await axios.get(
        BASE_URL + "/profile/view",
        {},
        {
          withCredentials: true,
        },
      );

      dispatch(addUser(user));
    } catch (error) {
      if(error.response?.status == 401){
        return navigate("/login");
      }
      console.log("ERROR : ", error.response);
    }
  };

  useEffect(()=>{
    fecthUser()
  },[])

  return (
    <div className="px-10 w-full h-screen">
      <Outlet />

      <FeatureBar />
    </div>
  );
}

export default Layout;
