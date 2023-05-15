import {useState, useEffect} from 'react'
import ServiceCard from './ServiceCard';
const Service = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('https://car-doctor-server-monirul480.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="mt-20">
            <div className="text-center">
                <h3 className="text-xl text-orange-600 font-bold">Our Services</h3>
                <h1 className="text-3xl text-black font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 mt-8 gap-3'>
                {
                    services.map(crd => <ServiceCard key={crd._id} data={crd}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;