import Image from 'next/image'
import styles from './LogoFooter.module.scss'

const currentYear = new Date()

const LogoFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Image src="/logo_white.svg" alt="historedge" width="100" height="16" />
      <p className={styles.right}>
        @copyright 2020-{currentYear.getFullYear()}
      </p>
    </footer>
  )
}

export default LogoFooter
