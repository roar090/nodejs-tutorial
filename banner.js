var fs=require('fs');
function banner() {
    var banner = fs.readFileSync('banner.txt');
    console.log(banner.toString());
}

exports.show = banner;