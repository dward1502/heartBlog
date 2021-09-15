
import styles from './footer.module.scss'

const footer = () => {
    const date = new Date()
    const currentYear = date.getFullYear()

    return (
        <footer className={styles.footer}>
            <small>&copy; Copyright {currentYear}, Daniel Ward. All Rights Reserved</small>        
        </footer>
    )
}

export default footer
