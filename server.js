import Vasuki from 'vasuki-db';

const vdb = new Vasuki();

// login
await vdb.login('chauhanshaurya120@gmail.com', 'ASDFGHJKLqwertyuiop@1209');

// fetch data
const users = await vdb.fetchTable('Main', 'Users');

console.log(users);
