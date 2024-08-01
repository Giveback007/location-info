type WikiLoc = WikiPageInfo & GeoCodeLOC & { type: 'wiki-loc' };

type GeoCodeLOC = {
    name:         string;
    local_names?: { [key: string]: string };
    lat:          number;
    lon:          number;
    country:      string;
    state?:        string;
}

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
