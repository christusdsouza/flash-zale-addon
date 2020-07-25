# flash-zale-addon
Flash Sale Add-on for FIREFOX

Simple Grab/Refresh Flash sale products off e-commerce webpages.

## Usage
> Click the Add-on icon visible in the toolbar to start/stop.

## Features(Current)
> - Start/Stop control directly from the toolbar itself.
> - Refresh interval: 10 seconds
> - Refreshes from cache for faster loading time.

## Installation
1. Clone this repository or Download it. {extract the .zip after download}
2. In Firefox, goto `about:debugging` >> "This Firefox" and Click on "Load Temporary Add-ons"
3. Browse to the directory where you cloned/downloaded the repository files and select the file `manifest.json`.
4. The add-on should get loaded into the browser for the current runtime('Temporary Add-on').

## Bugs(Unwanted FEATURES)
- Refreshes the tab in focus, that is the current ActiveTab will be refreshed regardless of whichever tab you Start the Add-on.

## Future thoughts
+ JSON configurations(interval, reload the tab where add-on gets activated(hooked)).
+ Automatically detect and stop when the Tab navigates to another page, eg: Cart or Order/Delivery Process.
+ Support for Chrome

#### Feedbacks and Suggestions are welcomed...
