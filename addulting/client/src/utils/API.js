import axios from "axios";

export default {
  // Gets all subjects
  getSubjects: function() {
    return axios.get("/api/subjects");
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
    return axios.post("/api/subjects", subjectData);
  },

  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  getUsers: function() {
    return axios.get("/api/users");
  },
  
  getUser: function(username){
    return axios.get("/api/users/" + username);
  },

  getTask: function() {
    return axios.get("/api/tasks");
  },
  // Gets the subject with the given id
  getTasks: function() {
    return axios.get("/api/tasks");
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
