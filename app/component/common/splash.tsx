import styles from './common.module.css';
import deepWideLogo from '@/public/img/deep-wide.svg';
import Image from "next/image";

export default function Splash() {
  return (
    <>
      <div className={`${styles['splash-screen']}`}>
        <Image src={deepWideLogo} alt={'deep and wide logo'} />
      </div>
    </>
  )
}