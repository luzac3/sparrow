export class ControlEventListner{
 private static addEvent = (elements: HTMLCollection | HTMLElement, eventName: string,  callback: () => void) => {
    Array.prototype.forEach.call(elements, element => {
      element.addEventListener(
        eventName,
        callback
      );
   });
 }

  static click(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "click", callback);
  }

  static dblclick(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "dblclick", callback);
  }

  static change(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "change", callback);
  }

  static load(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "load", callback);
  }

  static submit(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "submit", callback);
  }

  static reset(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "submit", callback);
  }

  static select(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "submit", callback);
  }

  static input(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "submit", callback);
  }

  static mouseup(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "mouseup", callback);
  }

  static mousedown(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "mousedown", callback);
  }

  static mouseover(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "mouseover", callback);
  }

  static mouseleave(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "mouseleave", callback);
  }

  static mousemove(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "mousemove", callback);
  }

  static mouseenter(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "mouseenter", callback);
  }

  static mouseout(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "mouseout", callback);
  }

  static keypress(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "keypress", callback);
  }

  static keyup(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "keyup", callback);
  }

  static keydown(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "keydown", callback);
  }

  static scroll(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "scroll", callback);
  }

  static focus(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "focus", callback);
  }

  static blur(elements: HTMLCollection | HTMLElement, callback: () => void): void {
    this.addEvent(elements, "blur", callback);
  }
}
