# tesla acceptance tests - Node / Grunt Cucumber

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
$ grunt cucumberjs --require /test/features/step_definitions
```
# tesla
