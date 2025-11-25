import React, { useRef, useEffect } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 180 });
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (event) => {
      mouseRef.current.x = event.x;
      mouseRef.current.y = event.y;
    };

    window.addEventListener("mousemove", handleMouseMove);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 0.6;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 25) + 1;
        this.connections = [];
      }

      draw() {
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        const mouse = mouseRef.current;
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          let forceDirX = dx / distance;
          let forceDirY = dy / distance;
          let force = (mouse.radius - distance) / mouse.radius;
          let moveX = forceDirX * force * this.density;
          let moveY = forceDirY * force * this.density;

          this.x -= moveX;
          this.y -= moveY;
        } else {
          if (this.x !== this.baseX) {
            this.x -= (this.x - this.baseX) / 20;
          }
          if (this.y !== this.baseY) {
            this.y -= (this.y - this.baseY) / 20;
          }
        }
      }
    }

    const initParticles = () => {
      particlesRef.current = [];
      const total = 400;

      for (let i = 0; i < total; i++) {
        particlesRef.current.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        );
      }

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          let p1 = particlesRef.current[i];
          let p2 = particlesRef.current[j];
          let dx = p1.x - p2.x;
          let dy = p1.y - p2.y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 200 && Math.random() < 0.05) {
            p1.connections.push(j);
          }
        }
      }
    };

    const connectParticles = () => {
      particlesRef.current.forEach((p1, i) => {
        p1.connections.forEach((index) => {
          const p2 = particlesRef.current[index];
          let dx = p1.x - p2.x;
          let dy = p1.y - p2.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          let opacity = Math.max(0, 0.15 - distance / 2000);
          ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
          ctx.lineWidth = 0.4;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        });
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        p.update();
        p.draw();
      });

      connectParticles();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const floatingEffect = setInterval(() => {
      particlesRef.current.forEach((p) => {
        p.baseX += (Math.random() - 0.5) * 0.5;
        p.baseY += (Math.random() - 0.5) * 0.5;
      });
    }, 2000);

    initParticles();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(floatingEffect);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{ backgroundColor: "#0c1659" }}
    />
  );
};

export default ParticlesBackground;

