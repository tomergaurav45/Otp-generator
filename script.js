let OTP = () =>  {
    const otp = Math.floor(10000 + Math.random() * 90000);
    document.getElementById("otp").innerText = `${otp}` ;};
    document.getElementById("generateBtn").addEventListener("click", OTP);
    window.addEventListener("load", OTP);
