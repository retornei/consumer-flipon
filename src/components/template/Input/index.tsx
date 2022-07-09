import React, { ChangeEvent, HTMLAttributes } from "react";
import useMask, { MaskTypes } from "../../../hooks/useMask";
import { InputComponent } from "./inputStyles";

interface InputProps extends React.ComponentProps<"input"> {
  mask?: MaskTypes;
  value?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ mask: maskType, ...props }, ref) => {
  const { mask } = useMask();

  const _onChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value;

    if (maskType) {
      event.currentTarget.value = mask(value, maskType);
    }

    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <InputComponent
      {...props}
      ref={ref}
      value={props.value}
      onChange={maskType ? _onChange : props.onChange}
    />
  );
});

Input.displayName = "Input";

export default Input;
