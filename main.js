Vue.component("app-form-field", {
    props: ['color', 'label'],
    template: `
    <div class="flex justify-center">
    <div :class="'flex justify-center mt-8 border-8 border-' +  color + '-900 rounded-full'">
        <label for="first-name" :class="'flex items-center bg-' + color + '-300 w-40 capitalize px-4 py-2 rounded-l-full text-' + color + '-900'">first name</label>
        <div class="bg-white rounded-r-full">
            <input placeholder="your first name" class="border-red-900 capitalize m-4">
        </div>
        </div>
    </div>
    `
})

var app = new Vue({
    el: "#app",
    data: {
        formColor: "teal",
        formLabel: "first name"
    }
})

// Vue.component('blog-post', {
//     props: ['message', 'color'],
//     template: '<h3 :class="color">{{ message }}</h3>'
//   })

// var app  = new Vue({
//     el: "#form-field",
//     data: {
//         message: "HELLO VUE",
//         color: "text-red-700"
//     }
// });