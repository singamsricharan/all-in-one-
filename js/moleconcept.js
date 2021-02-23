class moleformula{
    constructor(){
        this.mass=createInput('mass','number');
        this.molarmass=createInput('molarmass',"number");
        this.calculatemoles=createButton("CLACULATE NUMBER OF MOLES");
        
    }
    display(){
        this.mass.position(100,100);
        this.molarmass.position(100,150);
        this.calculatemoles.position(75,200);
        this.calculatemoles.mousePressed(()=>{
            m=this.mass.value();
            Molar=this.molarmass.value();
            this.mass.hide();
            this.molarmass.hide();
            this.calculatemoles.hide();
            n=m/Molar;
            textSize(30);
            text("THE NUMBER OF MOLES ="+n,200,200)
            console.log(n)
         }
         )
    }
}