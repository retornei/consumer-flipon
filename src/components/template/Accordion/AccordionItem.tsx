import { useRef } from "react";
import { FiPlus, FiMinus, FiTrash2, FiX, FiCheck } from "react-icons/fi";

import {
  Item,
  Header,
  AvatarContainer,
  Avatar,
  TitleContainer,
  Title,
  Subtitle,
  InfoMessage,
  ActionContainer,
  ActionButton,
  BodyContainer,
  Body,
} from "./AccordionItemStyles";

interface Accordion2ItemProps {
  title: string;
  subtitle?: string;
  avatar?: string;
  onClick?: () => void;
  onRemove?: () => void;
  isActive?: boolean;
  isInvalid: boolean;
}

const AccordionItem: React.FC<Accordion2ItemProps> = ({
  title,
  subtitle,
  avatar = "",
  children,
  onClick = () => {},
  onRemove,
  isActive = false,
  isInvalid,
}) => {
  const bodyRef = useRef<HTMLDivElement>();

  const handleRemoveClick = (event: React.MouseEvent) => {
    event.stopPropagation();

    if (onRemove) {
      onRemove();
    }
    
  };

  return (
    <Item>
      <Header onClick={onClick} className={isActive ? "active" : ""}>
        {avatar && (
          <AvatarContainer>
            <Avatar src={avatar} alt={title} />
          </AvatarContainer>
        )}
        <TitleContainer>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}

          {isInvalid && (
            <InfoMessage invalid={isInvalid}>
              <FiX /> Verificar campos obrigatórios
            </InfoMessage>
          )}
          {!isInvalid && (
            <InfoMessage invalid={isInvalid}>
              <FiCheck /> Tudo certo nesse item!
            </InfoMessage>
          )}
        </TitleContainer>

        <ActionContainer>
          <ActionButton>{isActive ? <FiMinus /> : <FiPlus />}</ActionButton>
          {onRemove && (
            <ActionButton color="red" onClick={handleRemoveClick}>
              <FiTrash2 />
            </ActionButton>
          )}
        </ActionContainer>
      </Header>

      <BodyContainer className={isActive ? "open" : ""}>
        <Body
          ref={bodyRef}
          style={{
            height: bodyRef.current ? bodyRef.current.scrollHeight : 0,
          }}
        >
          {children}
        </Body>
      </BodyContainer>
    </Item>
  );
};

AccordionItem.displayName = "AccordionItem";

export default AccordionItem;
