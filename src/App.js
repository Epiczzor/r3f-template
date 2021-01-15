import './App.css';
import { Canvas } from 'react-three-fiber';
import { Perf } from 'r3f-perf';
import Box from './components/Box';
import { OrbitControls } from '@react-three/drei';

function App() {


  return (
    <>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Perf />
    </Canvas>
    </>
  );
}

export default App;
