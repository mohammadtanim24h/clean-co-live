import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { publicRoutes } from "./routes/publicRoutes";
import { privateRoutes } from "./routes/privateRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PrivateRoute from "./authentication/PrivateRoute";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddService from "./pages/Dashboard/AddService";
import AddAdmin from "./pages/Dashboard/AddAdmin";

function App() {
    // Aos init
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <Navbar>
                <Routes>
                    {publicRoutes.map(({ path, Component }, index) => (
                        <Route
                            key={index}
                            path={path}
                            element={<Component />}
                        ></Route>
                    ))}
                    <Route element={<PrivateRoute />}>
                        {privateRoutes.map(({ path, Component }, index) => (
                            <Route
                                key={index}
                                path={path}
                                element={<Component />}
                            ></Route>
                        ))}
                    </Route>
                    <Route element={<AdminRoute />}>
                        <Route path="/dashboard" element={<Dashboard />}>
                            <Route
                                path="add-service"
                                element={<AddService></AddService>}
                            ></Route>
                            <Route
                                path="add-admin"
                                element={<AddAdmin></AddAdmin>}
                            ></Route>
                        </Route>
                    </Route>
                </Routes>
            </Navbar>
        </div>
    );
}

export default App;
