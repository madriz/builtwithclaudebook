/**
 * Inline passcode gate for individual gated pages (ex-02, ex-03, ex-04, etc).
 * If the unlock cookie is missing, injects a gate over the page content.
 * On successful unlock, reveals the original content without a page reload.
 */
(function () {
    var PASSCODE = 'BUILT28';
    var COOKIE_NAME = 'bwc_unlocked';
    var COOKIE_DAYS = 30;

    var unlocked = document.cookie.split(';').some(function (c) {
        return c.trim().indexOf(COOKIE_NAME + '=1') === 0;
    });
    if (unlocked) return;

    function setCookie() {
        var expires = new Date();
        expires.setTime(expires.getTime() + COOKIE_DAYS * 24 * 60 * 60 * 1000);
        document.cookie = COOKIE_NAME + '=1; expires=' + expires.toUTCString() + '; path=/; SameSite=Lax';
    }

    function ready(fn) {
        if (document.readyState !== 'loading') fn();
        else document.addEventListener('DOMContentLoaded', fn);
    }

    ready(function () {
        var lang = (document.documentElement.lang || 'en').toLowerCase();
        var es = lang.indexOf('es') === 0;
        var s = es ? {
            title: 'Acceso para lectores',
            subtitle: 'Ingresa el código de acceso de tu libro para acceder a este recurso.',
            placeholder: 'Ingresa el código',
            unlock: 'Desbloquear',
            error: 'Código incorrecto. Inténtalo de nuevo.',
            hint: 'El código se encuentra en la introducción del libro.'
        } : {
            title: 'Reader Access',
            subtitle: 'Enter the passcode from your book to access this resource.',
            placeholder: 'Enter passcode',
            unlock: 'Unlock',
            error: 'Incorrect passcode. Please try again.',
            hint: 'The passcode can be found in the introduction of the book.'
        };

        var main = document.getElementById('main');
        if (!main) return;

        main.style.display = 'none';

        var gate = document.createElement('section');
        gate.className = 'auth-gate';
        gate.id = 'bwc-auth-gate';
        gate.innerHTML =
            '<div class="auth-box">' +
                '<h2>' + s.title + '</h2>' +
                '<p class="auth-subtitle">' + s.subtitle + '</p>' +
                '<form id="bwc-auth-form">' +
                    '<label for="bwc-auth-input" class="visually-hidden">' + s.placeholder + '</label>' +
                    '<input type="text" id="bwc-auth-input" name="passcode" placeholder="' + s.placeholder + '" autocomplete="off" autofocus>' +
                    '<button type="submit" class="btn btn-primary">' + s.unlock + '</button>' +
                '</form>' +
                '<p id="bwc-auth-error" class="auth-error" role="alert">' + s.error + '</p>' +
                '<p class="auth-hint">' + s.hint + '</p>' +
            '</div>';

        main.parentNode.insertBefore(gate, main);

        var form = document.getElementById('bwc-auth-form');
        var input = document.getElementById('bwc-auth-input');
        var error = document.getElementById('bwc-auth-error');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var val = input.value.trim().toUpperCase();
            if (val === PASSCODE) {
                setCookie();
                gate.parentNode.removeChild(gate);
                main.style.display = '';
            } else {
                error.style.display = 'block';
                input.value = '';
                input.focus();
            }
        });
    });
})();
