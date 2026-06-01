"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ConstellationPoints() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const count = 180;

  // Generate random points in a 3D bubble
  const [positions, initialPositions, linePositions, lineIndices] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const initial = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2.5 + Math.random() * 2.5;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      initial[i * 3] = x;
      initial[i * 3 + 1] = y;
      initial[i * 3 + 2] = z;
    }

    // Predefine index connections to create a beautiful neural lattice
    const indices: number[] = [];
    for (let i = 0; i < count; i++) {
      // Connect each point to its nearest indices to build a mesh structure
      for (let j = i + 1; j < Math.min(i + 4, count); j++) {
        indices.push(i, j);
      }
    }

    const linePos = new Float32Array(indices.length * 3);
    return [pos, initial, linePos, new Uint16Array(indices)];
  }, []);

  useFrame(({ clock, mouse }) => {
    const t = clock.elapsedTime * 0.15;
    const pointsGeo = pointsRef.current?.geometry;
    const linesGeo = linesRef.current?.geometry;

    if (!pointsGeo || !linesGeo) return;

    const posAttr = pointsGeo.attributes.position as THREE.BufferAttribute;
    const linePosAttr = linesGeo.attributes.position as THREE.BufferAttribute;

    // Apply slow drift & mouse attraction
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      // Drift math
      const offsetX = Math.sin(t + initialPositions[idx]) * 0.3;
      const offsetY = Math.cos(t * 1.2 + initialPositions[idx + 1]) * 0.3;
      
      // Mouse sway
      const mouseFactor = 1.0 - (initialPositions[idx + 2] / 5.0); // Depth parallax
      const targetX = initialPositions[idx] + offsetX + mouse.x * 1.5 * mouseFactor;
      const targetY = initialPositions[idx + 1] + offsetY + mouse.y * 1.2 * mouseFactor;

      // Smooth interpolation (lerp)
      posAttr.array[idx] += (targetX - posAttr.array[idx]) * 0.08;
      posAttr.array[idx + 1] += (targetY - posAttr.array[idx + 1]) * 0.08;
    }
    posAttr.needsUpdate = true;

    // Map new point positions to the lines segment buffer
    for (let k = 0; k < lineIndices.length; k++) {
      const ptIndex = lineIndices[k];
      linePosAttr.array[k * 3] = posAttr.array[ptIndex * 3];
      linePosAttr.array[k * 3 + 1] = posAttr.array[ptIndex * 3 + 1];
      linePosAttr.array[k * 3 + 2] = posAttr.array[ptIndex * 3 + 2];
    }
    linePosAttr.needsUpdate = true;

    // Subtle overall rotation
    if (pointsRef.current) pointsRef.current.rotation.y = clock.elapsedTime * 0.02;
    if (linesRef.current) linesRef.current.rotation.y = clock.elapsedTime * 0.02;
  });

  return (
    <group>
      {/* Constellation Nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#b7a8ff"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Constellation Connective Beams */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#3d1a78"
          transparent
          opacity={0.24}
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
}

export function ParticleNetworkScene() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <ConstellationPoints />
      </Canvas>
    </div>
  );
}
