import { HTMLAttributes, Ref } from "react";
import { SelectContainer, SelectLabel, Select as SelectStyled } from "./selectStyles";

interface SelectProps extends React.ComponentProps<"select"> {}

const Select: React.FC<SelectProps> = ({ children, ref, ...props }) => {
  return (
    <SelectContainer>
      <SelectLabel>
        <SelectStyled {...props} ref={ref as Ref<HTMLSelectElement>}>
          {children}
        </SelectStyled>
      </SelectLabel>
    </SelectContainer>
  );
};

Select.displayName = "Select";

export default Select;
