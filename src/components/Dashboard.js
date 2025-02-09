import React, { useState, useEffect } from 'react';
import Navigate from './Navigate';
import Footer from './Footer';
import Header from './Header';
import Api_service from '../Services/Api_service';

const Dashboard = () => {
  const [stats, setStats] = useState({
    packages_in_shipping: 0,
    pending_packages: 0,
    delivered_packages: 0,
    total_packages: 0,
  });

  useEffect(() => {
    const fetchPackageStats = async () => {
      try {
        const response = await Api_service.call('/api/package/package-stats', 'GET');
        if (response) {
          setStats(response);
        }
      } catch (error) {
        console.error('Error fetching package statistics:', error);
      }
    };

    fetchPackageStats();
  }, []);

  return (
    <div id="wrapper">
      <Navigate />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header />
          <div className="container-fluid">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>

            <div className="row">
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Packages in shipping</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{stats.packages_in_shipping}</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-truck fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          Pending packages</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{stats.pending_packages}</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-warehouse fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          Delivered packages</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{stats.delivered_packages}</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-clipboard-check fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                          Total no of Packages</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{stats.total_packages}</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-boxes fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
