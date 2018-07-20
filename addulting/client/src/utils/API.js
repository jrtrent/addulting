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
    console.log(subjectData)
    return axios.post("/api/subjects/subjectentry", subjectData);
  },

  saveUser: function(userData) {
    return axios.post("/api/users/users", userData);
  },

  getTask: function() {
    return axios.get("/api/tasks");
  },
  // Gets the subject with the given id
  getTasks: function(id) {
    return axios.get("/api/tasks/" + id);
  },
  // Deletes the subject with the given id
  deleteTasks: function(id) {
    return axios.delete("/api/tasks/" + id);
  },
  // Saves a subject to the database
  saveTask: function(taskData) {
    return axios.post("/api/tasks", taskData);
  },

};
