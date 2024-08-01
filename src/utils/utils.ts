/** A promise that waits `ms` amount of milliseconds to execute */
export const wait = (ms: num): Promise<void> =>
    new Promise((res) => setTimeout(() => res(), ms));

export const debounce = (fn: Function, ms: num) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};

const debounceDict: Dict<num> = {};
export const debounceById = (fn: Function, ms: num, id: str | num) => {
    const dId = debounceDict[id];
    if (dId) clearTimeout(dId);

    debounceDict[id] = setTimeout(fn, ms);
}

export function makeUrl(url: string, params?: Dict<str>): string {
    const urlObj = new URL(url)
    if (params) Object.entries(params)
        .forEach(([key, val]) => urlObj.searchParams.append(key, val))

    return urlObj.href
}

/**
 * Checks if object has the key, made as a function for type transfer.
 *
 * Uses `obj.hasOwnProperty(key)` instead of `key in obj`
 *
 * https://stackoverflow.com/questions/13632999/if-key-in-object-or-ifobject-hasownpropertykey
 */
export const hasKey = <
    K extends (string | number)
>(obj: any, key: K): obj is { [P in K]: any } =>
  isType(obj, 'object') && obj.hasOwnProperty(key);

/** An improved version of native `typeof` */
export function type(val: any): JsType
{
    if (typeof val === 'object') {
        if (Array.isArray(val)) return 'array';
        else if (val === null)  return 'null';
        else                    return 'object';
    } else {
        if (val !== val)        return 'NaN';
        else                    return typeof val;
    }
}

/**
 * The function will test if the type of the first
 * argument equals testType. Argument testType is a string
 * representing a javascript type.
 *
 * @param val value to be tested
 * @param testType to check if typeof val === testType
 * @example
 * ```js
 * isType([], 'array') //=> true
 * isType(null, 'undefined') //=> false
 * ```
 */
export const isType = <T extends JsType> (
  val: any, testType: T
): val is JsTypeFind<T> => type(val) === testType;