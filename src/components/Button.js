import React from "react";
import classNames from "classnames";
import "components/Button.scss";

// renders button and applies styles/functionality based on props
export default function Button(props) {

  // updates class name to button + prop that returns true
  const buttonClass = classNames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger
  })

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
