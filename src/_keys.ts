export const keys: Secrets = {
    openWeather: (import.meta.env as any).VITE_OPEN_WEATHER,
    google: {
        mapsEmbedded: (import.meta.env as any).VITE_GOOGLE_MAPS_EMBEDED,
    }
}