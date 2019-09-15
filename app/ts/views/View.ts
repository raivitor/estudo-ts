export abstract class View<T> {
  private _elemento: Element;
  private _escapar: boolean;

  constructor(selector: string, escapar: boolean = false) {
    this._elemento = document.querySelector(selector) as Element;
    this._escapar = escapar;
  }

  update(model: T): void {
    this._elemento.innerHTML = this.template(model);
  }

  abstract template(model: T): string;
}
