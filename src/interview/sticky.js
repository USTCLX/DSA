class Sticky {
  constructor(el) {
    this.el = el;
    this.init();
    this.state = {
      isSticky: false
    };
  }
  init() {
    this.placeholderEl = document.createElement("div");
    this.containerEl = this.el.parentNode;
    this.containerEl.insertBefore(this.placeholderEl, this.el);
    window.addEventListener("scroll", this.update);
  }
  update() {
    this.updateState();
    this.updateEl();
  }
  updateState() {
    const placeholderElRect = this.placeholderEl.getBoundingClientRect();
    const elRect = this.el.getBoundingClientRect();
    this.state = {
      ...this.state,
      placeholderElRect,
      left: placeholderElRect.left,
      width: placeholderElRect.width,
      height: elRect.height,
      isSticky: this.isSticky()
    };
  }
  updateEl() {
    const placeholderElStyle = { paddingTop: 0 };
    const elStyle = {
      position: "static",
      top: "auto",
      bottom: "auto",
      left: "auto",
      width: "auto"
    };
    if (this.state.isSticky) {
      elStyle.position = "fixed";
      elStyle.top = "0px";
      elStyle.left = this.state.left + "px";
      elStyle.width = this.state.width + "px";
      placeholderElStyle.paddingTop = this.state.height + "px";
    }
    this.batchStyle(this.el, elStyle);
    this.batchStyle(this.placeholderEl, placeholderElStyle);
  }

  isSticky() {
    const fromTop = this.state.placeholderElRect.top;

    return fromTop <= 0;
  }

  batchStyle(el, style = {}) {
    for (let k in style) {
      el.style[k] = style[k];
    }
  }
}
