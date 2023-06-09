import FAQ from "./FAQ";
import Header from '../home/Header';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';



function FAQPage(){
    return (
        <>
        <div className='faq-container'>
            <div className="faq-header">
                <Header/>
                <Navbar/>
            </div>
            <div className="faq-content">
                <FAQ/>
            </div>

            <div className="faq-footer">
                <Footer/>
            </div>
        </div>
        </>
    );
    
}

export default FAQPage;