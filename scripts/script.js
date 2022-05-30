const hiddenContent = document.getElementById("content");
const classList = hiddenContent.classList;

function delay() {
  setTimeout(() => {
    listaDeClasses.remove("d-none");
  }, 1200000);
}

function checkLocalStorage() {
  if (localStorage == null) {
    delay();
    localStorage.setItem("namespace.visited", 1);
  } else {
      classList.remove("d-none")
  }
}

checkLocalStorage();    