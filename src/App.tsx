import React from 'react';
import './App.scss';
import {Canvas} from 'react-three-fiber';
import {softShadows, OrbitControls} from '@react-three/drei';
import Box from './components/Box';

softShadows();

function App() {
  return <>
    <Canvas
      shadows={true}
      camera={{position: [-5, 2, 10], fov: 60}}
    >
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow={true}
        position={[0, 10, 0]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />

      <group>
        <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
          <planeBufferGeometry attach='geometry' args={[100, 100]} />
          <shadowMaterial attach="material" opacity={0.3} />
        </mesh>
      </group>

      <Box position={[0, 1, 0]} args={[3, 2, 1]} color='#C6AF75' />
      <Box position={[-2, 1, -5]} args={[1, 2, 1]} color='#768692' wobbleSpeed={10} />
      <Box position={[5, 1, -2]} color='#80897A' wobbleSpeed={10} />

      {/*@ts-ignore*/}
      <OrbitControls />
    </Canvas>
  </>
}

export default App;
