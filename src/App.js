import './App.css';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

function AnimatedBlobs() {
  return (
    <div className="jk-blobs-bg">
      <div className="jk-blob jk-blob1" />
      <div className="jk-blob jk-blob2" />
      <div className="jk-blob jk-blob3" />
      {/* 3D Orbs */}
      <div className="jk-orb jk-orb1" />
      <div className="jk-orb jk-orb2" />
      <div className="jk-orb jk-orb3" />
    </div>
  );
}

function App() {
  return (
    <div className="jk-app-bg">
      <AnimatedBlobs />
      <motion.h1 className="jk-title" initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
        JK Tools
      </motion.h1>
      <div className="jk-cards-container">
        <Tilt glareEnable={true} glareMaxOpacity={0.18} scale={1.07} tiltMaxAngleX={18} tiltMaxAngleY={18} className="jk-card-tilt">
          <motion.a className="jk-card jk-3d" href="https://www.jktracker.site/" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="jk-card-content">
              <span className="jk-card-title">JK Tracker</span>
              <span className="jk-card-link">Go to Tracker &rarr;</span>
            </div>
          </motion.a>
        </Tilt>
        <Tilt glareEnable={true} glareMaxOpacity={0.18} scale={1.07} tiltMaxAngleX={18} tiltMaxAngleY={18} className="jk-card-tilt">
          <motion.a className="jk-card jk-3d" href="https://www.bakerycrm.shop/login" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="jk-card-content">
              <span className="jk-card-title">JK Task Management</span>
              <span className="jk-card-link">Go to Task Management &rarr;</span>
            </div>
          </motion.a>
        </Tilt>
      </div>
    </div>
  );
}

export default App;
