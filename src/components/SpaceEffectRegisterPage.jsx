// SpaceEffectRegisterPage.jsx

import React, { useEffect, useRef } from "react";

export default function SpaceEffectRegisterPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // ---------- STAR FIELD ----------
    const stars = Array.from({ length: 250 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.1,
    }));

    // ---------- PLANET ----------
    const planet = {
      x: canvas.width / 1.4,
      y: canvas.height / 2.2,
      radius: 90,
      glow: 25,
    };

    // ---------- MOUSE LIGHT EFFECT ----------
    const mouse = { x: 0, y: 0 };
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ----- Background Nebula Gradient -----
      const grd = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        100,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      );
      grd.addColorStop(0, "#14072b");
      grd.addColorStop(1, "#000814");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ---------- Stars ----------
      stars.forEach((star) => {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      // ---------- Planet ----------
      ctx.beginPath();
      ctx.shadowBlur = planet.glow;
      ctx.shadowColor = "#4f7cff";
      ctx.fillStyle = "#1a2e66";
      ctx.arc(planet.x, planet.y, planet.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.shadowBlur = 0;

      // ---------- Mouse Hover Light ----------
      const light = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        150
      );
      light.addColorStop(0, "rgba(140, 178, 255, 0.45)");
      light.addColorStop(1, "transparent");
      ctx.fillStyle = light;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 150, 0, 2 * Math.PI);
      ctx.fill();

      requestAnimationFrame(draw);
    }

    draw();

    // Resize handler
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    ></canvas>
  );
}
