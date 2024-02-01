import './App.scss';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Context } from './Context/Context.jsx';
import { Welcome, Home } from './Layouts';
import { Login, Signup } from './pages';
import { Toaster } from 'react-hot-toast';
import { API_URL } from './main.jsx';

const ProtectedRoute = ({ Comps }) => {
  const { isAuthenticated } = useContext(Context);
  return (
    isAuthenticated ? <Comps /> : <Navigate to={"/login"} />
  )
}

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    if (!isAuthenticated) {
      const GetUser = async () => {
        try {
          const { data } = await axios.get(`${API_URL}/api/v1/users/profile`, {
            withCredentials: true,
          });

          if (data) {
            setIsAuthenticated(true);
            setUser(data.user);
            console.log(data.user)
          }
        } catch (error) {
          setUser({});
          console.log(error);
          setIsAuthenticated(false);
        }
      };

      GetUser();
    }
  }, [isAuthenticated]);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<ProtectedRoute Comps={Home} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App