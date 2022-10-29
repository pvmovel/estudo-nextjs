import styles from './section.module.css';

type Section = {
  content: string
}

export default function Section({ content }: Section) {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{ content }</h1>
    </section>
  )
}