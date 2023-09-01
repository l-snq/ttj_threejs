'use client'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import CustomSearch from './components/search'
import LoadModel from './LoadModel' 
import { SpinnerWrapper } from './components/Spinner'
import { Navigation } from './components/Navigation'

export default function Home() {

  return (
    <main 
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Canvas style={{height: '100vh'}}>
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={<SpinnerWrapper />}>
            <LoadModel />
            <Navigation style={{paddingLeft: 10}}/> 
          </Suspense>
        <ambientLight />
      </Canvas>
    </main>
  )
}
