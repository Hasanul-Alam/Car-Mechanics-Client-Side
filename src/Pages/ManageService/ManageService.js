import React, { useEffect, useState } from 'react';
import './ManageService.css';
import axios from 'axios';

const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        const url = `http://localhost:5000/services`;
        axios.get(url)
        .then(res => setServices(res.data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`
        axios.delete(url)
        .then(res => {
            if(res.data.deletedCount > 0){
                alert('Alhamdulillah deleted successfully.');
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            }
        })
    }
    return (
        <div className='text-center mt-3'>
            <h1>This is manage service page.</h1>
            <div className="container">
                <h2>Sample Table with Images</h2>
                <table className="table w-75 mx-auto">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            services.map(service => <tr key={service._id}>
                                <td className='table-image'><img className='w-100' src={service.img} alt="Service Img" /></td>
                                <td><h6>{service.name}</h6></td>
                                <td className='table-description'><p className='text-start'>{service.description}</p></td>
                                <td>
                                    <button className="btn btn-success">Update</button>
                                    <button onClick={() => handleDelete(service._id)} className="btn btn-danger ms-2">X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageService;