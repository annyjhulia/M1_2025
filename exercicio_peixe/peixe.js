var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: { 
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game (config);

var tartaruga;

function preload() {
    //carregar o fundo
    this.load.image('agua', 'assets/bg_azul-claro.png');
    
    //carregar o logo
    this.load.image('logo','assets/logo-inteli_azul.png');

    //carregar a concha - não usei
    this.load.image('concha', 'assets/concha.png');

    //carregar o baiacu
    this.load.image('baiacu', 'assets/baiacu_lado.png');

    //carregar o crustáceo
    this.load.image('crustaceo', 'assets/crustaceo.png');

    //carregar a tartaruga
    this.load.image('tartaruga', 'assets/peixes/tartaruga.png');

}

function create() {
    //adicionar o fundo
    this.add.image(400, 300, 'agua');
   
    //adicionar o logo
    this.add.image(400, 525, 'logo').setScale(0.5);

    //adicionar o baiacu
    this.add.image(150, 100, 'baiacu').setScale(0.5);

    //adicionar o crustáceo
    this.add.image(650, 500, 'crustaceo').setScale(1);

    //adicionar a tartaruga e guardar numa variável
    tartaruga = this.add.image(400, 300, 'tartaruga').setOrigin(0.5, 0.5).setFlip(true, false);
}

function update() {

    //movimento da tartaruga
    tartaruga.x = this.input.x;
    tartaruga.y = this.input.y;
}
