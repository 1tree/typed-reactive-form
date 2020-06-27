import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {formMemberKey} from './form-member-key';
import {FormMemberDetail} from './form-member-detail';

export class TypedReactiveForm<T> extends FormGroup {
  constructor(c: new() => T, context?: string) {
    super(createControls(new c(), context));
  }
}

function createControls<T>(instance: T, context?: string): {[key: string]: AbstractControl} {
  const result = {};
  const members = Reflect.getMetadata(formMemberKey, instance) as FormMemberDetail[];
  members.forEach(member => {
    const options = member.options;
    if (!options.context || options.context.length === 0 || options.context.includes(context)){
      result[member.property] = new FormControl(options.defaultValue, options.validators);
    }
  });
  return result;
}
