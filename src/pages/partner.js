import Navbar from "../components/Navbar"
import Hero from "../components/partner/Hero"
import PartnerHeader from "../components/partner/PartnerHeader"
import TabbedComponent from "../components/partner/PartnerTabs"

export function Partner() {
    return (
       <div>
        <Navbar />
        <Hero/>
        <PartnerHeader/>
        <TabbedComponent/>
       </div>
    )
}