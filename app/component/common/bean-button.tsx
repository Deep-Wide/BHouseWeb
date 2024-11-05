'use client';

import {IButton} from "@/app/component/common/common-type";
import styles from "./common.module.css";

export default function BeanButton({ className, colorClass, text, onClick }: IButton) {
  return (
    <button className={`${colorClass ? `${colorClass}` : `${styles['btn-default']}`} ${className ? `${className}` : ''} ${styles['btn']}`}
            onClick={onClick}>
      {text}
    </button>
  )
}