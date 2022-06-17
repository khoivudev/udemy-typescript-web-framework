import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.set({ name: 'newname', age: 9999 });
user.set({ name: 'Alex', age: 9999 });
user.set({ age: 9999, name: 'Alex' });
user.set({});
console.log(user.get('name'));
console.log(user.get('age'));
