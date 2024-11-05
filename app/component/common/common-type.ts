import React from "react";

export interface IButton {
  className?: string;
  colorClass?: string;
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}