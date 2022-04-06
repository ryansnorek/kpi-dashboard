import { useState } from "react";

export default function useHighlight(initialLabel, type) {
  const [targetType, setTargetType] = useState(initialLabel);

  const handleClickTarget = (e) => {
    if (type === "qtr") {
      setTargetType(Number(e.target.name));
    } else {
      setTargetType(e.target.name);
    }
  };

  const toggleID = (name) => `${targetType === name && "highlight"}`;

  return [handleClickTarget, toggleID, targetType];
}
