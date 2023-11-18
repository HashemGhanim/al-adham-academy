import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider , Navigate} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/homePage/homePage";
import FirstCompHomePage from "./components/homePage/firstAdInHomePage/firstCompHomePage";
import LoginPage from "./components/loginPage/loginPage";
import SignupPage from "./components/signupPage/signupPage";
import ForgotPassword from "./components/forgotPassword/forgotPassword";
import NotfoundPage from "./components/common_components/notfoundPage/notfoundPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>} >
            <Route index element={<HomePage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="signup" element={<SignupPage/>}/>
            <Route path="forgot-password" element={<ForgotPassword/>}/>
            <Route path="*" element={<NotfoundPage/>}/>
        </Route>
    )
)
function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
