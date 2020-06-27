import 'reflect-metadata';
import {FormMemberOptions} from './form-model/form-member-options';
import {FormMemberDetail} from './form-model/form-member-detail';
import {formMemberKey} from './form-model/form-member-key';

export function FormMember(options?: Partial<FormMemberOptions>): PropertyDecorator {
  return (target: any, key: string) => {
    let formMembers: FormMemberDetail[] = Reflect.getMetadata(formMemberKey, target);

    if (formMembers) {
      formMembers.push({property: key, options: getOptions(options)});
    } else {
      formMembers = [{property: key, options: getOptions(options)}];
      Reflect.defineMetadata(formMemberKey, formMembers, target);
    }
  };
}


function getOptions(options: Partial<FormMemberOptions>): FormMemberOptions {
  const defaultOptions = {
    defaultValue: null,
    validators: [],
    disable: false
  };
  if (options){
    Object.assign(defaultOptions, options);
  }
  return defaultOptions;
}
