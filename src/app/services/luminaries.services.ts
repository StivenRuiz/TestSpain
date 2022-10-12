import { Injectable } from '@angular/core';
import { Luminaria } from '../models/luminaria.model';

@Injectable({
  providedIn: 'root',
})
export class LuminariesService {
  public validLuminaries = false;
  public lumininaries: Luminaria[] = [];

  setValidLuminaries(validLuminaries: boolean) {
    this.validLuminaries = validLuminaries;
  }

  getValidLuminaries(): boolean {
    return this.validLuminaries;
  }

  setLuminaries(luminaries: Luminaria) {
    this.lumininaries.push(luminaries);
    luminaries.info_completa = true;
    this.updateLuminaryVisibility(luminaries);
  }

  removeLuminary(luminary: Luminaria) {
    this.lumininaries = this.lumininaries.filter((lumi) => lumi.id_luminaria !== luminary.id_luminaria);
  }

  updateLuminaryVisibility(luminary: Luminaria) {
    this.lumininaries.map((lumi) => {
      if(lumi.id_luminaria === luminary.id_luminaria) {
        lumi.info_completa = luminary.info_completa;
      } else {
        lumi.info_completa = false;
      }
    })
  }

  getLuminaries(): Luminaria[] {
    return this.lumininaries;
  }
}
