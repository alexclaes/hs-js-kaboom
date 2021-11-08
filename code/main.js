import kaboom from "kaboom";

// initialize context
kaboom(
  {
    // Hintergrund der Welt
    background: [166, 209, 247]
  }
);


// Sprites laden
loadSprite("grass", "sprites/grass.png");


// Szene: game
scene("game", () => {

  // Alle Levels
  const levels = [
    [
      "                                        ",
      "                                        ",
      "                                        ",
      "                                        ",
      "                                        ",
      "========================================",
    ],
  ];

  // Alle Objekte im Spiel konfigurieren
  const levelConfig = {
    width: 64,
    height: 64,
    "=": () =>[
      sprite("grass"),
    ]
  }

  // Level laden
  addLevel(levels[0], levelConfig);
});


// Spiel starten
go("game")
