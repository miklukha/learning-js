class User {
  email;

  // constructor(email) {
  //   this.email = email;
  // }
  // get email() {
  //   return this.email;
  // }
  // set email(newEmail) {
  //   this.email = newEmail;
  // }
}

const user = new User();
console.log(user);
console.log(user.email);
user.email = 'a@gmail.com';
console.log(user.email);

class User1 {
  constructor(email) {
    this._email = email;
  }
  get email() {
    return this._email;
  }
  set email(newEmail) {
    this._email = newEmail;
  }
}

const user1 = new User1();
console.log(user1);
console.log(user1.email);
user1.email = 'a1@gmail.com';
console.log(user1.email);
