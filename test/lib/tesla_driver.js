/**
 * Created by kugajjar on 1/26/15.
 */

var TeslaDriver = function TeslaDriver(nemo) {
    this.nemo = nemo;
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

module.exports = TeslaDriver;
