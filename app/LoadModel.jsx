'use client'
import React, { useEffect, useRef, useReducer } from 'react'
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function LoadModel () {
	const [flag, toggle] = useReducer((state) => !state, true)
	
        useEffect(() => {
	    const interval = setInterval(toggle, 1000)
	    return () => clearInterval(interval)
	}, [])

	const ref = useRef()

	//useFrame((state, delta) => (ref.current.rotation.y += delta))

	const { scene } = useLoader(GLTFLoader, 
		  flag ? './character.glb' : './character.glb') 
	return <primitive ref={ref} object={scene}>
	</primitive>
}
