import { useEffect, useRef } from "react";

const GalaxyBackground = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null, radius: 120 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const stars = Array.from({ length: 260 }, () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      return {
        x,
        y,
        baseX: x,
        baseY: y,
        r: Math.random() * 2.2,
        vx: Math.random() * 2.15,
        vy: Math.random() * 0.15,
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffffff"; // gold

      stars.forEach((s) => {
        // mouse repulsion
        if (mouse.current.x !== null) {
          const dx = mouse.current.x - s.x;
          const dy = mouse.current.y - s.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.current.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.current.radius - distance) / mouse.current.radius;
            s.x -= Math.cos(angle) * force * 6;
            s.y -= Math.sin(angle) * force * 6;
          } else {
            // return smoothly
            s.x += (s.baseX - s.x) * 0.02;
            s.y += (s.baseY - s.y) * 0.02;
          }
        }

        // subtle drift
        s.x += s.vx;
        s.y += s.vy;

        if (s.x > canvas.width) s.x = 0;
        if (s.y > canvas.height) s.y = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default GalaxyBackground;



// import React from "react";

// const GalaxyBackground = () => {
//   return (
//     <div className="absolute inset-0 z-0">
//       <Galaxy
//         starSpeed={0.5}
//         density={1}
//         hueShift={140}
//         speed={1}
//         glowIntensity={0.3}
//         saturation={0}
//         mouseRepulsion
//         repulsionStrength={2}
//         twinkleIntensity={0.3}
//         rotationSpeed={0.1}
//         transparent
//       />
//     </div>
//   );
// };

// export default GalaxyBackground;
