'use client';

import {IButton} from "@/app/component/common/common-type";
import styles from "./common.module.css";
import Image from "next/image";

export default function BeanButton({ className, colorClass, text, icon, onClick }: IButton) {
  return (
    <button className={`${colorClass ? `${colorClass}` : `${styles['btn-default']}`} ${className ? `${className}` : ''} ${styles['btn']}`}
            onClick={onClick}>
      {icon &&
        <Image src={icon} alt={"버튼 icon"} />
      }
      {text}
    </button>
  )
}