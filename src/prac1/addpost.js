import axios from 'axios';
import React, { useState } from 'react'
export default function Addpost({ ws, post }) {


    const [formData, setFormData] = useState({
        title: "",
        image: null,

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {

        const file = e.target.files[0];
        if (file) {
            setFormData((prevData) => ({
                ...prevData,
                image: file,
            }));
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a new FormData object to handle the data
        const formDataToSend = new FormData();

        // Append the form data fields
        formDataToSend.append("title", formData.title);
        if (formData.image) {
            formDataToSend.append("images", formData.image);
            console.log("FormData contains image:", formData.image);
          } else {
            console.log("No image to send");
          }


        try {
            // Send the data to your backend using axios
            const response = await axios.post(
                "http://localhost:8080/post/createpost",
                formDataToSend,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            console.log("Form Submitted:", response.data);
            // Send WebSocket message to notify other clients about the new post
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({
                    event: 'new_post',
                    data: response.data, // Assuming response.data contains the newly created post
                }));
                console.log("websocekd opened")
            } else {
                console.error("WebSocket is not open or has been closed.");
            }
            
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div>

            <h2>Submit Data</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="image">Image Upload:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                    {formData.image && (
                        <div>
                            <p>Selected Image: {formData.image.name}</p>
                            {/* Display a preview of the image */}
                            <img
                                src={URL.createObjectURL(formData.image)}
                                alt="Image Preview"
                                style={{ maxWidth: "100px", marginTop: "10px" }}
                            />
                        </div>
                    )}
                </div>


                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
