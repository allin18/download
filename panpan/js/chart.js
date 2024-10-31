document.body.addEventListener('click', function (event) {
  if (event.target.className.indexOf('chart_') > -1) {
    var num = Number(event.target.className.split('chart_').pop())
    console.log(num)
    if (num === 5) {
      for (var i = 1; i < num + 1; i++) {
        document.querySelector('.chart_' + i).style.display = 'none'
        // var timestamp = new Date().getTime();
        // document.querySelector('.chart_1').src = document.querySelector('.chart_1').src + '?d=' + timestamp
      }
    } else {
      for (var i = 1; i < num + 2; i++) {
        console.log(i)
        document.querySelector('.chart_' + i).style.display = 'block'
      }
    }
  }
});