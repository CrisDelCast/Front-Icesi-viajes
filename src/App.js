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
import ReservasHomeScreen from './Screen/ReservasHome';
import ReservaEditScreen from './Screen/ReservaEditScreen';
import PlanEditScreen from './Screen/PlanEditScreen';
import ServicioEditScreen from './Screen/ServicioEditScreen';
import UserHome from './Screen/UserHome';
import UserAdd from './Screen/UserAdd';
import UserDetail from './Screen/UserDetail';
import UserEditScreen from './Screen/UserEditScreen';

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
        <Route path="/DestinoDetalle" element={<PrivateRoute><DestinoDetalle /></PrivateRoute>} /> 
        <Route path="/ClientesScreen" element={<PrivateRoute><ClientesScreen /></PrivateRoute>} /> 
        <Route path="/ServiciosHome" element={<PrivateRoute><ServiciosHome /></PrivateRoute>} />
        <Route path="/ServiciosScreen" element={<PrivateRoute><ServiciosScreen /></PrivateRoute>} /> 
        <Route path="/ClienteEditScreen" element={<PrivateRoute><ClienteEditScreen /></PrivateRoute>} /> 
        <Route path="/AgenteHome" element={<PrivateRoute><AgenteHome /></PrivateRoute>} />
        <Route path="/ViewerHome" element={<PrivateRoute><ViewerHome /></PrivateRoute>} />
        <Route path="/ClienteAdd" element={<PrivateRoute><ClienteAdd /></PrivateRoute>} />
        <Route path="/destino/:id" component={DestinoDetalle} />
        <Route path="/ReservasScreen" element={<PrivateRoute><ReservasScreen /></PrivateRoute>} />
        <Route path="/ReservasHomeScreen" element={<PrivateRoute><ReservasHomeScreen /></PrivateRoute>} />
        <Route path="/ReservaEditScreen" element={<PrivateRoute><ReservaEditScreen /></PrivateRoute>} /> 
        <Route path="/PlanEditScreen" element={<PrivateRoute><PlanEditScreen /></PrivateRoute>} /> 
        <Route path="/ServicioEditScreen" element={<PrivateRoute><ServicioEditScreen /></PrivateRoute>} />
        <Route path="/userHome" element={<PrivateRoute><UserHome /></PrivateRoute>} />
        <Route path="/UserEditScreen" element={<PrivateRoute><UserEditScreen /></PrivateRoute>} />
        <Route path="/userAdd" element={<PrivateRoute><UserAdd /></PrivateRoute>} />
        <Route path="/UserDetail" element={<PrivateRoute><UserDetail /></PrivateRoute>} />

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
