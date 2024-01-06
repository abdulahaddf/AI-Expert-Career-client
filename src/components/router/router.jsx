import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../error/Error";
import Home from "../pages/Home/Home";
import AiConsultant from "../pages/AIConsultant/AiConsultant";
import Courses from "../pages/Courses/Courses";
import Blog from "../pages/Blog/Blog";
import Login from "../common/Authentication/Login";
import Signup from "../common/Authentication/Signup";
import IndividualBlog from "../pages/Blog/IndividualBlog/IndividualBlog";
import IndividualCourse from "../pages/Courses/IndividualCourse/IndividualCourse";
import UserProfile from "../pages/UserProfile/UserProfile";
import DashboardLayout from "../layout/DahboardLayout/DashboardLayout";
import MyCourse from "../../Dashboard/User/Course/MyCourse";
import CourseVideo from "../pages/CourseVideo/CourseVideo";
import AiConsultanProfile from "../pages/AiConsultantProfile/AiConsultanProfile";
import ResetForm from "../common/Authentication/ResetForm";
import AddBlog from "../../Dashboard/Admin/Blog/AddBlog";
import EditBlog from "../../Dashboard/Admin/Blog/EditBlog";
import ManageBlog from "../../Dashboard/Admin/Blog/ManageBlog";
import ManageUser from "../../Dashboard/Admin/ManageUser/ManageUser";
import AddCourse from "../../Dashboard/Admin/Course/AddCourse";
import ManageCourses from "../../Dashboard/Admin/Course/ManageCourses";
import EditCourse from "../../Dashboard/Admin/Course/EditCourse";
import Enroll from "../pages/Courses/IndividualCourse/Enroll";
import AddPromo from "../../Dashboard/Admin/PromoCodes/AddPromo";
import FreeEnroll from "../pages/Courses/IndividualCourse/FreeEnroll";
import CompletePurchaseCourse from "../pages/Courses/IndividualCourse/CompletePurchaseCourse";
import ControlEnrollments from "../../Dashboard/Admin/Course/ControlEnrollments";
import AllCourses from "../pages/Courses/AllCourses/AllCourses";
import AllCategoryCourses from "../pages/Courses/AllCourses/AllCategoryCourses";
import AllMainCategoryCourses from "../pages/Courses/AllCourses/AllMainCategoryCourses";
import AddCourseBanner from "../../Dashboard/Admin/CourseBanner/AddCourseBanner";
import ConsultantProfile from "../../Dashboard/Consultant/ConsultantProfile";
import EditConsultantProfile from "../../Dashboard/Consultant/EditConsultantProfile";
import ControlAppointments from "../../Dashboard/Admin/Appointments/ControlAppointments";
import Appointments from "../../Dashboard/User/Appointments/Appointments";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import TermsAndConditions from "../common/Terms&Conditions/TermsAndConditions";
import NewsletterMail from "../../Dashboard/Admin/NewsletterMail/NewsletterMail";
import AddReviews from "../../Dashboard/Admin/Reviews/AddReviews";
import ShowReviews from "../../Dashboard/Admin/Reviews/ShowReviews";
import LiveCourse from "../../Dashboard/User/Course/LiveCourse";
import SendNotifications from "../../Dashboard/Admin/Notification/SendNotifications";
import Notifications from "../../Dashboard/User/Notifications/Notifications";
import Privacy from "../common/Privacy/privacy";
import Refund from "../common/Terms&Conditions/Refund/Refund";
import AddPhoneNumber from "../pages/UserProfile/AddPhoneNumber";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/career",
      //   element: <AiConsultant />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forget",
        element: <ResetForm />,
      },
      // {
      //   path: "/add-phone-number",
      //   element: <AddPhoneNumber />,
      // },
      {
        path: "/terms&conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy-policy",
        element: <Privacy />,
      },
      {
        path: "/refund-policy",
        element: <Refund />,
      },
     
      {
        path: "/home",
        element: <Home />,
      },
     
      {
        path: "/ai-consultant",
        element: <AiConsultant />,
      },
      
      {
        path: "/courses",
        element: <AllCourses></AllCourses>,
      },
      {
        path: "/all-courses/:category",
        element: <AllCategoryCourses />,
      },
      {
        path: "/allCourses/:mainCategory",
        element: <AllMainCategoryCourses />,
      },
      
      {
        path: "/course/:name",
        element: <IndividualCourse></IndividualCourse>,
      },
      {
        path: "/enroll",
        element: <Enroll />,
      },
      {
        path: "/free-course",
        element: <FreeEnroll />,
      },
      {
        path: "/complete-enroll",
        element: <CompletePurchaseCourse />,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },

      {
        path: "/blog/:name",
        element: <IndividualBlog></IndividualBlog>,
      },
      {
        path: "/individual-blog/:id",
        element: <IndividualBlog></IndividualBlog>,
      },
      // {
      //   path: "/profile",
      //   element: <UserProfile />,
      // },

      {
        path: "/consultant/:name",
        element: <AiConsultanProfile />,
      },
      {
        path: "/my-course/:id",
        element: <CourseVideo />,
      },
      {
        path: "/live-course",
        element: <LiveCourse />,
      },
     
     
      
    ],
  },
  
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      
      
      {
        path: "/dashboard/my-courses",
        element: (
          <PrivateRoute>
            <MyCourse />
          </PrivateRoute>
        ),
      },
     
      {
        path: "/dashboard/my-appointments",
        element: (
          <PrivateRoute>
            {" "}
            <Appointments />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/notifications",
        element: (
          <PrivateRoute>
            {" "}
            <Notifications />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-profile",
        element: (
          <PrivateRoute>
            {" "}
            <UserProfile />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/dashboard/purchase-history",
      //   element: <PurchaseHistory />,
      // },
      
      // {
      //   path: "/dashboard/profile",
      //   element: (
      //     <PrivateRoute>
      //       <UserProfile />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/dashboard/purchase_history",
      //   element: <PurchaseHistory />,
      // },
      
      
      {
        path: "/dashboard/add-blog",
        element: (
          <AdminRoute>
            <AddBlog />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-blog",
        element: (
          <AdminRoute>
            {" "}
            <ManageBlog />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/edit-blog/:id",
        element: (
          <AdminRoute>
            <EditBlog />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
          <AdminRoute>
            <ManageUser />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-course",
        element: (
          <AdminRoute>
            <AddCourse />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-courses",
        element: (
          <AdminRoute>
            <ManageCourses />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/edit-course/:id",
        element: (
          <AdminRoute>
            <EditCourse />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/promo",
        element: (
          <AdminRoute>
            <AddPromo />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/control-enrollments",
        element: (
          <AdminRoute>
            <ControlEnrollments />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/course-banner",
        element: (
          <AdminRoute>
            <AddCourseBanner />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/consultant-profile",
        element: (
          <PrivateRoute>
            <ConsultantProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/edit-consultant-profile",
        element: <EditConsultantProfile />,
      },
      {
        path: "/dashboard/control-appointments",
        element: (
          <AdminRoute>
            <ControlAppointments />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/newsletter",
        element: (
          <AdminRoute>
            <NewsletterMail />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-reviews",
        element: (
          <AdminRoute>
            <AddReviews />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/show-reviews",
        element: (
          <AdminRoute>
            <ShowReviews />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/send-notifications",
        element: (
          <AdminRoute>
            <SendNotifications />
          </AdminRoute>
        ),
      },
    ],
  },
]);
