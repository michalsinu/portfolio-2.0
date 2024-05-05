class moveImages {
  init = () => {
    const moveImage = (imageSelector) => {
      const image = document.querySelector(imageSelector);
      if (image.complete) {
        initMoveImage(image);
      } else {
        image.onload = () => initMoveImage(image);
      }
    };

    const initMoveImage = (image) => {
      const maxX = window.innerWidth - image.clientWidth;
      const maxY = window.innerHeight - image.clientHeight;

      image.style.left = `${image.offsetLeft}px`;
      image.style.top = `${image.offsetTop}px`;

      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;
      const newDuration = Math.random() * 3 + 2;

      image.style.left = `${newX}px`;
      image.style.top = `${newY}px`;
      image.style.transition = `all ${newDuration}s ease-in-out`;
    };

    // Get all the div elements with class 'floatingIcons'
    var divsWithClass = document.querySelectorAll('.floatingIcons');

    // Loop through each element and add its ID to the array
    divsWithClass.forEach(function(div) {
        moveImage('#' + div.id);
    });

    setInterval(() => {
      divsWithClass.forEach(function(div) {
        moveImage('#' + div.id);
      });
    }, 5000); // Change positions every 5 seconds

  }
}

export default moveImages;