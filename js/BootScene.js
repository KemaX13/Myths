	export default class BootScene extends Phaser.Scene {
		constructor(config) {
			super(config);
		}

	  preload()
		{
			this.load.atlas('avatar', 'assets/images/avatar.png', 'assets/images/avatar.json');
		}

	  create()
		{
			//Creación de personaje
			this.player = new Player(this, 400, 200, 'avatar', 'sprite_01');

			//Eventos o configuraciones utiles
			this.time.addEvent({ delay: 1000, callback: this.cronometro, callbackScope: this, loop: true });
			this.physics.world.createDebugGraphic();
		}

		update()
		{
			 this.scene.start('CaveLevel');
		}

	  cronometro()
		{
			this.player.AguanteControl();
		}
	}

	import Player from "./Characters/Player.js";
