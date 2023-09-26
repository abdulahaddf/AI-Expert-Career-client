import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Error from '../error/Error';
import Home from '../pages/Home/Home';
import AboutUs from '../pages/AboutUs/AboutUs';
import AiConsultant from '../pages/AIConsultant/AiConsultant';
import ShopingCart from '../pages/ShopingCart/ShopingCart';
import Event from '../pages/Event/Event';
import Courses from '../pages/Courses/Courses';
import Blog from '../pages/Blog/Blog';
import Payment from '../pages/Pyament/Payment';
import EventTicket from '../pages/EventTicket/EventTicket';
import AlternativeForm from '../pages/AlternativeForm/AlternativeForm';
import Login from '../common/Authentication/Login';
import Signup from '../common/Authentication/Signup';
import RoadMapLayout from '../layout/RoadMapLayout';
import AiExpert from '../RoadMap/AiExpert';
import DataScience from '../RoadMap/DataScience';
import MachineLearning from '../RoadMap/MachineLearning';
import DeepLearning from '../RoadMap/DeepLearning';
import DataEngineer from '../RoadMap/DataEngineer';
import CaseStudy from '../pages/CaseStudy/CaseStudy';
import IndividualCaseStudy from '../pages/CaseStudy/IndividualCaseStudy/IndividualCaseStudy';
import IndividualBlog from '../pages/Blog/IndividualBlog/IndividualBlog';
import IndividualCourse from '../pages/Courses/IndividualCourse/IndividualCourse';
import GrapichDesignForm from '../pages/GrapichDesignForm/GrapichDesignForm';
import UserProfile from '../pages/UserProfile/UserProfile';
import DashboardLayout from '../layout/DahboardLayout/DashboardLayout';
import PurchaseHistory from '../pages/PurchaseHistory/PurchaseHistory';
import Certificate from '../pages/Certificate/Certificate';
import UserDashboard from '../pages/Dashboard/UserDashboard';
import MyCourse from '../pages/MyProfile/MyCourse';
import CourseVideo from '../pages/CourseVideo/CourseVideo';
import Wishlist from '../pages/Wishlist/Wishlist';
import JobOpportunity from '../pages/JobOpportunity/JobOpportunity';
import JobOpportunityIndibidual from '../pages/JobOpportunity/JobOpportunityIndibidual';
import ContactUs from '../pages/AboutUs/ContuctUs';
import Registation from '../pages/Registation/Registation';
import AiConsultanProfile from '../pages/AiConsultantProfile/AiConsultanProfile';
import Kit from '../pages/Kit/Kit/Kit';
import AiKitDetails from '../pages/Kit/Kit/AiKitDetails';
import AiToolsDetails from '../pages/Kit/Kit/AiToolsDetails';
import FreeCourses from '../pages/Courses/FreeCourses';

export const router = createBrowserRouter([


  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/career',
        element: <AiConsultant />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/cart',
        element: <ShopingCart />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/ai-consultant',
        element: <AiConsultant />,
      },
      {
        path: '/payment',
        element: <Payment />,
      },
      {
        path: '/registration',
        element: <Registation />,
      },
      {
        path: '/event',
        element: <Event />,
      },
      {
        path: '/buy_ticket',
        element: <EventTicket />,
      },
      {
        path: '/alternative_form',
        element: <AlternativeForm />,
      },
      {
        path: '/GrapichDesign_form',
        element: <GrapichDesignForm />,
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
      },
      {
        path: '/free_courses',
        element: <FreeCourses />,
      },
      {
        path: '/individualCourse/:id',
        element: <IndividualCourse></IndividualCourse>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/profile',
        element: <UserProfile />,
      },
      {
        path: '/case-study',
        element: <CaseStudy></CaseStudy>,
      },
      {
        path: '/individual-blog/:id',
        element: <IndividualBlog></IndividualBlog>,
      },
      {
        path: '/individual-case-study/:id',
        element: <IndividualCaseStudy></IndividualCaseStudy>,
      },
      {
        path: '/jobOpportunity',
        element: <JobOpportunity />,
      },
      {
        path: '/jobOpportunity/:id',
        element: <JobOpportunityIndibidual />,
      },
      {
        path: '/ai-consultant-profile/:id',
        element: <AiConsultanProfile />,
      },
      {
        path: '/my-course/:id',
        element: <CourseVideo />,
      },
      {
        path: '/kit',
        element: <Kit />,
      },
      {
        path: '/aikitdetails/:id',
        element: <AiKitDetails />,
      },
      {
        path: '/aitoolsdetails/:id',
        element: <AiToolsDetails />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
    ],
  },
  {
    path: '/roadmap',
    element: <RoadMapLayout />,
    children: [
      {
        path: '/roadmap',
        element: <AiExpert />,
      },
      {
        path: '/roadmap/aiexpert',
        element: <AiExpert />,
      },
      {
        path: '/roadmap/aiexpert/datascience',
        element: <DataScience />,
      },
      {
        path: '/roadmap/aiexpert/machinelearning',
        element: <MachineLearning />,
      },
      {
        path: '/roadmap/aiexpert/deeplearning',
        element: <DeepLearning />,
      },
      {
        path: '/roadmap/aiexpert/dataengineer',
        element: <DataEngineer />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <UserDashboard />,
      },
      {
        path: '/dashboard/user-dashboard',
        element: <UserDashboard />,
      },
      {
        path: '/dashboard/my-courses',
        element: <MyCourse />,
      },
      {
        path: '/dashboard/my-profile',
        element: <UserProfile />,
      },
      {
        path: '/dashboard/purchase-history',
        element: <PurchaseHistory />,
      },
      {
        path: '/dashboard/certification',
        element: <Certificate />,
      },
      {
        path: '/dashboard/profile',
        element: <UserProfile />
      },
      {
        path: '/dashboard/purchase_history',
        element: <PurchaseHistory />,
      },
      {
        path: '/dashboard/certificate',
        element: <Certificate />,
      },
      {
        path: '/dashboard/wishlist',
        element: <Wishlist />,
      },
    ],
  },
]);
