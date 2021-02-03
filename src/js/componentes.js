import '../css/componentes.css';


export const saludar = ( nombre ) => { // el export es para permitir usar esta funcion en otro archivo

    console.log('Creando etiqueta H1');
    
    const h1 = document.createElement('h1')
    
    h1.innerText = `Hola, ${ nombre }, cómo estás?`;
    
    document.body.append(h1);
    
}