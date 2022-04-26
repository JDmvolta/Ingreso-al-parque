let nacionalidad
let estatura
let temperatura
do{
    nacionalidad = (prompt("Put your nationality/Ingrese su nacionalidad"))
}while(nacionalidad!= "COL" && nacionalidad!="USA")
if (nacionalidad=="COL")
    do {
        estatura=Number(prompt("¿Cual es su estatura?(metros)"))
    } while (isNaN(estatura)&&estatura>3&& estatura<=0);
    do{
        temperatura=Number(prompt("¿Cual es su temperatura?(grados centígrados)"))
    }while (isNaN(condition) && temperatura>38 && temperatura<=0);
 
if (nacionalidad=="USA") {
    do {
        estatura=Number(prompt("How tall are you? (ft)"))
    } while (isNaN(estatura)&&estatura>4,6 && estatura<=0);
    do{
        temperatura=Number(prompt("What's your temperature(F°)"))
    } while (isNaN(temperatura)&&temperatura>100,4 && temperatura<=0);
    estatura=estatura/3,281
    temperatura=(temperatura=32)*5/9
    }
    do{
        acompañante=prompt("¿Viene con algún acompañante? (si/no)")
    } while (acompañante!="si"&& acompañante!="no");
 
    if (temperatura>38) {
        entrada="Está restringido el ingreso para usted"
        if(estatura<1,4 && acompañante=="si") {
            entrada="Ingreso restringido"
        }else {
            entrada="Bienvenido y disfrute"
       
        }
    }
 
