var pic = document.getElementById('picture');
var menu = document.getElementById('menu');
var photo = document.getElementById('photo');
var all_pics = ['waves', 'ancient', 'vernazza']

var rand = Math.floor((Math.random() * all_pics.length));
console.log(rand);
photo.src = './imgs/' + all_pics[rand] + '.jpg';

