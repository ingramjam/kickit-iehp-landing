// FAQ Section - Optional JavaScript for enhanced features
// This module works without JavaScript, but you can add enhancements here

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Optional: Track FAQ interactions in HubSpot
    faqItems.forEach((item, index) => {
        item.addEventListener('toggle', function() {
            if (this.open) {
                console.log('FAQ opened:', item.querySelector('summary').textContent);
                
                // Optional: Send event to HubSpot analytics
                if (window._hsq) {
                    window._hsq.push(['trackCustomBehavioralEvent', {
                        name: 'FAQ Opened',
                        properties: {
                            question: item.querySelector('summary').textContent,
                            position: index + 1
                        }
                    }]);
                }
            }
        });
    });
});
