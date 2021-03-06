import BootScene from "./BootScene.js";

//link juego de mario https://github.com/nkholski/phaser3-es6-webpack/tree/master/src

export default class CaveScene extends BootScene {
	constructor() {
		super("CaveLevel");
	}

	update()
	{
		this.player.update();
		this.bomb.update();
		this.jabali.update();
		this.ojo.update();
		this.disparo.update();
		this.InventarioAccess();

		if (this.Key2.isDown)
		{
			this.scene.stop('CaveLevel');
			this.scene.moveDown('ForrestLevel');
			this.scene.launch('ForrestLevel').launch('HUDScreen').stop();
		}
	}
}
