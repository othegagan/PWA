import Bookings from './components/Bookings';
import Home from './components/Home';
import Pass from './components/Pass';

import { Routes, Route } from 'react-router-dom';
import TummocMoney from './components/TummocMoney';
import Profile from './components/Profile';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <>
            <div className='min-h-screen overflow-hidden overflow-x-hidden'>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route index element={<Home />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='bookings' element={<Bookings />} />
                    <Route path='money' element={<TummocMoney />} />
                    <Route path='pass' element={<Pass />} />

                    <Route path='*' element={<Home />} />
                </Routes>
                <div>
                    <Toaster />
                </div>
            </div>
        </>
    );
}

export default App;
