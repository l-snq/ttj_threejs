import React from 'react'
import { Tooltip } from 'antd'
import { Html } from '@react-three/drei'

export const CustomTooltip = () => {
  return (
    <Html center>
      <div style={{display: 'flex', marginTop: '10em'}}>
	<Tooltip title="Type 'cd about' to go to my about page.">
	    <span> View commands </span>
	</Tooltip>
     </div>
       </Html>
  )
}
