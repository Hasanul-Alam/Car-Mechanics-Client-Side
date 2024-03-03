import React from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from "react-hook-form"

const AddService = () => {

        const { register, handleSubmit, reset } = useForm();
        const onSubmit = (data) => {
            console.log(data);
            axios.post('http://localhost:5000/services', data)
            .then(res => {
                if(res.data.insertedId){
                    alert('Alhamdulillah service is added successfully.');
                    reset();
                }
            })
        };

        return (
            <div className='text-center w-75 mx-auto'>
                <h1 className='my-3'>Please add a service</h1>
                <form className='w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control mb-3 border border-primary' {...register("name")} placeholder='Service Name'/>
                    <textarea className='form-control mb-3 border border-primary' {...register("description")} placeholder='Description'/>
                    <input className='form-control mb-3 border border-primary' type="number" {...register("price")} placeholder='Service Price'/>
                    <input className='form-control mb-3 border border-primary' {...register("img")} placeholder='Image Url'/>
                    <input className='btn btn-primary mb-3' type="submit" value={'Add Service'}/>
                </form>
            </div>
        );
    };

    export default AddService;