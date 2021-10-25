import common from '../common';
import initSlider from '../finctions/initSlider';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';
import initSelects from '../finctions/initSelects';
import initInstallmentsModal from '../finctions/initModals/initInstallmentsModal';

document.addEventListener('DOMContentLoaded', () => {
  common();

  initSlider(4);
  initSendRequestModal();
  initInstallmentsModal();
  initSelects();
});