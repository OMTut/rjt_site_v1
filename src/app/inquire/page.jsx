import styles from "./inquire.module.css"

export const metadata = {
  title: 'Inquire - Software Engineer',
  description: 'Contact Page for developer',
}

const InquirePage = () => {
    return (
      <div className={styles.inquireContainer}>
        <div className={styles.leftContainer}>
          <p>Some text or something will go here</p>
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Email'/>
            <input type='text' placeholder='Phone (Optional)'/>
            <textarea name='' id='' cols='30' rows='10' placeholder='Message'></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default InquirePage;