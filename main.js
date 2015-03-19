var updateNavbar = function(page) {
    var navbar = document.getElementById('navbar');
    var menus = navbar.getElementsByTagName('a');
    
    for (var i = 0, len = menus.length; i < len; i++) {
        menus[i].parentElement.className = menus[i].getAttribute('href') == page ? 'active' : '';
    }
};

var updatePages = function(page) {
    var pages = document.getElementsByName('page');
    for (var i = 0, len = pages.length ; i < len ; i++) {
        pages[i].style.display = pages[i].id == page ? '' : 'none';
    }
};

var displayPage = function(page) {
    updateNavbar(page);
    updatePages(page);
};

var onMenuClicked = function(event) {
    var page = this.getAttribute('href');
    displayPage(page);
    event.preventDefault();
};

var initMenus = function() {
    var navbar = document.getElementById('navbar');
    var menus = navbar.getElementsByTagName('a');
    
    for (var i = 0, len = menus.length; i < len; i++) {
        menus[i].addEventListener("click", onMenuClicked);
    }
};

document.addEventListener("DOMContentLoaded", function(event) {
    initMenus();
    displayPage('accueil');
    var easter_egg = new Konami();
    easter_egg.load('http://gop-labs.xyz');
});