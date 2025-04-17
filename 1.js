const capta =  prompt("Enter the captcha: ");
const choice_num = 3


async function processButtons() {
    await wait(2);
    let allPendingButtons = document.querySelectorAll('p[class="text-danger"]');
    allPendingButtons = Array.from(allPendingButtons);
    allPendingButtons = allPendingButtons.filter((button) => {
        return button.innerText.toLowerCase().includes('pending');
    });

    for(let i=0;i<allPendingButtons.length;i++){
        allPendingButtons[i].click();
        submitForm();
        await wait(1);
        let closeBtn = document.querySelector('input[type="button"][value="Close"]');
        closeBtn.click();
        await wait(1);
    }
}

function submitForm(){ 
    let allRadios = document.querySelectorAll('input[type="radio"]');
    let capta_input = document.querySelector('input[name="captcha"]');
    let text_area = document.querySelector('textarea');
    let submitBtn = document.querySelector('button[id="submit_button"]');

    for(let i=choice_num;i<allRadios.length;i+=5){
        allRadios[i].checked = true;
    }

    capta_input.value = capta;
    text_area.value = 'This course was very beautifull and I learned a lot from it. I am very happy to have taken this course.';
    submitBtn.click();

}



function wait(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
  

processButtons();

