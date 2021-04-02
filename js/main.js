

function showInfo() {
    var divSinopse = document.querySelector(".hide");
    divSinopse.classList.replace('hide', 'show');
  }
  
  function removeInfo() {
    var divSinopse = document.querySelector(".show");
    divSinopse.classList.replace('show', 'hide');
  }