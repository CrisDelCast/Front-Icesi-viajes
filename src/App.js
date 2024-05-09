import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Screen/LoginScreen';
import SignIn from './Screen/SignInScreen';
import Home from './Screen/HomeScreen';
import DestinoHome from './Screen/DestinoHomeScreen'; 
import ClientesScreen from './Screen/ClientesScreen'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/DestinoHome" element={<PrivateRoute><DestinoHome /></PrivateRoute>} /> 
        <Route path="/ClientesScreen" element={<PrivateRoute><ClientesScreen /></PrivateRoute>} /> 
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default App;
