import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/skill-tracker/api/v1/engineer";

class SkillTrackerDataService {
    retrieveAll() {
        return axios.get(EMPLOYEE_API_BASE_URL + '/getAll');
    }

    retrieveByName(name) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/getProfileByEnggName/' + name);
    }

    retrieveById(Id) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/getProfileById/' + Id);
    }

    retrieveBySkill(skill) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/getProfileBySkill/' + skill);
    }
}

export default new SkillTrackerDataService()