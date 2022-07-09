import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";

import Button from "../Button";

import { setOrderAddress } from "../../../store/slices/orderSlice";

import {
  Card,
  StyledOverlay,
  StyledContent,
  StyledCloseButton,
  AddressItem,
  ButtonContainer,
} from "./ConfirmationAddressCardStyles";

export type AddressType = {
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  municipio: string;
  uf: string;
  complemento?: string;
  descricao: string;
  uuid: string;
  principal: boolean;
};

interface ConfirmationAddressCardProps {
  address: AddressType;
  addresses: AddressType[];
}

const DialogContent: React.FC<DialogPrimitive.DialogContentProps> = ({
  children,
  ...props
}) => {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
};

const ConfirmationAddressCard: React.FC<ConfirmationAddressCardProps> = ({
  address,
  addresses,
}) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <h3>{address.descricao}</h3>
      <div style={{ marginBottom: 20 }}>
        <p>{address.logradouro}, {address.numero}{address.complemento ? " " + address.complemento : ''}, {address.bairro} - {address.cep} {address.municipio}/{address.uf}</p>
      </div>

      <div>
        <DialogPrimitive.Dialog>
          <DialogPrimitive.DialogTrigger asChild>
            <Button>Alterar endereço</Button>
          </DialogPrimitive.DialogTrigger>

          <DialogContent>
            <h3>Alterar endereço</h3>

            {addresses &&
              addresses.map((addr, index) => (
                <AddressItem
                  key={index}
                  onClick={() => dispatch(setOrderAddress(addr))}
                  className={addr.uuid === address.uuid ? 'active' : ''}
                >
                  <p>{addr.descricao}</p>
                  <span>
                    {addr.logradouro}, {addr.bairro} - {addr.cep},{" "}
                    {addr.municipio}/{addr.uf}
                  </span>
                </AddressItem>
              ))}

            <ButtonContainer>
              <DialogPrimitive.Close asChild>
                <Button>Fechar</Button>
              </DialogPrimitive.Close>
            </ButtonContainer>

            <DialogPrimitive.Close asChild>
              <StyledCloseButton>
                <FiX />
              </StyledCloseButton>
            </DialogPrimitive.Close>
          </DialogContent>
        </DialogPrimitive.Dialog>
      </div>
    </Card>
  );
};

export { ConfirmationAddressCard };
