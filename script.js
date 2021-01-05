const equipamentos = [
  { name: "link da Nigeria", id: 1, used: false },
  { name: "Servidor da caverna", id: 2, used: false },
  { name: "firewall endiabrado", id: 3, used: false }
];

function getContext(contextName) {
  let context = document.getElementById(contextName);
  return context;
}
function createEquipamento() {}

function getEquipamento() {}

function createSelect() {
  let context = getContext("sidebar");
  let selectEquip = document.createElement("SELECT");
  selectEquip.setAttribute("id", "selectEquip");
  context.appendChild(selectEquip);

  for (equip in equipamentos) {
    selectEquip.options[selectEquip.options.length] = new Option(
      equipamentos[equip].name,
      name
    );
  }
}

function createSvg() {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("id", 1);
  return svg;
}

function createCard() {
  let context = getContext("desenho");
  let svgContext = createSvg();
  const svgNS = svgContext.namespaceURI;
  let g = document.createElementNS(svgNS, "g");
  g.setAttribute("fill", "red");
  let rect = document.createElementNS(svgNS, "rect");
  g.setAttribute("x", 0);
  g.setAttribute("y", 0);
  rect.setAttribute("width", 500);
  rect.setAttribute("height", 500);
  let btnCreateCard = document.getElementById("createCard");
  btnCreateCard.disabled = true;

  svgContext.appendChild(g);
  g.append(rect);
  context.appendChild(svgContext);
  createSelect();
}
