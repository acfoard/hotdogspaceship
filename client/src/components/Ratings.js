import React from "react";
const AddRating = (props) => {
    return <div>
        <select className="browser-default custom-select">
            <option>Select your Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
        </select>
    </div>
}

export default AddRating