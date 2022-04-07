# a11y-twitter 🐦

<p align="center">
<a href="https://chrome.google.com/webstore/detail/a11y-twitter/hephfilhhabfjonfejfndljbjelhchha">Chrome extension</a> - <a href="https://addons.mozilla.org/en-CA/firefox/addon/a11y-twitter/">Firefox extension</a> - <a href="https://microsoftedge.microsoft.com/addons/detail/a11y-twitter/kicgbhbbjgielehgoenkcijigakkmich">Edge extension</a>
</p>

Small changes to how you use Twitter to promote Tweeting in an accessible manner. For now, it will only prompt once per Tweet to add alt text to an attachment before you Tweet.

Simple but effective. 😎

The extension is available for Chrome and Chromium based browsers that support the Chrome Web Store. It's coming soon to Firefox. It works, just need to submit it to the add-on store. 😎

<p align="center">
  <img src="https://user-images.githubusercontent.com/833231/116556193-366ef180-a8cb-11eb-87ca-b28d1925f0e2.png" alt="The a11y Twitter extension in action prompting a user to add alt text to their images before Tweeting." />
</p>

## Installation for local development

1. Run `yarn` to install the required dependencies.

### Firefox

1. Run `npm run build:firefox`
1. Follow the [how to install an add-on locally steps](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#installing)
1. Load the add-on in debug mode by selecting the `build/firefox/manifest.json` file when prompted.
1. Navigate to Twitter and have fun!

### Chrome

1. Run `npm run build:chrome`
1. Follow the [steps to load an unpacked extension in Chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest)
1. Load the unpacked extension by selecting the `build/chrome` directory when prompted.
1. Navigate to Twitter and have fun!
