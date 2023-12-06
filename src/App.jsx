import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import SignIn from './pages/sign_in';
import SignUp from './pages/signup';
import About from './pages/About';
import Profile from './pages/profile';
import Header from "./components/Header";
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/About" element={<About />} />

    </Routes>
    
    </BrowserRouter>
  )
}
