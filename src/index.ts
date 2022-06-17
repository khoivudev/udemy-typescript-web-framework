import { User } from './models/User';
import axios from 'axios';

const user = new User({ name: 'myname', age: 20 });

user.on('change', () => {
  console.log('change #1');
});
user.on('change', () => {
  console.log('change #2');
});
user.on('save', () => {
  console.log('save was triggered');
});

user.trigger('change');

axios.get('http://localhost:3000/users/1');
