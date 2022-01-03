const app = Vue.createApp({
    data: function(){
        return {
            greetingMessage: "Hello, Welcome to my portfolio",
            message: "My name is ",
            name: "Shreya",
            seen: true,
            submitted: "Thank you for submitting",
            alert: "Please submit the file"
        }       
    },

    methods:{
        hidden(){
            if(this.seen==true){
                this.seen=false
            }
            else{
                this.seen=true
            }
        }
    },

    computed: {
        messages(){
            return this.message + this.name
        }
    }
})

