import kaboom from "kaboom";

// initialize context
kaboom(
  {
    // Hintergrund der Welt
    background: [166, 209, 247]
  }
);

// Wichtige Konstanten
const MOVE_SPEED = 400;


// Sprites laden
loadSprite("bean", "sprites/bean.png");
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
      area(),
      solid(),
    ]
  }

  // Level laden
  addLevel(levels[0], levelConfig);

  // Spieler hinzufügen
  const player = add([
    sprite("bean"),
    pos(0,0),
    area(),
    body(),
    "player"
  ]);

  // Spieler bewegen
  keyDown("right", () => {
    player.move(MOVE_SPEED, 0)
  });

  keyDown("left", () => {
    player.move(-MOVE_SPEED, 0)
  });

  keyDown("space", () => {
    if(player.grounded()){
      player.jump();
    }
  });



  // Kamera auf Spielfigur ausrichten
  action(() => {
    camPos(player.pos);
  });
});


// Spiel starten
go("game")
