document.getElementById("btn_menu").onclick = function () {
  document.getElementById("btn_menu").style.display = "none";
  document.getElementById("btn_close").style.display = "inline-flex";
  document.getElementById("menu").style.marginLeft = "0px";
  document.body.style.overflow = "hidden";
};

document.getElementById("btn_close").onclick = function () {
  document.getElementById("btn_menu").style.display = "inline-flex";
  document.getElementById("btn_close").style.display = "none";
  document.getElementById("menu").style.marginLeft = "-240px";
  document.body.style.overflow = "auto";
};