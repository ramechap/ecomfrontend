import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Getallpost({ post, ws }) {
    const [updateq, setupdateq] = useState(null)
    const [title, settitle] = useState("")
    const [image, setimage] = useState([])



    useEffect(() => {
        console.log(post)
    }, [post])
    // Handle image change for upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };
    const [selectedImage, setSelectedImage] = useState(null); // To store the file for the new image
    const DeleteButton = async (id) => {

        try {
            // Send the data to your backend using axios
            const response = await axios.delete(
                "http://localhost:8080/post/deletepost/" + id,

            );


            if (ws && ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({
                    event: 'delete_post',
                    data: response.data, // Assuming response.data contains the newly created post
                }));
                console.log("websocekd opened deleted")
            } else {
                console.error("WebSocket is not open or has been closed.");
            }

        } catch (error) {
            console.error("Error deleting :", error);
        }
    };
    const handleEditSubmit = async (id) => {
        try {
            const formData = new FormData();
            formData.append('title', title);
            if (selectedImage) {
                formData.append('images', selectedImage); // Append new image
            }

            const response = await axios.put(`http://localhost:8080/post/editpost/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            // Assuming response.data is the updated post
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws.send(
                    JSON.stringify({
                        event: 'edit_post',
                        data: response.data,
                    })
                );
            }

            // Close the editing mode after submit
            setupdateq(null);
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };
    return (
        <div>
            <table border="1" cellPadding="10" style={{ marginTop: "20px", width: "100%" }}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {post.length > 0 ? (
                        post.map((item, index) => (
                            <tr key={index}>
                                <td>{updateq == item._id ? <input type='text' value={title} onChange={(e) => settitle(e.target.value)} /> : <p>{item.title}</p>}</td>
                                <td>
                                    {item.image.length > 0 && item.image.map((i) => {

                                        return (
                                            <img
                                                src={`http://localhost:8080/${i}`}
                                                alt="Fetched Image"
                                                style={{ maxWidth: "100px" }}
                                            />
                                        )
                                    })}
                                    {updateq === item._id && (
                                        <>
                                            <input type="file" accept="image/*" onChange={handleImageChange} />
                                            {selectedImage && (
                                                <div>
                                                    <p>Selected Image: {selectedImage.name}</p>
                                                    <img
                                                        src={URL.createObjectURL(selectedImage)}
                                                        alt="New Image Preview"
                                                        style={{ maxWidth: '100px', marginTop: '10px' }}
                                                    />
                                                </div>
                                            )}
                                        </>
                                    )}
                                </td>
                                <td>{new Date(item.created_at).toLocaleString()}</td>
                                <td>
                                    <button onClick={() => DeleteButton(item._id)}>Delete</button>
                                    <button onClick={() => { setupdateq(item._id); settitle(item.title); setimage(item.image) }} >Edit</button>
                                    {updateq === item._id && (
                                        <button onClick={() => handleEditSubmit(item._id)}>Submit Edit</button>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">Loading fetched data...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
