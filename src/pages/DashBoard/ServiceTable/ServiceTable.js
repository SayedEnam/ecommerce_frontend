import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const ServiceTable = ({service, handleDeleteService}) => {
    const [bookings, setBookings] = useState([]);
    const { register, handleSubmit } = useForm();
    const [orderId, setOrderId] = useState("");

    const {user} = useAuth();

    const {name, duration, price, } = service.data;
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
      };
      const onSubmit = (data) => {
                console.log(data, orderId);
                fetch(`https://young-sea-60382.herokuapp.com/statusUpdate/${orderId}`, {
                  method: "PUT",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify(data),
                })
                  .then((res) => res.json())
                  .then((result) => console.log(result));
              };
    
    return (
        <tr className="mt-2 border border-black text-center hover:bg-blue-50 transition duration-300 ease-in-out">
            <td className="px-3"> {name}</td>
            <td className="px-3"> {price}</td>
            <td className="px-3"> {service?.admin}</td>
            <td className="px-3"><button onClick={() => handleDeleteService(service?._id)}><i className="fas fa-trash-alt text-red-500 text-lg"></i></button></td>
            <td className="px-3"><button><i className="far fa-edit text-lg text-green-500"></i></button></td>

        </tr>
    )
};

export default ServiceTable;