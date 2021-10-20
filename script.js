var area = document.querySelector(".area");
var bottom = document.querySelector(".bottom-text");

area.addEventListener(
  "keypress",
  (event) => {
    area.childNodes[1].remove();
    area.innerHTML += event.key;
    addSpan();
  },
  false
);

area.addEventListener(
  "keydown",
  (event) => {
    if (event.code === "Backspace") {
      backspace();
    }
  },
  false
);

function backspace() {
  area.childNodes[1].remove();
  var text = area.innerHTML;
  var sliced = text.substring(0, text.length - 1);
  area.innerHTML = sliced;
  addSpan();
}

function addSpan() {
  item = document.createElement("span");
  item.innerHTML = "|";
  item.classList.add("cursor");
  area.appendChild(item);
}

function printUnder() {
  bottom.innerHTML = area.childNodes[0].textContent;
}
