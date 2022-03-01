# Hilfe zum hinzufügen der Gegner

## Gegner in die `levelConfig` eintragen

```javascript
"X": () => [
  // Sprite nutzen
  // Fläche der Grafik zur Berechnung nutzen
  // Spielfigurr hat einen festen Körper
  // Eine Beschriftung vergeben
  {
    // Default Bewegungsrichtung
    // Letzte gemerkte x-Position
  }
]
```

## Gegner bewegen


```javascript
action("enemy", (enemy) => {
  // Wenn aktuelle x-Position gleich zu letzter gemerkter x-Position
  // Dann die Richtung umkehren


  // Letzte x-Position merken

  // Gegnerfigur bewegen (Hinweis: Richtung mit Geschwindigkeit multiplizieren)
});
```

## Nützliche Aufrufe

```
.pos.x
.move()
```