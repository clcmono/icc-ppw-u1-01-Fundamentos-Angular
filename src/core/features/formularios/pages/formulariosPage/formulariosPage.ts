import { ChangeDetectionStrategy, Component, input,inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../../../app/Utils/formUtils';

@Component({
  selector: 'formularios-page',
  imports: [ReactiveFormsModule],
  templateUrl: './formulariosPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormulariosPage {
formutils = FormUtils;

onSubmit() {
if(this.myForm.invalid){
  this.myForm.markAllAsTouched();
  return;
}
  console.log( 'Datos del formulario', this.myForm.value);
  alert('Formulario valido.Datos enviados correctamente');
  this.myForm.reset(); 
}


  private fb = inject(FormBuilder)


  myForm: FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.minLength(3)]],
    edad:['',[Validators.required, Validators.min(18)]],
    correo:['',[Validators.required, Validators.email]]
  });


 }
