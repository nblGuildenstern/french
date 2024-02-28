function myFunction() {
  var input, filter, ul, li, p, i, title;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("words");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName("p")[0];
    title = p.getAttribute("title")
    if (title.toUpperCase().indexOf(filter) > -1 || p.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function togglePopup(eventArgs) {
  const popupElement = document.getElementById("frenchVerb");
  var popupActive = false;
  var popup = document.getElementById("myPopup");
  var target = eventArgs.target;
  var elementToLookFor = "p";
    if(popupActive) {
      popup.classList.toggle("show");
      popupActive = false;
    } else {
      console.log(target.tagName.toLowerCase())
      if (target.tagName.toLowerCase() === elementToLookFor) {
        popup.classList.toggle("show");
        popupElement.innerHTML = target.innerHTML;
        //console.log(target);
        popupActive = true;
      } else {
        // console.log(target.tagName.toLowerCase())
      }
    }
  console.log(popupActive)
}

document.addEventListener("click", function (eventArgs) {
  togglePopup(eventArgs);
});

document.addEventListener("touchstart", function (eventArgs) {
  togglePopup(eventArgs);
});