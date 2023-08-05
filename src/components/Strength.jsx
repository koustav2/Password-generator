/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Strength({ password = "" }) {
    const getPasswordStrength = () => {
        const passwordLength = password.length;

        if (passwordLength < 1) {
            return "";
        } else if (passwordLength < 4) {
            return "Very Weak";
        } else if (passwordLength < 8) {
            return "Poor";
        } else if (passwordLength < 12) {
            return "Medium";
        } else if (passwordLength < 16) {
            return "Strong";
        } else {
            return "Very Strong";
        }
    };
    const passwordStrength = getPasswordStrength();

    if (!passwordStrength) return <React.Fragment />;

    return (
        <div className="password-strength">
            Strength: <span style={{ fontWeight: "bold",color:"red" }}>{passwordStrength}</span>
        </div>
    );
}

export default Strength
