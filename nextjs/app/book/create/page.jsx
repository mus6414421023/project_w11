"use client";

import React, { useState } from "react";
import axios from 'axios' //npm install axios https://www.npmjs.com/package/axios

const CreateBookPage = () => {
    const [bookField, setBookField] = useState({
        name: "",
        detail: "",
        price: ""
    });

    const changeBookFieldHandler = (e) => {
        setBookField({
            ...bookField,
            [e.target.name]: e.target.value
        });
        //console.log(userField);
    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const responce= await axios.post("http://127.0.0.1:8000/api/addnewbook", bookField);
            console.log(responce)
            window.location.href = '/';
        } catch (err) {
            console.log("Something Wrong");
        }
    }
    
    return (
    <div className="max-w-md mx-auto mt-5">
        <h1 className="text-2xl text-center mb-2">Add New User</h1>
        <div>
        <form>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Book Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Full Name..."
            onChange={e => changeBookFieldHandler(e)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="detail" className="block text-sm font-medium text-gray-900">
            Detail
          </label>
          <input
            type="Detail"
            name="detail"
            id="Detail"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Detail..."
            onChange={e => changeBookFieldHandler(e)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="Price" className="block text-sm font-medium text-gray-900">
            Price
          </label>
          <input
            type="Price"
            name="price"
            id="Price"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Price..."
            onChange={e => changeBookFieldHandler(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={e => onSubmitChange(e)}>Add Book</button> 
      </form>
    </div>
    </div>
  );
};
  
export default CreateBookPage;