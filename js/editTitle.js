let editTitle

document.addEventListener("DOMContentLoaded", function() {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  alphabet.push


  function randomNumber(min, max) { 
    return parseInt((Math.random() * (max - min) + min).toString().split(".")[0]);
  }

  function rchar() {
    let chars = ["A", "B", "C", "1", "2", "3"]
    
    let rchar = alphabet[randomNumber(0, alphabet.length)]
    return rchar
  }

  let title = document.getElementById("sidebar-status-txt")


  
  editTitle = function(newTitle) {
    let title = document.getElementById("sidebar-status-txt")
    let proh_title = document.getElementById("__settings-api-name-handle")
    title.innerHTML = newTitle
    proh_title.innerHTML = "minishxp / " + newTitle.replaceAll(" ", "-").toLowerCase()
  }

  editTitle("Test-" + (rchar() + rchar() + rchar() + rchar()))

  document.getElementById("rename-btn").onclick = function() {
    let res = prompt("New Name:", document.getElementById("sidebar-status-txt").innerHTML)
    editTitle(res)
  }
})