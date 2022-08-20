import './myinput.css';

export interface InputProps {
    /**
     * Color de fondo
     */
    backgroundColor: string;
    /**
     * Color del texto
     */
    color: string;
    /**
     * Texto interior del input
     */
    placeholder: string;
    /**
     * Tamaño del input
     */
    size: 'normal' | 'medium' | 'large'


}

export const MyInput = ({placeholder = 'Placeholder', size='normal', backgroundColor= '#fff', color= '#000'}: InputProps) => {
    return (
            <input className={`input ${size}`} placeholder={placeholder} style={{backgroundColor, color}}/>
    )
}

export default MyInput;