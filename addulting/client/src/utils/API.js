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
    return axios.post("/api/subjects/subjectentry", subjectData);
  }
};
