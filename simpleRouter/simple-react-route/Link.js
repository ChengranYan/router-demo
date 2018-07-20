import React from 'react'

export default function Link (to, clickHandler) {
  return (
    <a href={to} onClick={clickHandler}>
      {children}
    </a>
  )
}