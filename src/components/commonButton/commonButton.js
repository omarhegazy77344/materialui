import React, { Children } from "react";
import Button from '@mui/material/Button'
const commonButton = (children, color, disabled, size, sx, variant) =>{
  return(
    <Button
    color={color}
    disabled={disabled}
    size={size}
    variant={variant}
    se={sx}
    >
      {children}
    </Button>
  )
}