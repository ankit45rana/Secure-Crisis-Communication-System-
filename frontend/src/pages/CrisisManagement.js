
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrisisManagement = () => {
    const [crises, setCrises] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const fetchCrises = async () => {
        const { data } = await axios.get('http://localhost:5000/api/crisis');
        setCrises(data);
    };

    useEffect(() => {
        fetchCrises();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/crisis', { title, description });
        setTitle('');
        setDescription('');
        fetchCrises();
    };

    return (
        <div>
            <h1>Crisis Management</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <button type="submit">Add Crisis</button>
            </form>
            <ul>
                {crises.map((crisis) => (
                    <li key={crisis._id}>{crisis.title} - {crisis.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default CrisisManagement;
                    