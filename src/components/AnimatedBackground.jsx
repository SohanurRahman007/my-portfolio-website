import React, { useEffect, useRef } from "react";

// The main component that renders the animated background
const AnimatedBackground = () => {
  // useRef is used to get a direct reference to the canvas element
  const canvasRef = useRef(null);

  // --- Configuration Constants ---
  // These values can be easily changed to customize the animation
  const NUM_PARTICLES = 100;
  const PARTICLE_COLOR = "#ffffff";
  const LINE_COLOR = "rgba(255, 255, 255, 0.2)";
  const MAX_LINE_DISTANCE = 120; // Maximum distance for particles to connect
  const PARTICLE_SPEED = 0.3; // Base speed of particles

  // useEffect hook to run the animation logic once the component mounts
  useEffect(() => {
    // Get the canvas and its 2D rendering context
    const canvas = canvasRef.current;
    if (!canvas) return; // Guard clause if canvas ref is not available
    const ctx = canvas.getContext("2d");

    // --- Particle Class Definition ---
    // A class to represent and manage individual particles in the animation
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 2 + 1;
        this.velocity = {
          x: (Math.random() - 0.5) * PARTICLE_SPEED,
          y: (Math.random() - 0.5) * PARTICLE_SPEED,
        };
      }

      // Method to draw the particle on the canvas
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = PARTICLE_COLOR;
        ctx.fill();
        ctx.closePath();
      }

      // Method to update the particle's position
      update() {
        // Reverse direction if particle hits a wall
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.velocity.x = -this.velocity.x;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.velocity.y = -this.velocity.y;
        }
        this.x += this.velocity.x;
        this.y += this.velocity.y;
      }
    }

    // --- Animation Logic ---
    let particles = [];

    // Function to create and initialize all particles
    const init = () => {
      particles = []; // Clear any existing particles
      for (let i = 0; i < NUM_PARTICLES; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    // Function to draw lines between nearby particles
    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          // Calculate distance between particles a and b
          const distance = Math.hypot(
            particles[a].x - particles[b].x,
            particles[a].y - particles[b].y
          );

          if (distance < MAX_LINE_DISTANCE) {
            // Set line properties
            ctx.beginPath();
            ctx.strokeStyle = LINE_COLOR;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    };

    // Main animation loop
    const animate = () => {
      // requestAnimationFrame tells the browser we want to perform an animation
      requestAnimationFrame(animate);

      // Clear the canvas on each frame with a solid background
      ctx.fillStyle = "#111827";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Connect particles before drawing them to keep lines in the back
      connectParticles();

      // Update and draw each particle
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
    };

    // --- Canvas and Window Resizing ---
    // Function to set the canvas dimensions to match the window size
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(); // Re-initialize particles on resize to prevent them from "teleporting"
    };

    // Set initial canvas dimensions and initialize particles
    setCanvasDimensions();

    // Add event listener for window resizing
    window.addEventListener("resize", setCanvasDimensions);

    // Start the animation loop
    animate();

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    // The canvas is the element that will display the animation.
    // It is fixed to the viewport with a low z-index to stay behind all other content.
    <div className="fixed inset-0 z-0 bg-gray-900 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
};

export default AnimatedBackground;
