export interface Repository <T> {
    findAll(): T [ ] | undefined; //Para acceder a la base de datos se utiloiza Promise<T [ ] | undefined>//
    findOne(item: {id: string}): T | undefined ;//Reciibe un parametro (un objeto item) se pone string para que en la base de datos se pueda modificar segun repositorio
    add(item: T): T | undefined; //para devolver un objet id
    update(item: T): T | undefined;
    dalete(item: {id: string}):  | undefined ; //devuelve el elemento borrado dond exijo que sea el id
}