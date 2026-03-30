export const message =`Hi!
I want to start investing and unlock financial freedom with expert mutual fund guidance. 
Please share more details.`;


export const openWhatsApp = () => {
  const phoneNumber = "918319400824"; // replace with your number

  const encodedMessage = encodeURIComponent(message);

  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(url, "_blank");
};