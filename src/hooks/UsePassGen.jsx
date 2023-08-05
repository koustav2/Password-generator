/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function UsePassGen() {
    const [password, setPassword] = useState()
    const [error, setError] = useState('')



    const generatePassword = (checkboxData, length) => {
        let pass = "";
        let chars = "";
        const selectedOption = checkboxData.filter((checkbox) => checkbox.state);

        if (selectedOption.length === 0) {
            setError("Select at least one option.");
            setPassword("");
            return;
        }
        selectedOption.forEach((checkbox) => {
            if (checkbox.state) {
                switch (checkbox.title) {
                    case "Include Uppercase Letters":
                        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                        break;
                    case "Include Lowercase Letters":
                        chars += "abcdefghijklmnopqrstuvwxyz";
                        break;
                    case "Include Numbers":
                        chars += "0123456789";
                        break;
                    case "Include Symbols":
                        chars += "!@#$&()|}{[-=";
                        break;
                    default:
                        break;
                }
            }
        });
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            pass += chars[randomIndex];
          }
        setPassword(pass);
        setError("");
    }



    return { password, error, generatePassword };
}

export default UsePassGen
