// Converted to JSX-friendly React structure
// Assumes useEffect, useRef, and canvas are handled in the component

import { useEffect, useRef } from 'react';

const ParticleExplosion = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let centreX = window.innerWidth / 2;
    let centreY = window.innerHeight / 2;
    let mouseX = 0;
    let mouseY = 0;
    let spawnX = centreX;
    let spawnY = centreY;
    let frameCount = 0;
    const spawnList = [];

    const focalDepth = 80;
    const focalPoint = 256;

    // Utility functions
    const RandomNormal = () => {
      const theta = Math.random() * Math.PI * 2;
      const nz = 1 - 2 * Math.random();
      const phi = Math.acos(nz);
      const nx = Math.sin(theta) * Math.sin(phi);
      const ny = Math.cos(theta) * Math.sin(phi);
      return { x: nx, y: ny, z: nz };
    };

    function Particle(emitter) {
      this.sx = emitter.sx;
      this.sy = emitter.sy;
      this.pos = emitter.pos;
      this.vel = emitter.vel;
      this.size = emitter.size;
      this.velsize = emitter.velsize;
      this.time = emitter.time;
      this.life = emitter.life;
      this.color = emitter.color;

      this.move = (plane) => {
        this.pos.x += this.vel.x * plane.x * 3;
        this.pos.y += this.vel.y * plane.y;
        this.pos.z += this.vel.z * plane.z * 1.5;
        this.size += this.velsize;
        this.time += 0.016;
        if (this.size <= 0) this.size = 0.001;
      };

      this.draw = () => {
        if (this.pos.z + focalDepth > 0 && this.time < this.life) {
          const depth = focalPoint / (this.pos.z + focalDepth);
          if (depth <= 0) return;
          const x = this.pos.x * depth + this.sx;
          const y = this.pos.y * depth + this.sy;
          const sz = this.size * depth;

          context.globalAlpha = 1.0 - this.time / this.life;
          context.beginPath();
          context.arc(x, y, sz, 0, 2 * Math.PI);
          context.fillStyle = this.color;
          context.fill();
        }
      };
    }

    function ParticleGroup(emitter) {
      this.emitter = emitter;
      this.emitter.series();
      this.time = 0;
      this.life = emitter.life;
      this.particles = [];
      this.plane = this.emitter.plane;

      this.spawn = () => {
        for (let i = 0; i < this.emitter.particleCount; i++) {
          this.emitter.generate();
          this.particles[i] = new Particle(this.emitter);
        }
      };

      this.update = () => {
        this.particles.forEach((p) => p.move(this.plane));
        this.time += 0.016;
        return this.time < this.life;
      };

      this.draw = () => {
        this.particles.forEach((p) => p.draw());
      };

      this.spawn();
    }

    function ExplodeParticleEmitter() {
      this.series = () => {
        this.plane = RandomNormal();
        this.iteration = 0;
        this.particleCount = 256;
        this.sx = spawnX;
        this.sy = spawnY;
        this.size = 6.0;
        this.time = 0;
        this.life = 5;
      };

      this.generate = () => {
        this.pos = { x: 0, y: 0, z: 0 };
        this.vel = RandomNormal();
        this.velsize = Math.random() * -1.0;
        this.life = Math.random() * 5.0;
        this.color = `rgb(${this.iteration / 4},${this.iteration / 16},${this.iteration / 32})`;
        this.iteration++;
      };

      this.create = () => {
        spawnList.push(new ParticleGroup(this));
        spawnList.push(new ParticleGroup(this));
      };

      this.series();
    }

    const explodeEmitter = new ExplodeParticleEmitter();

    function spawn() {
      explodeEmitter.create();
      spawnX = Math.random() * canvas.width;
      spawnY = Math.random() * canvas.height;
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      centreX = canvas.width / 2;
      centreY = canvas.height / 2;
    };

    const update = () => {
      for (let i = spawnList.length - 1; i >= 0; i--) {
        if (!spawnList[i].update()) spawnList.splice(i, 1);
      }
    };

    const render = () => {
      context.fillStyle = 'black';
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.globalCompositeOperation = 'lighter';
      spawnList.forEach((g) => g.draw());
      context.globalCompositeOperation = 'source-over';
    };

    const animate = () => {
      frameCount++;
      update();
      render();
      requestAnimationFrame(animate);
    };

    const mouseClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      spawnX = mouseX;
      spawnY = mouseY;
      spawn();
    };

    canvas.addEventListener('click', mouseClick);
    window.addEventListener('resize', resize);
    resize();
    animate();
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh', display: 'block' }} />;
};

export default ParticleExplosion;
