// TODO: This would need to support other languages than English.
const ADD_DESCRIPTIONS_MESSAGE =
  'You have attachments without descriptions. You can make these attachments more accessible if you add a description. Would you like to do that right now before you Tweet?';
const ADD_DESCRIPTION_LABEL = 'Add description';
const ADD_DESCRIPTIONS_LABEL = 'Add descriptions';
let askedOnce = false;

function a11yCheck(event) {
  // For v1, don't badger folks every time for the current Tweet.
  // v2 can have an option for this.
  if (askedOnce) {
    // Resetting for the next Tweet.
    askedOnce = false;
    return;
  }

  // Check to see if there is at least one missing description for an attachment.
  const attachments = document.querySelector('[data-testid="attachments"]');

  // Need to check for one or more descriptions.
  const mediaAltTextLinks =
    attachments?.querySelectorAll<HTMLElement>(
      `[role="link"][aria-label="${ADD_DESCRIPTION_LABEL}"], [role="link"][aria-label="${ADD_DESCRIPTIONS_LABEL}"]`,
    ) ?? [];

  const [missingAltTextLink] = [...mediaAltTextLinks].filter((link) => {
    const linkTextElement = link.querySelector<HTMLElement>(
      '[data-testid="altTextLabel"]',
    );

    // Need to check for one or more descriptions.
    return [ADD_DESCRIPTION_LABEL, ADD_DESCRIPTIONS_LABEL].includes(
      linkTextElement?.innerText ?? '',
    );
  });

  if (!missingAltTextLink) {
    // Resetting for the next Tweet.
    askedOnce = false;
    return;
  }

  askedOnce = true;

  if (confirm(ADD_DESCRIPTIONS_MESSAGE)) {
    event.preventDefault();
    event.stopPropagation();
    missingAltTextLink.click();
  }
}

function findTweetButton(element) {
  let potentialTweetButton = element;

  while (
    !['tweetButtonInline', 'tweetButton'].includes(
      potentialTweetButton.dataset.testid,
    )
  ) {
    if (potentialTweetButton === document.body) {
      potentialTweetButton = null;
      break;
    }

    potentialTweetButton = potentialTweetButton.parentElement;
  }

  return potentialTweetButton;
}

document.body.addEventListener('mousedown', (event) => {
  const { target } = event;
  const tweetButton = findTweetButton(target);

  if (tweetButton && tweetButton.ariaDisabled !== 'true') {
    a11yCheck(event);
  }
});
