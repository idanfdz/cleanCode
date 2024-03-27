(() => {

    // const fs = [ <- MAL
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 6, flagged: false },
        { id: 7, flagged: true },
    ];

    // const archivos = fs.map(f => f.f); <- MAL
    const archivos = filesToEvaluate.map(file => file.flagged);

    // Incorrecto
    // class AbstractUser{}; <- MAL
    // class UserMixin{}; <- MAL
    // class UserImplementation{}; <- MAL
    // class IUser{}; <- MAL

    class User { };
    interface User { };

    // TODO: Tarea

    // Día de hoy 
    // const ddmmyyyy = new Date();
    const today = new Date();

    // Días transcurridos
    const d: number = 23;
    const elapsedTimeInDays: number = 23;

    // Número de archivos en un directorio
    // const dir = 33;
    const numberOfFilesInDirectory = 33;

    // Primer nombre
    // const nombre = 'Daniel';
    const firstName = 'Daniel';

    // Primer apellido
    // const apellido = 'Fernández';
    const lastName = 'Fernández';

    // Días desde la ultima modificación
    // const dsm = 12;
    const daysSinceLastModification = 12;

    // cantidad máxima de clases por estudiante
    // const max = 6;
    const maxClassesPerStudent = 6;

    // const fruit = ['manzana', 'platano', 'fresa']; <- MALO
    // const fruitList = ['manzana', 'platano', 'fresa']; <- REGULAR
    // const fruits = ['manzana', 'platano', 'fresa']; <- BUENO
    const fruitNames = ['manzana', 'platano', 'fresa'];

    // const open = true; <- MAL
    // const write = true; <- MAL
    // const fruit = true; <- MAL
    // const active = false; <- MAL
    // const noValues = true; <- MAL
    // const notEmptry = true; <- MAL
    const isOpen = true;
    const canWrite = true;
    const hasFruit = true;
    const isActive = false;
    const hasValues = true;
    const isEmptry = true;

    // const fruits = 3; <- MAL
    // const cars = 10; <- MAL
    const maxFruits = 5;
    const minFruits = 1;
    const totalFruits = 3;
    const totalOfCars = 5;

    // createUserIfNotExists(); <- MAL
    // updateUserIfNotEmpty(); <- MAL
    // sendEmailIfFieldsValid(); <- MAL
    const createUser = () => { };
    const updateUser = () => { };
    const sendEmail = () => { };


})();