import HeroSection from "./home component/hero section";
import HaveALookSection from "./home component/have a look section";
import NewCollectionSection from "./home component/new collection";
import SlideShowSection from "./home component/slide show";
import Footer from "./genral/footer";
import Header from "./genral/header";

function Home(){

    return(
        <>
            <Header/>
            <HeroSection/>
            <HaveALookSection/>
            <NewCollectionSection/>
            <SlideShowSection/>
            <Footer/>

            
        </>
    )
}
export default Home