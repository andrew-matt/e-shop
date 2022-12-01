export const handleFirebaseAuthError = (error: unknown): string => {
  const err = error as { code: string };
  let errorMessage;

  switch (err.code) {
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      errorMessage = 'Wrong email or password.';
      break;
    case 'auth/too-many-requests':
      errorMessage = 'Too many requests. Please, try again later.';
      break;
    case 'auth/email-already-exists':
      errorMessage =
        'The email has already been registered. Please, log in or reset your password.';
      break;
    case 'auth/invalid-email':
      errorMessage = 'Invalid email address.';
      break;
    case 'auth/invalid-password':
      errorMessage = 'Password is too short (minimum is 6 characters).';
      break;
    default:
      errorMessage = 'Some error occurred!';
  }

  return errorMessage;
};
