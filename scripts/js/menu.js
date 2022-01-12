(function () {
  var bodyEl = document.body,
    isOpen = false;

  function init() {
    initEvents();
  }

  function toggleMenu() {
    if (isOpen) {
      classie.remove(bodyEl, 'show-menu');
    } else {
      classie.add(bodyEl, 'show-menu');
    }
    isOpen = !isOpen;
  }

  init();
})();
