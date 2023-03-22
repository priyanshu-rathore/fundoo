import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import ProtectedRoute from './Routes/ProtectedRoute';
import AuthRoute from './Routes/AuthRoute';




function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthRoute><SignIn /></AuthRoute>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
