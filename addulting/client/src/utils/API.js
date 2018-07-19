import axios from "axios";

export default {
  // Gets all subjects
  getSubjects: function() {
    return axios.get("/api/subjects/subjectentry");
  },
  // Gets the subject with the given id
  getSubject: function(id) {
    return axios.get("/api/subjects/" + id);
  },
  // Deletes the subject with the given id
  deleteSubject: function(id) {
    return axios.delete("/api/subjects/" + id);
  },
  // Saves a subject to the database
  saveSubjects: function(subjectData) {
    return axios.post("/api/subjects/subjectentry", subjectData);
  },

  saveUser: function(userData) {
    return axios.post("/api/users/users", userData);
  },

  getTask: function() {
    return axios.get("/api/tasks/taskentry");
  },
  // Gets the subject with the given id
  getTasks: function(id) {
    return axios.get("/api/tasks/taskentry" + id);
  },
  // Deletes the subject with the given id
  deleteTasks: function(id) {
    return axios.delete("/api/tasks/taskentry" + id);
  },
  // Saves a subject to the database
  saveTasks: function(subjectData) {
    return axios.post("/api/tasps/taskentry", subjectData);
  },

};
