(function () {
    // Add CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .whatsapp-bubble {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #25D366;
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
            transition: all 0.3s ease;
            z-index: 1000;
        }
        .whatsapp-bubble:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 16px rgba(37, 211, 102, 0.6);
        }
    `;
    document.head.appendChild(style);

    // Add Font Awesome if not present
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fa = document.createElement('link');
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
        document.head.appendChild(fa);
    }

    // Add Bubble
    const bubble = document.createElement('a');
    bubble.href = 'https://wa.me/918467406492?text=Hi%2C%20I%20am%20looking%20for%20web%20services.';
    bubble.target = '_blank';
    bubble.className = 'whatsapp-bubble';
    bubble.innerHTML = '<i class="fab fa-whatsapp" style="font-size: 32px;"></i>';
    document.body.appendChild(bubble);
})();
