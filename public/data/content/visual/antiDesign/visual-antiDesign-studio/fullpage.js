// CHAOS ENGINE
const chaosSlider = document.getElementById('chaosLevel');
const chaosValue = document.getElementById('chaosValue');
const chaosTargets = document.querySelectorAll('.chaos-target, .brutal-box, h2 span');

function applyChaos(intensity) {
    chaosValue.textContent = intensity + "%";
    
    // Convert intensity (0-100) to multiplier
    const factor = intensity / 50; 

    chaosTargets.forEach((el, index) => {
        // Generate deterministic but chaotic transforms based on index
        const randomRot = ((index % 5) - 2) * 5 * factor; 
        const randomX = ((index % 7) - 3) * 10 * factor;
        const randomY = ((index % 4) - 2) * 10 * factor;
        
        // Add jitter to element styles
        el.style.transform = `rotate(${randomRot}deg) translate(${randomX}px, ${randomY}px)`;
        
        // At high levels, mess with borders and filters
        if(intensity > 80) {
            el.style.filter = `contrast(${100 + (intensity - 80) * 2}%) hue-rotate(${randomRot * 10}deg)`;
            if (index % 2 === 0) el.style.borderColor = "var(--neon-green)";
        } else {
            el.style.filter = 'none';
            el.style.borderColor = ''; // reset
        }
    });

    // Adjust body background based on chaos
    if(intensity > 90) {
        document.body.style.backgroundColor = "var(--neon-yellow)";
    } else {
        document.body.style.backgroundColor = "var(--paper-white)";
    }
}

chaosSlider.addEventListener('input', (e) => {
    applyChaos(e.target.value);
});

// Initial application
applyChaos(15); // Start with mild chaos

// MOUSE HOVER "JITTER" EFFECT FOR TEXT
const headings = document.querySelectorAll('h1, h2, h3');

headings.forEach(h => {
    h.addEventListener('mouseover', function() {
        this.style.transition = "transform 0.1s";
        let count = 0;
        const interval = setInterval(() => {
            if(count > 5) clearInterval(interval);
            const x = Math.random() * 4 - 2;
            const y = Math.random() * 4 - 2;
            this.style.transform = `translate(${x}px, ${y}px)`;
            count++;
        }, 50);
    });
    
    h.addEventListener('mouseout', function() {
        // Reset to chaos engine state handled by slider, 
        // essentially wait for next slider update or reset manually.
        // For simplicity here, we just remove the inline translation
        this.style.transform = '';
        applyChaos(chaosSlider.value);
    });
});
