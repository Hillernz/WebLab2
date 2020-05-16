export default class AccountView {
    constructor(account) {
        this.account = account;
    }

    toHtml() {

        let str = ``;
        if (this.account.number){
        let myLen = this.account.number.length
        for(let index = 0; index < myLen; index++){
            if (index == 0){
                str += `
                <tr>
                    <td> ${this.account.surname} </td>
                    <td> ${this.account.number[0]} </td>
                   <td><button data-id="${this.account.id}" class="del-button">Delete</button></td>
                   <td><button data-id="${this.account.id}" class="edit-button">Edit</button></td>
                   <td><button data-id="${this.account.id}" class="add-number-button">AddNumber</button></td>
                </tr>`;
            }
            else{
                str += `
                <tr>
                    <td></td>
                    <td> ${this.account.number[index]} </td>
                </tr>`;
            }
        };
    }
        return str;
    }
}