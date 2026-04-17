/**
 * Language toggle for companion site.
 * Writes preference to a 30-day cookie (bwc_lang) and navigates
 * between English root and Spanish /es/ mirror.
 */
(function () {
    var COOKIE_NAME = 'bwc_lang';
    var COOKIE_DAYS = 30;

    function setCookie(name, value, days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/; SameSite=Lax';
    }

    function getCookie(name) {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var c = cookies[i].trim();
            if (c.indexOf(name + '=') === 0) return c.substring(name.length + 1);
        }
        return null;
    }

    function currentLang() {
        var path = window.location.pathname;
        if (path === '/es' || path === '/es/' || path.indexOf('/es/') === 0) return 'es';
        return 'en';
    }

    function toEnglishPath() {
        var path = window.location.pathname;
        if (path === '/es' || path === '/es/') return '/';
        if (path.indexOf('/es/') === 0) return path.substring(3);
        return path;
    }

    function toSpanishPath() {
        var path = window.location.pathname;
        if (path === '/es' || path === '/es/' || path.indexOf('/es/') === 0) return path;
        if (path === '/' || path === '' || path === '/index.html') return '/es/index.html';
        return '/es' + path;
    }

    function init() {
        var lang = currentLang();

        if (getCookie(COOKIE_NAME) !== lang) {
            setCookie(COOKIE_NAME, lang, COOKIE_DAYS);
        }

        var toggles = document.querySelectorAll('[data-lang]');
        for (var i = 0; i < toggles.length; i++) {
            (function (el) {
                var target = el.getAttribute('data-lang');
                if (target === lang) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
                el.addEventListener('click', function (e) {
                    e.preventDefault();
                    setCookie(COOKIE_NAME, target, COOKIE_DAYS);
                    var url = target === 'es' ? toSpanishPath() : toEnglishPath();
                    window.location.href = url + window.location.hash;
                });
            })(toggles[i]);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
