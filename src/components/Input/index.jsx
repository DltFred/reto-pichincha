import style from './index.module.css'
export const Input = ({ type, label, children, placeholder, ...props }) => {
  return (
    <div className={style.container}>
      {
        label && <label className={style.label}>{label}</label>
      }
      <div>
        <input className={style.input} type={type} placeholder={placeholder} {...props} />
        {children}
      </div>
    </div>
  )
}
