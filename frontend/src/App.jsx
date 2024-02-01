import './App.scss';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Context } from './Context/Context.jsx';
import { Welcome, Home } from './Layouts';
import { Login, Signup } from './pages';
import { Toaster } from 'react-hot-toast';
import { server } from './main.jsx';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(Context);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

const App = () => {
  const { setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const checkUserAuthentication = async () => {
      try {
        const response = await axios.get(`${server}/users/profile`, {
          withCredentials: true,
        });

        if (response.status === 200) {
          setIsAuthenticated(true);
          setUser(response.data.user);
        }
      } catch (error) {
        setUser({});
        setIsAuthenticated(false);
      }
    };

    // Check user authentication when the app starts
    checkUserAuthentication();
  }, [setIsAuthenticated, setUser]);
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App