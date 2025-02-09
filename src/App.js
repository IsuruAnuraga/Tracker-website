import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Registration from './components/Registration';
import AddParcel from './components/AddParcel';
import ViewParcel from './components/ViewParcel';
import TrackPackage from './components/TrackPackage';
import UpdateParcel from './components/UpdateParcel';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        <Route path="/add-parcel" element={<AddParcel />} />
        <Route path="/view-parcel" element={<ViewParcel />} />
        <Route path="/update-parcel" element={<UpdateParcel />} />
        <Route path="/" element={<TrackPackage />} />

      </Routes>
    </Router>
  );
};

export default App;