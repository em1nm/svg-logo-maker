class Svg {
    constructor(text = "", color = "") {
      this.text = text;
      this.color = color;
    }
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.renderShape()}${this.renderText()}</svg>`;
    }
  
    setText(text, color) {
      if (text.length > 3) {
        throw new Error("Text must not exceed 3 characters.");
      }
      this.text = text;
      this.color = color;
    }
  
    renderText() {
      if (!this.text || !this.color) {
        return "";
      }
      return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
    }
  
    setShape(shape) {
      this.shape = shape;
    }
  
    renderShape() {
      if (!this.shape) {
        return "";
      }
      return this.shape.render();
    }
  }
  module.exports = Svg;