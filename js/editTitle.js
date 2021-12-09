let editTitle
document.addEventListener("DOMContentLoaded", function() {
  let title = document.getElementById("sidebar-status-txt")
  let chars = ["A", "B", "C", "1", "2", "3"]

  let rndChars = 
  
  editTitle = function(newTitle) {
    let title = document.getElementById("sidebar-status-txt")
    let proh_title = document.getElementById("__settings-api-name-handle")
    title.innerHTML = newTitle
    proh_title.innerHTML = "minishxp / " + newTitle.replaceAll(" ", "-")
  }

  document.getElementById("rename-btn").onclick = function() {
    let res = prompt("New Name:", document.getElementById("sidebar-status-txt").innerHTML)
    editTitle(res)
  }
})