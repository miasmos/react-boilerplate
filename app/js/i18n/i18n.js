import * as Languages from './languages';
import { LANGUAGES } from '../enum';
import { Observer } from '../Observer';
const config = require('../../../config.json');

class i18nClass extends Observer {
    language;

    constructor() {
        super();
        Object.assign(this, LANGUAGES);
        this.setLanguage(this.getLanguageViaHostname());
    }

    // TODO: automatic binding of transforms to fields with their respective match
    // ex %YEAR% -> year()
    setLanguage(key) {
        if (key.toUpperCase() in this && this.language !== key) {
            this.language = key;
            Object.assign(this, Languages[key.toUpperCase()]);
            this.emit('language', key);
        }
    }

    getLanguageViaHostname() {
        for (let key in LANGUAGES) {
            const value = LANGUAGES[key];

            if (value === LANGUAGES.EN) {
                continue;
            }

            if (value in config) {
                if (!('url' in config[value])) {
                    continue;
                }

                const data = config[value].url;
                if (typeof data === 'string') {
                    data = [data];
                }

                for (let hostname of data) {
                    if (window.location.href.includes(hostname)) {
                        return value;
                    }
                }
            }
        }

        return LANGUAGES.EN;
    }
}

export class i18nTransforms {
    static year(text) {
        if (typeof text !== 'string' || !text.length) {
            return text;
        }
        return text.replace(/%YEAR%/g, new Date().getFullYear());
    }
}

export const i18n = new i18nClass();
