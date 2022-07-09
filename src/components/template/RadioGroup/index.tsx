import { HTMLAttributes, Ref } from "react";

import Radio from "../Radio";
import Pagination from "../Pagination";

import {
  CardContent,
  DivHeader,
  Row,
  H2,
  AddressContainer,
  PaginationContainer
} from "./radioGroupStyles";

type AddressType = {
  id: string;
  address: string;
  distance?: string;
  shipping?: number;
};

interface RadioGroupProps
  extends React.DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  data: AddressType[];
  groupName: string;
  title: string;
  showPagination?: boolean;
  type: "address" | "shipping";
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  data,
  groupName,
  title,
  showPagination = false,
  type,
  ref,
  ...props
}) => {
  return (
    <CardContent {...props} ref={ref as Ref<HTMLDivElement>}>
      <DivHeader>
        <H2>{title}</H2>
      </DivHeader>

      <AddressContainer>
        {data.map((address) => {
          return (
            <Row key={address.id}>
              <p>{address.address}</p>
              <p>
                {type === "address"
                  ? address.distance
                  : address.shipping === 0
                  ? "Gratuito"
                  : new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(address.shipping)}
              </p>

              <Radio value={address.id} name={groupName} onChange={event => console.log(event.currentTarget.value)} />
            </Row>
          );
        })}

        {showPagination && (
          <PaginationContainer>
            <Pagination maxPage={5} onPaginate={page => console.log(page)} />
          </PaginationContainer>
        )}
        
      </AddressContainer>
    </CardContent>
  );
};

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;
