import {FormGroupDetail} from './form-model/form-group-detail';
import {formGroupKey} from './form-model/metadata-keys';

export function FormGroup(constructor: new() => object): PropertyDecorator {
  return (target: any, key: string) => {
    let formArrays: FormGroupDetail[] = Reflect.getMetadata(formGroupKey, target);

    if (formArrays){
      formArrays.push({property: key, constructor});
    } else {
      formArrays = [{property: key, constructor}];
      Reflect.defineMetadata(formGroupKey, formArrays, target);
    }
  };
}
