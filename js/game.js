import CaveScene from "./CaveScene.js";
import BootScene from "./BootScene.js";

var config = {
    type: Phaser.AUTO,
    width:800,
    height:600,
    parent: "phaser-prototipo",
    scene: [ BootScene, CaveScene ],
    physics:{
        default:'arcade',
        arcade: {
              gravity: {
                  y: 0
              },
            debug: false
          }
    },
    fps: {
	target: 15,
	forceSetTimeOut: true
	},
}

var game = new Phaser.Game(config);
