// function search_words() {
//     let input = document.getElementById("searchbar").value;
//     input = input.toLowerCase();
//     let x = document.getElementById("list")
//     var y = document.getElementsByTagName("li");
    
//     for(i=0; i < y.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].computedStyleMap.display = "none";
//         } else {
//             x[i].computedStyleMap.display = "list-item"
//         }
//     }
// }

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("list");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}