type AlertType = 'success' | 'info' | 'warning' | 'error' | 'notification';

type Alert = {
    type?: AlertType;
    title: str;
    size?: 'reg' | 'wide'
    time?: num;
    text?: str;
}

type AlertProps = Alert & {
    id: str | num,
    remove: () => any,
    toDelete?: bol;
}

type _GeoCodeLoc = {
    name:         string;
    local_names?: { [key: string]: string };
    lat:          number;
    lon:          number;
    country:      string;
    state?:        string;
}

type GeoCodeLoc = {
    fullName: str;
    id: str;
    wiki?: {

    }
} & _GeoCodeLoc;

type WikiPageSearch = {
    pages: WikiPageInfo[];
}

type WikiPageInfo = {
    id:            number;
    key:           string;
    title:         string;
    excerpt:       string;
    matched_title: null | string;
    description:   null | string;
    thumbnail:     Thumbnail | null;
}

type Thumbnail = {
    mimetype: Mimetype;
    width:    number;
    height:   number;
    duration: null;
    url:      string;
}

enum Mimetype {
    ApplicationPDF = "application/pdf",
    ImageJPEG = "image/jpeg",
    ImagePNG = "image/png",
    ImageSVGXML = "image/svg+xml",
    ImageWebp = "image/webp",
}
