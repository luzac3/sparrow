export class DiscardFullWidth{
  discardFullWidth(htmlElement: HTMLElement) {
    htmlElement.addEventListener("keyup", event => {
      const element = event.target as HTMLInputElement;
      let str = element.value;

      while (str.match(/[^A-Z^a-z\d\_]/)){
        str = str.replace(/[^A-Z^a-z\d\_]/, "");
      }
      $(this).val(str);
    });
  }
}
