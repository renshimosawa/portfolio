import styles from './Footer.module.scss'

const currentYear = new Date()

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.right}>
        Historedge.com by Ren Shimosawa @copyright 2020-{currentYear.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
