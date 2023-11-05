import { Form } from "./modules/form";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="bg-[#d7e3ff] h-screen flex justify-center items-center">
      <Router>
        <Routes>
          <Route path="/user/signup" element={<Form signedin={false} />} />
          <Route path="/user/register" element={<Form signedin={false} />} />
          <Route path="/user/signin" element={<Form signedin={true} />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
