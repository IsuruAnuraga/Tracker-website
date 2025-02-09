/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigate = () => {

    const navigate = useNavigate();

    const handleDashboard = () => {
        navigate('/Dashboard');
    };


    const handleAddPackage = () => {
        navigate('/add-parcel');
    };

    const handleViewPackage = () => {
        navigate('/view-parcel');
    };

    const handleUpdatePackage = () => {
        navigate('/update-parcel');
    };

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/dashboard">
                <div className="sidebar-brand-text mx-3">Parcel Tracker <sup>1.0</sup></div>
            </a>

            <hr className="sidebar-divider my-0" />
            <li className="nav-item active">
                <a className="nav-link" href="#" onClick={handleDashboard}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            <hr className="sidebar-divider" />
            <div className="sidebar-heading">
                Packages
            </div>

            <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleAddPackage}>
                    <i className="fas fa-fw fa-plus"></i>
                    <span>Add New package</span></a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleUpdatePackage}>
                    <i className="fas fa-fw fa-pen"></i>
                    <span>Update package Status</span></a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleViewPackage}>
                    <i className="fas fa-fw fa-table"></i>
                    <span>View Package</span></a>
            </li>


        </ul>
    );
};

export default Navigate;
