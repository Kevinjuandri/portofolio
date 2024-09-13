document.addEventListener("DOMContentLoaded", function() {
    const guide = document.getElementById('guide');
    const closeGuide = document.getElementById('close-guide');

    if (window.innerWidth < 1024) {
        alert('Untuk tampilan terbaik, silakan lihat situs ini di mode desktop.');
        guide.style.display = 'block';
    }

    closeGuide.addEventListener('click', function() {
        guide.style.display = 'none';
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024) {
            guide.style.display = 'none';
        }
    });
});
