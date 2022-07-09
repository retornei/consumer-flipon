import { Ref } from "react";
import { RadioLabel, RadioInput } from "./radioStyles";

export interface RadioProps
  extends React.ComponentProps<"input"> {
  label?: string;
}

const Radio: React.FC<RadioProps> = ({
  label,
  ref,
  ...props
}) => {
  return (
    <RadioLabel>
      <RadioInput
        {...props}
        ref={ref as Ref<HTMLInputElement>}
        type="radio"
      />
      {label && label}
    </RadioLabel>
  );
};

Radio.displayName = "Radio";

export default Radio;
