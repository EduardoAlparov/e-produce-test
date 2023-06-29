export default function inputMasks() {
  // const nameInputs = document.querySelectorAll('.js-input-mask_text');
  // const emailInputs = document.querySelectorAll('.js-input-mask_email');

  const phoneInputs = document.querySelectorAll('input[name="phone"]');

  if(phoneInputs.length) {
    const imaskScript = document.createElement('script');
    imaskScript.src =
      "https://unpkg.com/imask";
    document.body.appendChild(imaskScript);

    imaskScript.addEventListener('load', () => {

      phoneInputs.forEach(phoneInput => {
        const phoneMask = IMask(phoneInput, {
          mask: '+{7}(000)000-00-00'
        });
      })
      
    });
  } 

}