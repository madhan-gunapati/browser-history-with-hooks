const BrowserItem = (props)=>{
    
    return <li>
       <p> {props.data.timeAccessed} </p>
       <img src={props.data.logoUrl} alt="logo" />
       <p> {props.data.title} </p>
       <p>{props.data.domainUrl}</p>
        <button type='button' onClick={()=>{props.func(props.data.id)}}>Delete</button>
          
         
          
    </li>
}

export default BrowserItem