let c1 = document.getElementById("count");
let c2 = document.getElementById("count2");
let c3 = document.getElementById("count3");
let c4 = document.getElementById("count4");

let AllCourses = document.getElementById("AllCourses");
let wishlist = document.getElementById("wishlist");
let favBlog = document.getElementById("favBlog");
let divAllcourses = document.getElementById("divAllcourses");
let divwishlist = document.getElementById('divwishlist');
let divfavblogs = document.getElementById('divfavblogs');
let divrigistevent = document.getElementById('divrigistevent');
let registevent = document.getElementById('registevent');
let exitregistevent =document.getElementById('exitregistevent');

function counter(end , count){
    for(let i=0;i<=end;i++){
      setTimeout(()=>{
      count.innerHTML = i;
      },5*i)
    }
}
counter(500 ,c1);
counter(200 ,c2);
counter(400 ,c3);
counter(600 ,c4);

// ---------------------------------------
// slider
// this is slider
// ---------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  var elem = document.querySelector('.carousel');
  var flkty = new Flickity(elem, {
      cellAlign: 'left',
      contain: true,
      wrapAround: false,
      groupCells: 0,  // Show 3 items at a time
      pageDots: false,
      prevNextButtons: false,
      freeScroll: true,  // Allows smooth scrolling
    });
var elem = document.querySelector('.carouselComments');
var flkty = new Flickity(elem, {
    cellAlign: 'left',
    contain: true,
    wrapAround: false,
    groupCells: 0,  // Show 3 items at a time
    pageDots: false,
    prevNextButtons: false,
    freeScroll: true,  // Allows smooth scrolling
    });
});

AllCourses.addEventListener('click', function() {
  this.classList.add('active-under-button');
  favBlog.classList.remove('active-under-button');
  wishlist.classList.remove('active-under-button');
  divAllcourses.classList.add('able')
  divAllcourses.classList.remove('disable')
  divwishlist.classList.add('disable')
  divwishlist.classList.remove('able')
  divfavblogs.classList.remove('able')
  divfavblogs.classList.add('disable')


});

favBlog.addEventListener('click', function() {
  this.classList.add('active-under-button');
  AllCourses.classList.remove('active-under-button');
  wishlist.classList.remove('active-under-button');
  divfavblogs.classList.remove('disable')
  divfavblogs.classList.add('able')
  divAllcourses.classList.add('disable')
  divAllcourses.classList.remove('able')
  divwishlist.classList.add('disable')
  divwishlist.classList.remove('able')
});
wishlist.addEventListener('click', function() {
  this.classList.add('active-under-button');
  AllCourses.classList.remove('active-under-button');
  favBlog.classList.remove('active-under-button');
  divAllcourses.classList.add('disable')
  divAllcourses.classList.remove('able')
  divwishlist.classList.add('able')
  divwishlist.classList.remove('disable')
  divfavblogs.classList.remove('able')
  divfavblogs.classList.add('disable')
});


// registevent.addEventListener('click' , function(){
//   divrigistevent.classList.remove('disable')
//   divrigistevent.classList.add('able')
// });
// exitregistevent.addEventListener('click' , function() {
//   divrigistevent.classList.add('disable');
//   divrigistevent.classList.remove('able');
// });
