/* eslint-disable no-unused-vars */
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  return Promise.all([promise1, promise2])
    .then((responses) => ({
      photo: responses[0],
      user: responses[1],
    }))
    .catch((err) => ({ photo: null, user: null }));
}
