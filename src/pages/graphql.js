import gql from "graphql-tag";

export const GET_ALL_STUDENTLIST = gql`
  query GET_ALL_STUDENTLIST {
    student {
    id
    student_name
    updated_at
    created_at
    roll
    to_year
    from_year
    class
    }
}
`;