import { HTMLAttributes, useState } from "react";

import {
  AvaliationContainer,
  AvaliationVote,
  AvaliationItem,
  AvaliationText
} from "./avaliationStyles";

interface AvaliationProps
  extends React.DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  max: number;
  onVote: (vote: number) => void;
}

const Avaliation: React.FC<AvaliationProps> = ({ max, onVote }) => {
  const [active, setActive] = useState<number>();
  const arr = Array.from(Array(max).keys());
  const colors = [
    "#FF0000",
    "#FF6347",
    "#FF7F50",
    "#FFA500",
    "#FFD700",
    "#7CFC00",
    "#32CD32",
    "#228B22",
    "#008000",
    "#006400"
  ];

  const handleVote = (vote: number) => {
    setActive(vote);
    onVote(vote);
  };

  return (
    <AvaliationContainer>
      <AvaliationVote>
        {arr.map((num) => (
          <AvaliationItem
            key={num}
            onClick={() => handleVote(num + 1)}
            data-active={active === num + 1}
            style={{ backgroundColor: colors[num] }}
          >
            {num + 1}
          </AvaliationItem>
        ))}
      </AvaliationVote>
      <AvaliationText>
        <span>pouco provável</span>
        <span>muito provável</span>
      </AvaliationText>
    </AvaliationContainer>
  );
};

Avaliation.displayName = "Avaliation";

export default Avaliation;
