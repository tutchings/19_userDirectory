import axios from "axios";
const URL = 'https://randomuser.me/api/?seed=foobar&results=50&inc=picture,name,phone,email,dob&nat=us';

export default {
    search: function() {
        return axios.get(URL);
    }
};