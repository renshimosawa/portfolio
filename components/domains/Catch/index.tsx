import styles from './Catch.module.scss'
import cn from 'classnames'

export type Props = {
  className?: string
}

const Catch: React.FC<Props> = ({ className }) => (
  <div className={cn(styles.default, className)}>
    <div className={styles.container}>
      <p className={styles.title}>青森をEmotionalに</p>
      <p className={styles.description}>
        若者の流行り言葉「エモい」は、
        <br />
        英語の”Emotional”が語源です。
        <br />
        <br />
        ボキャブラリーが乏しい言葉と言われることもありますが、
        <br />
        事象が「美しい・趣深い・懐かしい」ことによって、
        <br />
        心が揺さぶられるという意で使われます。
        <br />
        <br />
        つまり、「エモい」は
        <br />
        現代語版「をかし・あはれ」のような
        <br />
        言葉だと思います。
        <br />
        そう聞くと、をかしな言葉だなと思いませんか？
      </p>
    </div>
  </div>
)

export default Catch
