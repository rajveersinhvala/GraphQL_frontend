import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation createUser($userNew: UserInput!) {
    user: signupuser(userNew: $userNew) {
      firstName
    }
  }
`;

export const LOGIN_USER = gql`
  mutation signinuser($usersingin: UserSigninInput!) {
    user: signinuser(usersingin: $usersingin) {
      token
    }
  }
`;

export const CREATE_QUOTE = gql`
  mutation createQuote($name: String!) {
    quote: createQuote(name: $name)
  }
`;
