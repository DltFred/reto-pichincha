import { Input } from '.'
import style from './index.module.css'
export const InputWithImage = ({ img, label, type, placeholder }) => {
  return (
    <Input label={label} type={type} placeholder={placeholder}>
      <img className={style.img} src={img} alt='icon' />
    </Input>
  )
}
