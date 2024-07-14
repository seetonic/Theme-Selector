const controler = document.getElementById('controler');
const dropDown = document.getElementById('themes');
const textColor = document.getElementById('text-color')
const bgColor = document.getElementById('bg-color')
const primaryColor = document.getElementById('primary-color')
const secondaryColor = document.getElementById('secondary-color')
const accentColor = document.getElementById('accent-color')
const body = document.querySelector('body');
const heroHeading = document.querySelector('.header-heading');
const colorText = document.querySelector('.color-text');
const heroPara = document.querySelector('.header-paragraph');
const inputBox = document.querySelector('.input-box');
const submitBtn = document.querySelector('.submit-btn');
const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const box4 = document.querySelector(".box-4");
const box5 = document.querySelector(".box-5");
const box6 = document.querySelector(".box-6");
const box7 = document.querySelector(".box-7");
const box8 = document.querySelector(".box-8");
const box9 = document.querySelector(".box-9");
const box10 = document.querySelector(".box-10");
const box11 = document.querySelector(".box-11");
const box12 = document.querySelector(".box-12");
const textColorCode = document.querySelector(".text-color-code");
const bgColorCode = document.querySelector(".bg-color-code");
const primaryColorCode = document.querySelector(".primary-color-code");
const secColorCode = document.querySelector(".sec-color-code");
const accentColorCode = document.querySelector(".accent-color-code");

function changeTheme() {
    const themes = {
      "cold": {
        backgroundColor: "#FBFBFE",
        textBgColor: "#050316",
        primaryBgColor: "#2F27CE",
        secondaryBgColor: "#DDDBFF",
        accentBgColor: "#443DFF",
        primaryTxColor: "#FBFBFE",
        secondaryTxColor: "#050316",
        accentTxColor: "#DDDBFF",
        inputBoxBgcolor: "#DDDBFF22"
      },
      "dark": {
        backgroundColor: "#000A0F",
        textBgColor: "#DFF3FE",
        primaryBgColor: "#3A31D8",
        secondaryBgColor: "#020024",
        accentBgColor: "#0600C2",
        primaryTxColor: "#FBFBFE",
        secondaryTxColor: "#EBE9FC",
        accentTxColor: "#EBE9FC",
        inputBoxBgcolor: "#02002422"
      },
      "warm": {
        backgroundColor: "#130206",
        textBgColor: "#FCDBE2",
        primaryBgColor: "#F487A4",
        secondaryBgColor: "#92260E",
        accentBgColor: "#ED7842",
        primaryTxColor: "#130206",
        secondaryTxColor: "#FCDBE2",
        accentTxColor: "#130206",
        inputBoxBgcolor: "#92260E22"
      },
      "gold": {
        backgroundColor: "#1B0011",
        textBgColor: "#FFE2F3",
        primaryBgColor: "#FE68C3",
        secondaryBgColor: "#A74101",
        accentBgColor: "#FDA606",
        primaryTxColor: "#FFE2F3",
        secondaryTxColor: "#EBE9FC",
        accentTxColor: "#FFE2F3",
        inputBoxBgcolor: "#3A7410122"
      },
    };

    const selectedTheme = themes[dropDown.value];

    dropDown.style.backgroundColor = selectedTheme.backgroundColor;
    body.style.backgroundColor = selectedTheme.backgroundColor;
    textColor.style.backgroundColor = selectedTheme.textBgColor;
    bgColor.style.backgroundColor = selectedTheme.backgroundColor;
    primaryColor.style.backgroundColor = selectedTheme.primaryBgColor;
    secondaryColor.style.backgroundColor = selectedTheme.secondaryBgColor;
    accentColor.style.backgroundColor = selectedTheme.accentBgColor;
    dropDown.style.color = selectedTheme.textBgColor;
    textColor.style.color = selectedTheme.backgroundColor;
    bgColor.style.color = selectedTheme.textBgColor;
    primaryColor.style.color = selectedTheme.primaryTxColor;
    secondaryColor.style.color = selectedTheme.secondaryTxColor;
    accentColor.style.color = selectedTheme.accentTxColor;
    heroHeading.style.color = selectedTheme.textBgColor;
    colorText.style.color = selectedTheme.primaryBgColor;
    heroPara.style.color = selectedTheme.textBgColor;
    inputBox.style.backgroundColor = selectedTheme.inputBoxBgcolor;
    inputBox.style.color = selectedTheme.textBgColor;
    submitBtn.style.backgroundColor = selectedTheme.primaryBgColor;
    submitBtn.style.color = selectedTheme.primaryTxColor;


    box1.style.backgroundColor = selectedTheme.secondaryBgColor;
    box2.style.backgroundColor = selectedTheme.backgroundColor;
    box3.style.backgroundColor = selectedTheme.secondaryBgColor;
    box4.style.backgroundColor = selectedTheme.backgroundColor;
    box5.style.backgroundColor = selectedTheme.primaryBgColor;
    box6.style.backgroundColor = selectedTheme.secondaryBgColor;
    box7.style.backgroundColor = selectedTheme.secondaryBgColor;
    box8.style.backgroundColor = selectedTheme.textBgColor;
    box9.style.backgroundColor = selectedTheme.secondaryBgColor;
    box10.style.backgroundColor = selectedTheme.textBgColor;
    box11.style.backgroundColor = selectedTheme.backgroundColor;
    box12.style.backgroundColor = selectedTheme.accentBgColor;


    textColorCode.innerHTML = `${selectedTheme.textBgColor}`
    bgColorCode.innerHTML = `${selectedTheme.backgroundColor}`
    primaryColorCode.innerHTML = `${selectedTheme.primaryBgColor}`
    secColorCode.innerHTML = `${selectedTheme.secondaryBgColor}`
    accentColorCode.innerHTML = `${selectedTheme.accentBgColor}`
  }


  
  changeTheme();