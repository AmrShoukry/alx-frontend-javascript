/* eslint-disable no-unused-vars */
const { uploadPhoto, createUser } = require('./utils');

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  return Promise.all(promise1, promise2)
    .then((responses) => {
      console.log(
        `${responses[0].body} ${responses[1].firstName} ${responses[1].lastName}`,
      );
    })
    .catch((err) => {
      console.log('Signup system offline');
    });
}
