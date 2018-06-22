import { Util } from './Util';
import { Observer } from '../Observer';

class WindowSizeClass extends Observer {
    init = false;
    window = window;
    width = 0;
    height = 0;
    lastWidth = 0;
    breakpoint;
    mobileBreakpoint = 1024;

    DESKTOP = 0;
    MOBILE = 1;

    constructor() {
        super();
        window.addEventListener('DOMContentLoaded', this.onResize.bind(this));
        window.addEventListener(
            'resize',
            Util.debounce(this.onResize.bind(this), 100)
        );
        this.onResize();
    }

    onResize() {
        this.lastWidth = this.width;
        this.width = this.window.innerWidth;
        this.height = this.window.innerHeight;

        if (this.init) {
            this.emit('resize', this.width, this.height);
        }

        if (
            this.lastWidth < this.mobileBreakpoint &&
            this.width >= this.mobileBreakpoint
        ) {
            this.breakpoint = this.DESKTOP;
            if (this.init) {
                this.emit('desktop', this.width, this.height);
                this.emit('breakpoint', this.breakpoint);
            }
        } else if (
            this.lastWidth > this.mobileBreakpoint &&
            this.width <= this.mobileBreakpoint
        ) {
            this.breakpoint = this.MOBILE;
            if (this.init) {
                this.emit('mobile', this.width, this.height);
                this.emit('breakpoint', this.breakpoint);
            }
        }

        if (!this.init) {
            this.breakpoint =
                this.width <= this.mobileBreakpoint
                    ? this.MOBILE
                    : this.DESKTOP;
        }
        this.init = true;
    }
}

export const WindowSize = new WindowSizeClass();
