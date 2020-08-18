/**
 * @File declarations for the system components
 * 	components which can be used in every application
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

declare interface AppProps {}
declare interface ApplicationHeaderWrapperProps {
    title?: string;
}
declare interface ApplicationBodyWrapperProps {}

declare interface BackgroundImageProps {
    image?: string;
}

declare interface FlexContainerProps {
    vertical?: boolean;
    margin?: number;
    justify?: boolean | string;
    align?: boolean | string;
}

declare interface GridContainerProps {
    vertical?: boolean;
    gap?: number;
    template?: string;
    // fallback value when columns/rows is not defined
    count?: number;
    columns?: number;
    rows?: number;
    // unit used for the width of each item // default is 1fr
    unit?: number;
}

declare interface ListItemProps {
    align?: string;
    justify?: string;
}

declare type ButtonTypes = 'regular' | 'ok' | 'error' | 'warning' | 'info' | 'submit';
declare interface ButtonProps {
    type: ButtonTypes;
    fullWidth?: boolean;
    small?: boolean;
}

declare type FontWeight = 'normal' | 'bold' | 'light' | 'thin';
declare type FontStyle = 'normal' | 'italic' | 'oblique';
declare interface ParagraphProps {
    fontFamily?: string;
    fontStyle?: FontStyle;
    fontWeight?: FontWeight;
}
