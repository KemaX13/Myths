import BootScene from "./BootScene.js";

export default class ForrestScene extends BootScene {
	constructor() {
		super("ForrestLevel");
	}

	update()
	{
		if (this.Key1.isDown)
		{
			this.scene.stop('ForrestLevel');
			this.scene.moveDown('CaveLevel');
			this.scene.launch('CaveLevel').launch('HUDScreen').stop();
		}
	}
}
