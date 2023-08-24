import { Component, Provider } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ChatGptService } from '../services/chat-gpt.service';
import { LodaderService } from '../services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chatG;
  retu : string = "";
  constructor(private chat :ChatGptService,
    private formBuilder: FormBuilder,
    private loader: LodaderService
  ) {
    this.chatG = this.formBuilder.group({
      mensaje: '',

    });
  }

  async onSubmit(mes: any){


/*     try {
      await this.loader.showLoader('Cargando datos...');
      // Realiza la carga de datos aquí
    } finally {
      await this.loader.hideLoader();
    } */

    this.loader.showLoader('Cargando datos...')
    await this.chat.sendMessage(this.chatG.get('mensaje')?.value || '').subscribe(data => {
      console.log((<any>data).choices[0].message.content);
      this.retu = (<any>data).choices[0].message.content;
      this.loader.hideLoader();
    })

  }

}
