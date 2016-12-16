// Run this function after the page has loaded
$(function () {

var stocks = [
  "SMLPX", // SMLPX, https://finance.yahoo.com/quote/SMLPX?p=SMLPX
  "SRPFX", // SRPFX, https://finance.yahoo.com/quote/SRPFX?p=SRPFX
  "KIFAX", // KIFAX, https://finance.yahoo.com/quote/KIFAX/?p=KIFAX
  "AHBAX", // AHBAX, https://finance.yahoo.com/quote/AHBAX/?p=AHBAX
  "KGIYX", // KGIYX, https://finance.yahoo.com/quote/KGIYX/?p=KGIYX
  "SPTIX", // SPTIX, https://finance.yahoo.com/quote/SPTIX/?p=SPTIX
  "FIDMX", // FIDMX, https://finance.yahoo.com/quote/FIDMX/?p=FIDMX
  "FPREX", // FPREX, https://finance.yahoo.com/quote/FPREX/?p=FPREX
  "FDYTX", // FDYTX, https://finance.yahoo.com/quote/FDYTX/?p=FDYTX
  "ACGAX", // ACGAX, https://finance.yahoo.com/quote/ACGAX/?p=ACGAX
];

var fields = 'f=pl1'; // Requests the current price and previous closing price
var symbols = 's=' + stocks.join('+');
var url = 'https://finance.yahoo.com/d/quotes.csv?' + fields + '&' + symbols;

$.ajax(url).done(function (csv) {
  // Split the output up into an array of lines
  var lines = csv.trim().split('\n');

  // Iterate over each line
  for (var i = 0; i < lines.length; i++) {
    //Split the line up by comma
    var prices = lines[i].split(',');

    // Previous closing price of stock symbol
    var previousPrice = parseFloat(prices[0], 10);

    // Current price of stock symbol
    var currentPrice = parseFloat(prices[1], 10);

    // Change between closing price and current price rounded to 2 decimal points.
    var change = Math.round((currentPrice - previousPrice) * 100) / 100;

    // Percent change between closing price and current price rounded to 2 decimal points.
    var percentChange = Math.round((currentPrice - previousPrice) / previousPrice * 100 * 100) / 100;

    // Add a leading + for positive change
    if (change >= 0) {
        change = '+' + change;
    }

    // Add a leading + for positive percent change
    if (percentChange >= 0) {
        percentChange = '+' + percentChange;
    }


    // Add prices and changes to HTML element
    if (i == 0) { // SMLPX
        $('#smlpx-price').text(currentPrice.toLocaleString());
        $('#smlpx-change').text(change);
        $('#smlpx-percentChange').text(percentChange);
    } else if (i == 1) { // SRPFX
        $('#srpfx-price').text(currentPrice.toLocaleString());
        $('#srpfx-change').text(change);
        $('#srpfx-percentChange').text(percentChange);
    } else if (i == 2) { // KIFAX
        $('#kifax-price').text(currentPrice.toLocaleString());
        $('#kifax-change').text(change);
        $('#kifax-percentChange').text(percentChange);
    } else if (i == 3) { // AHBAX
        $('#ahbax-price').text(currentPrice.toLocaleString());
        $('#ahbax-change').text(change);
        $('#ahbax-percentChange').text(percentChange);
    } else if (i == 4) { // KGIYX
        $('#kgiyx-price').text(currentPrice.toLocaleString());
        $('#kgiyx-change').text(change);
        $('#kgiyx-percentChange').text(percentChange);
    } else if (i == 5) { // SPTIX
        $('#sptix-price').text(currentPrice.toLocaleString());
        $('#sptix-change').text(change);
        $('#sptix-percentChange').text(percentChange);
    } else if (i == 6) { // FIDMX
        $('#fidmx-price').text(currentPrice.toLocaleString());
        $('#fidmx-change').text(change);
        $('#fidmx-percentChange').text(percentChange);
    } else if (i == 7) { // FPREX
        $('#fprex-price').text(currentPrice.toLocaleString());
        $('#fprex-change').text(change);
        $('#fprex-percentChange').text(percentChange);
    } else if (i == 8) { // FDYTX
        $('#fdytx-price').text(currentPrice.toLocaleString());
        $('#fdytx-change').text(change);
        $('#fdytx-percentChange').text(percentChange);
    } else if (i == 9) { // ACGAX
        $('#acgax-price').text(currentPrice.toLocaleString());
        $('#acgax-change').text(change);
        $('#acgax-percentChange').text(percentChange);
    }
  }
}).fail(function (error) {
    console.error(error);
});

var shell = require('electron').shell;
//open links externally by default
// $("#smplx").on('click', 'a[href^="https://finance.yahoo.com/quote/SMLPX?p=SMLPX"]', function(event) {
//     event.preventDefault();
//     shell.openExternal(this.href);
// });

function myFunction() {
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL('www.google.com');
}

});
