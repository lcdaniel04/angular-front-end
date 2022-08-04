
import { Validators, FormControl, ValidatorFn } from '@angular/forms';
import { Util } from './util';
export class Validacion {

  static getCampo(required: boolean) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    return new FormControl('', this.getParametroCampo(required));
  }

  static getCampoDisabled(required: boolean, disabled: boolean) {
    return new FormControl({ value: '', disabled }, this.getParametroCampo(required));
  }

  static getParametroCampo(required: boolean) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    return parameter;
  }

  static getCheckBox(required: boolean) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    return new FormControl('', parameter);
  }

  static getRol(required: boolean, tipo: string) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    return new FormControl({ value: tipo, disabled: false }, parameter);
  }

  static getCampoLetras(required: boolean) {
    return new FormControl('', this.getParametroLetras(required));
  }

  static getCampoNombre(required: boolean) {
    return new FormControl('', this.getParametroNombre(required));
  }

  static getCampoNombreDisabled(required: boolean, disabled: boolean) {
    return new FormControl({ value: '', disabled }, this.getParametroNombre(required));
  }

  static getParametroNombre(required: boolean) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    parameter.push(Validators.minLength(12));
    parameter.push(Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'));
    return parameter;
  }


  static getCampoLetrasDisabled(required: boolean, disabled: boolean) {
    return new FormControl({ value: '', disabled }, this.getParametroLetras(required));
  }


  static getParametroLetras(required: boolean) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    parameter.push(Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'));

    return parameter;
  }

  static getCampoEmailDisabled(required: boolean, disabled: boolean) {
    return new FormControl({ value: '', disabled }, this.getParametroEmail(required));
  }

  static getCampoEmail(required: boolean) {
    return new FormControl('', this.getParametroEmail(required));
  }

  static getParametroEmail(required: boolean) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    parameter.push(Validators.email);
    return parameter;
  }

  static getCampoNumeroDisabled(required: boolean, disabled: boolean, min: number, max: number) {
    return new FormControl({ value: '', disabled }, this.getParametroNumero(required, min, max));
  }

  static getParametroNumero(required: boolean, min: number, max: number) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    if (min !== 0) {
      parameter.push(Validators.minLength(min));
    }
    if (max !== 0) {
      parameter.push(Validators.maxLength(max));
    }
    parameter.push(Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'));
    return parameter;
  }


  static getCampoCelularDisabled(required: boolean, disabled: boolean, min: number, max: number) {

    return new FormControl({ value: '', disabled }, this.getParametroCelular(required, min, max));
  }

  static getParametroCelular(required: boolean, min: number, max: number) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    if (min !== 0) {
      parameter.push(Validators.minLength(min));
    }
    if (max !== 0) {
      parameter.push(Validators.maxLength(max));
    }
    return parameter;
  }

  static getCampoNumero(required: boolean, min: number, max: number) {
    return new FormControl('', this.getParametroNumero(required, min, max));
  }

  static getPassword(required: boolean, min: number, max: number) {
    return new FormControl('', this.getParametroPassword(required, min, max));
  }

  static getParametroPassword(required: boolean, min: number, max: number) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    parameter.push(Validators.minLength(min));
    if (max != 0) {
      parameter.push(Validators.maxLength(max));
    }
    parameter.push(Validators.pattern('^((?=.*[\d])(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[a-z])(?=.*[^\w\d\s])).{7,30}$'));

    return parameter;
  }

  static getCampoDate(required: boolean) {

    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    return new FormControl('', parameter);
  }
}
