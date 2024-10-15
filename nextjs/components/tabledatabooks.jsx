"use client";

import React, { useEffect, useState } from "react";
import axios from 'axios' //npm install axios https://www.npmjs.com/package/axios
import Link from "next/link";

export default function Books() {
    const [bookData, setBookData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
 
    const fetchData = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/books");
            console.log(result.data.results);
            setBookData(result.data.results)        
        } catch (err) {
            console.log("somthing Wrong");
        }
    }

    const handleDelete=async(id)=>{
        console.log(id);
        await axios.delete("http://127.0.0.1:8000/api/booksdelete/"+id);
        const newBookData=bookData.filter((item)=>{
            return(
                item.id !==id
            )
        })
        setBookData(newBookData);
    }
    
    return (
        <table className="table table-zebra">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50">
            <tr>
            <th className="py-3 px-6">#</th>
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Detail</th>
            <th className="py-3 px-6">Price</th>
            <th className="py-3 px-6 text-center">Actions</th>
            </tr>
        </thead>
        <tbody>
            {bookData.map((rs, index) => (
            <tr key={rs.id} className="bg-white border-b">
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">{rs.name}</td>
                <td className="py-3 px-6">{rs.detail}</td>
                <td className="py-3 px-6">{rs.price}</td>
                <td className="flex justify-center gap-1 py-3">
                    <Link
                    href={`/book/view/${rs.id}`} 
                    className="btn btn-info">
                    View
                    </Link>
                    <Link
                    href={`/book/edit/${rs.id}`} 
                    className="btn btn-primary">
                    Edit
                    </Link>
                    <button onClick={()=>handleDelete(rs.id)} className="btn btn-secondary">Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
  );
}