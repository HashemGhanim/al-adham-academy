import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider , Navigate} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/homePage/homePage";
import FirstCompHomePage from "./components/homePage/firstAdInHomePage/firstCompHomePage";
import LoginPage from "./components/loginPage/loginPage";
import SignupPage from "./components/signupPage/signupPage";
import ForgotPassword from "./components/forgotPassword/forgotPassword";
import NotfoundPage from "./components/common_components/notfoundPage/notfoundPage";
import ProfilePage from "./components/profilePage/profilePage";
import {useEffect} from "react";
import Settings from "./components/settingsPage/settings";
import CoursePage from "./components/coursePage/coursePage";
import Courses from "./components/coursesPage/courses";
import Records from "./components/records/records";
import RecordPage from "./components/RecordPage/recordPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<RootLayout/>} >
                <Route index element={<HomePage/>}/>
                <Route path="profile" element={<ProfilePage/>}/>
                <Route path="settings" element={<Settings/>}/>
                <Route path="courses" element={<Courses/>}/>
                <Route path="courses/:meetingId" element={<CoursePage/>}/>
                <Route path="records" element={<Records/>}/>
                <Route path="records/:recordId" element={<RecordPage/>}/>
                <Route path="*" element={<NotfoundPage/>}/>
            </Route>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
        </>
    )
)
function App() {
    useEffect(()=>{
        document.getElementsByTagName("body")[0].style.overflow='visible';
    } , [])
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
