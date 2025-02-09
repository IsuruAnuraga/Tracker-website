/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Navigate from './Navigate';
import Footer from './Footer';
import Header from './Header';
import { v4 as uuidv4 } from 'uuid';
import Api_service from '../Services/Api_service';

const AddParcel = () => {
    const trackingId = uuidv4();

    const [packageName, setPackageName] = useState('');
    const [packageWeight, setPackageWeight] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const packageData = {
            tracking_id: trackingId,
            name: packageName,
            weight: packageWeight,
            address: deliveryAddress,
            status: status,
        };

        try {
            const response = await Api_service.call('/api/package/add', 'POST', packageData);
            if (response && response.message === "Package created successfully") {
                alert('Package added successfully!');
                setPackageName('');
                setPackageWeight('');
                setDeliveryAddress('');
                setStatus('');
                window.location.href = '/view-parcel';
            } else {
                alert('Error adding package. Please try again.');
            }
        } catch (error) {
            console.error('Error adding package:', error);
            alert('Error adding package. Please try again.');
        }
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
                                <h5 className='mb-2'> Add New Package </h5>
                                <hr />
                            </div>
                            <form className='mt-2' onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label readOnly for="exampleInputEmail1">Tracking ID</label>
                                    <input style={{ backgroundColor: '#E5E4E2' }} type="text" className="form-control" id="exampleInputEmail1" value={trackingId} placeholder="Tracking ID" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Package Name</label>
                                    <input type="text" className="form-control" placeholder="Enter a unique name" onChange={(e) => setPackageName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Package Weight</label>
                                    <input type="number" className="form-control" placeholder="Enter weight" onChange={(e) => setPackageWeight(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Package Delivery Address</label>
                                    <input type="text" className="form-control" placeholder="Enter Delivery Address" onChange={(e) => setDeliveryAddress(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Package Status</label>
                                    <select className="form-control" onChange={(e) => setStatus(e.target.value)}>
                                        <option value="">Select Status</option>
                                        <option value="pending">Pending</option>
                                        <option value="in-progress">In Progress</option>
                                        <option value="completed">Completed</option>
                                        <option value="shipped">Shipped</option>
                                        <option value="delivered">Delivered</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>


    );
};

export default AddParcel;
