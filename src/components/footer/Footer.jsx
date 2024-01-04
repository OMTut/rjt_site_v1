import styles from './footer.module.css';
import Links from './links/Links';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <div className = {styles.footer}>
            <div className={styles.footerLinks}>
                <Links/>
                <small>&copy; Copyright {currentYear}, RJTuttle. All Rights Reserved.</small>
            </div>
        </div>
    )
}

export default Footer;