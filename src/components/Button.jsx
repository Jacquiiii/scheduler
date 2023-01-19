import React from "react";
import classNames from "classnames";

import "components/Button.scss";

// Button that applies styles/functionality based on props
const Button = (props) => {

  // Updates class name based on whether prop is true or false
  const buttonClass = classNames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger
  });

  return (
    <button
      className={ buttonClass }
      onClick={ props.onClick }
      disabled={ props.disabled }
    >
      { props.children }
    </button>
  );
  
};

export default Button;
