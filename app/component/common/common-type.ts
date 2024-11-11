import React from "react";
import {StaticImageData} from "next/image";

export interface IButton {
  className?: string;
  colorClass?: string;
  text?: string;
  icon?: StaticImageData;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IInput {
  className?: string;
  label?: string;
  placeholder?: string;
  type?: string;
}