document.getElementById('confirmBtn').addEventListener('click', function () {
    this.textContent = '¡CONFIRMADO!';
    this.style.backgroundColor = '#2ecc71';

    // Crear efecto de confeti
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }

    this.disabled = true;

    // Redirigir al formulario después de una pequeña pausa
    setTimeout(() => {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSdRr8rBDNTK6y5S_O35dr_gUbIqwfqB2nYVVpKWVHCQDr30yQ/viewform?usp=dialog", "_blank");
    }, 1200); // 1.2 segundos para que se vea el confeti
});

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';

    const x = Math.random() * 100;
    const size = Math.random() * 8 + 4;
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

    confetti.style.left = `${x}%`;
    confetti.style.top = '-10px';
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.backgroundColor = color;
    confetti.style.borderRadius = '50%';
    confetti.style.position = 'absolute';

    document.querySelector('.invitation').appendChild(confetti);

    const animation = confetti.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(${Math.random() * 300 + 200}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
        duration: Math.random() * 2000 + 1000,
        easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
    });

    animation.onfinish = () => confetti.remove();
}
