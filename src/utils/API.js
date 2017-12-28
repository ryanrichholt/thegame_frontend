import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },

  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },

  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },

  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  getProfile: () => {
    console.log('Requesting user profile...')
    return axios.get("/api/profile")
    // axios({
    //   method: 'get',
    //   url: '/api/profile',
    // })
    //   .then( response => {
    //         if (response.data.success){
    //           console.log('getProfile success:', response)
    //           comp.setState({ user: response.data.user })
    //         } else {
    //           console.log('getProfile fail:', response)
    //           comp.setState({ user: null })
    //         }
    //   })
    //   .catch( error => {
    //     console.log('getProfile error');
    //     comp.setState({ user: null })
    //   });
  }

};
