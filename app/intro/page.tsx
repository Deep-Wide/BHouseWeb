'use client';

import styles from './intro.module.css';
import loginLogo from '@/public/img/login-logo.svg';
import kakaoIcon from '@/public/img/icon/kakao-icon-sm.svg';
import googleIcon from '@/public/img/icon/google-icon-sm.svg';
import emailIcon from '@/public/img/icon/email-icon-sm.svg';
import naverIcon from '@/public/img/icon/naver-icon-sm.svg';
import Image from "next/image";
import BeanButton from "@/app/component/common/bean-button";
import Link from "next/link";

export default function Intro() {
  return (
    <div className={styles['intro-wrapper']}>
      <div className={styles['intro-container']}>
        <div className={styles['logo']}>
          <Image src={loginLogo} alt={'체크된 로고'} />
        </div>
        <div className={'flex justify-center'}>
          <div className={styles['slogan']}>나한테 꼭 맞는 집을 찾을 때까지 빈집콕!</div>
        </div>
        <div className={styles['btn-container']}>
          <Link href="login">
            <BeanButton icon={emailIcon} text="이메일로 시작하기" colorClass={styles['btn-inverse']} />
          </Link>
          <BeanButton icon={kakaoIcon} text="카카오로 시작하기" className={'mt-3'} colorClass={styles['btn-kakao']} />
          <BeanButton icon={googleIcon} text="구글로 시작하기" className={'mt-3'} colorClass={styles['btn-google']} />
          <BeanButton icon={naverIcon} text="네이버로 시작하기" className={'mt-3'} colorClass={styles['btn-naver']}/>
        </div>
      </div>
    </div>
  )
}