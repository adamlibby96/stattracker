/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
const application = require("tns-core-modules/application");

global.CurrentPlayers = [
  {
    name: "Professor Longfellow",
    defaultSpeedIndex: 4,
    defaultMightIndex: 3,
    defaultSanityIndex: 3,
    defaultKnowledgeIndex: 5,
    speed: [0, 2, 2, 4, 4, 5, 5, 6, 6],
    curSpeedIndex: 4,
    might: [0, 1, 2, 3, 4, 5, 5, 6, 6],
    curMightIndex: 3,
    sanity: [0, 1, 3, 3, 4, 5, 5, 6, 7],
    curSanityIndex: 3,
    knowledge: [0, 4, 5, 5, 5, 5, 6, 7, 8],
    curKnowlegdeIndex: 5
  },
  {
    name: "Father Rhinehardt",
    defaultSpeedIndex: 3,
    defaultMightIndex: 3,
    defaultSanityIndex: 4,
    defaultKnowledgeIndex: 4,
    speed: [0, 2, 3, 3, 4, 5, 6, 7, 7],
    curSpeedIndex: 3,
    might: [0, 1, 2, 2, 4, 4, 5, 5, 7],
    curMightIndex: 3,
    sanity: [0, 3, 4, 5, 5, 6, 7, 7, 8],
    curSanityIndex: 4,
    knowledge: [0, 1, 3, 3, 4, 5, 6, 6, 8],
    curKnowlegdeIndex: 4
  },
  {
    name: "Darrin 'Flash' Williams",
    defaultSpeedIndex: 5,
    defaultMightIndex: 3,
    defaultSanityIndex: 3,
    defaultKnowledgeIndex: 3,
    speed: [0, 4, 4, 4, 5, 6, 7, 7, 8],
    curSpeedIndex: 5,
    might: [0, 2, 3, 3, 4, 5, 6, 6, 7],
    curMightIndex: 3,
    sanity: [0, 1, 2, 3, 4, 5, 5, 5, 7],
    curSanityIndex: 3,
    knowledge: [0, 2, 3, 3, 4, 5, 5, 5, 7],
    curKnowlegdeIndex: 3
  }
];

global.Players = [
  {
    name: "Professor Longfellow",
    defaultSpeedIndex: 4,
    defaultMightIndex: 3,
    defaultSanityIndex: 3,
    defaultKnowledgeIndex: 5,
    speed: [0, 2, 2, 4, 4, 5, 5, 6, 6],
    curSpeedIndex: 4,
    might: [0, 1, 2, 3, 4, 5, 5, 6, 6],
    curMightIndex: 3,
    sanity: [0, 1, 3, 3, 4, 5, 5, 6, 7],
    curSanityIndex: 3,
    knowledge: [0, 4, 5, 5, 5, 5, 6, 7, 8],
    curKnowlegdeIndex: 5
  },
  {
    name: "Father Rhinehardt",
    defaultSpeedIndex: 3,
    defaultMightIndex: 3,
    defaultSanityIndex: 4,
    defaultKnowledgeIndex: 4,
    speed: [0, 2, 3, 3, 4, 5, 6, 7, 7],
    curSpeedIndex: 3,
    might: [0, 1, 2, 2, 4, 4, 5, 5, 7],
    curMightIndex: 3,
    sanity: [0, 3, 4, 5, 5, 6, 7, 7, 8],
    curSanityIndex: 4,
    knowledge: [0, 1, 3, 3, 4, 5, 6, 6, 8],
    curKnowlegdeIndex: 4
  },
  {
    name: "Darrin 'Flash' Williams",
    defaultSpeedIndex: 5,
    defaultMightIndex: 3,
    defaultSanityIndex: 3,
    defaultKnowledgeIndex: 3,
    speed: [0, 4, 4, 4, 5, 6, 7, 7, 8],
    curSpeedIndex: 5,
    might: [0, 2, 3, 3, 4, 5, 6, 6, 7],
    curMightIndex: 3,
    sanity: [0, 1, 2, 3, 4, 5, 5, 5, 7],
    curSanityIndex: 3,
    knowledge: [0, 2, 3, 3, 4, 5, 5, 5, 7],
    curKnowlegdeIndex: 3
  },
  {
    name: "Ox Bellows",
    defaultSpeedIndex: 5,
    defaultMightIndex: 3,
    defaultSanityIndex: 3,
    defaultKnowledgeIndex: 5,
    speed: [0, 2, 2, 2, 3, 4, 5, 5, 6],
    curSpeedIndex: 5,
    might: [0, 4, 5, 5, 6, 6, 7, 8, 8],
    curMightIndex: 3,
    sanity: [0, 2, 2, 3, 4, 5, 5, 6, 7],
    curSanityIndex: 3,
    knowledge: [0, 2, 2, 3, 3, 5, 5, 6, 6],
    curKnowlegdeIndex: 3
  },
  {
    name: "Brandon Jaspers",
    defaultSpeedIndex: 3,
    defaultMightIndex: 4,
    defaultSanityIndex: 4,
    defaultKnowledgeIndex: 3,
    speed: [0, 3, 4, 4, 4, 5, 6, 7, 8],
    curSpeedIndex: 3,
    might: [0, 2, 3, 3, 4, 5, 6, 6, 7],
    curMightIndex: 4,
    sanity: [0, 3, 3, 3, 4, 5, 6, 7, 8],
    curSanityIndex: 4,
    knowledge: [0, 1, 3, 3, 5, 5, 6, 6, 7],
    curKnowlegdeIndex: 3
  },
  {
    name: "Peter Akimoto",
    defaultSpeedIndex: 4,
    defaultMightIndex: 3,
    defaultSanityIndex: 4,
    defaultKnowledgeIndex: 3,
    speed: [0, 3, 3, 3, 4, 6, 6, 7, 7],
    curSpeedIndex: 4,
    might: [0, 2, 3, 3, 4, 5, 5, 6, 8],
    curMightIndex: 3,
    sanity: [0, 3, 4, 4, 4, 5, 6, 6, 7],
    curSanityIndex: 4,
    knowledge: [0, 3, 4, 4, 5, 6, 7, 7, 8],
    curKnowlegdeIndex: 3
  },
  {
    name: "Zoe Ingstrom",
    defaultSpeedIndex: 4,
    defaultMightIndex: 4,
    defaultSanityIndex: 3,
    defaultKnowledgeIndex: 3,
    speed: [0, 4, 4, 4, 4, 5, 6, 8, 8],
    curSpeedIndex: 4,
    might: [0, 2, 2, 3, 3, 4, 4, 6, 7],
    curMightIndex: 4,
    sanity: [0, 3, 4, 5, 5, 6, 6, 7, 8],
    curSanityIndex: 3,
    knowledge: [0, 1, 2, 3, 4, 4, 5, 5, 5],
    curKnowlegdeIndex: 3
  },
  {
    name: "Missy Dubourde",
    defaultSpeedIndex: 3,
    defaultMightIndex: 4,
    defaultSanityIndex: 3,
    defaultKnowledgeIndex: 4,
    speed: [0, 3, 4, 5, 6, 6, 6, 7, 7],
    curSpeedIndex: 3,
    might: [0, 2, 3, 3, 3, 4, 5, 6, 7],
    curMightIndex: 4,
    sanity: [0, 1, 2, 3, 4, 5, 5, 6, 7],
    curSanityIndex: 3,
    knowledge: [0, 2, 3, 4, 4, 5, 6, 6, 6],
    curKnowlegdeIndex: 4
  },
  {
    name: "Madame Zostra",
    defaultSpeedIndex: 3,
    defaultMightIndex: 4,
    defaultSanityIndex: 3,
    defaultKnowledgeIndex: 4,
    speed: [0, 2, 3, 3, 5, 5, 6, 6, 7],
    curSpeedIndex: 3,
    might: [0, 2, 3, 3, 4, 5, 5, 5, 6],
    curMightIndex: 4,
    sanity: [0, 4, 4, 4, 5, 6, 7, 8, 8],
    curSanityIndex: 3,
    knowledge: [0, 1, 3, 4, 4, 4, 5, 6, 6],
    curKnowlegdeIndex: 4
  },
  {
    name: "Vivian Lopez",
    defaultSpeedIndex: 4,
    defaultMightIndex: 3,
    defaultSanityIndex: 3,
    defaultKnowledgeIndex: 4,
    speed: [0, 3, 4, 4, 4, 4, 6, 7, 8],
    curSpeedIndex: 4,
    might: [0, 2, 3, 3, 4, 5, 5, 5, 6],
    curMightIndex: 3,
    sanity: [0, 4, 4, 4, 5, 6, 7, 8, 8],
    curSanityIndex: 3,
    knowledge: [0, 4, 5, 5, 5, 5, 6, 6, 7],
    curKnowlegdeIndex: 4
  },
  {
    name: "Jenny LeClerc",
    defaultSpeedIndex: 4,
    defaultMightIndex: 3,
    defaultSanityIndex: 5,
    defaultKnowledgeIndex: 3,
    speed: [0, 2, 3, 4, 4, 4, 5, 6, 8],
    curSpeedIndex: 4,
    might: [0, 3, 4, 4, 4, 4, 5, 6, 8],
    curMightIndex: 3,
    sanity: [0, 1, 1, 2, 4, 4, 4, 5, 6],
    curSanityIndex: 5,
    knowledge: [0, 2, 3, 4, 4, 4, 5, 6, 8],
    curKnowlegdeIndex: 3
  },
  {
    name: "Heather Granville",
    defaultSpeedIndex: 3,
    defaultMightIndex: 3,
    defaultSanityIndex: 3,
    defaultKnowledgeIndex: 5,
    speed: [0, 3, 3, 4, 5, 6, 6, 7, 8],
    curSpeedIndex: 3,
    might: [0, 3, 3, 3, 4, 5, 6, 7, 8],
    curMightIndex: 3,
    sanity: [0, 3, 3, 3, 4, 5, 6, 6, 6],
    curSanityIndex: 3,
    knowledge: [0, 2, 3, 3, 4, 5, 6, 7, 8],
    curKnowlegdeIndex: 5
  }
];

global.LongFellow = {
  name: "Professor Longfellow",
  defaultSpeedIndex: 4,
  defaultMightIndex: 3,
  defaultSanityIndex: 3,
  defaultKnowledgeIndex: 5,
  speed: [0, 2, 2, 4, 4, 5, 5, 6, 6],
  curSpeedIndex: 4,
  might: [0, 1, 2, 3, 4, 5, 5, 6, 6],
  curMightIndex: 3,
  sanity: [0, 1, 3, 3, 4, 5, 5, 6, 7],
  curSanityIndex: 3,
  knowledge: [0, 4, 5, 5, 5, 5, 6, 7, 8],
  curKnowlegdeIndex: 5
};

global.Rhinehardt = {
  name: "Father Rhinehardt",
  defaultSpeedIndex: 3,
  defaultMightIndex: 3,
  defaultSanityIndex: 4,
  defaultKnowledgeIndex: 4,
  speed: [0, 2, 3, 3, 4, 5, 6, 7, 7],
  curSpeedIndex: 3,
  might: [0, 1, 2, 2, 4, 4, 5, 5, 7],
  curMightIndex: 3,
  sanity: [0, 3, 4, 5, 5, 6, 7, 7, 8],
  curSanityIndex: 4,
  knowledge: [0, 1, 3, 3, 4, 5, 6, 6, 8],
  curKnowlegdeIndex: 4
};

global.Flash = {
  name: "Darrin 'Flash' Williams",
  defaultSpeedIndex: 5,
  defaultMightIndex: 3,
  defaultSanityIndex: 3,
  defaultKnowledgeIndex: 3,
  speed: [0, 4, 4, 4, 5, 6, 7, 7, 8],
  curSpeedIndex: 5,
  might: [0, 2, 3, 3, 4, 5, 6, 6, 7],
  curMightIndex: 3,
  sanity: [0, 1, 2, 3, 4, 5, 5, 5, 7],
  curSanityIndex: 3,
  knowledge: [0, 2, 3, 3, 4, 5, 5, 5, 7],
  curKnowlegdeIndex: 3
};
global.Bellows = {
  name: "Ox Bellows",
  defaultSpeedIndex: 5,
  defaultMightIndex: 3,
  defaultSanityIndex: 3,
  defaultKnowledgeIndex: 5,
  speed: [0, 2, 2, 2, 3, 4, 5, 5, 6],
  curSpeedIndex: 5,
  might: [0, 4, 5, 5, 6, 6, 7, 8, 8],
  curMightIndex: 3,
  sanity: [0, 2, 2, 3, 4, 5, 5, 6, 7],
  curSanityIndex: 3,
  knowledge: [0, 2, 2, 3, 3, 5, 5, 6, 6],
  curKnowlegdeIndex: 3
};
global.Jaspers = {
  name: "Brandon Jaspers",
  defaultSpeedIndex: 3,
  defaultMightIndex: 4,
  defaultSanityIndex: 4,
  defaultKnowledgeIndex: 3,
  speed: [0, 3, 4, 4, 4, 5, 6, 7, 8],
  curSpeedIndex: 3,
  might: [0, 2, 3, 3, 4, 5, 6, 6, 7],
  curMightIndex: 4,
  sanity: [0, 3, 3, 3, 4, 5, 6, 7, 8],
  curSanityIndex: 4,
  knowledge: [0, 1, 3, 3, 5, 5, 6, 6, 7],
  curKnowlegdeIndex: 3
};
global.Akimoto = {
  name: "Peter Akimoto",
  defaultSpeedIndex: 4,
  defaultMightIndex: 3,
  defaultSanityIndex: 4,
  defaultKnowledgeIndex: 3,
  speed: [0, 3, 3, 3, 4, 6, 6, 7, 7],
  curSpeedIndex: 4,
  might: [0, 2, 3, 3, 4, 5, 5, 6, 8],
  curMightIndex: 3,
  sanity: [0, 3, 4, 4, 4, 5, 6, 6, 7],
  curSanityIndex: 4,
  knowledge: [0, 3, 4, 4, 5, 6, 7, 7, 8],
  curKnowlegdeIndex: 3
};
global.Ingstrom = {
  name: "Zoe Ingstrom",
  defaultSpeedIndex: 4,
  defaultMightIndex: 4,
  defaultSanityIndex: 3,
  defaultKnowledgeIndex: 3,
  speed: [0, 4, 4, 4, 4, 5, 6, 8, 8],
  curSpeedIndex: 4,
  might: [0, 2, 2, 3, 3, 4, 4, 6, 7],
  curMightIndex: 4,
  sanity: [0, 3, 4, 5, 5, 6, 6, 7, 8],
  curSanityIndex: 3,
  knowledge: [0, 1, 2, 3, 4, 4, 5, 5, 5],
  curKnowlegdeIndex: 3
};
global.Dubourde = {
  name: "Missy Dubourde",
  defaultSpeedIndex: 3,
  defaultMightIndex: 4,
  defaultSanityIndex: 3,
  defaultKnowledgeIndex: 4,
  speed: [0, 3, 4, 5, 6, 6, 6, 7, 7],
  curSpeedIndex: 3,
  might: [0, 2, 3, 3, 3, 4, 5, 6, 7],
  curMightIndex: 4,
  sanity: [0, 1, 2, 3, 4, 5, 5, 6, 7],
  curSanityIndex: 3,
  knowledge: [0, 2, 3, 4, 4, 5, 6, 6, 6],
  curKnowlegdeIndex: 4
};
global.Zostra = {
  name: "Madame Zostra",
  defaultSpeedIndex: 3,
  defaultMightIndex: 4,
  defaultSanityIndex: 3,
  defaultKnowledgeIndex: 4,
  speed: [0, 2, 3, 3, 5, 5, 6, 6, 7],
  curSpeedIndex: 3,
  might: [0, 2, 3, 3, 4, 5, 5, 5, 6],
  curMightIndex: 4,
  sanity: [0, 4, 4, 4, 5, 6, 7, 8, 8],
  curSanityIndex: 3,
  knowledge: [0, 1, 3, 4, 4, 4, 5, 6, 6],
  curKnowlegdeIndex: 4
};

global.Lopez = {
  name: "Vivian Lopez",
  defaultSpeedIndex: 4,
  defaultMightIndex: 3,
  defaultSanityIndex: 3,
  defaultKnowledgeIndex: 4,
  speed: [0, 3, 4, 4, 4, 4, 6, 7, 8],
  curSpeedIndex: 4,
  might: [0, 2, 3, 3, 4, 5, 5, 5, 6],
  curMightIndex: 3,
  sanity: [0, 4, 4, 4, 5, 6, 7, 8, 8],
  curSanityIndex: 3,
  knowledge: [0, 4, 5, 5, 5, 5, 6, 6, 7],
  curKnowlegdeIndex: 4
};

global.LeClerc = {
  name: "Jenny LeClerc",
  defaultSpeedIndex: 4,
  defaultMightIndex: 3,
  defaultSanityIndex: 5,
  defaultKnowledgeIndex: 3,
  speed: [0, 2, 3, 4, 4, 4, 5, 6, 8],
  curSpeedIndex: 4,
  might: [0, 3, 4, 4, 4, 4, 5, 6, 8],
  curMightIndex: 3,
  sanity: [0, 1, 1, 2, 4, 4, 4, 5, 6],
  curSanityIndex: 5,
  knowledge: [0, 2, 3, 4, 4, 4, 5, 6, 8],
  curKnowlegdeIndex: 3
};

global.Granville = {
  name: "Heather Granville",
  defaultSpeedIndex: 3,
  defaultMightIndex: 3,
  defaultSanityIndex: 3,
  defaultKnowledgeIndex: 5,
  speed: [0, 3, 3, 4, 5, 6, 6, 7, 8],
  curSpeedIndex: 3,
  might: [0, 3, 3, 3, 4, 5, 6, 7, 8],
  curMightIndex: 3,
  sanity: [0, 3, 3, 3, 4, 5, 6, 6, 6],
  curSanityIndex: 3,
  knowledge: [0, 2, 3, 3, 4, 5, 6, 7, 8],
  curKnowlegdeIndex: 5
};

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
