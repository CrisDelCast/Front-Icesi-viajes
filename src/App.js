import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Screen/LoginScreen';
import SignIn from './Screen/SignInScreen';
import Home from './Screen/HomeScreen';
import PlanesHome from './Screen/PlanesScreen';
import PlanesScreen from './Screen/PlanesHome';
import DestinoHome from './Screen/DestinoHomeScreen'; 
import DestinoAdd from './Screen/DestinoAdd';
import ClientesScreen from './Screen/ClientesScreen'; 
import ClienteEditScreen from './Screen/ClienteEditScreen';
import ServiciosHome from './Screen/ServiciosScreen';
import ServiciosScreen from './Screen/ServiciosHome';
import AgenteHome from './Screen/AgenteHome';
import ViewerHome from './Screen/ViewerHome';
import ClienteAdd from './Screen/ClienteAdd';
import DestinoDetalle from './Screen/DestinoDetalle';
import ReservasScreen from './Screen/ReservasScreen';

function App() {
  return (  
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/PlanesHome" element={<PrivateRoute><PlanesHome /></PrivateRoute>} />
        <Route path="/PlanesScreen" element={<PrivateRoute><PlanesScreen /></PrivateRoute>} />
        <Route path="/DestinoHome" element={<PrivateRoute><DestinoHome /></PrivateRoute>} /> 
        <Route path="/DestinoAdd" element={<PrivateRoute><DestinoAdd /></PrivateRoute>} /> 
        <Route path="/ClientesScreen" element={<PrivateRoute><ClientesScreen /></PrivateRoute>} /> 
        <Route path="/ServiciosHome" element={<PrivateRoute><ServiciosHome /></PrivateRoute>} />
        <Route path="/ServiciosScreen" element={<PrivateRoute><ServiciosScreen /></PrivateRoute>} /> 
        <Route path="/ClienteEditScreen" element={<PrivateRoute><ClienteEditScreen /></PrivateRoute>} /> 
        <Route path="/AgenteHome" element={<PrivateRoute><AgenteHome /></PrivateRoute>} />
        <Route path="/ViewerHome" element={<PrivateRoute><ViewerHome /></PrivateRoute>} />
        <Route path="/ClienteAdd" element={<PrivateRoute><ClienteAdd /></PrivateRoute>} />
        <Route path="/destino/:id" component={DestinoDetalle} />
        <Route path="/ReservasScreen" element={<PrivateRoute><ReservasScreen /></PrivateRoute>} />
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
