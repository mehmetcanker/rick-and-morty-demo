import {gql} from "@apollo/client";

const GET_ALL_ACTORS = gql`
    query($page:Int, $filter: FilterCharacter){
        characters(page:$page,filter:$filter){
        info {
            pages
            count
            next
            prev
        }
        results{
                id
                name
                image
                status
                gender
        }
    }
    }
`

export default GET_ALL_ACTORS;
