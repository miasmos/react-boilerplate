import React from 'react';
import { Helmet } from 'react-helmet';
import { PatrickController } from './controllers';
import { i18n } from '../i18n';
import { WindowSize } from '../helpers';

export class App extends React.Component {
    state = {
        isMobile: WindowSize.breakpoint === WindowSize.MOBILE,
        language: i18n.language
    };

    constructor() {
        super();
        WindowSize.on('breakpoint', this.onBreakpoint.bind(this));
        i18n.on('language', this.onLanguageChange.bind(this));
    }

    render() {
        const { isMobile, language } = this.state;

        return (
            <React.Fragment>
                <Helmet>
                    <title>{i18n.title}</title>
                </Helmet>
                <PatrickController isMobile={isMobile} language={language} />
            </React.Fragment>
        );
    }

    onLanguageChange(language) {
        this.setState({
            ...this.state,
            language
        });
    }

    onBreakpoint(platform) {
        this.setState({
            ...this.state,
            isMobile: platform === WindowSize.MOBILE
        });
    }
}
