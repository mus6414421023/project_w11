"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios' //npm install axios https://www.npmjs.com/package/axios
import { useParams } from 'next/navigation'

export default function ViewBookPage() {
    const {id}=useParams();

    console.log(id);

    const [bookField, setBookField] = useState({
        name: "",
        detail: ""
    });

    useEffect(()=>{
        fetchBook();
    },[id]);
 
    const fetchBook=async()=>{
        try{
            const result=await axios.get("http://127.0.0.1:8000/api/books/"+id);
            console.log(result.data.books);
            setBookField(result.data.books)
        }catch(err){
            console.log("Something Wrong");
        }
    }

    const changeBookFieldHandler = (e) => {
        setBookField({
            ...bookField,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://127.0.0.1:8000/api/booksupdate/"+id, bookField);
            window.location.href = '/';
        } catch (err) {
            console.log("Something Wrong");
        }
    }
    
    return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Edit Form</h1>
            <form>
                <div className="mb-3 mt-3">
                    <label className="block text-sm font-medium text-gray-900"> ID:</label>
                    <input type="text" id="id" name="id" value={id} disabled />
                </div>
                <div className="mb-3 mt-3">
                    <label className="block text-sm font-medium text-gray-900"> Book Name:</label>
                    <input type="text" className="input input-bordered input-primary w-full max-w-xs" placeholder="Enter Your Full Name" name="name" 
                    value={bookField.name} onChange={e => changeBookFieldHandler(e)} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="block text-sm font-medium text-gray-900">Detail:</label>
                    <input type="test" className="input input-bordered input-primary w-full max-w-xs" id="detauk" placeholder="Enter email" name="email" 
                    value={bookField.detail} onChange={e => changeBookFieldHandler(e)}/>
                </div>
                {/* <div className="mb-3 mt-3">
                    <label className="block text-sm font-medium text-gray-900">Password:</label>
                    <input type="text" className="input input-bordered input-primary w-full max-w-xs" 
                    id="password" placeholder="Enter password" name="password" 
                    value={bookField.password} onChange={e => changeBookFieldHandler(e)}/>
                </div> */}
                <button type="submit" className="btn btn-primary" onClick={e=>onSubmitChange(e)}>Update</button>
            </form>
    </div>
  );
}