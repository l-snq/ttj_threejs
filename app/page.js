'use client';
import React, { Suspense, useEffect, useReducer } from 'react'
import {Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


function Load() {
  const [flag, toggle] = useReducer((state) => !state, true)
  useEffect(() => {
    const interval = setInterval(toggle, 1000)
    return () => clearInterval(interval)
  }, [])
  const { scene } = useLoader(GLTFLoader, flag ? './character.gltf' : './character.gltf') 
  return <primitive object={scene} />
}

export default function Home() {

  return (
    <main>
      <div>
        Hi there
      </div>
      <Canvas>
        <Suspense fallback={null}>
          <Load />
        </Suspense>
        <ambientLight />
      </Canvas>
    </main>
  )
}
