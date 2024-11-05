'use client';

import styles from './login.module.css';
import checkedLogo from '@/public/img/logo-checked.svg';
import Image from "next/image";
import BeanButton from "@/app/component/common/bean-button";

export default function Login() {
  return (
    <div className={styles['login-wrapper']}>
      <div className={styles['login-container']}>
        <div className={styles['logo']}>
          <Image src={checkedLogo} alt={'체크된 로고'} />
        </div>
        <div className={styles['slogan']}>나한테 꼭 맞는 집을 찾을 때가지 빈집콕!</div>
        <div className={styles['btn-container']}>
          <BeanButton text="로그인" colorClass={styles['btn-inverse']} />
          <BeanButton text="가입하기" className={'mt-3'} />
        </div>
      </div>
    </div>
  )
}