(() => {

    // arreglo de temperaturas celsius
    // const arrayOfNums = [33.6, 12.34];
    const temperaturesCelsius = [33.6, 12.34];

    // Dirección ip del servidor
    // const ip = '123.123.123.123';
    const serverIP = '123.123.123.123';

    // Listado de usuarios
    // const people = [{ id: 1, email: 'fernando@google.com' }, { id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    const users = [{ id: 1, email: 'fernando@google.com' }, { id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    // const emails = people.map(u => u.email);
    const userEmails = users.map(user => user.email);

    // Variables booleanas de un video juego
    const canJump = false;
    const canRun = true;
    const hasItems = false;
    const isloading = true;

    // Otros ejercicios
    // tiempo inicial
    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const endTime = new Date().getTime() - startTime;


    // Funciones
    // Obtiene los libros
    // function book() {
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    // function BooksUrl(u: string) {
    function getBooksByUJrl(url: string) {
        throw new Error('Function not implemented.');
    }

    // obtiene el área de un cuadrado basado en sus lados
    // function areaCuadrado(s: number) {
    function getSqueareArea(side: number) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJob() {
        throw new Error('Function not implemented.');
    }

})();