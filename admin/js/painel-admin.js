

    const admDiv = document.getElementById('admDiv');
    const modal = document.getElementById('admModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Abrir modal ao clicar na div de ADMs
    admDiv.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Fechar modal
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fechar modal clicando fora
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
