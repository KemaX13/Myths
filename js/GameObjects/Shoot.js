export default class Shoot extends Phaser.GameObjects.Sprite{
  constructor(scene, x, y, textureKey, key){
    super(scene, x, y, textureKey, key);
		this.scene.physics.world.enable(this);
		this.scene.add.existing(this);

    //Propiedades del disparo
    this.vel = 4;
    this.damageMax = 4;

    this.player = this.scene.player;
    this.ojo = this.scene.ojo;

    //variables del ojo

    this.dispTiempo = 2;
    this.dispTiempoActivo = 3;
  }

  update()
  {
    //Control de disparo

    if (this.ojo.DispAct == false)
    {
      //Dirreción hacia el jugador

      this.x = this.ojo.x;
      this.y = this.ojo.y;

      this.dirX = this.player.x - this.x;
      this.dirY = this.player.y - this.y;

      this.dir = new Phaser.Math.Vector2(this.dirX , this.dirY);
      this.dir.normalize();
    }
    else
    {
      this.x += this.vel * this.dir.x;
      this.y += this.vel * this.dir.y;
    }
  }
}
