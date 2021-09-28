import { ClassesObjectModel } from 'models';

// TODO: Add specs for utils!
export default class Utils {
  static makeClassName = (classes: ClassesObjectModel): string => {
    const keys = Object.keys(classes);
    const validClasses = keys.filter((key: string) => classes[key]);

    return validClasses.join(' ');
  };

  static isSet = (value: unknown): boolean => {
    const isValueIsNull = value === null;
    const isValueIsUndefined = value === undefined;

    return !(isValueIsNull || isValueIsUndefined);
  };
}
