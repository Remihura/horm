setInterval(() => {
  $("#hour").text(Math.floor(c / 100000));
  $("#min").text(Math.floor((c % 60) / 60));
  $("#sec").text(Math.floor(c % 60));
  c = c + 1;
}, 1000);
