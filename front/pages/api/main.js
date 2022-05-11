// getTraits();

if (typeof window !== "undefined") {
  var selectionWrap = document.getElementsByClassName("selectionWrap")[0];
}

function downloadToad() {
  let downloadLink = document.createElement("a");
  downloadLink.setAttribute("download", "ToadPunk.png");
  let canvas = document.getElementById("canvas");
  canvas.toBlob(function (blob) {
    let url = URL.createObjectURL(blob);
    downloadLink.setAttribute("href", url);
    downloadLink.click();
  });
}

export default async function getTraits() {
  const traitsJson = [
    "background",
    "body",
    "mouth",
    "head_accessory",
    "head",
    "accessory",
    "eyes"
  ];

  for (var i = 0; i < traitsJson.length; i++) {
    var response = await fetch(`./traits/${traitsJson[i]}.json`);
    var mytrait = await response.json();

    var optionsWrap = document.createElement("DIV");
    // optionsWrap.className =
    //   "optionsWrap origin-top-right  right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none";
    optionsWrap.className = "flex items-center justify-between w-full max-w-md";
    selectionWrap.appendChild(optionsWrap);

    var myLabel = document.createElement("LABEL");
    myLabel.setAttribute("for", mytrait[i].name);
    myLabel.className =
      "w-30 md:w-40 text-xs md:text-sm";
    myLabel.innerText = traitsJson[i];
    optionsWrap.appendChild(myLabel);

    var mySelector = document.createElement("select");
    mySelector.onchange = pickTrait;
    mySelector.setAttribute("data-option", traitsJson[i]);
    mySelector.className =
      "w-40 md:w-56 mt-2 text-sm rounded-lg";
    // mySelector.className = "mySelector";
    mySelector.setAttribute("name", mytrait[i].name);
    optionsWrap.appendChild(mySelector);

    var myoption = document.createElement("option");
    myoption.value = "None";
    myoption.setAttribute("data-option", traitsJson[i]);
    myoption.innerText = "None";
    mySelector.appendChild(myoption);

    for (var m = 0; m < mytrait.length; m++) {
      var myoption = document.createElement("option");
      myoption.value = mytrait[m].fileId;
      myoption.innerText = mytrait[m].fileId;
      mySelector.appendChild(myoption);
    }
  }

  const downloadButton = document.createElement("DIV");
  downloadButton.className = "bg-larva-pink mt-8 max-w-md px-5 py-3 mb-4 font-semibold text-center text-white uppercase rounded-lg cursor-pointer";
  downloadButton.onclick = downloadToad;
  downloadButton.insertAdjacentText('beforeend', 'Download My CrypToad Punk');
  selectionWrap.appendChild(downloadButton);
}

function pickTrait() {
  var theoption = this.getAttribute("data-option");

  if (this.value !== "None") {
    var mysrc = `/traits/${theoption}/${this.value}.png`;
    layersArray[theoption] = mysrc;
    console.log(theoption);
  } else {
    console.log("select an option");
    console.log(theoption);
    layersArray[theoption] = "";
  }
  drawToad();
}

var canvasSize = 1440;

var layersArray = {
  background: "",
  body: "",
  mouth: "",
  head_accessory: "",
  head: "",
  accessory: "",
  eyes: "",
};

async function drawToad(mysrc) {
  var mycanvas = document.getElementById("canvas");
  mycanvas.width = mycanvas.height = canvasSize;
  var context = mycanvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (var key in layersArray) {
    if (layersArray[key] !== "") {
      let myimg = layersArray[key];
      myimg = new Image();
      myimg.src = layersArray[key];
      myimg.className = "traitImg";
      await myimg.decode();
      context.drawImage(myimg, 0, 0, canvasSize, canvasSize);
    }
  }
}
