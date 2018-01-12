// var urlPattern = new RegExp('(^http[s]?:\/\/www\.)((facebook\.com)|(gist\.github\.com))(\/\w+\/\w+).+$');
//  urlPattern = new RegExp('(^http[s]?:\/\/www.)((facebook\.com)|(gist\.github\.com))(\/\.+\/.+)(.+)$');
// var url = 'https://www.facebook.com/aaaaasdas/jjj'

// console.log(urlPattern.test(url));
var urlPattern = new RegExp('0x[a-zA-Z0-9]{40}');
 
var url = 'asd asd asd a 0x0000000000000000000000000000000000000000000000000000000000000000 '

console.log(url.search(urlPattern));

// 0000000000000000000000000000000000000000000000000000000000000000

var common = require('./common');

// common.getAddressFromGist('https://gist.github.com/phukq/f713c9249ec37c023938d482d5f252f6', function(rs){
//     console.log(rs);
// })

var content = 'Đây là địa chỉ eth Đây là địa chỉ ethĐây là địa chỉ ethĐây là địa chỉ eth 0xD6955f185645f27d60575Bd9cDB53bf91523fB97 rất nhiều tiền 0xF6955f185645f27d60575Bd9cDB53bf91523fB97 nhé!';
// content = '0xD6955f185645f27d60575Bd9cDB53bf91523fB97';

var addr = common.extractAddressFromText(content);
console.log('addr ', addr);


// D6955f185645f27d60575Bd9cDB53bf91523fB97