window.addEventListener('load', () => {
    const capta = prompt("Enter the captcha: ");
    const choice_num = 3;

    let allPendingButtons = Array.from(document.querySelectorAll('p.text-danger'))
        .filter(button => button.innerText.toLowerCase().includes('pending'));

    console.log("Captcha: ", capta);
    console.log("Choice number: ", choice_num);
    console.log("Total buttons: ", allPendingButtons.length);
    console.log("Pending buttons: ", allPendingButtons);

    async function processButtons() {
        for (let i = 0; i < allPendingButtons.length; i++) {
            allPendingButtons[i].click();
            await wait(1);

            submitForm();
            await wait(1);

            const closeBtn = document.querySelector('input[type="button"][value="Close"]');
            if (closeBtn) closeBtn.click();
            await wait(1);
        }
    }

    function submitForm() {
        const allRadios = document.querySelectorAll('input[type="radio"]');
        const capta_input = document.querySelector('input[name="captcha"]');
        const text_area = document.querySelector('textarea');
        const submitBtn = document.querySelector('button#submit_button');

        for (let i = choice_num; i < allRadios.length; i += 5) {
            allRadios[i].checked = true;
        }

        if (capta_input) capta_input.value = capta;
        if (text_area) text_area.value = 'This course was very beautiful and I learned a lot from it. I am very happy to have taken this course.';
        if (submitBtn) submitBtn.click();
    }

    function wait(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    processButtons();
});
