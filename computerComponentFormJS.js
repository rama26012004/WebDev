        /*This JavaScript Code will submit the form and display a message of succes , 
        then reload the page after clicking ok on the message notification */
        document.addEventListener("DOMContentLoaded", () => {
            //DOM is fully loaded 
            const submitButton = document.getElementById('submit');// get the element with the id submit 
            submitButton.addEventListener("click", () => {
                //"click" event listener to my submit button
                alert('Form is submitted');
                // alert the user that the form is submitted
            });
        });
   