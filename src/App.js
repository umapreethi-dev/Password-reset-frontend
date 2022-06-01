
import './App.css';
import Home from "./components/Home"
import { Route, Routes, Navigate } from "react-router-dom";
import PasswordReset from "./components/PasswordReset"

function App() {
  return (
    <div className="home">
      {/* <Home /> */}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        </Routes>
    </div>
  );
}

export default App;
