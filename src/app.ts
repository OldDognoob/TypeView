import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyCObkReE-o5HPPQa0kDVv2uLcd9jh3cInE";

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // send this to Google's API
  axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
      enteredAddress
    )}&key=${GOOGLE_API_KEY}`
  ).then(response =>{
      console.log(response);
  }).catch(err=>{
      console.log(err);
  });
}

form.addEventListener("submit", searchAddressHandler);
