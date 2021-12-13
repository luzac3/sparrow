export class ControlEventListner{
 private static promise = (elements: HTMLCollection | HTMLElement, eventName: string) => {
   return new Promise((resolve: (value?: Event) => void) => {
     const listner = resolve;
       Array.prototype.forEach.call(elements, element => {
         element.addEventListener(
           eventName,
           listner
         );
       });
   });
 }

  static click(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "click");
  }

  static dblclick(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "dblclick");
  }

  static change(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "change");
  }

  static load(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "load");
  }

  static submit(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "submit");
  }

  static reset(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "submit");
  }

  static select(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "submit");
  }

  static input(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "submit");
  }

  static mouseup(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "mouseup");
  }

  static mousedown(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "mousedown");
  }

  static mouseover(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "mouseover");
  }

  static mouseleave(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "mouseleave");
  }

  static mousemove(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "mousemove");
  }

  static mouseenter(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "mouseenter");
  }

  static mouseout(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "mouseout");
  }

  static keypress(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "keypress");
  }

  static keyup(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "keyup");
  }

  static keydown(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "keydown");
  }

  static scroll(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "scroll");
  }

  static focus(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "focus");
  }

  static blur(elements: HTMLCollection | HTMLElement): Promise<Event> {
    return this.promise(elements, "blur");
  }
}
