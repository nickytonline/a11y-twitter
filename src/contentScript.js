// TODO: This would need to support other languages than English.
const ADD_DESCRIPTIONS_MESSAGE =
  'You have attachments without descriptions. You can make these attachments more accessible if you add a description. Would you like to do that right now before you Tweet?';
const ADD_DESCRIPTION_LABEL = 'Add description';
let askedOnce = false;

async function tweetButtonListener(event) {
  // For v1, don't badger folks every time for the current Tweet.
  // v2 can have an option for this.
  if (askedOnce) {
    // Resetting for the next Tweet.
    askedOnce = false;
    return;
  }

  // Check to see if there is at least one missing description for an attachment.
  const attachments = document.querySelector('[data-testid="attachments"]');
  const [missingDescription] = attachments
    ? attachments.querySelectorAll(
        `[role="link"][aria-label="${ADD_DESCRIPTION_LABEL}"]`,
      )
    : [];

  if (!missingDescription) {
    // Resetting for the next Tweet.
    askedOnce = false;
    return;
  }

  const shouldAddDescriptions = confirm(ADD_DESCRIPTIONS_MESSAGE);

  if (shouldAddDescriptions) {
    askedOnce = true;
    event.preventDefault();
    event.stopPropagation();
    missingDescription.click();
  } else {
    askedOnce = false;
  }
}

async function processTweetButtonContainer() {
  return new Promise((resolve, reject) => {
    function waitForPrimaryColumn() {
      const mainElement = document.querySelector('main');

      if (mainElement) {
        resolve(mainElement);
        return;
      }

      setTimeout(waitForPrimaryColumn, 250);
    }

    waitForPrimaryColumn();
  });
}

async function processTweetButtons() {
  const targetNode = await processTweetButtonContainer();
  const config = { attributes: false, childList: true, subtree: true };

  function callback(mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const tweetButton = mutation.target.querySelector(
          '[data-testid="tweetButtonInline"]',
        );

        if (tweetButton) {
          tweetButton.addEventListener('click', tweetButtonListener);
        }
      }
    }
  }

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
}

processTweetButtons();
