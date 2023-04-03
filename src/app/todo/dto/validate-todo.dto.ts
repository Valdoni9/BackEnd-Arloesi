import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import {} from 'class-validator';

@ValidatorConstraint({ name: 'validateUpdateFinish', async: false })
export class forbiddentochange implements ValidatorConstraintInterface {
  validate(isDone: number) {
    return isDone === 0 ? true : false;
  }

  defaultMessage() {
    return 'Forbidden to change, task has been completed';
  }
}
