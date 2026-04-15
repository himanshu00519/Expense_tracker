// main.js — students will add JavaScript here as features are built

// Video Modal functionality
(function() {
    const modal = document.getElementById('videoModal');
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');
    const videoFrame = document.getElementById('videoFrame');
    const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

    if (!modal || !openBtn || !closeBtn || !videoFrame) return;

    // Open modal
    openBtn.addEventListener('click', function(e) {
        e.preventDefault();
        videoFrame.src = videoUrl;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        videoFrame.src = '';
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);

    // Close on click outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
})();
