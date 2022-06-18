import { User } from './models/User';

const user = new User({});
user.attributes.set({ name: 'NEW NAME' });
user.attributes.set({ age: 24 });

console.log(user.attributes.get('name'));

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');
