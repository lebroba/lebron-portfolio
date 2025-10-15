import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, useProgress, Html } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three';
import { cn } from '@/lib/utils';

// Loading component
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground">{progress.toFixed(0)}% loaded</p>
      </div>
    </Html>
  );
}

// 3D Model component
function Model({ url, format = 'fbx' }: { url: string; format?: 'gltf' | 'fbx' | 'obj' }) {
  const meshRef = useRef<THREE.Group>(null);

  // Load FBX model
  const fbx = useLoader(FBXLoader, url);

  // Auto-rotate animation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  // Center and scale the model
  React.useEffect(() => {
    if (fbx) {
      const box = new THREE.Box3().setFromObject(fbx);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      fbx.position.sub(center);
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = maxDim > 0 ? 2 / maxDim : 1;
      fbx.scale.multiplyScalar(scale);
    }
  }, [fbx]);

  return <primitive ref={meshRef} object={fbx} />;
}

// Scene component
function Scene({ modelUrl, format }: { modelUrl: string; format: 'gltf' | 'fbx' | 'obj' }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Model */}
      <Suspense fallback={<Loader />}>
        <Model url={modelUrl} format={format} />
      </Suspense>

      {/* Controls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={10}
        autoRotate={false}
      />
    </>
  );
}

// Main ModelViewer component
interface ModelViewerProps {
  modelUrl: string;
  format?: 'gltf' | 'fbx' | 'obj';
  className?: string;
  height?: string;
  width?: string;
}

export function ModelViewer({
  modelUrl,
  format = 'gltf',
  className,
  height = '400px',
  width = '100%'
}: ModelViewerProps) {
  const [error, setError] = useState<string | null>(null);

  const handleError = (error: Error) => {
    console.error('Model loading error:', error);
    setError('Failed to load 3D model. Please check the model URL and format.');
  };

  return (
    <div className={cn("relative", className)}>
      <div
        style={{ width, height }}
        className="border border-border rounded-lg overflow-hidden bg-gradient-to-br from-muted/50 to-muted"
      >
        {error ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-muted-foreground">
              <p className="text-sm">{error}</p>
              <button
                onClick={() => setError(null)}
                className="mt-2 text-xs text-primary hover:underline"
              >
                Try again
              </button>
            </div>
          </div>
        ) : (
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
          >
            <Scene modelUrl={modelUrl} format={format} />
          </Canvas>
        )}
      </div>
    </div>
  );
}

// Hook for loading models with error handling
export function useModelLoader() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadModel = async (url: string, format: 'gltf' | 'fbx' | 'obj' = 'gltf') => {
    setLoading(true);
    setError(null);

    try {
      // You can add validation logic here
      const response = await fetch(url, { method: 'HEAD' });
      if (!response.ok) {
        throw new Error(`Model not found: ${response.status}`);
      }

      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { loadModel, loading, error };
}