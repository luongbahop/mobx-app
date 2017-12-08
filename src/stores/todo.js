import { observable, action, computed } from 'mobx';

class Todo {
    @observable list = 'hop';
    @observable count = 0;
    @observable arr = [];

    @action add(data) {
        console.log(data, 'data');
        this.list = data;
        this.count += 1;
        this.arr.push(this.count);
    }
}
export default new Todo();  