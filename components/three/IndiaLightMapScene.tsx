"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

declare global {
  interface Window {
    __indiaActiveCity?: string;
  }
}

// Metropolitan coordinate hotspots mapped in R3F spatial coords
const cityCoordinates = [
  { name: "Mumbai", pos: [-0.9, -0.2, 0.2] as [number, number, number] },
  { name: "Delhi", pos: [-0.3, 0.9, 0.2] as [number, number, number] },
  { name: "Bengaluru", pos: [-0.3, -1.2, 0.2] as [number, number, number] },
  { name: "Hyderabad", pos: [0.1, -0.6, 0.2] as [number, number, number] },
];

function Hotspot({ pos, name }: { pos: [number, number, number]; name: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.elapsedTime;
    const isActive = window.__indiaActiveCity?.toLowerCase() === name.toLowerCase();

    // Pulse active node, else float calmly
    if (isActive) {
      const scale = 1.6 + Math.sin(t * 8) * 0.4;
      meshRef.current.scale.set(scale, scale, scale);
      (meshRef.current.material as THREE.MeshBasicMaterial).color.setHex(0xffffff);
    } else {
      const scale = 1.0 + Math.sin(t * 2 + pos[0]) * 0.15;
      meshRef.current.scale.set(scale, scale, scale);
      (meshRef.current.material as THREE.MeshBasicMaterial).color.setHex(0xb7a8ff);
    }
  });

  return (
    <mesh ref={meshRef} position={pos}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshBasicMaterial color="#b7a8ff" transparent opacity={0.9} />
    </mesh>
  );
}

function IndianConstellation() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 480;

  // Generate stylized coordinates mapped to India's shape
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      
      // Interpolate points inside a stylized diamond polygon matching India outline
      const y = (Math.random() - 0.5) * 3.2; // vertical height
      let widthLimit = 0;
      
      if (y > 0.9) {
        // Northern tapered tip
        widthLimit = (1.6 - y) * 0.8;
      } else if (y > 0) {
        // Upper middle bulge (Gujarat to East)
        widthLimit = 1.4 - (y * 0.2);
      } else {
        // Southern tapered triangle
        widthLimit = (1.6 + y) * 0.8;
      }

      const x = (Math.random() - 0.5) * 2 * Math.max(0.2, widthLimit);
      const z = (Math.random() - 0.5) * 0.5;

      p[idx] = x;
      p[idx + 1] = y + 0.1; // Offset center slightly up
      p[idx + 2] = z;
    }
    return p;
  }, []);

  useFrame(({ clock, mouse }) => {
    if (!groupRef.current) return;
    
    // Slow drift & subtle mouse react
    groupRef.current.rotation.y = clock.elapsedTime * 0.05 + mouse.x * 0.22;
    groupRef.current.rotation.x = -mouse.y * 0.12;
  });

  return (
    <group ref={groupRef}>
      {/* Light Map point network */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.035} color="#b7a8ff" transparent opacity={0.65} sizeAttenuation />
      </points>

      {/* Hotspots overlay */}
      {cityCoordinates.map((city) => (
        <Hotspot key={city.name} pos={city.pos} name={city.name} />
      ))}
    </group>
  );
}

export function IndiaLightMapScene() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 50 }} dpr={[1, 1.5]} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <IndianConstellation />
      </Canvas>
    </div>
  );
}
