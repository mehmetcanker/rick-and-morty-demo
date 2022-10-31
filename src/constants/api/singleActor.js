import {gql} from "@apollo/client";

let GET_SINGLE_ACTOR = gql`
query($id:ID!){
    character(id:$id){
        name
        gender
        status
        image
        created
        species
        origin{
            name
        }
        location{
            name
            type
        }
    }
}
`

export default GET_SINGLE_ACTOR;
