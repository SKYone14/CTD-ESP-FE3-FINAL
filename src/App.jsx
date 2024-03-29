import './App.css';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home.jsx';
import Contact from './Routes/Contact.jsx';
import Detail from './Routes/Detail.jsx';
import Favs from './Routes/Favs.jsx';
import { useGlobalStates } from './Context/Context.jsx';
import { useEffect } from 'react';

function App() {
    const { state } = useGlobalStates();
    const rootElement = document.documentElement;

  

    return (
        <>
            <Navbar />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/contact'} element={<Contact />} />
                <Route path={'/dentist/:id'} element={<Detail />} />
                <Route path={'/favs'} element={<Favs />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;