import { gql, useQuery } from "@apollo/client";

const ME = gql`
  query me {
    me {
      _id
      address
      avatar
      bio
      displayName
      collections {
        _id
        contractAddress
        cover
        description
        logo
        name
        royalty
        symbol
        variant
      }
    }
  }
`;

const useMe = () => {
  const me = useQuery(ME);
  return me;
};

export default useMe;
