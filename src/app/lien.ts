import { Category } from "./category.enum";
export class Lien {
  constructor(
    public url: string,
    public name: string,
    public category: Category
  ) {}

  open() {
    let url = this.url
    if ( !this.url.startsWith('http')){
      url = "https://stackblitz.com/edit/" + this.url
    }
    var win = window.open(url, "_blank");
    win.focus();
  }
}
