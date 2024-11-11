import styles from "./common.module.css";
import {IInput} from "@/app/component/common/common-type";

export default function BeanInput({ className, label, placeholder, type }: IInput) {
  return (
    <div className={`${className ? `${className}` : ''}`}>
      <div className={'w-full flex flex-col-reverse'}>
        <input type={type ? type : 'text'} placeholder={placeholder} className={`${styles['input']} w-full`} />
        <div className={`${styles['label']} mb-1`}>
          <span className={`${styles['label-text']}`}>{label}</span>
        </div>
      </div>
    </div>
  )
}