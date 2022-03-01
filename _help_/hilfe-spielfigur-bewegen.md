# Hilfe zum bewegen der Spielfigur

## Auf Maustasten reagieren

```javascript
keyDown("right", () => {
  // Nach rechts gehen
});

keyDown("left", () => {
  // Nach links gehen
});

keyDown("space", () => {
  // Wenn die Spielfigur sich auf dem Boden befindet
  // Dann springen
});
```

## Kamera bewegen

```javascript
action(() => {
  // Position der Kamera auf Position der Spielfigur setzen
});
```


## Nützliche Aufrufe

```
.move()
camPos()
.pos
```