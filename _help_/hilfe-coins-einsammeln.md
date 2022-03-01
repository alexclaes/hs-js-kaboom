# Hilfe zum Einsammeln der Coins

## Coin in die `levelConfig` aufnehmen

```javascript
"c": () =>[
  // Sprite nutzen
  // Fläche der Grafik zur Berechnung nutzen
  // Eine Beschriftung vergeben
],
```

## Was passiert, wenn sich Spielfigur und Coin treffen?
```javascript
player.collides("coin", (coin) => {
  // Coin aus dem Spiel nehmen
  // Score erhöhen
});
```