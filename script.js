const imgs = document.querySelectorAll('.small-img a');
const imgBtns = [...imgs];
let imgId = 1;

console.log(imgs.length);

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener('click', (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    '.img-showcase img:first-child'
  ).clientWidth;

  document.querySelector('.img-showcase').style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener('resize', slideImage);
