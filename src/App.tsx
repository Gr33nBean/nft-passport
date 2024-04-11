import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div id="canvas-container" className="w-[100vw] h-[100vh]">
      <Canvas camera={{ position: [1, 1, 1] }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}

export default App;
