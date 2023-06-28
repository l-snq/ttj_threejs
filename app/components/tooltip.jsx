import React from 'react'
import { Tooltip } from 'antd'
import { Html } from '@react-three/drei'

export const CustomTooltip = () => {
  return (
    <Html center>
      <div style={{display: 'flex', marginTop: '20em'}}>
	<Tooltip title="Type 'cd about' to see who I am, what I have worked on, and what I enjoy!">
	    <span> Go to my About Me page.</span>
	</Tooltip>
	<Tooltip title="Type 'cd my_work' to see all my projects I have done, as well as things I am currently working on!">
	    <span> Go to my Portfolio page.</span> 
	</Tooltip>
	<Tooltip title="Type 'cd contact' to get a hold of me!">
	    <span> Go to my Contact Me page.</span>
	</Tooltip>
     </div>
       </Html>
  )
}
