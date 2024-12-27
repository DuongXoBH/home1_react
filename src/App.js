import './App.css';
import AboutUsComponent from './component/about-us';
import ContactUsConponent from './component/contact-us';
import FooterComponent from './component/footer';
import HeaderComponent from './component/header';
import InformationComponent from './component/information';
import ServiceComponent from './component/service'
function App() {
  return (
    <div className="App">
    <HeaderComponent />
    <ServiceComponent/>
    <AboutUsComponent/>
    <InformationComponent/>
    <ContactUsConponent/>
    <FooterComponent/>
    </div>
  );
}

export default App;
