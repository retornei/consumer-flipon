import React, { useState } from "react";

import AccordionItem from "./AccordionItem";

interface AccordionProps {}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  const [active, setActive] = useState<number>();

  const handleItemActive = (index: number) => {
    if (active === index) setActive(undefined);
    else setActive(index);
  };

  return (
    <div>
      {children &&
        React.Children.map(children, (child, index) => {
          if (
            React.isValidElement(child) &&
            (child as React.ReactElement<typeof AccordionItem>).type ===
              AccordionItem
          ) {
            return React.cloneElement(
              child as React.ReactElement<typeof AccordionItem>,
              {
                ...child.props,
                isActive: active === index,
                onClick: () => handleItemActive(index)
              }
            );
          }

          return null;
        })}
    </div>
  );
};

Accordion.displayName = "Accordion";
AccordionItem.displayName = "Accordion.Item"; // for storybook

const Accordion2Namespace = Object.assign(Accordion, { Item: AccordionItem });

export { Accordion2Namespace as Accordion };
