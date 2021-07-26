
import  axios  from 'axios';

export default class CandidateService{
    getCandidateList(){
        return axios.get("http://localhost:8080/api/candidatescontrollers/getall")
    }
}