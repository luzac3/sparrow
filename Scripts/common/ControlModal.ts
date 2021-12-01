import * as bootstrap from 'bootstrap';

export class ControlModal {
  modalObject: HTMLElement;
  modal: bootstrap.Modal;

  constructor(modalObject: HTMLElement) {
    this.modalObject = modalObject;
    this.modal = new bootstrap.Modal(modalObject, {backdrop: true} );
  }

  openModal(modalBodyMessage: string) {
    // modalの内容書き換え
    this.modalObject.getElementsByClassName('modal-body')[0].textContent = modalBodyMessage;
    this.modal.show();
    return new Promise(resolve => {
      const listner = resolve;
      const modalButtons = this.modalObject.getElementsByTagName('button');
      Array.prototype.forEach.call(modalButtons, modalButton => {
        modalButton.addEventListener(
          'click',
          listner,
          {once: true}
        );
      });
    });
  }

  clickOk() {
    this.modal.hide();
    return true;
  }

  clickCancel() {
    this.modal.hide();
    return false;
  }
}
