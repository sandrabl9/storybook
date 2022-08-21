import React from "react";
import './mycheck.css';

export interface MyCheckboxProps {
    /**
     * Texto de la etiqueta
     */
    label: string;
    /**
     * Está marcada?
     */
    checked: boolean;
    /**
     * Color de fondo
     */
    backgroundColor?: string;

}

export const MyCheckbox = ({label='Label Text', checked, backgroundColor}:MyCheckboxProps) => {
    return (
        <label className="container">
            <input type="checkbox" checked={checked}/>
            <span className="checkmark" style={{backgroundColor}}></span>
            {label}
        </label>
    )
}

export default MyCheckbox;