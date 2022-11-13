import Tippy from '@tippyjs/react';
import clsx from 'clsx';
import Button from '~/components/Button';
import styles from './Login.module.css';
function Login() {
    return (
        <Tippy interactive delay={[1000, 1000]} hideOnClick={true} placement="auto-start">
            <div className={clsx(styles.wrapperd)}>
                <div className={clsx(styles.wrapper)}>
                    <div className={styles.form}>
                        <h1 className={styles.title}>Log in to TikTok</h1>
                        <Button className={styles.btn}>Use QR code</Button>
                        <Button className={styles.btn}>Use phone / email / username</Button>
                        <Button className={styles.btn}>Continue with Facebook</Button>
                        <Button className={styles.btn}>Continue with Google</Button>
                        <Button className={styles.btn}>Continue with Twitter</Button>
                        <Button className={styles.btn}>Continue with LINE</Button>
                        <Button className={styles.btn}>Continue with KakaoTalk</Button>
                    </div>
                    <div className={styles.footer}>
                        <p>
                            Don’t have an account?{' '}
                            <a className={styles.primary} href="/">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </Tippy>
    );
}

export default Login;
