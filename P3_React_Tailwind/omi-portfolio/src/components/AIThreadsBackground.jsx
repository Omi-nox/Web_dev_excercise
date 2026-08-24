import React, { useEffect, useRef } from "react";

const AIThreadsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse tracking for dynamic interactive threads
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove);

    const resize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // AI Thread / Wave generator settings
    const threadsCount = 18;
    const threadColors = [
      "rgba(99, 102, 241, ",  // Indigo (#6366f1)
      "rgba(6, 182, 212, ",   // Cyan (#06b6d4)
      "rgba(139, 92, 246, ",  // Violet (#8b5cf6)
      "rgba(59, 130, 246, ",  // Blue (#3b82f6)
    ];

    // Create threads with distinct wave parameters
    const threads = Array.from({ length: threadsCount }).map((_, i) => ({
      yRatio: 0.15 + (i / threadsCount) * 0.7,
      amplitude: 25 + Math.random() * 35,
      frequency: 0.003 + Math.random() * 0.004,
      speed: 0.008 + Math.random() * 0.012,
      phase: Math.random() * Math.PI * 2,
      color: threadColors[i % threadColors.length],
      alpha: 0.15 + Math.random() * 0.25,
      thickness: 1.2 + Math.random() * 1.5,
      pulsePos: Math.random(), // 0 to 1 along curve
      pulseSpeed: 0.002 + Math.random() * 0.004,
    }));

    // Floating neural nodes
    const nodeCount = 35;
    const nodes = Array.from({ length: nodeCount }).map(() => ({
      x: Math.random() * (width || 800),
      y: Math.random() * (height || 600),
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: 1.5 + Math.random() * 2,
      color: threadColors[Math.floor(Math.random() * threadColors.length)],
    }));

    let time = 0;

    const render = () => {
      time += 1;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      // Draw background ambient dark glow
      const bgGlow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.4,
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.7
      );
      bgGlow.addColorStop(0, "rgba(15, 23, 42, 0.6)");
      bgGlow.addColorStop(0.5, "rgba(10, 10, 10, 0.85)");
      bgGlow.addColorStop(1, "rgba(10, 10, 10, 1)");
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Render Floating Neural Nodes & Connections
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Draw node connections to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.15;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `${n.color}${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw node point
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${n.color}0.7)`;
        ctx.shadowColor = `${n.color}1)`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Render AI Threads (Sinusoidal glowing bezier lines)
      threads.forEach((t) => {
        t.phase += t.speed;
        t.pulsePos = (t.pulsePos + t.pulseSpeed) % 1;

        const points = [];
        const baseY = height * t.yRatio;
        const segmentCount = 50;
        const stepX = width / segmentCount;

        for (let s = 0; s <= segmentCount; s++) {
          const px = s * stepX;
          
          // Base sinusoidal height calculation
          let wave =
            Math.sin(px * t.frequency + t.phase) * t.amplitude +
            Math.cos(px * t.frequency * 0.7 - t.phase * 0.5) * (t.amplitude * 0.4);

          // Mouse proximity influence (threads stretch/react to mouse)
          if (mouse.active) {
            const mdx = px - mouse.x;
            const mdy = baseY + wave - mouse.y;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mDist < 220) {
              const force = (1 - mDist / 220) * 45;
              wave += mdy > 0 ? force : -force;
            }
          }

          points.push({ x: px, y: baseY + wave });
        }

        // Draw thread line with gradient glow
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let p = 1; p < points.length - 1; p++) {
          const xc = (points[p].x + points[p + 1].x) / 2;
          const yc = (points[p].y + points[p + 1].y) / 2;
          ctx.quadraticCurveTo(points[p].x, points[p].y, xc, yc);
        }

        ctx.strokeStyle = `${t.color}${t.alpha})`;
        ctx.lineWidth = t.thickness;
        ctx.stroke();

        // Draw Traveling Data Pulse bead on thread
        const pulseIndex = Math.floor(t.pulsePos * (points.length - 1));
        const pulsePt = points[pulseIndex];
        if (pulsePt) {
          ctx.beginPath();
          ctx.arc(pulsePt.x, pulsePt.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${t.color}1)`;
          ctx.shadowColor = `${t.color}1)`;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.95 }}
    />
  );
};

export default AIThreadsBackground;
