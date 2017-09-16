var inItemText = document.getElementById("in-item-text")

updateItemStatus = function() {
  var cbId = this.id.replace("cb_", "");
  var itemText = document.getElementById("item_" + cbId);

  if (this.checked) {
    itemText.style.textDecoration = "line-through";
    itemText.style.fontWeight = "800";
    itemText.classList.add('has-text-warning');
  } else {
    itemText.style.textDecoration = "none";
    itemText.style.fontWeight = "300";
    itemText.classList.remove('has-text-warning');
  }
};

renameItem = function() {
  var newText = prompt("이름을 뭘로 바꾸시겠습니까?");
  if (!newText || newText === '' || newText === ' ') {
    return false;
  }
  this.innerText = newText;
}

removeItem = function() {
  var spanId = this.id.replace("item_", "");
  this.style.display = "none";
}

addNewItem = function(list, itemText) {
  var date = new Date();
  var id = "" + date.getHours() + date.getMinutes() + date.getSeconds();

  var listItem = document.createElement("li");
  listItem.classList.add("is-primary");
  listItem.classList.add("box");
  listItem.style.width = "300px";
  listItem.style.height = "100px";
  listItem.id = "li_" + id;
  listItem.ondblclick = removeItem;

  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "cb_" + id;
  checkBox.onclick = updateItemStatus;

  var span = document.createElement("span");
  span.id = "item_" + id;
  span.innerText = itemText;
  span.onclick = renameItem;

  listItem.appendChild(checkBox);
  listItem.appendChild(span);
  list.appendChild(listItem);
}


inItemText.onkeyup = function(event) {
  if (event.which === 13 || event.keyCode === 13) {
    var itemText = inItemText.value;
    if (itemText === '' || itemText === ' ') {
      return false;
    }
    addNewItem(document.getElementById("list"), itemText);
  }
};