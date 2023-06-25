'use client'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import CustomSearch from './search'
import LoadModel from './LoadModel' 
import { SpinnerWrapper } from './components/Spinner'

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
        <Suspense fallback={<SpinnerWrapper />}>
          <LoadModel />
        </Suspense>
        <ambientLight />
      </Canvas>
    </main>
  )
}
