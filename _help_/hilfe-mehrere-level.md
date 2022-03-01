# Hilfe zu mehreren Leveln

## Portal in die `levelConfig` aufnehmen

```javascript
"o": () =>[
  // Sprite nutzen
  // Fläche der Grafik zur Berechnung nutzen
  // Eine Beschriftung vergeben
],
```

## Was passiert, wenn sich Spielfigur und Portal treffen?


```javascript
 player.collides("portal", () => {
  go("game", {
    score: // Aktuellen Score
    level: // Nummer des nächsten Levels
  })
});
```