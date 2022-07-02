# a11y-twitter 🐦

<p align="center">
<a href="https://chrome.google.com/webstore/detail/a11y-twitter/hephfilhhabfjonfejfndljbjelhchha">Chrome extension</a> - <a href="https://addons.mozilla.org/en-CA/firefox/addon/a11y-twitter/">Firefox extension</a> - <a href="https://microsoftedge.microsoft.com/addons/detail/a11y-twitter/kicgbhbbjgielehgoenkcijigakkmich">Edge extension</a>
</p>

Small changes to how you use Twitter to promote Tweeting in an accessible manner. For now, it will only prompt once per Tweet to add alt text to an attachment before you Tweet.

Simple but effective. 😎

The extension is available for Chrome and Chromium-based browsers that support the Chrome Web Store. It's coming soon to Firefox. It works, you just need to submit it to the add-on store. 😎

<p align="center">
  <img src="https://user-images.githubusercontent.com/833231/116556193-366ef180-a8cb-11eb-87ca-b28d1925f0e2.png" alt="The a11y Twitter extension in action prompting a user to add alt text to their images before Tweeting." />
</p>

### Install the extension unpacked

1. Run `yarn` to install the required dependencies.
2. Run `yarn build`
3. Load the browser extension unpacked from the `dist` folder.

- Follow the [how to install an add-on locally steps](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#installing) for Firefox
- Follow the [steps to load an unpacked extension in Chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest)

3. Navigate to Twitter and have fun!

### Installation for development

The browser extension is cross-browser for Chromium-based browsers (Google Chrome, Microsoft Edge etc.) and Firefox. When in _development mode with page reloading, it currently only works in Chrome_. Be sure to test in other Chromium-based browsers and Firefox by following the Install the extension unpacked section of the README.

1. Run `yarn` to install the required dependencies.
1. Run `yarn start` to start the browser extension in development mode. Note that with the v3 manifest for browser extensions, you can no longer do hot module reloading, but instead, the extension will cause a page refresh when the code has changed.
1. Load the browser extension unpacked from the `dist` folder.

- Follow the [steps to load an unpacked extension in Chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest) to load the browser extension.
