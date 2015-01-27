/**
 * Created by kugajjar on 1/26/15.
 */

var TeslaDriver = function TeslaDriver(nemo) {
    this.nemo = nemo;
    this.waitTimeOut = 10000;
}

TeslaDriver.prototype.click = function cilck(locator) {
    this.nemo.drivex.find(locator).click();
};

TeslaDriver.prototype.navigate = function navigate(url) {
    this.nemo.driver.navigate().to(url);
};

TeslaDriver.prototype.clearAndType = function clearAndType(locator, text) {
    this.nemo.drivex.find(locator).clear();
    this.nemo.drivex.find(locator).sendKeys(text);
};

TeslaDriver.prototype.sync = function sync(locator) {
    this.nemo.drivex.waitForElement(locator, this.waitTimeOut, locator.locator + " : did not display");
};


module.exports = TeslaDriver;
