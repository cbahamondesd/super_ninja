class Ninja{
    nombre;
    salud;
    velocidad;
    fuerza;

    constructor(nombre){
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log("Nombre de Ninja : " + this.nombre);
    }

    showStats(){
        console.log("Nombre, fuerza, velocidad y salud de Ninja : " +  this.nombre + "," + this.fuerza + "," + this.velocidad + "," + this.salud);
    }

    drinkSake(){
        let resultado = this.salud + 10;
        this.salud = resultado;
        console.log("Nuevo valor salud ninja : " + this.salud);
    }

    setValores(salud, velocidad, fuerza){
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
};

class Sensei extends Ninja{
    sabiduria;

    constructor(nombre){
        super(nombre);
        this.sabiduria = 10;
        super.setValores(200,10,10);
    }

    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses");
        super.drinkSake();
        super.showStats();
    }
}

const superSensei = new Sensei("Master splinter");
superSensei.speakWisdom();
