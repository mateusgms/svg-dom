const equipamentos = [
  {
    name: "link da Nigeria",
    id: 1,
    used: false,
    type: "link",
    img: "./assets/db.svg"
  },
  {
    name: "Servidor da caverna",
    id: 2,
    used: false,
    type: "firewall",
    img: "./assets/db.svg"
  },
  {
    name: "firewall endiabrado",
    id: 3,
    used: false,
    type: "link",
    img: "./assets/db.svg"
  }
];

function getContext(contextName) {
  let context = document.getElementById(contextName);
  return context;
}
function createEquipamento() {
  let select = getSelect();
  let selectedEquip = select.selectedIndex;
  let selectOptions = select.options;
  let equip = selectOptions[selectedEquip].value;
  console.log(equip);
}
//TODO
function getEquipamento() {}

function createSelect() {
  let context = getContext("sidebar");
  let selectEquip = document.createElement("SELECT");
  selectEquip.setAttribute("id", "selectEquip");

  context.appendChild(selectEquip);

  for (equip in equipamentos) {
    selectEquip.options[selectEquip.options.length] = new Option(
      equipamentos[equip].name,
      equipamentos[equip].name
    );
  }
  selectEquip.selectedIndex = "-1";
  selectEquip.setAttribute("onchange", "createEquipamento()");
}
function getSelect() {
  return selectEquip;
}
function createSvg() {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("id", 1);
  svg.style.background = "red";
  return svg;
}

function createCard() {
  let context = getContext("desenho");
  let svgContext = createSvg();
  const svgNS = svgContext.namespaceURI;
  let g = document.createElementNS(svgNS, "g");
  g.setAttribute("fill", "red");

  g.setAttribute("x", 0);
  g.setAttribute("y", 0);

  let btnCreateCard = document.getElementById("createCard");
  btnCreateCard.disabled = true;

  svgContext.appendChild(g);

  context.appendChild(svgContext);
  createSelect();
}
