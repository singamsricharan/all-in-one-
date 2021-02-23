class startup{
    constructor(){
        this.moleconceptbutton=createButton("MOLE FORMULAE AND CALCULATOR");
        this.trignometrybutton=createButton("TRIGNOMETRY FORMULAE AND CALCULATOR");     
    }
    display(){
        this.moleconceptbutton.position(100,100);
        this.trignometrybutton.position(100,200);
        this.moleconceptbutton.mousePressed(()=>{
            moleconcept=new moleformula();
            trignometrybutton.hide();
            moleconceptbutton.hide();
        });
        this.trignometrybutton.mousePressed(()=>{
            trignometry=new Trignometry();
            trignometrybutton.hide();
            moleconceptbutton.hide();
        })
    }
}