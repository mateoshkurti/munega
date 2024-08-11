import React from 'react';
import { BsClockFill, BsFillPinMapFill, BsFillJournalBookmarkFill  } from 'react-icons/bs';

const PartnerHeader = () => {
    // Dummy data for business information
    const businessInfo = {
        name: "American Crew Example Salon (50 Absolute Avenue)",
        bio: "Styling with 4.6 (3,000+) • Barbershop • Styling • Beard • Special Events • Walk-In Friendly • $",
        address: "50 Absolute Avenue",
        city: "Mississauga, ON L4Z0A8",
        hours: "Mon-Sun: 10 AM - 10 PM",
        // Add more fields as needed
    };

    // Encode address for embedding in Google Maps iframe
    const encodedAddress = encodeURIComponent(businessInfo.address);

    return (
        <div className="business-header max-w-[1640px] mx-auto p-4">
            {/* Map and business information combined */}
           
                
                    <div className="name-bio">

                        <div>
                        <img className='max-w-[ 50px] max-h-[50px] p-logo' src="https://wallpapercave.com/wp/wp3067059.jpg" alt="/" />
                        </div>
                        <div>
                            <h2 className='p-name'>{businessInfo.name}</h2>
                            <p className="p-bio">{businessInfo.bio}</p>
                        </div>
                        
                    </div>
                    <div className="booking-details">
                        <div className="booking">
                        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full p-book'><BsFillJournalBookmarkFill size={20} className='mr-2' />BOOK AN APPOINTMENT </button>
                        </div>
                        <div className='details'>
                            
                            {/* Add more information as needed */}
                        </div>
                        
                    </div>
                
           


                    
                    <div className = "map">
                        <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        src={`https://maps.google.com/maps?q=${encodedAddress}&z=15&output=embed`}
                        allowFullScreen
                        title="Location"/>
                    </div>
                    <div className="location-info">
                        
                        <div className='location-cont'>
                            <div className='location-icon'>
                            <BsFillPinMapFill  size={20} className='mr-2' />
                            </div>
                            <div className="location">
                                <p><strong>{businessInfo.address}</strong></p>
                                <p>{businessInfo.city}</p>
                            </div>
                        </div>
                        
                        <div className="hours">
                            <div className='hours-icon'>
                            <BsClockFill  size={20} className='mr-2' />
                            </div>
                            <div>
                            <p><strong>Open</strong></p>
                            <p>{businessInfo.hours}</p>
                            </div>
                            
                        </div>
                    </div>
                    
           
            
        </div>
    );
};

export default PartnerHeader;
