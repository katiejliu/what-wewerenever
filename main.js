$(document).ready(function() {
  $(function() {
    $("#letter1, #letter2, #letter3, #letter4, #letter5").draggable();
  });

  $("#ripple").ripples({
    resolution: 512,
    dropRadius: 30, //px
    perturbance: 0.01
  });

  // $('.bg-1').ripples({
  // 	resolution: 512,
  // 	dropRadius: 20,
  // 	perturbance: 0.04,
  // });

  var text = document.getElementById("text");
  var newDom = "";
  var animationDelay = 6;

  for (let i = 0; i < text.innerText.length; i++) {
    newDom +=
      '<span class="char">' +
      (text.innerText[i] == " " ? "&nbsp;" : text.innerText[i]) +
      "</span>";
  }

  text.innerHTML = newDom;
  var length = text.children.length;

  for (let i = 0; i < length; i++) {
    text.children[i].style["animation-delay"] = animationDelay * i + "ms";
  }
});
