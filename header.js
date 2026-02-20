document.addEventListener("DOMContentLoaded", function(){

  const menuHTML = `

  <!-- BOTON HAMBURGUESA -->
  <div id="menuButton" style="
      position:fixed;
      top:15px;
      right:15px;
      font-size:30px;
      cursor:pointer;
      z-index:10000;
      color:white;
      background:#000;
      width:45px;
      height:45px;
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      box-shadow:0 4px 15px rgba(0,0,0,0.5);
  ">
      ☰
  </div>

  <!-- MENU LATERAL -->
  <div id="sideMenu" style="
      position:fixed;
      top:0;
      right:-260px;
      width:250px;
      height:100%;
      background:#111;
      padding-top:80px;
      transition:0.3s;
      z-index:9999;
  ">
      <a href="menu.html" style="display:block;padding:15px;color:white;text-decoration:none;border-bottom:1px solid #333;">Inicio</a>
      <a href="index.html" style="display:block;padding:15px;color:white;text-decoration:none;border-bottom:1px solid #333;">Registrar Celulares</a>
      <a href="clientes.html" style="display:block;padding:15px;color:white;text-decoration:none;border-bottom:1px solid #333;">Ver Datos Clientes</a>
      <a href="nube.html" style="display:block;padding:15px;color:white;text-decoration:none;border-bottom:1px solid #333;">Pantalla Sorteo</a>
  </div>

  <!-- FONDO OSCURO AL ABRIR -->
  <div id="menuOverlay" style="
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background:rgba(0,0,0,0.5);
      display:none;
      z-index:9998;
  "></div>
  `;

  document.body.insertAdjacentHTML("afterbegin", menuHTML);

  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("menuOverlay");
  const button = document.getElementById("menuButton");

  button.onclick = function(){
      menu.style.right = "0px";
      overlay.style.display = "block";
  };

  overlay.onclick = function(){
      menu.style.right = "-260px";
      overlay.style.display = "none";
  };

});

