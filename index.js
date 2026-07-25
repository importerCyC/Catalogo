// Cache DOM element
const magicBtn = document.getElementById('magic-btn');
const canvas = document.getElementById('celebration-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let animationId = null;

// Handle Canvas Resize
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Brand colors for the particle explosion
const particleColors = [
    '#facc15', // Yellow/Gold
    '#2563eb', // Blue
    '#ffffff', // White
    '#60a5fa', // Light Blue
    '#f43f5e', // Rose/Coral
    '#a855f7'  // Purple
];

// Particle Class
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 6;
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)];

        // Spawn angle (mostly upwards: -180 to 0 degrees)
        const angle = Math.random() * Math.PI - Math.PI;
        const speed = Math.random() * 14 + 6; // explosive speed
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;

        this.gravity = 0.45;
        this.alpha = 1;
        this.decay = Math.random() * 0.02 + 0.018; // fades out in ~1.5 seconds
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 12 - 6;
        this.shape = Math.random() > 0.5 ? 'circle' : 'square';
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.alpha -= this.decay;
        this.rotation += this.rotationSpeed;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;

        if (this.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
            ctx.fill();
        } else {
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        }
        ctx.restore();
    }
}

// Function to start particle explosion
function explodeConfetti(originX, originY) {
    // Generate 120 colorful particles
    for (let i = 0; i < 120; i++) {
        particles.push(new Particle(originX, originY));
    }

    // Start animation loop if not currently active
    if (!animationId) {
        tick();
    }
}

// Main animation tick
function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles = particles.filter(p => p.alpha > 0);
    particles.forEach(p => {
        p.update();
        p.draw();
    });

    if (particles.length > 0) {
        animationId = requestAnimationFrame(tick);
    } else {
        animationId = null;
    }
}

// Click event for the magic button
magicBtn.addEventListener('click', (e) => {
    // Get origin point of the clicked button to explode particles from there
    const rect = magicBtn.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;

    // Explode confetti
    explodeConfetti(originX, originY);
});
