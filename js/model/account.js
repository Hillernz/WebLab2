export default class Account {
    constructor(id, surname, number) {
        this.id = id;
        this.surname = surname;
        if(typeof(number) != 'string'){
        this.number = number;
        }
        else{
            this.number = [];
            this.number.push(number)   
        }
    }

    edit(surname, number) {
        this.surname = surname;
        this.number = number;

    }

    add(newNumber){
        this.number.push(newNumber)
    }
}