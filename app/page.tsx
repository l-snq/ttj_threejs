'use client';
import React from 'react';
import { createRoot } from 'react-dom/client';
import {Canvas} from '@react-three/fiber';

export default function App() {
  // do something here
  return (
    <main>
      <div>
        <Canvas> 
          <mesh>
            <ambientLight intensity={0.9} />
            <directionalLight color="red" position={[3, 0, 5]} />
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    </main>
  )
}

