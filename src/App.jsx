import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import SignIn from './pages/sign_in';
import SignUp from './pages/signup';
import About from './pages/About';
import Profile from './pages/profile';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/About" element={<About />} />

    </Routes>
    
    </BrowserRouter>
  )
}
