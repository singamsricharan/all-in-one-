
class Trignometry{
    constructor(){
        this.oppositeside=createInput("number");
        this.adjacentside=createInput('number');
        this.hypotenuse=createInput("number");
        this.ab=
        this.bc=
        this.ac=
        this.α=
        this.sin= this.oppositeside.val()/this.hypotenuse.val();
        this.cos=this.adjacentside.val()/this.hypotenuse.val();
        this.tan=this.oppositeside.val()/this.adjacentside.val();
        this.sec=this.hypotenuse.val()/this.adjacentside.val();
        this.cosec=this.hypotenuse.val()/this.oppositeside.val();
        this.cot=this.adjacentside.val()/this.oppositeside.val();
        this.sinbutton=createButton();
        this.cosbutton=createButton();
        this.tanbutton=createButton();
        this.secbutton=createButton();
        this.cosecbutton=createButton();
        this.cotbutton=createButton();
    }
    display(){

    }
}