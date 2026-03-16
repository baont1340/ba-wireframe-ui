// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Search filter
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.component-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();
            cards.forEach(card => {
                const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                card.style.display = title.includes(term) ? 'block' : 'none';
            });
        });
    }

    // Copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const codeBlock = btn.closest('.component-card').querySelector('.code-block');
            if (!codeBlock) return;

            const code = codeBlock.textContent.trim();
            navigator.clipboard.writeText(code).then(() => {
                const original = btn.innerHTML;
                btn.innerHTML = '✅ Copied!';
                btn.classList.add('bg-green-700', 'text-white');
                setTimeout(() => {
                    btn.innerHTML = original;
                    btn.classList.remove('bg-green-700', 'text-white');
                }, 2000);
            }).catch(err => {
                console.error('Copy failed', err);
            });
        });
    });
});