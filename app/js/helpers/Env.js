import { ENVIRONMENTS } from '../enum';

export class EnvClass {
    get() {
        return this.isDevelopment()
            ? ENVIRONMENTS.DEVELOPMENT
            : this.isStaging()
                ? ENVIRONMENTS.STAGING
                : ENVIRONMENTS.PRODUCTION;
    }

    isDevelopment() {
        // inserted by webpack
        return process.env.NODE_ENV === ENVIRONMENTS.DEVELOPMENT;
    }

    isProduction() {
        // inserted by webpack
        return process.env.NODE_ENV === ENVIRONMENTS.PRODUCTION;
    }

    isStaging() {
        return process.env.NODE_ENV === ENVIRONMENTS.STAGING;
    }
}

export const Env = new EnvClass();
