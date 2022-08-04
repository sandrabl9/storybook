import "./mylabel.css"

export interface MyLabelProps {
    /**
     * Mensaje que aparecerá en la etiqueta
     */
    label: string;
    /**
     * Tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Texto de la etiqueta capitalizado?
     */
    allCaps?: boolean;
    /**
     * Color de la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary'
    /**
     * Elige color de la etiqueta
     */
    fontColor?: string
}

export const MyLabel = ({label= 'No label', size='normal', allCaps = false, color='primary' , fontColor}:MyLabelProps )=> {
    return (
        <span className={`label text-${color} ${size}`}
        style={{color: fontColor}}>
          {allCaps ? label.toUpperCase() : label}
        </span>
    );
};