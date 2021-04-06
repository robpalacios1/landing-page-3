let buttonEditable = document.querySelector('.js-editable-button');
toggle_visibility(false);


buttonEditable.addEventListener('click', () => {
  handleEditable(false);
  toggle_visibility(false);
})

//function when press ctrl + k
function KeyPress(e) {
  var evtobj = window.event? event : e
  if (evtobj.keyCode == 75 && evtobj.ctrlKey) {
    handleEditable(true);
    toggle_visibility(true)
  }
}
document.onkeydown = KeyPress;

// function to select all text to edit
function handleEditable(editable) {
  document.querySelectorAll('.js-editable-item').forEach((ele) => {
    ele.contentEditable = editable;
  })
}

// function to show or hide button
function toggle_visibility(show) {
  buttonEditable.style.display = show ? 'block' : 'none';
}


