# Hilfe zum Erstellen der Spielwelt

## Oben die Bilder laden

```javascript
loadSprite("NAME", "sprites/NAME.png");
```

## In der `levelConfig` die Level-Element konfigurieren

```javascript
"=": () =>[
  sprite("grass"),
]