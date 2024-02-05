import {Navigate, useLocation, useParams} from "react-router-dom";
import Layout from "../components/layout";
import {UserContext} from '../App';
import {useContext} from "react";

const IsAuthenticated = () => {
    const {user , setUser} = useContext(UserContext);

    if(user.login)
        return true;
    return false;
};
const ProtectedRoute = ({ element }) => {
    return IsAuthenticated() ? element : <Navigate to="/login" replace />;
};
const ProtectedRouteLogin = ({element}) => {
    return IsAuthenticated() ? <Navigate to={"/"} replace/> : element;
}
const ProtectedRouteCourse = ({element}) => {
    const { meetingId } = useParams();
    const location = useLocation();
    const { meetingPassword , lessonName , meeting_id} = location.state || {};

    return IsAuthenticated() ? meetingId === meeting_id ? element : <Navigate to="/courses" replace />: <Navigate to="/login" replace />;
}
const ProtectedRouteRecord = ({element}) => {
    const { recordName } = useParams();
    const location = useLocation();
    const {lessonName , record_name} = location.state || {};

    return IsAuthenticated() ? recordName === record_name ? element : <Navigate to="/records" replace />: <Navigate to="/login" replace />;
}
const ProtectedRouteExam = ({element}) => {
    const { examId } = useParams();
    const location = useLocation();
    const {examName, exam_id} = location.state || {};

    return IsAuthenticated() ? examId === exam_id ? element : <Navigate to="/exams" replace />: <Navigate to="/login" replace />;
}
const GetLayout = ({element})=>{
    return <Layout>{element}</Layout>;
}

export  {
    IsAuthenticated,
    ProtectedRoute,
    ProtectedRouteLogin,
    ProtectedRouteCourse,
    ProtectedRouteRecord,
    ProtectedRouteExam,
    GetLayout
}