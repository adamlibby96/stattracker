/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
const ListPicker = require("tns-core-modules/ui/list-picker").ListPicker;
const HomeViewModel = require("./game-view-model");
const Observable = require("data/observable").Observable;
const fromObject = require("tns-core-modules/data/observable").fromObject;
const GridLayout = require("tns-core-modules/ui/layouts/grid-layout/grid-layout");
const StackLayoutModule = require("tns-core-modules/ui/layouts/stack-layout");
const labelModule = require("tns-core-modules/ui/label/label");
const ButtonModule = require("tns-core-modules/ui/button");

function onNavigatingTo(args) {
  const page = args.object;
  const list = page.getViewById("cardList");
  for (var i = 0; i < global.CurrentPlayers.length; i++) {
    var player = global.CurrentPlayers[i];
    var card = new StackLayoutModule.StackLayout();
    card.borderWidth = "2px";
    card.margin = "5px";
    var grid = new GridLayout.GridLayout();
    grid.rows = "* * * *";
    grid.columns = "75px * * * * *";
    var title = new labelModule.Label();
    title.textAlignment = "center";
    title.borderBottomWidth = "1px";
    title.text = player.name;
    card.addChild(title);

    //-------------SPEED---------------------
    var speedLbl = new labelModule.Label();
    speedLbl.text = "Speed: ";
    speedLbl.row = "0";
    speedLbl.col = "0";
    grid.addChild(speedLbl);
    var minusBtn = new ButtonModule.Button();
    minusBtn.row = "0";
    minusBtn.col = "1";
    minusBtn.text = "-1";
    minusBtn.width = "40";
    grid.addChild(minusBtn);
    var prevLbl = new labelModule.Label();
    prevLbl.row = "0";
    prevLbl.col = "2";
    prevLbl.margin = "3";
    prevLbl.textAlignment = "center";
    prevLbl.verticalAlignment = "middle";
    prevLbl.text = player.speed[player.curSpeedIndex - 1];
    prevLbl.borderBottomWidth = "1px";
    grid.addChild(prevLbl);
    var curLbl = new labelModule.Label();
    curLbl.row = "0";
    curLbl.col = "3";
    curLbl.textAlignment = "center";
    curLbl.verticalAlignment = "middle";
    curLbl.text = player.speed[player.curSpeedIndex];
    curLbl.color = "green";
    curLbl.margin = "3";
    curLbl.borderBottomWidth = "1px";
    grid.addChild(curLbl);
    var nextLbl = new labelModule.Label();
    nextLbl.row = "0";
    nextLbl.col = "4";
    nextLbl.textAlignment = "center";
    nextLbl.verticalAlignment = "middle";
    nextLbl.text = player.speed[player.curSpeedIndex + 1];
    nextLbl.margin = "3";
    nextLbl.borderBottomWidth = "1px";
    grid.addChild(nextLbl);
    var plusBtn = new ButtonModule.Button();
    plusBtn.row = "0";
    plusBtn.col = "5";
    plusBtn.text = "+1";
    plusBtn.width = "40";
    grid.addChild(plusBtn);

    //-------------Might-----------------------
    var mightLbl = new labelModule.Label();
    mightLbl.text = "Might: ";
    mightLbl.row = "1";
    mightLbl.col = "0";
    grid.addChild(mightLbl);

    //-----------------Sanity----------------
    var sanityLbl = new labelModule.Label();
    sanityLbl.text = "Sanity: ";
    sanityLbl.row = "2";
    sanityLbl.col = "0";
    grid.addChild(sanityLbl);

    //---------------Knowledge----------------
    var knowledgeLbl = new labelModule.Label();
    knowledgeLbl.text = "Knowledge: ";
    knowledgeLbl.row = "3";
    knowledgeLbl.col = "0";
    grid.addChild(knowledgeLbl);
    card.addChild(grid);
    list.addChild(card);
  }

  page.bindingContext = new HomeViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
