const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
/* This browser event is the key to creating a custom installation -
firing before the browser shows its default installation prompt */
window.addEventListener('beforeinstallprompt', (event) => {
  /* Modern browser denies triggering installation directly for user consent & security purposes -
deferred until user interacts with UI */
  window.deferredPrompt = event;
  // Makes button visible for installation to trigger user interaction
  butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    /* PWA support is relatively modern support - 
    coded defensively for older browsers that won't ever fire prompt */
    if (!promptEvent) {
      return;
    }
    // Displays browser's native installation prompt
    promptEvent.prompt();
    // Resets prompt and hides installation button - ensuring single interaction
    window.deferredPrompt = null;
    butInstall.classList.toggle("hidden", true);
});

//Listens for when PWA is successfully installed
window.addEventListener('appinstalled', (event) => {
  // Finally, clears prompt as best practice
  window.deferredPrompt = null;
});
