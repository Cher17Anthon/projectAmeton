class Slider {
  constructor (target) {
      this._el = typeof target == "string" ? document.querySelector(target) : target;
      this._elItems = this._el.querySelector(".slider_items");
      this._elItemList = this._el.querySelectorAll(".slider_item");
      this._interval = 5000;
      this._rect = this._el.getBoundingClientRect();
      this._slideId = 0;

      this.autoplay();
  }

  autoplay () {
      this._intervalId = setInterval(this.move.bind(this), this._interval);
  }

  move (step = 1) {
      this._slideId += step;

      if (this._slideId >= this._elItemList.length)
          this._slideId = 0; 
      // if () # если слайд < 0, тогда слайд = this._elItemList - 1;
      if(this._slideId < 0) {
          this._slideId = this._elItemList - 1;
      }

      let x = this._slideId * this._rect.width;
      this._elItems.style.transform = `translate(${-x}px, 0px)`;
  }
}

let modal = document.getElementById("myModal");
let btn =document.getElementById("myBth");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}



var modl = document.getElementById("myModa");


var butn = document.getElementById("myButt");


// var spa = document.getElementsByClassName("clos")[0];


butn.onclick = function() {
  modl.style.display = "block";
}


// spa.onclick = function() {
//     modl.style.display = "none";
// }


window.onclick = function(event) {
if (event.target == modl) {
  modl.style.display = "none";
}
}

