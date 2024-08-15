import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: IUser[] = []
  usersListFiltred: IUser[] = []
  userSelected: IUser = {} as IUser
  showUserDetalls: boolean = false

  ngOnInit(){
      setTimeout( () => {
        this.usersList = UsersList
        this.usersListFiltred = this.usersList
      }, 1)
  }

  onUserSelected(user: IUser) {
    this.userSelected = user
    this.showUserDetalls = true

  }

  onFilter(filterOptions: IFilterOptions) {
      console.log(filterOptions)

      this.usersListFiltred = this.filterUsersList(filterOptions, this.usersList)
  }

  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {

    let filtredList: IUser[] = []

    filtredList = this.filterUsersListByName(filterOptions.name, this.usersList)

    return filtredList
  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {

    const NAME_NOT_TYPED = name === undefined;
  
    if (NAME_NOT_TYPED) {-
      return usersList;
    }
  
    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase())
    );
  
    return filteredList;
  }
}
