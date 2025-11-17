import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormUtils } from '../../../../../app/Utils/formUtils';

@Component({
  selector: 'app-formularioDinamico',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulariosDinamicos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormulariosDinamicos {

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  // Formulario principal
  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    edad: [0, [Validators.required, Validators.min(18)]],
    correo: ['', [Validators.required, Validators.email]],

    // Aquí estaba el error: esto debe estar dentro del FormGroup
    lenguajes: this.fb.array(
      [
        this.fb.control('Python', [Validators.required, Validators.minLength(3)]),
        this.fb.control('Java', [Validators.required, Validators.minLength(3)]),
      ],
      Validators.minLength(1)
    )
  });

 get lenguajes(): FormArray {
  return this.myForm.get('lenguajes') as FormArray;
}

  newLenguaje: FormControl = this.fb.control('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  onAddToLenguajes() {
    if (this.newLenguaje.invalid) return;

    this.lenguajes.push(
      this.fb.control(this.newLenguaje.value, Validators.required)
    );

    this.newLenguaje.reset();
  }
  // Eliminar lenguaje
onDeleteLenguaje(index: number) {
  this.lenguajes.removeAt(index);
}


  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
  }
}
