import { gql, useQuery } from "@apollo/client";

const ME = gql`
  query me {
    me {
      id
      address
      avatar
      bio
      displayName
    }
  }
`;

const useMe = () => {
  console.log("??");
  const me = useQuery(ME);
  return me;
};

export default useMe;
