type num = number;
type str = string;
type bol = boolean;

type obj<
    val,
    key extends string = string> = {
        [K in key]: val
}

type Dict<T> = { [id: string]: T };

/** string type keyof T */
type StrKeys<T> = Extract<keyof T, string>;

type MsTime = {
    /** second */
    s: 1000;
    /** minute */
    m: 60_000;
    /** hour */
    h: 3_600_000;
    /** day */
    d: 86_400_000;
    /** week */
    w: 604_800_000;
}

type JsType =
    | 'array'
    | 'bigint'
    | 'boolean'
    | 'function'
    | 'NaN'
    | 'null'
    | 'number'
    | 'object'
    | 'string'
    | 'symbol'
    | 'undefined';

type JsTypeFind<S extends JsType> =
    S extends 'array'       ? any[] :
    S extends 'bigint'      ? bigint :
    S extends 'boolean'     ? boolean :
    S extends 'function'    ? Function :
    S extends 'NaN'         ? number :
    S extends 'null'        ? null :
    S extends 'number'      ? number :
    S extends 'object'      ? object :
    S extends 'string'      ? string :
    S extends 'symbol'      ? symbol :
    S extends 'undefined'   ? undefined : never;
