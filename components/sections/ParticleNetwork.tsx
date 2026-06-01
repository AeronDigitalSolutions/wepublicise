"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/three/ParticleNetworkScene").then((m) => m.ParticleNetworkScene), {
  ssr: false,
});

export function ParticleNetwork() {
  return <Scene />;
}
