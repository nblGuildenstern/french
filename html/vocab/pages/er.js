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