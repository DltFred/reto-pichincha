import { Input } from '.'
import style from './index.module.css'
export const InputTypeRange = ({ ...props }) => {
  return (
    <Input {...props}>
      <div className={style.min}>0</div>
      <div className={style.max}>100</div>
    </Input>
  )
}
