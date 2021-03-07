class startup{
    constructor(){
        this.trignometrybutton=createButton("TRIGNOMETRY FORMULAE AND CALCULATOR");     
    }
    display(){
        this.trignometrybutton.position(100,200);
        this.trignometrybutton.mousePressed(()=>{
            trignometry=new Trignometry();
            trignometrybutton.hide();
        })
    }
}