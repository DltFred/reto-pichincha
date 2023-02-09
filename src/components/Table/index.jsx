import style from './index.module.css'
export const Table = ({ columns, rows, ...props }) => {
  return (
    <table className={style.table} {...props}>
      <thead>
        <tr>
          {
          columns.map(item => <th key={item.label}>{item.label}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          rows.map(row =>
            <tr key={row.id}>
              {columns.map(item => <td key={item.value}>{item.render ? item.render(row) : row[item.value]}</td>)}
            </tr>)
        }
      </tbody>
    </table>
  )
}
