import {useState, useEffect} from 'react'
const Service = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('services.json')
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
            <div>
                <p>{services.length}</p>
            </div>
        </div>
    );
};

export default Service;