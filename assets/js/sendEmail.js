var formParams = {
    name: 'Greta Egan',
    emailaddress: 'greta.egan@gmail.com',
    notes: 'I want to explore Tokyo!'
};

function sendMail(contactForm){
    emailjs.send("service_616bzzc","tokyo", formParams)
.then(function(response){
    console.log('SUCCESS!', response);
}, function(error){
    console.log('Failed...', error);
});
}
