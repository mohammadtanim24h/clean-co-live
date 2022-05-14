import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { publicRoutes } from "./routes/publicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
    // Aos init
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <Navbar>
                <Routes>
                    {publicRoutes.map(({ path, Component }, index) => (
                        <Route
                            key={index}
                            path={path}
                            element={<Component></Component>}
                        ></Route>
                    ))}
                </Routes>
            </Navbar>
        </div>
    );
}

export default App;
