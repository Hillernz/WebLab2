import Account from "../model/account.js";

export default class Controller {
    constructor(account_list, account_list_view) {
        this.account_list = account_list;
        this.account_list_view = account_list_view;
        document.querySelector('#content').addEventListener('click', (e) => this.onClick(e));
        if (window.Worker) {
            this.worker = new Worker("js/web_worker/web_worker.js");
            this.worker.onmessage = function (e) {
                document.querySelector('#add-button').removeAttribute("disabled");
            }
        }

    }

    onClick(e) {
        if (e.target.id === "add-button") {
            this.add_account();
            return;
        }
        if (e.target.id === "sort-button") {
            this.sort_by_surname();
            return;
        }
        if (e.target.className === "del-button") {
            this.delete_account(e.target.dataset.id);
            return;
        }
        if (e.target.className === "edit-button") {
            this.edit_account(e.target.dataset.id);
            return;
        }
        if (e.target.className === "add-number-button") {
            this.add_number(e.target.dataset.id);
            return;
        }
    }

    add_account() {
        const surname = prompt('Enter surname:', '');
        const number = prompt('Enter phone number:', '');

        if(number != '' && surname != '' ) {
            this.account_list.add_account(surname, number);
            this.account_list_view.view_list();
            this.worker.postMessage(this.account_list.account_list);
        }
        else {
            alert("Empty");
        }
    }

    delete_account(id) {
        this.account_list.delete_account(id);
        this.account_list_view.view_list();
        this.worker.postMessage(this.account_list.account_list);
    }

    edit_account(id) {
        const surname = prompt('Enter surname:', '');
        let myLen = this.account_list.getMyLen(id)
        var number = []
        for(let index = 0; index < myLen; index++){
            number.push(prompt('Enter phone number:', ''))
        }
  

        if(number != '' && surname != '' ) {
            this.account_list.edit_account(id, surname, number);
            this.account_list_view.view_list();
            this.worker.postMessage(this.account_list.account_list);
        }
        else {
            alert("Empty");
        }
    }

    sort_by_surname(){
        this.account_list.sort_by_surname();
        this.account_list_view.view_list();
        this.worker.postMessage(this.account_list.account_list);
    }

    add_number(id) {
        const number = prompt('Enter phone number:', '');
        if(number != '') {
            this.account_list.add_number(id, number);
            this.account_list_view.view_list();
            this.worker.postMessage(this.account_list.account_list);
        }
        else {
            alert("Empty");
        }
    }
}