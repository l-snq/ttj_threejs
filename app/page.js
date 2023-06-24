'use client'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import CustomSearch from './search';
import LoadModel from './LoadModel' 

export default function Home() {

  return (
    <main 
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <CustomSearch />
      <Canvas style={{height: '100vh'}}>
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <LoadModel />
        </Suspense>
        <ambientLight />
      </Canvas>
    </main>
  )
}
