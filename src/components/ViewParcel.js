/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Navigate from './Navigate';
import Footer from './Footer';
import Header from './Header';
import Api_service from '../Services/Api_service';

const ViewParcel = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await Api_service.call('/api/package/getAll', 'GET');
                if (response && response.packages) {
                    setPackages(response.packages);
                } else {
                    setError('Failed to fetch packages');
                }
            } catch (err) {
                setError('Error fetching packages: ' + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPackages();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString();
    };

    return (
        <div id="wrapper">
            <Navigate />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Header />
                    <div className="container-fluid">
                        <div className="card p-3">
                            <div className='Card-header'>
                                <h5 className='mb-2'> View Packages </h5>
                            </div>

                            {loading ? (
                                <p>Loading packages...</p>  // Show loading message
                            ) : error ? (
                                <p className="text-danger">{error}</p>  // Show error message if fetching fails
                            ) : (
                                <table className='table mt-3'>
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Tracking ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Weight</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {packages.map((pkg, index) => (
                                            <tr key={pkg.tracking_id}>
                                                <th scope="row">{pkg.id}</th>
                                                <td>{pkg.tracking_id}</td>
                                                <td>{pkg.name}</td>
                                                <td>{pkg.weight}</td>
                                                <td>{pkg.address}</td>
                                                <td>{formatDate(pkg.created_at)}</td>
                                                <td>{pkg.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default ViewParcel;
