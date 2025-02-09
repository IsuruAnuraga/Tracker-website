/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Navigate from './Navigate';
import Footer from './Footer';
import Header from './Header';
import Api_service from '../Services/Api_service';

const UpdateParcel = () => {

    const [trackingId, setTrackingId] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const packageData = {
            tracking_id: trackingId,
            status: status,
            description: description,
        };

        try {
            const response = await Api_service.call('/api/package/update', 'POST', packageData);

            if (response && response.message === "Package status updated successfully") {
                alert('Package updated successfully!');
                setDescription('');
                setStatus('');
                setTrackingId('');
                window.location.href = '/view-parcel';

            } else {
                alert('Error adding package. Please try again.');
            }
        } catch (error) {
            console.error('Error adding package:', error);

            alert('Error adding package. Please try again.');
        }
    };

    const [tracking_ids, setIds] = useState([]);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await Api_service.call('/api/package/getAllTracking', 'GET');
                if (response && response.packages) {
                    setIds(response.packages);
                } else {
                    alert('Failed to fetch packages');
                }
            } catch (err) {
                alert('Error fetching packages: ' + err.message);
            }
        };

        fetchPackages();
    }, []);

    return (
        <div id="wrapper">
            <Navigate />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Header />
                    <div className="container-fluid">
                        <div className="card p-3">
                            <div className='Card-header'>
                                <h5 className='mb-2'> Update Package Status </h5>
                                <hr />
                            </div>
                            <form className='mt-2' onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Tracking ID</label>
                                    <select className="form-control" onChange={(e) => setTrackingId(e.target.value)}>
                                        <option value="">Select Tracking ID</option>
                                        {tracking_ids.map((packageData, index) => (
                                            <option key={index} value={packageData.tracking_id}>
                                                {packageData.tracking_id}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Status</label>
                                    <select className="form-control" onChange={(e) => setStatus(e.target.value)}>
                                        <option value="">Select Status</option>
                                        <option value="pending">Pending</option>
                                        <option value="in-progress">In Progress</option>
                                        <option value="completed">Completed</option>
                                        <option value="shipped">Shipped</option>
                                        <option value="delivered">Delivered</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Description</label>
                                    <textarea onChange={(e) => setDescription(e.target.value)} className='form-control'></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        </div >


    );
};

export default UpdateParcel;
