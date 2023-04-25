import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation createUser($userNew: UserInput!) {
    user: signupuser(userNew: $userNew) {
      firstName
    }
  }
`;
