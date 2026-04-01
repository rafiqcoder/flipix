"use client";

import { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const STAR_COUNT = 150;

    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 0.5 + 0.2,
      baseSize: Math.random() * 0.1 + 0.3,
      phase: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.05 + 0.02
    }));

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let star of stars) {
        star.phase += star.twinkleSpeed;
        const scale = (Math.sin(star.phase) + 1) / 2;
        const radius = star.baseSize + scale * 2;

        ctx.shadowBlur = radius * 4;
        ctx.shadowColor = "#f4c62025";

        ctx.beginPath();
        ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "#836701";
        ctx.fill();
      }

      ctx.shadowBlur = 0;
    }

    function updateStars() {
      for (let star of stars) {
        star.y -= star.speed;

        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      }
    }

    let animationFrameId;

    function animate() {
      updateStars();
      drawStars();
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}