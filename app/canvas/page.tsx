'use client';
import { createRoot } from 'react-dom/client'
import * as THREE from 'three'
import React, {useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

function Cube(props: ThreeElements['mesh']) {
    const [active, setActive] = useState(false);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => (mesh.current.rotation.x += delta))

    const mesh = useRef<THREE.Mesh>(null!);

    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 2.0 : 1}
              onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
      
         <boxGeometry args={[1, 1, 1]} />
         <meshStandardMaterial color={'hotpink'} />
      </mesh>
    )
};

createRoot(document.getElementById('root')!).render(
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube position={[-1.2, 0, 0]} />
      <Cube position={[1.2, 0, 0]} />
    </Canvas>,
  )
