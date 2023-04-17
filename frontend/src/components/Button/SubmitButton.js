import React, { useState } from "react";
import './SubmitButton.css'

const SubmitButton = ({ clickFunction, textContext }) => {
  const [hoverStylePos, setHoverStylePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [style, setStyle] = useState({});

  const submitHover = (e) => {
    setIsHovering(true);
    let location = {
      x: e.clientX,
      y: e.clientY,
    };
    setHoverStylePos(location);
    setStyle({
      backgroundPosition:
        hoverStylePos.x.toString() + "px, " + hoverStylePos.y.toString() + "px",
    });
  };

  return (
    <div
      onClick={{ clickFunction }}
      id={isHovering ? "button_hover" : "button"}
      onMouseMove={(e) => submitHover(e)}
      onMouseLeave={() => setIsHovering(false)}
      style={style}
    >
      {textContext}
    </div>
  );
};

export default SubmitButton;
