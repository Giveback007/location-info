import { writable } from "svelte/store";

const ls = {
    get: (key: str) => JSON.parse(localStorage.getItem(key) || 'null'),
    set: (key:str, data: any) => localStorage.setItem(key, JSON.stringify(data)),
}

const appId = `Location-Info-V1`
export function lsWritable<T>(initState: T, id: str) {
    const stateId = `${appId}-[${id}]`;
    const lsState = ls.get(stateId)
    let state = (lsState === '__null__' ? null : initState) as T;

    const wr = writable<T>(state);
    wr.subscribe(s => ls.set(stateId, s === null ? '__null__' : s))

    return wr;
}

export const geoId = ([lat, lon]: [num, num]) => `[${lat},${lon}]`;
export const locations = lsWritable<Dict<GeoCodeLoc>>({}, 'GeoCodeLoc[]-V1');

export const alertsState = writable<AlertProps[]>([]);
export function addAlert(props: Alert) {
    const id = Math.random();

    alertsState.update(s => {
        const x = {...props} as AlertProps
        x.id = id;
        x.remove = () => removeAlert(id)

        return [...s, x];
    });
}

function removeAlert(id: str | num) {
    alertsState.update(s => {
        const idx = s.findIndex(x => x.id === id);
        if (idx > -1) s.splice(idx, 1)

        return [...s];
    })
}