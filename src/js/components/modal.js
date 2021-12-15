import { checkExistParent } from '../finctions/checkExistParent';

export class Modal {
  bodyElem;

  modalElem;
  modalContainerElem;
  modalContentElem;
  isOpenModal = false;
  isOpenThanksModal = false;

  modalThanksElem;
  modalThanksContainerElem;
  modalThanksCloseBtn;

  constructor(modalElem) {
    this.checkClickByModal = this.checkClickByModal.bind(this);
    this.setHeightModalContainer = this.setHeightModalContainer.bind(this);
    this.checkClickByModalThanks = this.checkClickByModalThanks.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);

    this.bodyElem = document.querySelector('body');

    this.modalElem = modalElem;
    this.modalContainerElem = this.modalElem.querySelector('.js-modal-container');
    this.modalContentElem = this.modalElem.querySelector('.js-modal-content');
    const btnSubmitForm = this.modalElem.querySelector('.js-btn-submit');
    const formModal = this.modalElem.querySelector('.js-form-modal');

    this.modalThanksElem = document.querySelector('#modal-thanks');
    this.modalThanksContainerElem = document.querySelector('#modal-thanks-container');
    this.modalThanksCloseBtn = document.querySelector('#close-thanks-modal');

    console.log(this.modalThanksCloseBtn);
    this.modalThanksCloseBtn.onclick = () => {
      this.onCloseModalThanks();
    }

    // todo убрать с фронта
    // if (formModal) {
    //   formModal.onsubmit = event => {
    //     event.preventDefault();

    //     if ($(formModal).parsley().isValid()) {
    //       this.onCloseModal();
    //       this.modalThanksElem.classList.add('mod-show');
    //       document.addEventListener('click', this.checkClickByModalThanks);

    //       return false;
    //     }
    //   }
    // }

    document.addEventListener('click', this.checkClickByModal);
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        this.onCloseModal();
      }
    });
  }

  setHeightModalContainer() {
    if (this.modalContentElem) {
      this.modalContainerElem.style.height = `${ this.modalContentElem.scrollHeight }px`;
    }
  }

  onOpenModal() {
    this.modalElem.classList.add('mod-show');
    this.setHeightModalContainer();
    this.bodyElem.classList.add('mod-no-scroll');

    window.addEventListener('resize', this.setHeightModalContainer);
  }

  onCloseModal() {
    this.modalElem.classList.remove('mod-show');
    this.isOpenModal = false;
    document.removeEventListener('click', this.checkClickByModal);
    window.removeEventListener('resize', this.setHeightModalContainer);
    this.bodyElem.classList.remove('mod-no-scroll');
  }

  checkClickByModal(event) {
    if (this.isOpenModal && !checkExistParent(event.target, this.modalContainerElem)) {
      this.onCloseModal();
    } else {
      this.isOpenModal = true;
    }
  }

  checkClickByModalThanks(event) {
    if (this.isOpenThanksModal && !checkExistParent(event.target, this.modalThanksContainerElem)) {
      this.onCloseModalThanks();
    } else {
      this.isOpenThanksModal = true;
    }
  }

  onCloseModalThanks() {
    this.modalThanksElem.classList.remove('mod-show');
    this.isOpenThanksModal = false;
    document.removeEventListener('click', this.checkClickByModalThanks);
  }
}

window.classModal = Modal;