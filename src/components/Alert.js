import React from 'react'

const Alert = (props) => {
    const capitalized=(words)=>{
        const lower = words.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
      <div style={{height : "50px"}}>

    {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalized(props.alert.type)}</strong>: {props.alert.msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>}
</div>
  )
}

export default Alert