/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
const ListPicker = require("tns-core-modules/ui/list-picker").ListPicker;
const HomeViewModel = require("./home-view-model");
const Observable = require("data/observable").Observable;
const fromObject = require("tns-core-modules/data/observable").fromObject;
const GridLayout = require("tns-core-modules/ui/layouts/grid-layout/grid-layout");
const StackLayoutModule = require("tns-core-modules/ui/layouts/stack-layout");
const labelModule = require("tns-core-modules/ui/label/label");
const ButtonModule = require("tns-core-modules/ui/button");
// init list of player names
var playerSelectionList = [];
var currentPlayers = [];
var selectedPlayer = {};

function onNavigatingTo(args) {
  const page = args.object;
  for (var i = 0; i < global.Players.length; i++) {
    playerSelectionList = [...playerSelectionList, global.Players[i].name];
  }
  //console.log(playerSelectionList);

  var renderer = page.getViewById("PlayerRenderer");
  var stackL = new StackLayoutModule.StackLayout();

  var stack = new StackLayoutModule.StackLayout();
  var listpickerComponent = new ListPicker();
  listpickerComponent.id = "listpicker";
  listpickerComponent.items = playerSelectionList;
  listpickerComponent.on("selectedIndexChange", lpargs => {
    const list = lpargs.object;
    var name = playerSelectionList[list.selectedIndex];
    selectedPlayer = global.Players.find(x => x.name == name);
    stackL.removeChildren();

    // ------------ SPEED -----------------------------
    var SpeedGrid = new GridLayout.GridLayout();
    SpeedGrid.rows = "*";
    SpeedGrid.columns = "100 * * * * * * * * *";

    var speedLbl = new labelModule.Label();
    speedLbl.text = "Speed: ";

    speedLbl.row = "0";
    speedLbl.col = "0";
    SpeedGrid.addChild(speedLbl);

    for (var i = 0; i < selectedPlayer.speed.length; i++) {
      var lbl = new labelModule.Label();
      lbl.width = "10px";
      lbl.row = "0";
      lbl.col = (i + 1).toString();
      lbl.text = selectedPlayer.speed[i];
      if (i === selectedPlayer.defaultSpeedIndex) {
        lbl.color = "green";
      }
      SpeedGrid.addChild(lbl);
    }
    stackL.addChild(SpeedGrid);

    //-------------------------MIGHT---------------------
    var MightGrid = new GridLayout.GridLayout();
    MightGrid.rows = "*";
    MightGrid.columns = "100 * * * * * * * * *";

    var mightLbl = new labelModule.Label();
    mightLbl.text = "Might: ";
    mightLbl.row = "0";
    mightLbl.col = "0";
    MightGrid.addChild(mightLbl);

    for (var i = 0; i < selectedPlayer.might.length; i++) {
      var lbl = new labelModule.Label();
      lbl.width = "10px";
      lbl.row = "0";
      lbl.col = (i + 1).toString();
      lbl.text = selectedPlayer.might[i];
      if (i === selectedPlayer.defaultMightIndex) {
        lbl.color = "green";
      }
      MightGrid.addChild(lbl);
    }
    stackL.addChild(MightGrid);

    //-------------------------SANITY---------------------
    var SanityGrid = new GridLayout.GridLayout();
    SanityGrid.rows = "*";
    SanityGrid.columns = "100 * * * * * * * * *";

    var sanityLbl = new labelModule.Label();
    sanityLbl.text = "Sanity: ";
    sanityLbl.row = "0";
    sanityLbl.col = "0";
    SanityGrid.addChild(sanityLbl);

    for (var i = 0; i < selectedPlayer.sanity.length; i++) {
      var lbl = new labelModule.Label();
      lbl.width = "10px";
      lbl.row = "0";
      lbl.col = (i + 1).toString();
      lbl.text = selectedPlayer.sanity[i];
      if (i === selectedPlayer.defaultSanityIndex) {
        lbl.color = "green";
      }
      SanityGrid.addChild(lbl);
    }
    stackL.addChild(SanityGrid);

    //-------------------------Knowledge---------------------
    var KnowledgeGrid = new GridLayout.GridLayout();
    KnowledgeGrid.rows = "*";
    KnowledgeGrid.columns = "100 * * * * * * * * *";

    var knowledgeLbl = new labelModule.Label();
    knowledgeLbl.text = "Knowledge: ";
    knowledgeLbl.row = "0";
    knowledgeLbl.col = "0";
    KnowledgeGrid.addChild(knowledgeLbl);

    for (var i = 0; i < selectedPlayer.knowledge.length; i++) {
      var lbl = new labelModule.Label();
      lbl.width = "10px";
      lbl.row = "0";
      lbl.col = (i + 1).toString();
      lbl.text = selectedPlayer.knowledge[i];
      if (i === selectedPlayer.defaultKnowledgeIndex) {
        lbl.color = "green";
      }
      KnowledgeGrid.addChild(lbl);
    }
    stackL.addChild(KnowledgeGrid);

    console.log(playerSelectionList[list.selectedIndex]);
  });
  renderer.addChild(listpickerComponent);
  renderer.addChild(stackL);
  var startbtn = new ButtonModule.Button();
  startbtn.text = "Start Game";
  startbtn.isEnabled = false;
  var btn = new ButtonModule.Button();
  btn.text = "Add Player";
  btn.on(
    "tap",
    btnargs => {
      var playerLbl = new labelModule.Label();
      playerLbl.text = selectedPlayer.name;
      btn.page.getViewById("playerList").addChild(playerLbl);
      playerSelectionList.filter(value => {
        return value.name != selectedPlayer.name;
      });
      currentPlayers = [...currentPlayers, selectedPlayer];
      if (currentPlayers.length >= 3) {
        startbtn.isEnabled = true;
      }
      if (currentPlayers.length === 6) {
        btnargs.object.isEnabled = false;
      }
    },
    (this, startbtn)
  );
  renderer.addChild(btn);
  renderer.addChild(startbtn);
  page.bindingContext = new HomeViewModel();
}

exports.onNavigatingTo = onNavigatingTo;

function addPlayer(args) {
  const btn = args.object;
  var playerLbl = new labelModule.Label();
  playerLbl.text = selectedPlayer.name;
  btn.page.getViewById("playerList").addChild(playerLbl);
  playerSelectionList.filter(value => {
    return value.name != selectedPlayer.name;
  });
  var listpicker = btn.page.getViewById("listpicker");
  listpicker.items = playerSelectionList;
  btn.page.bindingContext = new Observable();
}

exports.addPlayer = addPlayer;
