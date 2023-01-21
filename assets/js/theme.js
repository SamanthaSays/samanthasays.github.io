function themeSelect() {
    document.getElementById("themeSelect").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.themeButton')) {
        var dropdowns = document.getElementsByClassName("themeContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function theme(theme) {
    let root = document.documentElement;
    if (theme == 'default') {
        root.style.setProperty('--background', '#FACFCF');
        root.style.setProperty('--navigation', '#F2465D');
        root.style.setProperty('--aside', '#F78190');
        root.style.setProperty('--footer', '#FF545A');
        root.style.setProperty('--textMain', 'black');
        root.style.setProperty('--textLink', '#0645AD');
        root.style.setProperty('--textLinkVisited', '#0B0080');
        root.style.setProperty('--textInverse', '#F2F2F2');
        localStorage.setItem("theme", JSON.stringify(theme));
    }
    if (theme == 'UESP') {
        root.style.setProperty('--background', '#FBEFD5');
        root.style.setProperty('--navigation', '#DBB378');
        root.style.setProperty('--aside', '#F5DEB3');
        root.style.setProperty('--footer', '#DBAD6F');
        root.style.setProperty('--textMain', 'black');
        root.style.setProperty('--textLink', '#0645AD');
        root.style.setProperty('--textLinkVisited', '#0B0080');
        root.style.setProperty('--textInverse', '#F2F2F2');
        localStorage.setItem("theme", JSON.stringify(theme));
    }
    if (theme == 'dark') {
        root.style.setProperty('--background', '#242424');
        root.style.setProperty('--navigation', '#121212');
        root.style.setProperty('--aside', '#212121');
        root.style.setProperty('--footer', '#1E1E1E');
        root.style.setProperty('--textMain', '#F2F2F2');
        root.style.setProperty('--textLink', '#AAAAAA');
        root.style.setProperty('--textLinkVisited', '#AAAAAA');
        root.style.setProperty('--textInverse', '#AAAAAA');
        localStorage.setItem("theme", JSON.stringify(theme));
    }
    if (theme == 'light') {
        root.style.setProperty('--background', 'white');
        root.style.setProperty('--navigation', '#D2D2D2');
        root.style.setProperty('--aside', '#EDEDED');
        root.style.setProperty('--footer', '#D9D9D9');
        root.style.setProperty('--textMain', 'black');
        root.style.setProperty('--textLink', '#202020');
        root.style.setProperty('--textLinkVisited', '#202020');
        root.style.setProperty('--textInverse', '#202020');
        localStorage.setItem("theme", JSON.stringify(theme));
    }
}