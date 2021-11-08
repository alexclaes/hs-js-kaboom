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
loadSprite("coin", "sprites/coin.png")



// Szene: game
scene("game", ({score}) => {

  // Alle Levels
  const levels = [
    [
      
      "                                        ",
      "      C        C              C         ",
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
    ],
    "C": () =>[
      sprite("coin"),
      area(),
      "coin"
    ],
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

  // Score anzeigen
  const scoreLabel = add([
    pos(0,0),
    fixed(),
    text("Score: " + score, {size: 40}),
  ]);

  // Wiederverwendbare Funktion, um den Score zu erhöhen
  const increaseScore = () => {
    score = score+1;
    scoreLabel.text = "Score: " + score;
  };

  // Wiederverwendbare Funktion zum Beenden des Spiels
  const gameOver = () => {
    player.destroy();
    go("gameOver");
  }

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
      gameOver();
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
      gameOver();
    }
    else {
      enemy.destroy();
      increaseScore();
    }
  });

  // Spieler berührt Coin
  player.collides("coin", (coin) => {
    coin.destroy();
    increaseScore();
  });


});


// Szene: Game Over
scene("gameOver", () => {
  add([
    pos(0,0),
    rect(width(), height()),
    color(0,0,0)
  ]),
  add([
    pos(width()/2, height()/2),
    origin("center"),
    text("GAME OVER")
  ])
})


// Spiel starten
go("game", {score: 0})
