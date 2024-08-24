// Script to enable dropdown slide effect for "About Us"
document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector('.dropdown');
    
    dropdown.addEventListener('show.bs.dropdown', function(e) {
        var dropdownMenu = this.querySelector('.dropdown-menu');
        dropdownMenu.style.display = 'block';
        dropdownMenu.classList.add('animated', 'slideInDown');
    });

    dropdown.addEventListener('hide.bs.dropdown', function(e) {
        var dropdownMenu = this.querySelector('.dropdown-menu');
        dropdownMenu.classList.remove('animated', 'slideInDown');
        dropdownMenu.style.display = 'none';
    });
});
