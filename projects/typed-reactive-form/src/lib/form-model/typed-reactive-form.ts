import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {formGroupKey, formMemberKey} from './metadata-keys';
import {FormMemberDetail} from './form-member-detail';
import {FormGroupDetail} from './form-group-detail';

export class TypedReactiveForm<T> extends FormGroup {
  constructor(c: new() => T, context?: string) {
    super(createControls(new c(), context));
  }
}

function createControls<T>(instance: T, context?: string): {[key: string]: AbstractControl} {
  const result = {};
  const members = getFormMemberDetails(instance);
  members.forEach(member => {
    const options = member.options;
    if (!options.context || options.context.length === 0 || options.context.includes(context)){
      result[member.property] = new FormControl(instance[member.property], options.validators);
    }
  });
  const groups = getFormGroupDetails(instance);
  if (groups) {
    groups.forEach(group => {
      result[group.property] = new TypedReactiveForm(group.constructor);
    });
  }
  return result;
}

function getFormMemberDetails<T>(instance: T) {
  return Reflect.getMetadata(formMemberKey, instance) as FormMemberDetail[];
}

function getFormGroupDetails<T>(instance: T) {
  return Reflect.getMetadata(formGroupKey, instance) as FormGroupDetail[];
}
