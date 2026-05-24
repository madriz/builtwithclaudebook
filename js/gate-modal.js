/**
 * Modal passcode gate for the exercises listing page.
 * The listing itself is public. Clicking a download link with [data-gated="true"]
 * triggers the modal if the unlock cookie is missing; on success the download
 * proceeds without losing the user's place on the page.
 */
(function () {
    var PASSCODE = 'BUILT28';
    var COOKIE_NAME = 'bwc_unlocked';
    var COOKIE_DAYS = 30;

    function isUnlocked() {
        return document.cookie.split(';').some(function (c) {
            return c.trim().indexOf(COOKIE_NAME + '=1') === 0;
        });
    }

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
            subtitle: 'Ingresa el código de acceso de tu libro para descargar esta plantilla.',
            placeholder: 'Ingresa el código',
            unlock: 'Desbloquear',
            error: 'Código incorrecto. Inténtalo de nuevo.',
            hint: 'El código se encuentra en la introducción del libro.',
            close: 'Cerrar'
        } : {
            title: 'Reader Access',
            subtitle: 'Enter the passcode from your book to download this template.',
            placeholder: 'Enter passcode',
            unlock: 'Unlock',
            error: 'Incorrect passcode. Please try again.',
            hint: 'The passcode can be found in the introduction of the book.',
            close: 'Close'
        };

        var modal = document.createElement('div');
        modal.className = 'gate-modal';
        modal.id = 'bwc-gate-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-labelledby', 'bwc-gate-modal-title');
        modal.style.display = 'none';
        modal.innerHTML =
            '<div class="gate-modal-backdrop" data-gate-close="1"></div>' +
            '<div class="gate-modal-box auth-box">' +
                '<button type="button" class="gate-modal-close" aria-label="' + s.close + '" data-gate-close="1">&times;</button>' +
                '<h2 id="bwc-gate-modal-title">' + s.title + '</h2>' +
                '<p class="auth-subtitle">' + s.subtitle + '</p>' +
                '<form id="bwc-modal-form">' +
                    '<label for="bwc-modal-input" class="visually-hidden">' + s.placeholder + '</label>' +
                    '<input type="text" id="bwc-modal-input" name="passcode" placeholder="' + s.placeholder + '" autocomplete="off">' +
                    '<button type="submit" class="btn btn-primary">' + s.unlock + '</button>' +
                '</form>' +
                '<p id="bwc-modal-error" class="auth-error" role="alert">' + s.error + '</p>' +
                '<p class="auth-hint">' + s.hint + '</p>' +
            '</div>';
        document.body.appendChild(modal);

        var input = document.getElementById('bwc-modal-input');
        var error = document.getElementById('bwc-modal-error');
        var form = document.getElementById('bwc-modal-form');

        var pendingHref = null;
        var pendingDownload = null;

        function openModal(href, download) {
            pendingHref = href;
            pendingDownload = download;
            error.style.display = 'none';
            input.value = '';
            modal.style.display = 'flex';
            setTimeout(function () { input.focus(); }, 50);
        }

        function closeModal() {
            modal.style.display = 'none';
            pendingHref = null;
            pendingDownload = null;
        }

        modal.addEventListener('click', function (e) {
            if (e.target && e.target.getAttribute && e.target.getAttribute('data-gate-close') === '1') {
                closeModal();
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && modal.style.display !== 'none') closeModal();
        });

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var val = input.value.trim().toUpperCase();
            if (val === PASSCODE) {
                setCookie();
                var href = pendingHref;
                var download = pendingDownload;
                closeModal();
                if (href) {
                    var a = document.createElement('a');
                    a.href = href;
                    if (download != null) a.setAttribute('download', download || '');
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                }
            } else {
                error.style.display = 'block';
                input.value = '';
                input.focus();
            }
        });

        var gatedLinks = document.querySelectorAll('a[data-gated="true"]');
        for (var i = 0; i < gatedLinks.length; i++) {
            gatedLinks[i].addEventListener('click', function (e) {
                if (isUnlocked()) return;
                e.preventDefault();
                var href = this.getAttribute('href');
                var dl = this.hasAttribute('download') ? this.getAttribute('download') : null;
                openModal(href, dl);
            });
        }
    });
})();
