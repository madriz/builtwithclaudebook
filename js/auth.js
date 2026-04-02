/**
 * Simple passcode gate for companion site.
 * Checks against hardcoded passcode and stores unlock in a cookie.
 */
(function () {
    var PASSCODE = 'BUILT28';
    var COOKIE_NAME = 'bwc_unlocked';
    var COOKIE_DAYS = 30;

    function setCookie(name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + value + expires + '; path=/; SameSite=Lax';
    }

    function getCookie(name) {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var c = cookies[i].trim();
            if (c.indexOf(name + '=') === 0) {
                return c.substring(name.length + 1);
            }
        }
        return null;
    }

    function isUnlocked() {
        return getCookie(COOKIE_NAME) === '1';
    }

    function unlock() {
        setCookie(COOKIE_NAME, '1', COOKIE_DAYS);
    }

    // If already unlocked, show the gated content immediately
    if (isUnlocked()) {
        showContent();
        return;
    }

    // Otherwise, show the auth gate
    showGate();

    function showContent() {
        var gate = document.getElementById('auth-gate');
        var content = document.getElementById('gated-content');
        if (gate) gate.style.display = 'none';
        if (content) content.style.display = 'block';
    }

    function showGate() {
        var gate = document.getElementById('auth-gate');
        var content = document.getElementById('gated-content');
        if (gate) gate.style.display = 'flex';
        if (content) content.style.display = 'none';

        var form = document.getElementById('auth-form');
        var input = document.getElementById('auth-input');
        var error = document.getElementById('auth-error');

        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                var value = input.value.trim().toUpperCase();
                if (value === PASSCODE) {
                    unlock();
                    showContent();
                } else {
                    error.style.display = 'block';
                    input.value = '';
                    input.focus();
                }
            });
        }
    }
})();
