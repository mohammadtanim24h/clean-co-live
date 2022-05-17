import React, { useEffect, useState } from "react";
import fetcher from "../../api";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await fetcher.get("/services");
            setServices(data);
        })();
    }, []);
    return (
        <div>
            <h2 className="text-primary text-2xl">
                Our services: {services?.length}
            </h2>
        </div>
    );
};

export default Services;
