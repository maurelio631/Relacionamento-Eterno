const hiddenContent = document.getElementById("content");
const classList = hiddenContent.classList;

function delay() {
  setTimeout(() => {
    listaDeClasses.remove("d-none");
  }, 1200000);
}

function checkLocalStorage() {
  if (localStorage == null) {
    localStorage.setItem("visited", "yes");
    delay();
  } else {
      classList.remove("d-none")
  }
}


checkLocalStorage()