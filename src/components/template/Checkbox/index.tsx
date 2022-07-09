import React from "react";
import { HTMLAttributes, Ref } from "react";
import { CheckboxLabel, CheckboxInput } from "./checkboxStyles";

export interface CheckboxProps
  extends React.ComponentProps<"input"> {
  label?: string;
  rounded?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  rounded = false,
  ...props
}, ref) => {
  return (
    <CheckboxLabel>
      <CheckboxInput
        {...props}
        ref={ref}
        type="checkbox"
        rounded={rounded}
      />
      {label && label}
    </CheckboxLabel>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
