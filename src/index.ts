let myname : string | number = 'asasas';
let a1 = true;


let a: string ='sa';
let b: number = 23;
let c: boolean = true;
let d: undefined = undefined;
let e: symbol = Symbol();

const Person: {
    isim : string
    kanal: string
    bilmem: 'bilmem' |'bilirim'|'bilecem'

}= {
    isim :'kadir',
    kanal :'vierone',
    bilmem : 'bilmem'
}

const Eleman  = {
    isimm : 'asm' as 'mes'|'test'
}

Eleman.isimm = 'mes'



Person.bilmem = 'bilmem';

console.log(Person.bilmem)



function change(){
    myname = "qa";
    myname=23;
    
}

function chenck(){
    if(typeof  myname == 'string'){
    

    
    }

    if(typeof myname =='number'){
        
    }
}