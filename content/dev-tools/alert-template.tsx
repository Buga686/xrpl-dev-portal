import clsx = require('clsx');
import * as React from 'react';
  
const alertStyle = {
  position: "relative",
  margin: "0px",
  zIndex: "9999",
}
  
function typeToClass(type: string): string {
  if(type === "error") {
    return "alert-danger"
  } else if(type === "success") {
    return "alert-success"
  } else if(type === "info") {
    return "alert-info"
  } else {
    return ""
  }
}
  
export default function AlertTemplate ({ message, options, style, close }) {
  return(
    <div className={clsx("bootstrap-growl alert alert-dismissible", typeToClass(options.type))} style={{ ...alertStyle, ...style }}>
      <button className="close" data-dismiss="alert" type="button" onClick={close}>
        <span aria-hidden="true">×</span>
        <span className="sr-only">Close</span>
      </button>
      {message}
    </div>
  )
}