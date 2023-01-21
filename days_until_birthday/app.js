var questionNumber = 0;

function runChatbot() {
    event.preventDefault();

    function daysUntilBirthday(birthday) {
        // Get today's date
        var today = new Date();
      
        // Get next birthday
        var nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
      
        // If birthday has already passed this year, set next birthday to next year
        if (nextBirthday < today) {
            nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
        }
      
        // Calculate the difference between today and next birthday in milliseconds
        var timeUntilNextBirthday = nextBirthday - today;
      
        // Convert milliseconds to days
        var daysUntilNextBirthday = timeUntilNextBirthday / (1000 * 60 * 60 * 24);
      
        // Return the number of days
        return Math.floor(daysUntilNextBirthday);
    }

    const response = document.getElementById('response');
    const question = document.getElementById('question')
    const answer = document.getElementById('answer').value
    const birthdayAnswer = document.getElementById('birthdayAnswer').value
    const monthAnswer = document.getElementById('months').value

    if(questionNumber === 0) {
        response.innerText = 'hello ' + answer + ' !'
        question.innerText = "when is your birthday?"

        document.getElementById('birthdayForm').style.visibility = 'visible';
        document.getElementById('answerForm').style.visibility = 'hidden';

    } else if (questionNumber === 1) {
        let birthday = new Date(0, monthAnswer, birthdayAnswer);
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let monthName = months[monthAnswer];
        let daysUntilNextBirthday = daysUntilBirthday(birthday);
        response.innerText = "your birthday is on" + monthName + " " + birthdayAnswer +
        " and there are " + daysUntilNextBirthday + " days left until your next birthday!"
        question.innerText = "cool right?"
    } 

    questionNumber++;
}

const answerForm = document.getElementById('answerForm');

answerForm.addEventListener('submit', function(event){

    runChatbot();
});

const birthdayForm = document.getElementById('birthdayForm');

birthdayForm.addEventListener("submit", function(event){
  event.preventDefault();
  runChatbot();
});

const holidayForm = document.getElementById('holidayForm');

holidayForm.addEventListener('submit', function(event) {
  runChatbot();
})
