import Bookings from "./components/Bookings";
import Home from "./components/Home";
import Pass from "./components/Pass";

import { Routes, Route} from "react-router-dom";



function App() {
    return (
        <>

            <div className="overflow-hidden w-screen h-screen ">
                <Routes>
                    <Route path="/" element={<Home />}>
                    </Route>
                    <Route index element={<Home />} />

                    <Route path="bookings" element={<Bookings />} />
                    <Route path="pass" element={<Pass />} />

                    <Route path="*" element={<Home />} />
                </Routes>

            </div>
        </>
    );
}

export default App;
