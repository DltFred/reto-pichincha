import { Input } from '.'
import style from './index.module.css'
export const InputWithImage = ({ img, label, type, placeholder, onClick, ...props }) => {
  return (
    <Input label={label} type={type} placeholder={placeholder} {...props}>
      <img className={style.img} src={img} alt='icon' onClick={onClick} />
    </Input>
  )
}
