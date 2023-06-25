'use client'
import React from 'react';
import { Spin } from 'antd'
import { Html } from '@react-three/drei'

export const SpinnerWrapper = () => {
  /* I have to take the Spin component and wrap it in an Html center tag in order for the 
   * react component to render inside of the Canvas tag of React fibre.
    */
    return(
      <Html center>
	<Spin />
      </Html>
    )
}
