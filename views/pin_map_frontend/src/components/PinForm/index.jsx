import { useState } from "react";
import Map from "../Map";
import pinService from "../../utils/pinService";

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

        pinService.create(
            {
                longitude: position.lat,
                latitude: position.lng,
                name: formData.nickname,
                message: formData.message
            }
        )
    }

    return (
        <>
            <Map handlePosition={updatePosition} message={formData.message}/>
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