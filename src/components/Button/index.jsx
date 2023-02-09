import style from './index.module.css'
export const Button = ({ children, img, ...props }) => {
  return (
    <button className={style.button} {...props}>
      <img src={img} alt='icon' />
      {children}
    </button>
  )
}
