import { Injectable } from "@angular/core";
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})

export class LodaderService {
    private loading!: HTMLIonLoadingElement;
    constructor(private loadingController: LoadingController) {

    }

    async showLoader(message: string = 'Cargando...') {
        this.loading = await this.loadingController.create({
            message
        });
        await this.loading.present();
    }

    async hideLoader() {
        await this.loading.dismiss();
    }
}
