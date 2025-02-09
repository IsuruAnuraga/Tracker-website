import React, { useState } from 'react';
import Api_service from '../Services/Api_service';

function TrackPackage() {
  const [trackingId, setTrackingId] = useState('');
  const [statusList, setStatusList] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await Api_service.call('/api/package/status/' + trackingId, 'GET');
      if (response && response.statuses) {
        setStatusList(response.statuses);
      } else {
        console.log('Error');
      }
    } catch (error) {
      console.error('Error adding package:', error);

      alert('Error getting the package status. Please try again.');
    }
  };

  const renderVerticalLine = () => (
    <div className="mb-1 mt-1" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ borderLeft: "3px solid white", height: "25px" }} />
    </div>
  );

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">

        <div className="col-6 d-flex align-items-center">

          <div style={{ width: "100%", marginTop: "-25%" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src='/track.png' alt='track' width={"50%"} />
            </div>
            <h2 className="text-center pb-4"><b> Package  Tracker </b></h2>
            <form className="w-75 mx-auto" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="trackingId">Enter your Tracking ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="trackingId"
                  placeholder="Enter Tracking ID Here"
                  onChange={(e) => setTrackingId(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Track Package
              </button>
            </form>
          </div>

        </div>

        <div className="col-6 d-flex align-items-center">
          <div style={{ backgroundColor: 'blue' }} className="w-100 h-100 text-white p-4 d-flex flex-column justify-content-center">
            {statusList.length > 0 && (
              <h3 className="text-center mb-4">Your Package Status</h3>
            )}
            <div className="position-relative" id='statusList'>

              {statusList.map((status, index) => (
                <div key={status.id}>
                  <div className="position-relative mb-1">
                    <div className="card text-dark">
                      <div className={`card-header ${status.status === 'shipped' ? 'bg-primary' : 'bg-success'} text-white`}>
                        {status.status.charAt(0).toUpperCase() + status.status.slice(1)}
                      </div>
                      <div className="card-body">
                        <p className="mb-1">{status.description}</p>
                        <small className="text-muted">{new Date(status.created_at).toLocaleString()}</small>
                      </div>
                    </div>
                  </div>

                  {index < statusList.length - 1 && renderVerticalLine()}
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackPackage;
