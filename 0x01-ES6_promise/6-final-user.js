/* eslint-disable no-unused-vars */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  return Promise.allSettled([promise1, promise2])
    .then((responses) => [
      {
        status: responses[0].status,
        value: responses[0].value,
      },
      {
        status: responses[1].status,
        value: String(responses[1].reason),
      },
    ])
    .catch((err) => {});
}
