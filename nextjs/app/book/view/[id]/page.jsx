"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios' //npm install axios https://www.npmjs.com/package/axios
import { useParams } from 'next/navigation'

export default function ViewBookPage() {
    const {id}=useParams();

    console.log(id);

    const[book,setBook]=useState([]);
 
    useEffect(()=>{
        fetchBook();
    },[id]);
 
    const fetchBook=async()=>{
        try{
          const result=await axios.get("http://127.0.0.1:8000/api/books/"+id);
          console.log(result.data.books);
          setBook(result.data.books)
        }catch(err){
            console.log("Something Wrong");
        }
    }

    return (
    <div className="max-w-2xl mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">View Book</h1>
      <table className="table table-zebra">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50">
            <tr>
              <th>S No.</th>
              <th>Book Name</th>
              <th>Detail</th>             
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.detail}</td>
            </tr>
          </tbody>
      </table>
    </div>
  );
}