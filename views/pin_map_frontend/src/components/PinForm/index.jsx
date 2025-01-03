import { useState } from "react";
import Map from "../Map"

function PinForm() {
    const [formData, setFormData] = useState({ nickname: "", message: "" })

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
    }

    return (
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
            <Map />
        </form>
    );
}

export default PinForm;