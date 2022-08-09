/// <reference types="react" />
import "./mylabel.css";
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
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Elige color de la etiqueta
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
