const pantalla = document.getElementById('pantalla');

const agregarAPantalla = valor => {
    pantalla.value += valor;
};

const limpiarPantalla = () => {
    pantalla.value = '';
};

const borrarUltimoDigito = () => {
    pantalla.value = pantalla.value.slice(0, -1); 
};

const calcularResultado = () => {
    const evaluarExpresion = expr => {
        return eval(expr.replace('×', '*').replace('÷', '/'));
    };

    try {
        pantalla.value = `${evaluarExpresion(pantalla.value)}`;
    } catch (error) {
        pantalla.value = 'Error';
    }
};








