import { useLoaderData } from "react-router-dom";
import {useContext} from 'react';
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2'

const BookServices = () => {
  const service = useLoaderData();
  const {_id, title, price,img } = service;
  const {user} = useContext(AuthContext);
console.log(_id);
  const handleBookService = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.userE.value;
    const order = {
        customerName: name,
        email,
        date,
        img,
        service: title,
        service_id: _id,
        price: price
    }

    fetch(`https://car-doctor-server-monirul480.vercel.app/bookings`,{
      method: 'POST',
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Your Order successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
    
  }

  return (
    <div className="p-5 bg-[#F3F3F3]">
      <h2 className="text-center text-3xl">Book Service: {title}</h2>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              defaultValue={user?.email}
              name="userE"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Du Amount</span>
            </label>
            <input
              type="text"
              placeholder={`Price $ ${price}`}
              name="email"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary bg-[#FF3811]"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default BookServices;
