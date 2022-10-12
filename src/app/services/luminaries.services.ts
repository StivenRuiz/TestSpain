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
  }

  getLuminaries(): Luminaria[] {
    return this.lumininaries;
  }
}
