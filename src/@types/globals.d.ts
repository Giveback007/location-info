/** api-keys/secrets/etc... */
type Secrets = {
    openWeather: str;
    google: {
        mapsEmbedded: str
    }
}

type ENV = {
    env: 'dev' | 'prod';
    isProd: bol;
    isDev: bol;
    isLocalhost: bol;
}

const keys: Secrets;
const env: ENV;
const isLocalhost: bol;
function log(...message: any[]): void;
function logErr(...message: any[]): void;

const pwa: {
    isStandalone: () => bol;
    installPrompt: BeforeInstallPromptEvent | null;
}

type Globals = {
    env: typeof env;
    keys: typeof keys;
    log: typeof log;
    logErr: typeof logErr;

    pwa: typeof pwa;
}

class BeforeInstallPromptEvent extends Event {
    readonly platforms: str[];
    readonly userChoice: Promise<{
      outcome: 'accepted' | 'dismissed',
      platform: str
    }>;
    prompt(): Promise<void>;
}
