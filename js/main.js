import AccountList from './model/account_list.js';
import AccountListView from './view/account_list_view.js';
import Controller from './controller/controller.js';

let account_list = new AccountList();
let account_list_view = new AccountListView(account_list);
let controller = new Controller(account_list, account_list_view);

controller.account_list.add_account("Horba", ["+380983106861","+380965724943"])
controller.account_list.add_account("Boyko", ["+380965123943", "+380961234567", "+380969876543"]);
controller.account_list_view.view_list();