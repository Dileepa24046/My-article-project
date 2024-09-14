import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Auther {
    id: number;
    name: string;
    emailAddress: string;
    createDate: string; 
    lastLoginDate: string; 
}

function Authers() {
    const [authers, setAuthers] = useState<Auther[]>([]);
    const [autherName, setAutherName] = useState<string>("");
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [createDate, setCreateDate] = useState<string>(new Date().toISOString());
    const [lastLoginDate, setLastLoginDate] = useState<string>(new Date().toISOString());

    // Load authors from the API
    async function loadAuthers() {
        try {
            const apiResponse = await axios.get<Auther[]>("http://localhost:8081/authers");
            setAuthers(apiResponse.data);
        } catch (error) {
            console.error("Error loading authors:", error);
        }
    }

    // Handle input changes
    function handleAutherName(event: React.ChangeEvent<HTMLInputElement>) {
        setAutherName(event.target.value);
    }

    function handleEmailAddress(event: React.ChangeEvent<HTMLInputElement>) {
        setEmailAddress(event.target.value);
    }

    function handleCreateDate(event: React.ChangeEvent<HTMLInputElement>) {
        setCreateDate(event.target.value);
    }

    function handleLastLoginDate(event: React.ChangeEvent<HTMLInputElement>) {
        setLastLoginDate(event.target.value);
    }

    // Add a new author to the database
    async function addAuther() {
        try {
            await axios.post("http://localhost:8081/authers", {
                name: autherName,
                emailAddress: emailAddress,
                createDate: createDate,
                lastLoginDate: lastLoginDate,
            });
            loadAuthers(); // Refresh the list after adding
        } catch (error) {
            console.error("Error adding author:", error);
        }
    }

    // Delete an author from the database
    async function deleteAuther(id: number) {
        try {
            await axios.delete(`http://localhost:8081/authers/${id}`);
            loadAuthers(); // Refresh the list after deleting
        } catch (error) {
            console.error("Error deleting author:", error);
        }
    }

    // Load authors when the component is first mounted
    useEffect(() => {
        loadAuthers();
    }, []);

    return (
        <div className="container mx-auto pt-5 pb-5">
            <h1 className="text-3xl font-semibold mb-5 text-slate-800">Authers</h1>
            
            <ul>
                {authers.map((auther) => (
                    <li key={auther.id} className="inline-block px-3 py-2 me-3 mb-3 border border-slate-200 rounded-lg shadow-lg text-slate-600">
                        {auther.name} - {auther.emailAddress}
                        <button
                            className="ml-4 py-1 px-2 rounded-lg bg-red-600 text-sm text-white hover:bg-red-700"
                            onClick={() => deleteAuther(auther.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            <div className="mt-10 w-[650px] border border-slate-200 px-4 py-3 rounded-lg">
                <h2 className="text-xl font-medium mb-4">Add Auther</h2>
                
                <label className="text-sm text-slate-600 block mb-3">Enter auther name</label>
                <input
                    type="text"
                    className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4"
                    onChange={handleAutherName}
                />

                <label className="text-sm text-slate-600 block mb-3">Enter email address</label>
                <input
                    type="email"
                    className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4"
                    onChange={handleEmailAddress}
                />

                <label className="text-sm text-slate-600 block mb-3">Enter create date</label>
                <input
                    type="datetime-local"
                    className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4"
                    onChange={handleCreateDate}
                    value={createDate}
                />

                <label className="text-sm text-slate-600 block mb-3">Enter last login date</label>
                <input
                    type="datetime-local"
                    className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4"
                    onChange={handleLastLoginDate}
                    value={lastLoginDate}
                />

                <button
                    className="py-2 px-3 rounded-lg bg-slate-800 text-sm text-white hover:bg-slate-950"
                    onClick={addAuther}
                >
                    Add Auther
                </button>
            </div>
            <Link to="/" style={{ marginRight: '250px', color: '#00e4ff'}}>Home</Link>
        </div>
    );
}



export default Authers;
