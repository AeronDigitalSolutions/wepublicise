"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

declare global {
  interface Window {
    __attentionScrollProgress?: number;
  }
}

function FlowParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 1500;

  // Pre-calculate positions for the 4 morphing states
  const [chaosArr, sphereArr, torusArr, gridArr, positions] = useMemo(() => {
    const chaos = new Float32Array(count * 3);
    const sphere = new Float32Array(count * 3);
    const torus = new Float32Array(count * 3);
    const grid = new Float32Array(count * 3);
    const current = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const idx = i * 3;

      // 1. Chaos Layout: Random dispersion
      chaos[idx] = (Math.random() - 0.5) * 14;
      chaos[idx + 1] = (Math.random() - 0.5) * 8;
      chaos[idx + 2] = (Math.random() - 0.5) * 4;

      // 2. Attention Layout: Golden Spiral Sphere (Clarity starting to form)
      const phi = Math.acos(1 - 2 * (i / count));
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 2.4;
      sphere[idx] = r * Math.sin(phi) * Math.cos(theta);
      sphere[idx + 1] = r * Math.sin(phi) * Math.sin(theta);
      sphere[idx + 2] = r * Math.cos(phi);

      // 3. Trust Layout: Torus Ring (Strong community loops)
      const torusR = 2.6;
      const tubeR = 0.6;
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      torus[idx] = (torusR + tubeR * Math.cos(v)) * Math.cos(u);
      torus[idx + 1] = (torusR + tubeR * Math.cos(v)) * Math.sin(u);
      torus[idx + 2] = tubeR * Math.sin(v);

      // 4. Revenue Layout: Structured Flowing Wave grid (Complete commercial logic)
      const cols = 50;
      const xCol = i % cols;
      const yRow = Math.floor(i / cols);
      grid[idx] = (xCol - cols / 2) * 0.22;
      grid[idx + 1] = (yRow - (count / cols) / 2) * 0.22;
      grid[idx + 2] = Math.sin(xCol * 0.25) * 0.4;

      // Initialize with chaos coords
      current[idx] = chaos[idx];
      current[idx + 1] = chaos[idx + 1];
      current[idx + 2] = chaos[idx + 2];
    }

    return [chaos, sphere, torus, grid, current];
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const geo = ref.current.geometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    const scrollP = window.__attentionScrollProgress ?? 0;

    // Linear interpolation based on scroll triggers
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      let targetX = chaosArr[idx];
      let targetY = chaosArr[idx + 1];
      let targetZ = chaosArr[idx + 2];

      if (scrollP <= 0.33) {
        // Chaos -> Sphere
        const factor = scrollP / 0.33;
        targetX = chaosArr[idx] + (sphereArr[idx] - chaosArr[idx]) * factor;
        targetY = chaosArr[idx + 1] + (sphereArr[idx + 1] - chaosArr[idx + 1]) * factor;
        targetZ = chaosArr[idx + 2] + (sphereArr[idx + 2] - chaosArr[idx + 2]) * factor;
      } else if (scrollP <= 0.66) {
        // Sphere -> Torus
        const factor = (scrollP - 0.33) / 0.33;
        targetX = sphereArr[idx] + (torusArr[idx] - sphereArr[idx]) * factor;
        targetY = sphereArr[idx + 1] + (torusArr[idx + 1] - sphereArr[idx + 1]) * factor;
        targetZ = sphereArr[idx + 2] + (torusArr[idx + 2] - sphereArr[idx + 2]) * factor;
      } else {
        // Torus -> Wave Grid
        const factor = (scrollP - 0.66) / 0.34;
        targetX = torusArr[idx] + (gridArr[idx] - torusArr[idx]) * factor;
        targetY = torusArr[idx + 1] + (gridArr[idx + 1] - torusArr[idx + 1]) * factor;
        targetZ = torusArr[idx + 2] + (gridArr[idx + 2] - torusArr[idx + 2]) * factor;
      }

      // Add a subtle wave float dynamically
      const floatOffset = Math.sin(clock.elapsedTime * 1.5 + i) * 0.04;
      posAttr.array[idx] += (targetX - posAttr.array[idx]) * 0.08;
      posAttr.array[idx + 1] += (targetY + floatOffset - posAttr.array[idx + 1]) * 0.08;
      posAttr.array[idx + 2] += (targetZ - posAttr.array[idx + 2]) * 0.08;
    }
    posAttr.needsUpdate = true;

    // Slow ambient group rotations
    ref.current.rotation.y = clock.elapsedTime * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.038} color="#b7a8ff" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export function AttentionParticleScene() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 7.5], fov: 50 }} dpr={[1, 1.5]} gl={{ alpha: true }}>
        <ambientLight intensity={0.4} />
        <FlowParticles />
      </Canvas>
    </div>
  );
}
