const app = Vue.createApp({
    data: function(){
        return {
            greetingMessage: "Hello, Welcome to my portfolio",
            message: "My name is ",
            name: "Shreya",
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto doloribus libero 
            earum, error voluptates at fugiat tenetur? Omnis, assumenda? A, maiores. Itaque 
            similique neque quos ducimus? Vero nam possimus asperiores?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iusto adipisci 
            similique perferendis fugiat ut, laudantium assumenda ea! Culpa, necessitatibus. 
            Totam corporis omnis minima necessitatibus et unde, dicta voluptatum inventore?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae amet vitae! 
            Quisquam quis ipsam odio eveniet, dolore exercitationem eius illum magni quasi, sed 
            consequuntur inventore quos itaque illo odit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit totam maiores hic 
            laborum reprehenderit quia quod id obcaecati incidunt inventore. Aliquid ex cum ut 
            pariatur quaerat obcaecati ratione accusantium eos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, pariatur. Enim sunt 
            repudiandae corrupti aperiam illo? Quisquam molestiae, laudantium ab aliquam dolor 
            accusantium suscipit odio possimus natus autem! Atque, perferendis.`
        }       
    },

    methods:{
        
    },

    computed: {
        messages(){
            return this.message + this.name
        }
    }
})

const app2 = Vue.createApp({
    data: function(){
        return {
            hidden: true,
            submitted: "Thank you for submitting",
            alert: "Please submit the file",
        }       
    },

    methods:{
        hide(){
            if(this.hidden==true){
                this.hidden=false
            }
            else{
                this.hidden=true
            }
        }
    },

    computed: {
        
    }
})

