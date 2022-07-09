import React from "react";
import { ButtonComponent } from "./buttonStyles";

interface ButtonProps extends React.ComponentProps<"button"> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
    return (
        <ButtonComponent {...props} ref={ref}>{children}</ButtonComponent>
    )
})

Button.displayName = "Button";

export default Button;