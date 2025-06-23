let participantCount = 1;

function participantTemplate(count) {
    return `
        <section class="participant_section participant${count}">
          <p>Participant 1</p>
          <div class="item">
            <label for="fname${count}"> First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname${count}" value="" required />
          </div>
          <div class="item activities">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity${count}" />
          </div>
          <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee${count}" />
          </div>
          <div class="item">
            <label for="date${count}">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date${count}" />
          </div>
          <div class="item">
            <p>Grade</p>
            <select id="grade${count}" name="grade${count}">
              <option selected value="" disabled selected></option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
              <option value="9">9th</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
            </select>
          </div>
        </section>

    `;
}

const addParticipantButton = document.getElementById('add');
const participantsFieldset = document.querySelector('.participants');

addParticipantButton.addEventListener('click', () => {
    participantCount++;
    const newParticipantHTML = participantTemplate(participantCount);

    addParticipantButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
});

function totalFees() {
    let feeIds = document.querySelectorAll("[id^=fee");
    feeIds = [...feeIds];
    
    const total = feeIds.reduce((sum, element) => {
        return sum + (parseFloat(element.value) || 0);
    }, 0);

    return total;
}

function successTemplate(info) {
    return `
    <h2>Registration Summary</h2>
    <p>Thank you, ${info.adult_name}, for registering.</p>
    <p>You have registered ${info.numParticipants} participants. You owe 
    ${info.feeTotal.toFixed(2)} in fees.</p>
    `;
}

const registrationForm = document.querySelector('.registrationForm');
const summarySection = document.getElementById('summary');

registrationForm.addEventListener('submit', function(event){
    event.preventDefault();

    const getAdultName = document.getElementById('adult_name');
    const adultName = getAdultName ? getAdultName.value : 'Guest';

    const feeSum = totalFees();

    const summaryInfo = {
        adultName: adultName,
        numParticipants: participantCount,
        feeTotal: feeSum
    };

    registrationForm.style.display = 'none';

    summarySection.style.display = 'block';
    summarySection.innerHTML = successTemplate(summaryInfo);
});