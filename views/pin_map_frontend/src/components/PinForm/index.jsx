import { useState } from "react";
import Map from "../Map";
import axios from "axios"

function PinForm() {
    const [formData, setFormData] = useState({ nickname: "", message: "" });
    const [position, setPosition] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    function updatePosition(pos) {
        setPosition(pos);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        console.log(position);

        axios.post('http://localhost:3000/pins', {
            longitude: position.lat,
            latitude: position.lng,
            name: formData.nickname
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <Map handlePosition={updatePosition} />
            <form onSubmit={handleSubmit}>
                <input
                    value={formData.nickname}
                    onChange={handleChange}
                    name="nickname"
                />
                <input
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                />
                <button type="submit"> Submit Pin</button>
            </form>
        </>

    );
}

export default PinForm;