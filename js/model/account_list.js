import Account from "./account.js";


export default class AccountList {
    constructor() {
        this.account_list = [];
        this.flag = 1;
    }

    add_account(surname, number) {
        let id = 0;
        if (this.account_list.length == 0) id = 1;
        else id = parseInt(this.account_list[this.account_list.length - 1].id) + 1;
        const account = new Account(id.toString(10), surname, number);
        this.account_list.push(account);
        return account;
    }

    edit_account(id, surname, number) {
        const index = this.account_list.findIndex((x) => x.id === id);
        this.account_list[index].edit(surname, number);
    }

    add_number(id, number){
        const index = this.account_list.findIndex((x) => x.id === id);
        this.account_list[index].add(number);
    }

    getMyLen(id){
        const index = this.account_list.findIndex((x) => x.id === id);
        return this.account_list[index].number.length;
    }

    delete_account(id) {
        this.account_list = this.account_list.filter(function (x) {
            return x.id != id;
        });

    }

    sort_by_surname(){
        
        
        if(this.flag){
            this.account_list.sort((a, b) => (a.surname > b.surname) ? 1 : -1);
            this.flag = 0;
        }
        else{
            this.account_list.sort((a, b) => (a.surname < b.surname) ? 1 : -1);
            this.flag = 1;
        }
    }
}