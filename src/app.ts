const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyCObkReE-o5HPPQa0kDVv2uLcd9jh3cInE';

function searchAddressHandler(event: Event){
    event.preventDefault();
    const enteredAddress = addressInput.value;

    // send this to Google's API
    
}

form.addEventListener('submit',searchAddressHandler);