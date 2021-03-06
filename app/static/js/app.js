/* Add your Application JavaScript */
/*global Vue*/
/*global VueRouter*/
/*global fetch*/
/*global token*/

Vue.component('app-header', {
    template: 
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <a class="navbar-brand" href="#">Lab 7</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
        </ul>
      </div>
    </nav>
    
});

Vue.component('app-footer', {
    template: 
    <footer>
        <div class="container">
            <p>Copyright &copy; Flask Inc.</p>
        </div>
    </footer>
    
});

const Home = Vue.component('home', {
   template: `
    <div class="jumbotron">
        <h1>Lab 7</h1>
        <p class="lead">In this lab we will demonstrate VueJS working with Forms and Form Validation from Flask-WTF.</p>
    </div>
   `,
    data: function() {
       return {}
    }
});

const upload = Vue.component('', {
    template: `
    <form id="uploadForm" @submit.prevent="uploadPhoto" method="POST" enctype="multipart/form-data">
    <h3>Upload Form</h3>
        <label>Description of file:</label>
        <input type="text" name="description" size="100" />
        <br />
        <label>Upload Image File:</label>
        <input type="file" name="photo" />
        <br />
        <br />
        <button type="submit">Submit</button>
    </form>
    `,
    methods: {
        uploadPhoto: function () {
            let self = this;
            let uploadForm = document.getElementById('uploadForm');
            let form_data = new FormData(uploadForm);

            fetch("/api/upload", {
                method: "POST",
                body: form_data,
                headers: {
                    'X-CSRFToken': token
                },
                credentials: 'same-origin'
            }).then(
                function (response) { return response.json(); }
                ).then(
                function (response) { self.msg = response}
                ).catch(
                function (error) { console.log(error); }
                );
        }
    },
    data: function () {
        return { msg:[] }
    }
});


// Define Routes
const router = new VueRouter({
    routes: [
        { path: "/", component: Home }
    ]
});

// Instantiate our main Vue Instance
let app = new Vue({
    el: "#app",
    router
});