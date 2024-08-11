import React, { useState } from 'react';

const TabbedComponent = () => {
  const [activeTab, setActiveTab] = useState('services'); // State to track active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabbed-container max-w-[1640px] mx-auto p-4">
      <div className="tabbed-header">
        <div
          className={`tab ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => handleTabClick('services')}
        >
          Services
        </div>
        <div
          className={`tab ${activeTab === 'staff' ? 'active' : ''}`}
          onClick={() => handleTabClick('staff')}
        >
          Staff
        </div>
        <div
          className={`tab ${activeTab === 'gallery' ? 'active' : ''}`}
          onClick={() => handleTabClick('gallery')}
        >
          Gallery
        </div>
      </div>
      <div className="tabbed-content">
        {activeTab === 'services' && (
          <div>
            <h2>Services</h2>
            <ul>
              <li>Service 1 - $50</li>
              <li>Service 2 - $80</li>
              <li>Service 3 - $120</li>
              {/* Replace with actual data */}
            </ul>
          </div>
        )}
        {activeTab === 'staff' && (
          <div>
            <h2>Staff</h2>
            <ul>
              <li>John Doe - Senior Stylist</li>
              <li>Jane Smith - Makeup Artist</li>
              <li>Michael Johnson - Hair Stylist</li>
              {/* Replace with actual data */}
            </ul>
          </div>
        )}
         {activeTab === 'gallery' && (
          <div>
            <h2>Gallery</h2>
            <ul>
              <li>Photo1</li>
              <li>Photo2</li>
              <li>Photo3</li>
              {/* Replace with actual data */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedComponent;
