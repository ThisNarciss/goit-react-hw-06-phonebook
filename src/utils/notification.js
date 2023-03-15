import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function failureNameNotify(contact) {
  Notify.failure(`${contact.name} is already in contacts`);
}

export function failureNumberNotify(contact) {
  Notify.failure(`This is ${contact.name} phone number`);
}
export function successNotify(contact) {
  Notify.success(`${contact.name} add to the contacts`);
}
