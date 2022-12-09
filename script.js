let myText = document.getElementById("my-text");
let copyText = document.getElementById("btn");

//For counting character
myText.addEventListener("input", () => {
  let count = myText.value.length;
  document.getElementById("count-result").textContent = `${count}`;
});

//For copying text
copyText.addEventListener("click", () => {
  myText.select(); //select the textfield
  //copy the text inside the textfield
  navigator.clipboard.writeText(myText.value);
  //Alert the copied text
  alert(`Copied the text: ${myText.value}`);
});
