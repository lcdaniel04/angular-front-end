export class Usuario {
  constructor(
    public password: String = "",
    public id: string ="",
    public nombre: string ="",
    public name: string ="",
    public apellidos: string ="",
    public direccion: string ="",
    public celular: number=0,
    public email: string|undefined ="",

  ) {

  }
}
