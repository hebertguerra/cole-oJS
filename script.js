
function getAdmins(map){ //fução que recebe o map
    let admins = []; //reis auxiliar 
    for ([key, value] of map) { // operação acessando a chave e o valor direto
        if (value === 'Admin') {
            admins.push(key);
        }  
    } 
    return admins; // retorno
}

const usuarios = new Map(); // criando o map

usuarios.set('hebert', 'Admin'); // usuarios 
usuarios.set('paulo', 'Admin');
usuarios.set('hebe', 'Admin');
usuarios.set('henrique', 'Admin');
usuarios.set('elton', 'Admin');
usuarios.set('bebeto', 'User');
usuarios.set('emersom', 'Admin'); 
usuarios.set('ricardo', 'Admin');
usuarios.set('thiago', 'Admin');
usuarios.set('allan', 'Admin');
usuarios.set('nonata', 'Admin');

console.log(getAdmins(usuarios));

// objetivo imprimir so os usuarios quem tem o nome Admin no sistema.