var searchInput = document.getElementById("searchInput");
var cards = document.getElementsByClassName("card");

searchInput.addEventListener("input", function () {
  var searchText = searchInput.value.toLowerCase();

  for (var i = 0; i < cards.length; i++) {
    var cardText = cards[i].textContent.toLowerCase();

    if (cardText.indexOf(searchText) > -1) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
});
