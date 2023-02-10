import style from './index.module.css'
export const Button = ({ children, img, disabled, ...props }) => {
  return (
    <button className={style.button} disabled={disabled} {...props}>
      <img src={img} alt='icon' />
      {children}
    </button>
  )
}
