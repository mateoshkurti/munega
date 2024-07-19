import React from 'react';

const PartnerHeader = () => {
    // Dummy data for business information
    const businessInfo = {
        name: "Example Salon",
        bio: "Styling with passion.",
        address: "50 Absolute Avenue, Mississauga, ON L4Z0A8",
        hours: "Mon-Sun: 10am-10pm",
        // Add more fields as needed
    };

    // Encode address for embedding in Google Maps iframe
    const encodedAddress = encodeURIComponent(businessInfo.address);

    return (
        <div className="business-header">
            {/* Map and business information combined */}
            <div className="business-info">
                <div className="business-details">
                    <div className="name-bio">
                        <h2>{businessInfo.name}</h2>
                        <p className="bio">{businessInfo.bio}</p>
                    </div>
                    <div className="details">
                        <p>{businessInfo.address}</p>
                        <p><strong>Hours:</strong> {businessInfo.hours}</p>
                        {/* Add more information as needed */}
                    </div>
                </div>
                <div className="map-container">
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        src={`https://maps.google.com/maps?q=${encodedAddress}&z=15&output=embed`}
                        allowFullScreen
                        title="Location"
                    />
                </div>
            </div>
        </div>
    );
};

export default PartnerHeader;
