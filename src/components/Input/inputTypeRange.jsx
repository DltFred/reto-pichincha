import { Input } from '.'
import styles from './index.module.css'
export const InputTypeRange = ({ value, style, ...props }) => {
  return (
    <Input style={style} {...props} value={value}>
      <div className={styles.min}>0</div>
      <div className={styles.max}>100</div>
      <div className={styles.chip} style={style}>{value}</div>
    </Input>
  )
}
