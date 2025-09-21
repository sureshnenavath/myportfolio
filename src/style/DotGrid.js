import React, { useEffect, useRef } from "react";

const DotGrid = ({
  dotSize = 6,
  gap = 20,
  baseColor = "#6366f1",
  activeColor = "#8b5cf6",
  proximity = 100,
  shockRadius = 200,
  shockStrength = 8,
  resistance = 600,
  returnDuration = 1,
  className,
  style,
}) => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = wrapper.offsetWidth;
      canvas.height = wrapper.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const dots = [];
    const cols = Math.floor(canvas.width / gap);
    const rows = Math.floor(canvas.height / gap);

    for (let x = 0; x <= cols; x++) {
      for (let y = 0; y <= rows; y++) {
        dots.push({
          x: x * gap,
          y: y * gap,
          offsetX: 0,
          offsetY: 0,
          targetX: 0,
          targetY: 0,
        });
      }
    }

    let mouseX = null;
    let mouseY = null;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      dots.forEach((dot) => {
        const dx = dot.x - clickX;
        const dy = dot.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < shockRadius) {
          const angle = Math.atan2(dy, dx);
          const force = (1 - dist / shockRadius) * shockStrength;
          dot.offsetX += Math.cos(angle) * force * 20;
          dot.offsetY += Math.sin(angle) * force * 20;
        }
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        let dx = 0;
        let dy = 0;

        if (mouseX !== null && mouseY !== null) {
          dx = dot.x - mouseX;
          dy = dot.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < proximity) {
            const angle = Math.atan2(dy, dx);
            const force = (1 - dist / proximity) * 15;
            dot.offsetX += Math.cos(angle) * force;
            dot.offsetY += Math.sin(angle) * force;
          }
        }

        dot.offsetX -= dot.offsetX / resistance;
        dot.offsetY -= dot.offsetY / resistance;

        const finalX = dot.x + dot.offsetX;
        const finalY = dot.y + dot.offsetY;

        ctx.beginPath();
        ctx.arc(finalX, finalY, dotSize, 0, Math.PI * 2);
        ctx.fillStyle =
          mouseX !== null &&
          mouseY !== null &&
          Math.sqrt(dx * dx + dy * dy) < proximity
            ? activeColor
            : baseColor;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
    };
  }, [
    dotSize,
    gap,
    baseColor,
    activeColor,
    proximity,
    shockRadius,
    shockStrength,
    resistance,
    returnDuration,
  ]);

  return (
    <section
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -1,          // ✅ keeps background behind content
        width: "100%",
        height: "100%",
        ...style,
      }}
      className={className}
      aria-hidden="true"
    >
      <div
        ref={wrapperRef}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          pointerEvents: "none", // ✅ ensures it won’t block clicks
        }}
      >
        <canvas ref={canvasRef} />
      </div>
    </section>
  );
};

export default DotGrid;
