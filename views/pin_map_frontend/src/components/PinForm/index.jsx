import { useState } from "react";
import Map from "../Map";
import pinService from "../../utils/pinService";

function PinForm() {
    const [formData, setFormData] = useState({ nickname: "", message: "" });
    const [position, setPosition] = useState(null);
    const [nullPositionError, setNullPositionError] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    function updatePosition(pos) {
        setNullPositionError(false);
        setPosition(pos);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        try {
            pinService.create(
                {
                    longitude: position.lng,
                    latitude: position.lat,
                    name: formData.nickname,
                    message: formData.message
                }
            )
        } catch (e) {
            console.log(e.message);
            setNullPositionError(true);
        }
    }

    return (
        <>
            <Map handlePosition={updatePosition} message={formData.message} />
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
            {nullPositionError && <p> No Values for Position Please Click Map and Allow Location</p>}
        </>

    );
}

export default PinForm;