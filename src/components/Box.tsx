import React, {FC, useRef, useState} from 'react';
import {MeshProps, useFrame} from 'react-three-fiber';
import {MeshWobbleMaterial} from '@react-three/drei';
import {useSpring, a} from '@react-spring/three';

interface Position {
  position: number[];
  args?: number[];
  color?: string;
  wobbleSpeed?: number;
}

const Box: FC<Position> = (props) => {

  const [expanded, setExpanded] = useState<boolean>(false)
  const { position, args = [1, 1, 1], color = 'blue', wobbleSpeed = 5 } = props

  const springProps = useSpring({
    scale: expanded ? [1.4, 1.4, 1.4] : [1, 1, 1],
  })

  const mesh = useRef<MeshProps | null>(null)
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    }
  })


  return <a.mesh
    onClick={() => setExpanded(prevState => !prevState)}
    scale={springProps.scale}
    castShadow={true}
    position={position}
    ref={mesh}
  >
    <boxBufferGeometry attach='geometry' args={args} />
    {/*@ts-ignore*/}
    <MeshWobbleMaterial attach='material' color={color} speed={wobbleSpeed} factor={0.2} />
  </a.mesh>
}

export default Box