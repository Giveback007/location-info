import { keys } from './_keys';

{
    const isDev = import.meta.env.DEV;
    const isProd = import.meta.env.PROD;
    if (!isDev && !isProd) throw new Error('Unhandled Mode');

    const globals: Globals = {
        env: {
            isDev,
            isProd,
            env: isDev ? 'dev' : 'prod',
            isLocalhost: Boolean(
                window.location.hostname === 'localhost' ||
                // [::1] is the IPv6 localhost address.
                window.location.hostname === '[::1]' ||
                // 127.0.0.0/8 are considered localhost for IPv4.
                window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
            ),
        },
        pwa: {
            isStandalone: () =>
                !!window.matchMedia('(display-mode: standalone)').matches
                ||
                !!(navigator as any).standalone
                ||
                !!document.referrer.startsWith('android-app://'),
            installPrompt: null,
        },

        log: console.log,
        logErr: console.error,

        keys
    }

    Object.assign(globalThis, globals);
}