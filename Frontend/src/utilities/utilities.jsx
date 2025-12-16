
export const getCutoffDate = () => {
  const currentDate = new Date();
  const cutoffDate = new Date(currentDate);
  return cutoffDate.setMonth(currentDate.getMonth() - 3);
}

let touchStart = 0;
let touchEnd = 0
// Scroll Horizontally on Mobile by touching.
export const handleTouchStart = (e) => {
  // get the initial touch position
  touchStart = e.targetTouches[0].clientX;
};

export const handleTouchMove = (e) => {
  //     update the touch position
  touchEnd = e.targetTouches[0].clientX;
};

export const handleTouchEnd = (moveSlide) => {
  if (touchStart - touchEnd > 50) {
    moveSlide("right");
  } else if (touchEnd - touchStart > 50) {
    moveSlide("left");
  }
};


