'use client';
import React from 'react';
import {Canvas} from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function App() {
  // do something here
  const loader = new GLTFLoader();

  loader.load('models/character.gltf', function (gltf) { // FIX
    scene.add( gltf.scene ); // FIX
  })

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

