import { Env } from './Env';
import { i18n } from '../i18n';
const config = require('../../../config.json');

export class ConfigClass {
    constructor() {
        const data = Object.assign({}, config);
        if ('development' in data) delete data.development;
        if ('production' in data) delete data.production;
        if ('en' in data) delete data.en;
        if ('fr' in data) delete data.fr;

        const envData = Env.isDevelopment()
            ? config.development
            : config.production;

        let languageData = config[i18n.EN];
        if (i18n.language in config) {
            languageData = config[i18n.language];
        }

        Object.assign(this, data, languageData, envData);

        this.raw = config;
    }
}
export const Config = new ConfigClass();
