# Node, Grunt Cucumberjs

## tesla acceptance tests

Grunt task to run Cucumber tests with Nemo and produces HTML test reports 

## Setup WebDriver

Download Selenium Jar version 2.42.2 and create a symbolic lunk

``` shell
ln -s /Users/yourname/path/to/selenium-server-standalone-2.42.1.jar /usr/local/bin/selenium-server-standalone.jar
```

Download Chromedriver to your $HOME path


Run Cucumber tests

```bash
$ npm install
$ grunt cucumberjs --require test/features/step_definitions
```

# WebStorm configuration

```bash
Select Node.js and set below configuration
Node Interpreter: /usr/local/bin/node
JavaScript file: /usr/local/lib/node_modules/grunt-cli/bin/grunt
Application Parameters: cucumberjs
```
# tesla
