let turno = false; //Para considerar de quién es el turno

let victoria = false; //Para verificar si alguien ya ganó

let contador = 0;

const handleClick = (event) => { //Recibe un evento

    const { id } = event.target; //Saca el id del evento que está recibiendo

    const div = document.getElementById(id); //Devuelve como nodo, manda a referenciar y la almacena 

    //div.innerText = "O"; //Pone la O al dar click

    if(div.innerText === '' && victoria === false) { //De este modo ya no se cambia el valor de la casilla al dar click de nuevo

        div.innerText = turno ? 'O' : 'X'; //Si el turno es verdadero, pon O, si turno es falso pon X
        verificarVictoria();
        turno = !turno; //Para alternar el valor de turno (F o V)
    }
};

//Para verificar si alguien ha ganado
const verificarVictoria = () => {

    contador++;
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    const forma1 = 
        div1.innerText === div2.innerText && 
        div1.innerText === div3.innerText && 
        div1.innerText !== ""; 

    const forma2 = 
        div4.innerText === div5.innerText && 
        div4.innerText === div6.innerText && 
        div4.innerText !== "";

    const forma3 = 
        div7.innerText === div8.innerText && 
        div7.innerText === div9.innerText && 
        div7.innerText !== "";

    const forma4 = 
        div1.innerText === div4.innerText && 
        div1.innerText === div7.innerText && 
        div1.innerText !== "";

    const forma5 = 
        div2.innerText === div5.innerText && 
        div2.innerText === div8.innerText && 
        div2.innerText !== "";
    
    const forma6 = 
        div3.innerText === div6.innerText && 
        div3.innerText === div9.innerText && 
        div3.innerText !== "";
    
    const forma7 = 
        div1.innerText === div5.innerText && 
        div1.innerText === div9.innerText && 
        div1.innerText !== "";

    const forma8 = 
        div3.innerText === div5.innerText && 
        div3.innerText === div7.innerText && 
        div3.innerText !== "";


    console.log(forma1);

    if (forma1 || forma2 || forma3 || forma4 || forma5 || forma6 || forma7 || forma8) {
        
        const linea = document.getElementById('linea');

        linea.style.height = '10px';
        linea.style.width = '600px';
        linea.style.top = '80px';
        linea.style.left = '0px';

        victoria = true; //Para que no se pueda dar click una vez que ha ganado alguien

        alert(`Los ganadores son las: ${turno ? 'O' : 'X'}`);

    }else {

        if(contador === 9) {

            alert("La partida terminó en empate");
        }
    }
};

const reload = () => {
    
    //Para limpiar el tablero
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    const linea = document.getElementById('linea');

    linea.style.height = '0px';
    linea.style.width = '0px';
    linea.style.top = '0px';
    linea.style.left = '0px';

    div1.innerText = "";
    div2.innerText = "";
    div3.innerText = "";
    div4.innerText = "";
    div5.innerText = "";
    div6.innerText = "";
    div7.innerText = "";
    div8.innerText = "";
    div9.innerText = "";

    turno = false;

    victoria = false;

    contador = 0;
}