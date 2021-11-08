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
const FALL_GAME_OVER = 6 * 64;
const MOVE_SPEED_ENEMY = 200;


// Sprites laden
loadSprite("bean", "sprites/bean.png");
loadSprite("grass", "sprites/grass.png");
loadSprite("ghosty", "sprites/ghosty.png")



// Szene: game
scene("game", () => {

  // Alle Levels
  const levels = [
    [
      
      "                                        ",
      "                                        ",
      "      =      ==             ===         ",
      "                                        ",
      "    = =  =   X  =    ===    = X   =   X=",
      "=======  ========  =======  ============",
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
    ],
    "X": () => [
      sprite("ghosty"),
      area(),
      body(),
      "enemy",
      {
        direction: -1,
        lastPositionX: 0
      }
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

  // Spieler fällt hinunter
  action("player", () => {
    if(player.pos.y > FALL_GAME_OVER) {
      player.destroy();
    }
  });

  // Gegner bewegen
  action("enemy", (enemy) => {
    if(enemy.lastPositionX === enemy.pos.x) {
      enemy.direction = enemy.direction * -1
    }
    enemy.lastPositionX = enemy.pos.x

    enemy.move(enemy.direction * MOVE_SPEED_ENEMY, 0);
  });

  // Spieler berührt Gegner
  player.collides("enemy", (enemy) => {
    if(player.grounded()){
      player.destroy();
    }
    else {
      enemy.destroy();
    }
  });


});


// Spiel starten
go("game")
