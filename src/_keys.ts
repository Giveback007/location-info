export const keys: Secrets = {
    pocketbase: (import.meta.env as any).VITE_POCKETBASE,
    openWeather: (import.meta.env as any).VITE_OPEN_WEATHER,
    google: {
        mapsEmbedded: (import.meta.env as any).VITE_GOOGLE_MAPS_EMBEDED,
    }
}