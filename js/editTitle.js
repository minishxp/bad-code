let editTitle
document.addEventListener("DOMContentLoaded", function() {
  editTitle = function(newTitle) {
    let title = document.getElementById("sidebar-status-txt")
    let proh_title = document.getElementById("__settings-api-name-handle")
    title.innerHTML = newTitle
    proh_title.innerHTML = "minishxp / " + newTitle
  }

  document.getElementById("rename-btn").onclick = function() {
    let res = prompt("New Name:", document.getElementById("sidebar-status-txt").innerHTML)
    editTitle(res)
  }
})