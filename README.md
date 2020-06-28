# typed-reactive-form

This library provides a means to easily create a reactive form based on a class in Typescript. It should be noted that
you **must** use a class and not just an interface. Interfaces are only a design time construct. Classes however are
compiled to create a prototype.

## Usage

Mark properties to be used in a form with the decorator @FormMember(). You can also provide some options that will affect
the behavior of the form.

- context allows the field to become optional. If a context string passed into the form's constructor matches one of the
values provided then the field will be included.
- validators allows validators to be assigned to the form control
- mark properties that hold an instance of a class with the @FormGroup() and the form will contain an embedded FormGroup
that then contains the fields as decorated on that class.

Classes will be instantiated in the process of building the form. the form will then be patched with the values of that
class. 

**NOTE** You must use a class and not an interface. Interfaces are design time only constructs and will not populate the form.

## Limitations

Currently, arrays aren't supported.

