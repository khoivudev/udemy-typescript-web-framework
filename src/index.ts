import { User } from './models/User';

const user = new User({});
user.set({ name: 'NEW NAME' });
user.set({ age: 24 });

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');
