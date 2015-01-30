soshBuilder is a tool for building UI testing around Karma and Protractor

Prerequisites
-------------

For most mac-based developer projects, we will use [Homebrew](http://brew.sh/).
Please go through the installation process. When things go wrong, we can then use brew doctor.
Once installed, we can then install NPM.

[Protractor](http://angular.github.io/protractor/#/) is a [Node.js](http://nodejs.org/) program.
To run, you will need to have Node.js installed.
You will download Protractor package using [npm](https://www.npmjs.org/), which comes with Node.js.
Check the version of Node.js you have by running `node --version`. It should be greater than v0.10.0.

In order to run end-to-end tests, you will have to run a local standalone Selenium Server to control browsers.
You will need to have the [Java Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
installed to run the standalone Selenium Server. Check this by running `java -version` from the command line.

[Karma](http://karma-runner.github.io/0.12/index.html) is a test runner for unit tests.
In order to run unit tests, you will need the GCC compiler.
The easiest way to get this is to install [Xcode](https://developer.apple.com/xcode/downloads/).
Check the version of Xcode you have by opening it up and checking the settings. It should be greater than v6.0.0.
Be sure to have ran Xcode at least once to accept it's Terms of Service so you can proceed.


Setup
-----

Install Homebrew:

    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    brew update
    brew doctor

Install Node and npm:

    brew install node

Next, in the directory in which you installed this repo, run the `npm install` command to build:

    npm install

This will install several command line tools, including `protractor`, `karma`, and `webdriver-manager`.


Verify Installs
-----

Try running `/node_modules/protractor/bin/protractor --version` to make sure it's working.

Likewise, try `./node_modules/karma/bin/karma --version` to verify that karma is working.

The `webdriver-manager` is a helper tool to easily get an instance of a Selenium Server running.
Use it to download the necessary binaries with:

    webdriver-manager update


Starting the Selenium server
-----

You will always start up a server with:

    webdriver-manager start

This will start up a Selenium Server and will output a bunch of info logs.
Your Protractor test will send requests to this server to control a local browser.
Leave this server running while testing.

You can see information about the status of the server at `http://localhost:4444/wd/hub`.


Running Protractor Tests
-----

To run Protractor locally, you will use:

    ./node_modules/protractor/bin/protractor

Protractor can run a subset of test code using their `suites` paradigm, e.g.:

    ./node_modules/protractor/bin/protractor --suite promo


Running Karma Tests
-----

To run Karma locally, you will use:

    ./node_modules/karma/bin/karma start

