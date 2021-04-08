import React from 'react'
import { useHistory } from "react-router-dom";

export const BackButton = ({ children }) => {
  let history = useHistory()
  return (
    <button type="button" className="btn btn-primary my-2" onClick={() => history.goBack()}>
      {children}
    </button>
  )
}

