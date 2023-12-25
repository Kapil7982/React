import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { StatsProvider } from './contexts/StatsContext';
import Home from './components/Home';
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import Admin from './components/Admin';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <StatsProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route
              path="/employees/:id"
              element={<PrivateRoute>{<EmployeeDetails />}</PrivateRoute>}
            />
            <Route
              path="/admin"
              element={<PrivateRoute>{<Admin />}</PrivateRoute>}
            />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </StatsProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
