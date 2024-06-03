import Routes from './routes.js';
import ScrollToTop from './components/ScrollToTop';
import FooterPage from './view/footer/FooterPage';
import { Navbar } from './view/navbar/Navbar.jsx';

function App() {
  return (
    <main
      id='scrolly-main'
      className='main-container bg-white scroll-box-auto shadow border-start border-end border-dark vh-100 px-0 container-xxl d-flex flex-column overflow-auto'
    >
      <ScrollToTop />
      <Navbar />
      <Routes />
      <FooterPage />
    </main>
  );
}

export default App;
