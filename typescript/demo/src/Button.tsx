
const Button = (props:{handleclick:()=>void, lable:string, disabled:boolean}) => {
  return (
    <div>
        <button onClick={props.handleclick} disabled={props.disabled}>{props.lable}</button>
        {/* <Button handleClick={props.handleClick} lable="Click Me" disabled={false}/> */}<br></br>
        <button  disabled={false}>{props.lable}</button>
    </div>
  )
}

export default Button