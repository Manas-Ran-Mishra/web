const closeButton = document.getElementById('close');
const navBar = document.getElementById('navigation');
const icon = document.getElementById('side-toggle');
const navbarBg = document.getElementById('navigation-bg');
closeButton.addEventListener('keyup', (eventTriggerred) => {
  // console.log(eventTriggerred.key);
  if (eventTriggerred.key === 'Enter') {
    navBar.classList.remove('active');
    navbarBg.classList.remove('active-bg');
    icon.focus();
  }
});
icon.addEventListener('keyup', (eventTriggerred) => {
  // console.log(eventTriggerred.key);
  if (eventTriggerred.key === 'Enter') {
    navBar.classList.add('active');
    navbarBg.classList.add('active-bg');
    closeButton.focus();
  }
});
closeButton.addEventListener('pointerup', (_) => {
  navBar.classList.remove('active');
  navbarBg.classList.remove('active-bg');
  icon.focus();
});
icon.addEventListener('pointerup', (_) => {
  navBar.classList.add('active');
  navbarBg.classList.add('active-bg');
  closeButton.focus();
});
