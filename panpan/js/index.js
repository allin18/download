document.body.addEventListener('click', function (event) {
  if (event.target.className.indexOf('popup-button-') > -1) {
    var num = event.target.className.split('popup-button-').pop()
    var isLeft = Number(num) < 6
    Swal.fire({
      showConfirmButton: false,
      imageUrl: "./img/index_popup_" + num + ".png",
      width: window.innerWidth * 0.8,
      showClass: {
        popup: `
              animate__animated
              ${isLeft ? 'animate__bounceInLeft' : 'animate__bounceInRight'}
              animate__faster
            `
      },
      hideClass: {
        popup: `
              animate__animated
              ${isLeft ? 'animate__bounceOutLeft' : 'animate__bounceOutRight'}
              animate__faster
            `
      },
    })
  }
  if (event.target.className.indexOf('index_info') > -1) {
    location.href = './info/index.html';
  }
});