import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, 
         FormControl, 
         Validators,
         FormBuilder, 
         FormArray} from '@angular/forms';

import { UserService } from 'src/app/services/User.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user = new User();

  public formUser!: FormGroup;

  constructor(private userServ: UserService,
              private rota: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      nome: ['',
            Validators.compose([
              Validators.minLength(5), 
              Validators.maxLength(150),
              Validators.required
            ])
      ],
      sobrenome: ['',
      Validators.compose([
        Validators.minLength(5), 
        Validators.maxLength(150),
        Validators.required
      ])
       ],
       dataNascimento: [''],
      email: ['',
        Validators.compose([
          Validators.email, Validators.required
        ])
      ],
      senha: ['',
        Validators.compose([
          Validators.minLength(8),
          Validators.required
        ])
      ],
      senhaCheck: ['',
        Validators.compose([
          Validators.minLength(8),
          Validators.required,
          SignupComponent.equalsTo('senha')
        ])
      ],
    });

  }

  public registrar() {
    console.log(this.formUser.value);

    if (this.formUser.valid) {
      debugger
      console.log(this.formUser);
      console.log(this.formUser.value);
      this.userServ.add(this.formUser.value).subscribe((resposta: any)=>{
        console.log(resposta);
        this.rota.navigate(['/login']);
        });

    } else {
      console.log('Form inválido');
      console.log(this.formUser);
    }
    
  }


  public onSelectionChange(e: any, indice: number) {
    const favoritos: FormArray = 
          this.formUser.get('favoritos') as FormArray;

   // this.listaFavoritos[indice].checked = e.target.checked;
    this.updateCheckControl(favoritos, e.target);
  }

  public updateCheckControl(favoritos: FormArray, tag: any) {
    if (tag.checked) {
      favoritos.push(new FormControl(tag.value));
    } else {
      favoritos.controls.forEach((item, index: number)=>{
        if (item instanceof FormControl) {
          if (item.value === tag.value) {
            favoritos.removeAt(index);
            return;
          }
        }
      });
    }
  }

  

  static equalsTo(outroCampo: string) {
    const validator = (formcontrol: FormControl)=>{
      if (outroCampo == null) {
        throw new Error('É necessário informar o campo.');
      }

      if (!formcontrol.root || 
          !(<FormGroup>formcontrol.root).controls) {
        return null
      }

      const field = (<FormGroup>formcontrol.root)
                                          .get(outroCampo);

      if (!field) {
        throw new 
         Error('É necessário informar um campo válido');
      }

      if (field?.value !== formcontrol.value) {
        return { equalsTo: outroCampo}
      }

      return null;
    };

    return validator;
  }

}
