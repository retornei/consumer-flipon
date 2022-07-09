import { HTMLAttributes, Ref } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import Checkbox from "../Checkbox";

import { CardProduct as Card, CardImage, CardContent, Title, Image } from "./cardProductStyle";

interface CardProductProps
  extends React.DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  productId: string;
  image: string;
  description: string;
  price: number;
  noCheck?: boolean;
  showInfo?: boolean;
  onCheck?: (value: boolean) => void;
}

const CardProduct: React.FC<CardProductProps> = ({
  productId,
  image,
  description,
  price,
  ref,
  noCheck = false,
  showInfo = false,
  onCheck = () => {},
  ...props
}) => {
  const products = useSelector((state: RootState) => state.order.products)

  return (
    <Card {...props} ref={ref as Ref<HTMLDivElement>}>
      {!noCheck && <Checkbox defaultChecked={products[productId] && products[productId].id === productId} onChange={(event) => onCheck(event.currentTarget.checked)} />}
      <CardImage>
        <Image src={image} alt={description}></Image>
      </CardImage>
      <CardContent>
        <Title>{description}</Title>
        <Title><b>Preço:</b> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</Title>
        {showInfo && (
          <div style={{display: 'flex', gap: 10}}>
            <Title><b>Qtde.:</b> {products[productId].quantity}</Title>
            <Title><b>Motivo:</b> {products[productId].reason}</Title>
            <Title><b>Ação:</b> {products[productId].action}</Title>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

CardProduct.displayName = "CardProduct";

export default CardProduct;
