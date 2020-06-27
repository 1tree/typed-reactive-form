# typed-reactive-form

This library provides a means to easily create a reactive form based on a class in Typescript. It should be noted that you **must** use a class and not just an interface. Interfaces are only a design time construct. Classes however are compiled to create a prototype.

## Usage

Mark properties to be used in a form with the decorator @FormMember(). You can also provide some options that will affect the behavior of the form.

- defaultValue provides a defaulted value to the form field
- context allows the field to become optional. If a context string passed into the form's constructor matches one of the values provided then the field will be included.
- validators allows validators to be assigned to the form control

## Limitations

Currently, arrays aren't supported.

