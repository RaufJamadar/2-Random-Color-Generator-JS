/* (r,g,b) each of 'em takes 1 byte i.e., 8 bits i.e, r=g=b=[0,256-1]  That means to describe a color we  need 3 bytes i.e., 24 bits i.e,  decimal number ranging [0,(2^24)-1]

Math.random()=[0,1)
Math.pow(x,y)=x^y
*/

const hex=Math.pow(2,24);

const getColor= () => {
  const randomNumber=Math.floor(Math.random()*hex);
  // console.log(randomNumber);
  const randomCode='#'+randomNumber.toString(16);
  // console.log(randomCode);
  // console.log(randomNumber, randomCode);
  setTimeout(() => {document.getElementById('code').innerText=randomCode;}, 400);
  document.body.style.backgroundColor=randomCode;
  navigator.clipboard.writeText(randomCode);
  // return null;
}

// Init Call
getColor();
// console.log(typeof getColor);
// console.log(typeof getColor());

// Event Call
document.getElementById('btn').addEventListener('click', getColor);
