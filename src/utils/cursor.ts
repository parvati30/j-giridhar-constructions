import $ from "jquery";
import gsap from "gsap";

export default class Cursor {
    options: any;
    body: any;
    el: any;
    text: any;
    pos: any;
    stick: any;
    visible: boolean;
    visibleInt: any;

    constructor(options = {}) {
        this.options = $.extend(true, {
            container: "body",
            speed: 0.7,
            ease: "expo.out",
            visibleTimeout: 300
        }, options);

        this.body = $(this.options.container);
        this.el = $('<div class="cb-cursor"></div>');
        this.text = $('<div class="cb-cursor-text"></div>');
        this.visible = false;

        this.init();
    }

    init() {
        this.el.append(this.text);
        this.body.append(this.el);
        this.bind();
        this.move(-window.innerWidth, -window.innerHeight, 0);
    }

    bind() {
        const self = this;

        this.body
            .on("mousemove", (e: any) => {
                this.pos = { x: e.clientX, y: e.clientY };
                this.update();
            })
            .on("mousedown", () => self.setState("-active"))
            .on("mouseup", () => self.removeState("-active"))
            .on("mouseenter", "a,button,input,textarea", () => self.setState("-pointer"))
            .on("mouseleave", "a,button,input,textarea", () => self.removeState("-pointer"));
    }

    setState(state: string) {
        this.el.addClass(state);
    }

    removeState(state: string) {
        this.el.removeClass(state);
    }

    update() {
        this.move();
        this.show();
    }

    move(x?: number, y?: number, duration?: number) {
        gsap.to(this.el, {
            x: x || this.pos.x,
            y: y || this.pos.y,
            duration: duration || this.options.speed,
            ease: this.options.ease
        });
    }

    show() {
        if (this.visible) return;
        this.el.addClass("-visible");
        this.visible = true;
    }
}