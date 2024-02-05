import './App.css';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    Navigate,
    useParams, useLocation
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/homePage/homePage";
import LoginPage from "./components/loginPage/loginPage";
import SignupPage from "./components/signupPage/signupPage";
import ForgotPassword from "./components/forgotPassword/forgotPassword";
import NotfoundPage from "./components/common_components/notfoundPage/notfoundPage";
import ProfilePage from "./components/profilePage/profilePage";
import {createContext, useEffect, useState} from "react";
import Settings from "./components/settingsPage/settings";
import CoursePage from "./components/coursePage/coursePage";
import Courses from "./components/coursesPage/courses";
import Records from "./components/records/records";
import RecordPage from "./components/RecordPage/recordPage";
import Exams from "./components/exams/exams";
import Exam from "./components/exams/exam/exam";
import {ProtectedRouteLogin, ProtectedRoute, ProtectedRouteRecord, ProtectedRouteExam, ProtectedRouteCourse, GetLayout} from '../src/ProtectedRoutes/ProtectedFile';
import Students from "./components/students/students";



export const UserContext = createContext(null);


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<GetLayout element={<HomePage/>}/>}/>
            <Route path="settings" element={<ProtectedRoute element={<GetLayout element={<Settings/>}/>}/>}/>
            <Route path="profile" element={<ProtectedRoute element={<GetLayout element={<ProfilePage/>}/>}/>}/>
            <Route path="courses" element={<ProtectedRoute element={<GetLayout element={<Courses/>}/>}/>}/>
            <Route path="courses/:meetingId" element={<ProtectedRouteCourse element={<GetLayout element={<CoursePage/>}/>}/>}/>
            <Route path="exams" element={<ProtectedRoute element={<GetLayout element={<Exams/>}/>}/>}/>
            <Route path="exams/:examId" element={<ProtectedRouteExam element={<GetLayout element={<Exam/>}/>}/>}/>
            <Route path="records" element={<ProtectedRoute element={<GetLayout element={<Records/>}/>}/>}/>
            <Route path="records/:recordName" element={<ProtectedRouteRecord element={<GetLayout element={<RecordPage/>}/>}/>}/>
            <Route path="login" element={<ProtectedRouteLogin element={<LoginPage/>} />}/>
            <Route path="signup" element={<ProtectedRouteLogin element={<SignupPage/>} />}/>
            <Route path="forgot-password" element={<ProtectedRouteLogin element={<ForgotPassword/>}/>}/>
            <Route path="*" element={<NotfoundPage/>}/>
            <Route path="students" element={<GetLayout element={<Students/>}/>}/>
        </>
    )
)
function App() {
    const [user, setUser] = useState({
        name:"Adham Khalilia",
        role: 1,
        login:true
    });


    useEffect(()=>{
        document.getElementsByTagName("body")[0].style.overflow='visible';
    } , []);


  return (
      <UserContext.Provider value={{user, setUser}}>
            <RouterProvider router={router}/>
      </UserContext.Provider>
  );

}

export default App;
