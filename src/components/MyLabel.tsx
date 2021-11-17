import './mylabel.css';

export interface MyLabelProps{
    /**
     * This is the message that you can see on the label
     */
    label: string;

    /**
     * These are all the sizes of the message
     */
    size: 'normal'|'h1'|'h2'|'h3';

    /**
     * These the values to allCaps in the label
     */
    allCaps?: boolean;

    /**
     * This is the color of the label
     */
    color?: 'primary'|'secondary'|'tertiary';

    /**
     * This is the FontColor of the label
     */
    fontColor?: string;
}

export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    label = 'No Label',
    size = 'normal',
    fontColor
}: MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color}`} style={{color: fontColor}}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}