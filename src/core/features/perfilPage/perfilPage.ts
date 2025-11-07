import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-perfil-page',
  imports: [RouterLink],
  templateUrl: './perfilPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilPage {
  name = signal("Claudia");
  lastName = signal("Quevedo");
  age = signal(21);
  getFullName() {
    return `${this.name()} ${this.lastName()} ${this.age()} ` ;
  }
  resetData() {
    this.name.set('Claudia');
    this.lastName.set('Quevedo');
    this.age.set(21);
  }
  changeAge() {
    this.age.set(18);
  }
  changeData() {
    this.name.set('Jeon');
    this.lastName.set('Jungkook');
    this.age.set(28);
  }


}

