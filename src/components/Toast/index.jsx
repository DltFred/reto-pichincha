import style from './index.module.css'
export const Toast = ({ message, image }) => {
  return (
    <div className={style.toast}>
      {
        image && <img src={image} alt='icon' />
      }
      <p>{message}</p>
    </div>
  )
}
