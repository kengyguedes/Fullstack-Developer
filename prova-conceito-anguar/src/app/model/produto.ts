export class Produto {
  constructor(
    public id: string,
    public codigo: string,
    public nome: string,
    public precoUnitario: number,
    public imagemUrl: string
  ) {}
}
