import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import useAuth from '@hooks/useAuth';

import logo from '@icons/logo_yard_sale.svg';
import styles from '@styles/Home.module.scss';

export default function Home() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const auth = useAuth();
  const router = useRouter();
  const [loginError, setLoginError] = useState(false);

  const handlerSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    auth
      .signIn(email, password)
      .then(() => {
        router.push('/dashboard');
      })
      .catch((error) => {
        setLoginError(true);
        console.log(error);
      });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Yard Sale Admin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>

      <main className={styles.main}>
        <Link href="/" passHref>
          <Image src={logo} alt="Logo" className={styles.logo} />
        </Link>
        <h1 className="title">Yard Sale Admin</h1>

        <div className={styles.Login}>
          <div className={styles['Login__form-container']}>
            <form className="form" onSubmit={handlerSubmit}>
              {loginError && <p className={styles.IncorrectLogin}>Incorrect email or password</p>}
              <label htmlFor="email" className="label">
                Email address
              </label>
              <input
                name="email"
                type="email"
                className={`input ${loginError && 'input-error'}`}
                placeholder="camilayokoo@gmail.com"
                ref={emailRef}
              />

              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                name="password"
                type="password"
                className={`input ${loginError && 'input-error'}`}
                placeholder="********"
                ref={passwordRef}
              />

              <button className="primary-button login-button" type="submit">
                Log in
              </button>

              <Link href="/PasswordRecovery" passHref>
                <p className={styles['forgot-password']}>Forgot my password</p>
              </Link>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
