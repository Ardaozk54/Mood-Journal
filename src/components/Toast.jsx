function Toast(props){

if(!props.toast.message){
    return null;
}
return(
    <div className= {`toast ${props.toast.type}`}>
      {props.toast.message}
    </div>
)

}

export default Toast;

