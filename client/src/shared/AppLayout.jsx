import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTopButton from "../components/BackToTopButton";
export default function AppLayout() { return <div className="min-h-screen bg-[#071b2b]"><Navbar/><Outlet/><Footer/><BackToTopButton/></div>; }
