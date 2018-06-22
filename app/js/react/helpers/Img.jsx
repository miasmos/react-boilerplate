import React from 'react';
import { i18n } from '../../i18n';

// checks for the existence of images/image-language.ext
// falls back to images/image.ext on error

export class Img extends React.Component {
    state = {
        loader: undefined,
        errored: false
    };

    componentDidMount() {
        const loader = new Image();
        loader.addEventListener('error', event => this.onError(event));
        loader.src = this.getI18nImage(this.props.src);

        this.setState({
            ...this.state,
            loader
        });
    }

    onError(event) {
        event.preventDefault();

        this.setState({
            ...this.state,
            errored: true
        });
    }

    render() {
        const { alt, className, style, src } = this.props;
        return (
            <img
                src={this.state.errored ? src : this.getI18nImage(src)}
                alt={alt}
                className={className}
                style={style}
            />
        );
    }

    getI18nImage(src) {
        if (i18n.language === i18n.EN) {
            return src;
        }

        const arr = src.split('.');
        src = arr.reduce((a, value, index) => {
            if (index === 0) {
                return value;
            } else if (index === 1) {
                return `${a}-${i18n.language}.${value}`;
            } else {
                return `${a}.${value}`;
            }
        });
        return src;
    }
}
