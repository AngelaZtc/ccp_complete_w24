
document.querySelectorAll('.middle h2').forEach(function(h2) {
    h2.addEventListener('mouseenter', function() {
        this.style.fontSize = '35px'; 
        this.style.color = 'rgb(133, 87, 87)';
        this.style.transition = 'font-size 0.5s'; 
    });

    h2.addEventListener('mouseleave', function() {
        this.style.fontSize = '';
        this.style.color = '';
    });
});



