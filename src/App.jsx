import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import Agence from './Pages/Agence';
import Projects from './Pages/Projects';
import Navbar from './Components/Navbar/Navbar';
import FullScreenNav from './Components/Navbar/FullScreenNav';

const App = () => {
    return (
        <div>
            <Navbar></Navbar>
            <FullScreenNav></FullScreenNav>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/agence' element={<Agence />}></Route>
                <Route path='/projects' element={<Projects />}></Route>
            </Routes>
        </div>
    );
};

export default App;