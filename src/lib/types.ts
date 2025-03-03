export type Element = React.JSX.Element;
export type Message = { success: string } | { error: string } | { message: string };
export type Children = { children: React.ReactNode };
export type Ref = React.RefObject<HTMLElement>;
export type RefCallback = (node: HTMLElement) => void;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "secondary" | "default" | "link" | "destructive" | "outline" | "ghost" | null | undefined;
    size: "default" | "sm" | "lg" | "icon" | null | undefined;
    asChild?: boolean;
}

export interface SubmitButtonProps extends ButtonProps {
    pendingText?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: 'submit' | 'button' | undefined;
}