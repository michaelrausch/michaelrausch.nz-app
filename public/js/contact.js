/**
 * Handle contact form submissions
 */

const CONTACT_FORM_API_URL = 'http://michaelrauschnz.azurewebsites.net/api/contact'

new Vue({
    el: '#contact_form',
    data: {
        name: "",
        email: "",
        message: "",
        hasResult: false,
        hasError: false,
        formWasSubmitted: false
    },
    methods:{
        handleFormResponse(hasError){
            this.hasResult = true;
            this.hasError = hasError;
            this.formWasSubmitted = false;
        },  
        
        /**
         * User clicked submit on contact form
         */
        formSubmitted(){
            this.formWasSubmitted = true;

            this.$http.post(CONTACT_FORM_API_URL, {
                ReturnEmail: this.email,
                ReturnName: this.name,
                Message: this.message
            }).then(response => {
                this.handleFormResponse(false);
            }, response => {
                this.handleFormResponse(true);
            });
        }
    },
})