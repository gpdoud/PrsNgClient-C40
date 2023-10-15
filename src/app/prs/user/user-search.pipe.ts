import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string = ""): User[] {
    if(typeof users === "undefined" || typeof users === null) return users;
    searchCriteria = searchCriteria.toLowerCase();
    let selected: User[] = [];
    for(let user of users) {
      if(
        user.id.toString().toLowerCase().includes(searchCriteria)
        || user.username.toLowerCase().includes(searchCriteria)
        || user.lastname.toLowerCase().includes(searchCriteria)
        || user.firstname.toLowerCase().includes(searchCriteria)
        || (user.phone !== null && user.phone.toLowerCase().includes(searchCriteria))
        || (user.email !== null && user.email.toLowerCase().includes(searchCriteria))
        || user.isReviewer.toString().toLowerCase().includes(searchCriteria)
        || user.isAdmin.toString().toLowerCase().includes(searchCriteria)
      ) {
        selected.push(user);
      }
    }
    return selected;
  }

}
