import styles from './login.module.css';
import Logo from '@/public/img/logo.svg';
import KakaoCircle from '@/public/img/icon/kakao-circle.svg';
import GoogleCircle from '@/public/img/icon/google-circle.svg';
import NaverCircle from '@/public/img/icon/naver-circle.svg';
import Image from "next/image";
import BeanInput from "@/app/component/common/bean-input";
import BeanButton from "@/app/component/common/bean-button";

export default function Login() {
    return (
      <div className={'wrapper'}>
        <div className="container">
          <div className={styles['title']}>
            <Image src={Logo} alt={'로고'} />
            <div className={styles['title-text']}>
              로그인
            </div>
          </div>
          <div className={styles['form']}>
            <BeanInput label={'이메일'} placeholder={'이메일 입력'} />
            <BeanInput label={'비밀번호'} placeholder={'비밀번호 입력'} className={'mt-4'} type="password" />
            <BeanButton text={'로그인'} className={'btn-inverse mt-12'}/>
          </div>
          <div className={styles['bar']}></div>

          <div className={styles['sns-login']}>
            <div className={'flex justify-center'}>간편 로그인</div>
            <div className={'flex justify-center'}>
              <div className={'flex justify-around w-[270px] mt-[15px]'}>
                <Image src={KakaoCircle} alt={'카카오 로그인'} />
                <Image src={GoogleCircle} alt={'구글 로그인'} />
                <Image src={NaverCircle} alt={'네이버 로그인'} />
              </div>
            </div>

          </div>

          <div className={styles['sign-up']}>
            <BeanButton text={'회원가입하기'} className={'mt-12'}/>
          </div>

        </div>
      </div>
    )
}