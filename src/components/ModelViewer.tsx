import React, { useRef, useState, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw, SkipBack } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import * as THREE from 'three';

interface AnimationState {
  mixer: THREE.AnimationMixer | null;
  currentClip: THREE.AnimationClip | null;
  clips: THREE.AnimationClip[];
  isPlaying: boolean;
  currentTime: number;
  duration: number;
}

interface ModelViewerProps {
  modelPath: string;
  className?: string;
  scale?: number;
  showControls?: boolean;
  autoplay?: boolean;
}

const Model: React.FC<{
  modelPath: string;
  scale?: number;
  autoplay?: boolean;
  onAnimationsLoaded: (clips: THREE.AnimationClip[]) => void;
}> = ({ modelPath, scale = 0.01, autoplay = false, onAnimationsLoaded }) => {
  const meshRef = useRef<THREE.Group>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const [fbx, setFbx] = useState<THREE.Group | null>(null);
  const [clips, setClips] = useState<THREE.AnimationClip[]>([]);

  // Load FBX model and extract animations
  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(
      modelPath,
      (object) => {
        setFbx(object);

        // Extract animations from the FBX
        if (object.animations && object.animations.length > 0) {
          setClips(object.animations);
          onAnimationsLoaded(object.animations);

          // Create animation mixer
          mixerRef.current = new THREE.AnimationMixer(object);
        }
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total) * 100 + '%');
      },
      (error) => {
        console.error('Error loading model:', error);
        // Set a fallback model or show placeholder
        setFbx(null);
      }
    );
  }, [modelPath, onAnimationsLoaded]);

  // Animation loop
  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  if (!fbx) {
    return (
      <group>
        {/* Wireframe placeholder */}
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="#333333" wireframe />
        </mesh>

        {/* Optional: Add text indicating model is coming soon */}
        <mesh position={[0, -3, 0]}>
          <planeGeometry args={[4, 1]} />
          <meshBasicMaterial color="#666666" transparent opacity={0.8} />
        </mesh>
      </group>
    );
  }

  return (
    <primitive
      ref={meshRef}
      object={fbx}
      scale={[scale, scale, scale]}
    />
  );
};

export const ModelViewer: React.FC<ModelViewerProps> = ({
  modelPath,
  className = '',
  scale = 0.01,
  showControls = true,
  autoplay = false
}) => {
  const [animationState, setAnimationState] = useState<AnimationState>({
    mixer: null,
    currentClip: null,
    clips: [],
    isPlaying: autoplay,
    currentTime: 0,
    duration: 0
  });

  const [availableClips, setAvailableClips] = useState<THREE.AnimationClip[]>([]);

  const handleAnimationsLoaded = (clips: THREE.AnimationClip[]) => {
    setAvailableClips(clips);
    if (clips.length > 0) {
      // Auto-select first animation if available
      handleAnimationSelect(clips[0]);
    }
  };

  const handleAnimationSelect = (clip: THREE.AnimationClip) => {
    if (animationState.mixer) {
      // Stop current animation
      animationState.mixer.stopAllAction();

      // Start new animation
      const action = animationState.mixer.clipAction(clip);
      action.reset().play();

      setAnimationState(prev => ({
        ...prev,
        currentClip: clip,
        currentTime: 0,
        duration: clip.duration,
        isPlaying: true
      }));
    }
  };

  const togglePlayback = () => {
    if (!animationState.mixer || !animationState.currentClip) return;

    if (animationState.isPlaying) {
      animationState.mixer.stopAllAction();
    } else {
      const action = animationState.mixer.clipAction(animationState.currentClip);
      action.play();
    }

    setAnimationState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
  };

  const resetAnimation = () => {
    if (animationState.mixer && animationState.currentClip) {
      const action = animationState.mixer.clipAction(animationState.currentClip);
      action.reset().play();
      setAnimationState(prev => ({ ...prev, currentTime: 0 }));
    }
  };

  const stopAnimation = () => {
    if (animationState.mixer) {
      animationState.mixer.stopAllAction();
      setAnimationState(prev => ({ ...prev, isPlaying: false }));
    }
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        className="bg-gradient-to-b from-gray-900 to-black"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <Model
            modelPath={modelPath}
            scale={scale}
            autoplay={autoplay}
            onAnimationsLoaded={handleAnimationsLoaded}
          />

          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxDistance={20}
            minDistance={1}
          />
        </Suspense>
      </Canvas>

      {/* Animation Controls */}
      {showControls && availableClips.length > 0 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm rounded-lg p-3">
          <div className="flex flex-col gap-3 min-w-[300px]">
            {/* Animation Selection */}
            <div className="flex items-center gap-2">
              <label className="text-white text-sm font-medium min-w-[80px]">
                Animation:
              </label>
              <Select
                onValueChange={(value) => {
                  const clip = availableClips.find(c => c.name === value);
                  if (clip) handleAnimationSelect(clip);
                }}
              >
                <SelectTrigger className="flex-1 bg-black/50 border-primary/30 text-white">
                  <SelectValue placeholder="Select animation..." />
                </SelectTrigger>
                <SelectContent>
                  {availableClips.map((clip) => (
                    <SelectItem key={clip.name} value={clip.name}>
                      {clip.name} ({clip.duration.toFixed(1)}s)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={resetAnimation}
                className="text-white hover:bg-white/20 p-2"
                title="Reset animation"
              >
                <SkipBack size={16} />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={togglePlayback}
                className={`p-3 ${animationState.isPlaying ? 'text-red-400 hover:bg-red-400/20' : 'text-green-400 hover:bg-green-400/20'}`}
                title={animationState.isPlaying ? "Pause animation" : "Play animation"}
              >
                {animationState.isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={stopAnimation}
                className="text-white hover:bg-white/20 p-2"
                title="Stop animation"
              >
                <RotateCcw size={16} />
              </Button>
            </div>

            {/* Animation Info */}
            {animationState.currentClip && (
              <div className="text-center text-white/70 text-sm">
                {animationState.currentClip.name} • {animationState.currentTime.toFixed(1)}s / {animationState.duration.toFixed(1)}s
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};