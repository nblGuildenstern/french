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

var popupIDs = ["top-left", "mid-left", "bot-left", "top-right", "mid-right", "bot-right"];
var subjects = ["je", "tu", "il", "nous", "vous", "ils"];
var popupActive = false;

function togglePopup(target) {
  const popupElement = document.getElementById("frenchVerb");
  var popup = document.getElementById("myPopup");
  var elementToLookFor = "p";
    if(popupActive) {
      var curElem = document.getElementById(target.id);
      while(true) {
        if(curElem == null || curElem.nodeName == "html") {
          console.log(target.id);
          popup.classList.toggle("show");
          popupActive = false;
          document.getElementById("present").getAttribute("checked") = true;
          break;
        } else if(curElem.className == "popup") {
          break;
        } else {
          console.log(document.getElementById(target.id).parentElement);
          curElem = curElem.parentElement;
        }

      }
    } else {
      if (target.tagName.toLowerCase() === elementToLookFor) {
        popup.classList.toggle("show");
        popupElement.innerHTML = target.innerHTML + " - " + target.getAttribute("title");
        // showPopup();
        popupActive = true;
        
      } else {
        console.log(target.tagName.toLowerCase())
      }
    }
    editPopup(target);
}

function editPopup(target) {
  fetch('./verbs.json')
    .then(response => response.json())
    .then(data => {
      
      data.forEach(item => {
        console.log(item.conjugations.je);
        
        if(target.innerHTML == item.french) {
          var i = 0;
          popupIDs.forEach(id => {
            document.getElementById(id).innerHTML = item.conjugations.present[subjects[i]]
            i++;
          });
        }
      })
    })
    .catch(error => console.error('Error fetching data:', error));
  
}

document.addEventListener("click", function (eventArgs) {
  togglePopup(eventArgs.target);
});

// document.getElementById("words").addEventListener("touchend", function (eventArgs) {
//   eventArgs.targetTouches.item.innerHTML = "hello"
//   togglePopup(eventArgs.touches[0]);
// });

fetch('./verbs.json')
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById('words');

      data.forEach(item => {
        const listItem = document.createElement("li");
        const pItem = document.createElement("p");
        pItem.textContent = item.french;
        pItem.title = item.english;
        listItem.appendChild(pItem);
        list.appendChild(listItem);
      })
    })
    .catch(error => console.error('Error fetching data:', error));

function testClick() {
  fetch('./verbs.json')
    .then((response) => response.json())
    .then((json) => console.log(json))
}