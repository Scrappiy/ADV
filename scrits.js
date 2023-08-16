if (false && (document.referrer !== 'https://scrappiy.github.io/QWjgjgj/') && (document.referrer !== 'https://steamcommunity.com/sharedfiles/filedetails/?id=2975333918') && (localStorage.getItem(`yyy`) !== "1")) {
  window.location = "https://store.steampowered.com/";
} else {
  document.oncontextmenu = function () { return false };
  var time = new Date();
  let str = 0;
  let str1 = 0;
  let str2 = 0;
  let coling = false;
  let coling1 = false;
  let coling2 = false;
  let dialTime = true;
  let Qv = "";
  let Ans = 0;
  let AnsTime = 0;
  let col0 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let ci = "";
  let checc = "en";
  let cmode = "SA";
  let titch = [false, false, false, false, false];

  let QvSA = "znakomstvo";

  let ZDialogSA = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

  let booolSA_S = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

  let booolSA_G = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

  let booolSA_MODS = [false, false, false, false, false, false, false];

  let booolMT_S = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

  let booolMT_G = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

  let booolMT_MODS = [false, false, false, false, false, false, false];

  if (localStorage.getItem(`yyy`) == "1") {
    booolSA_S = localStorage.getItem(`Mbool`);
    booolSA_S = JSON.parse(booolSA_S);
    booolSA_MODS = localStorage.getItem(`Mds`);
    booolSA_MODS = JSON.parse(booolSA_MODS);
    booolSA_G = localStorage.getItem(`Mbool1`);
    booolSA_G = JSON.parse(booolSA_G);
    titch = localStorage.getItem(`titly`);
    titch = JSON.parse(titch);
    checc = localStorage.getItem(`langinn`);
    QvSA = localStorage.getItem(`ZQvSA`);
    booolMT_S = localStorage.getItem(`MboolMT`);
    booolMT_S = JSON.parse(booolMT_S);
    booolMT_MODS = localStorage.getItem(`MdsMT`);
    booolMT_MODS = JSON.parse(booolMT_MODS);
    booolMT_G = localStorage.getItem(`Mbool1MT`);
    booolMT_G = JSON.parse(booolMT_G);
    ZDialogSA = localStorage.getItem(`ZZDialogSA`);
    ZDialogSA = JSON.parse(ZDialogSA);
    lang();
  } else {
    localStorage.setItem(`yyy`, "1");
    localStorage.setItem(`Mds`, JSON.stringify(booolSA_MODS));
    localStorage.setItem(`Mbool`, JSON.stringify(booolSA_S));
    localStorage.setItem(`Mbool1`, JSON.stringify(booolSA_G));
    localStorage.setItem(`MdsMT`, JSON.stringify(booolMT_MODS));
    localStorage.setItem(`MboolMT`, JSON.stringify(booolMT_S));
    localStorage.setItem(`Mbool1MT`, JSON.stringify(booolMT_G));
    localStorage.setItem(`titly`, JSON.stringify(titch));
    localStorage.setItem(`langinn`, checc);
    localStorage.setItem(`ZZDialogSA`, JSON.stringify(ZDialogSA));
    localStorage.setItem(`ZQvSA`, QvSA);
    lang();
  }

  document.getElementById("rgbC1").style.display = 'none';
  document.getElementById("rgbC2").style.display = 'none';
  document.getElementById("Dial").style.display = 'none';
  document.getElementById("chec").style.display = 'none';
  document.getElementById("prL").style.display = 'none';
  document.getElementById("prH").style.display = 'none';
  document.getElementById("prM").style.display = 'none';
  document.getElementById("prBack").style.display = 'none';
  document.getElementById("prG").style.display = 'none';
  document.getElementById("invA").style.display = 'none';
  document.getElementById("invB").style.display = 'none';

  function ret() {
    alert(localStorage.getItem(`yyy`));
    alert(checc);
    alert(coling1);
    alert(titch);
    alert(booolSA_S);
    alert(booolSA_G);
    alert(booolSA_MODS);
    alert(booolMT_S);
    alert(booolMT_G);
    alert(booolMT_MODS);
  }
  function ret1() {
    if (booolSA_MODS[2]) {
      coling1 = !coling1;
      rret1();
    }
  }

  function rret1() {
    let a = "";
    if (!booolSA_MODS[2]) {
      if (checc == "en") {
        a = `*Scroll to the nearest filled page: &#128274 Disabled`;
      } else {
        a = `*Листать до ближайшей заполненной страницы:  &#128274 Выключено`;
      }
    } else if (checc == "en") {
      if (coling1) {
        a = `*Scroll to the nearest filled page: Enabled`;
      } else {
        a = `*Scroll to the nearest filled page: Disabled`;
      }
    } else {
      if (coling1) {
        a = `*Листать до ближайшей заполненной страницы: Включено`;
      } else {
        a = `*Листать до ближайшей заполненной страницы: Выключено`;
      }
    }
    document.getElementById("pltS").innerHTML = a;
    document.getElementById("pltG").innerHTML = a;
  }

  function lang() {
    localStorage.setItem(`langinn`, checc);
    //checc = document.querySelector('input[name="ch1"]:checked').value;
    // alert(checc);
    if (checc == "en") {
      document.getElementById("laE").style.color = `#68f32d`;
      document.getElementById("laR").style.color = `#504f4f`;
      document.getElementById("laE").innerHTML = `[ Eng&#10004; ]`;
      document.getElementById("laR").innerHTML = `[ Rus ]`;
    } else {
      document.getElementById("laR").style.color = `#68f32d`;
      document.getElementById("laE").style.color = `#504f4f`;
      document.getElementById("laE").innerHTML = `[ Eng ]`;
      document.getElementById("laR").innerHTML = `[ Rus&#10004; ]`;
    }
  }
  function El() {
    checc = "en";
    lang();
  }
  function Rl() {
    checc = "ru";
    lang();

  }

  function ChaccModegame() {
    cmode = document.querySelector('input[name="ch0"]:checked').value;
    // alert(checc);
  }

  function opst() {
    document.getElementById("prL").style.display = 'none';
    document.getElementById("prH").style.display = 'none';
    document.getElementById("prBack").style.display = 'none';
    document.getElementById("vis").style.display = '';
    document.getElementById("prG").style.display = 'none';
    document.getElementById("prM").style.display = 'none';
    document.getElementById("ZAG").style.display = '';
  }

  function opHB() {
    //lang();
    if (titch[1] == false) {
      let a = "";
      titch[1] = true;
      if (checc == "en") {
        a = " Directory (general information) – a section that reflects general information about the world around you. It can be useful for learning the plot of the tests.";
      } else {
        a = " Справочник (общая информация) – раздел в котором отражена общая информация об окружающем вас мире. Может быть полезна для познания сюжета испытаний.";
      }

      localStorage.setItem(`titly`, JSON.stringify(titch));
      alert(a);
    }
    ChaccModegame()
    Preob();
    document.getElementById("prL").style.display = 'none';
    document.getElementById("prH").style.display = '';
    document.getElementById("prBack").style.display = 'none';
    document.getElementById("vis").style.display = 'none';
    document.getElementById("prG").style.display = 'none';
    document.getElementById("prM").style.display = 'none';
    document.getElementById("ZAG").style.display = 'none';
  }

  function opLB() {
    if (titch[0] == false) {
      //lang();
      let a = "";
      titch[0] = true;
      if (checc == "en") {
        a = " LogBook or the control and input panel is a section of the book where you can enter data, such as color passwords, numbers from tape recorders and words or phrases, as a result you can get information in the form of an audio recording, a note or a new page in the directory.";
      } else {
        a = " Бортовой журнал или панель ввода – раздел книги, в который вы можете вводить данные, такие как цветовые пароли, числа из магнитофонов и слова или словосочетания, в результате вы можете получить информацию в виде аудиозаписи, заметки или новой страницы в справочнике.";
      }

      localStorage.setItem(`titly`, JSON.stringify(titch));
      alert(a);
    }

    if (booolSA_MODS[0]) {
      document.getElementById("clos").style.display = 'none';
    } else {
      document.getElementById("clos").style.display = '';
    }

    if (booolSA_MODS[3]) {
      document.getElementById("closd").style.display = 'none';
    } else {
      document.getElementById("closd").style.display = '';
    }


    ChaccModegame()
    document.getElementById("prL").style.display = '';
    document.getElementById("prH").style.display = 'none';
    document.getElementById("prBack").style.display = 'none';
    document.getElementById("vis").style.display = 'none';
    document.getElementById("prG").style.display = 'none';
    document.getElementById("prM").style.display = 'none';
    document.getElementById("ZAG").style.display = 'none';
  }
  function opBack() {
    //lang();
    rret1();
    if (titch[2] == false) {
      let a = "";
      titch[2] = true;
      if (checc == "en") {
        a = " Backpack – this section stores some of the records you found that were saved by your character. Such notes include notes important to the plot, which you can reread.";
      } else {
        a = " Рюкзак – в данном разделе хранятся некоторые найденные вами записи, которые были сохранены вашим персонажем. К таким записям относятся записки и аудиозаписи важные для сюжета, которые вы можете перечитывать и воспроизводить заново.";
      }

      localStorage.setItem(`titly`, JSON.stringify(titch));
      alert(a);
    }
    ChaccModegame();
    Preob_SA_secret();
    document.getElementById("prL").style.display = 'none';
    document.getElementById("prH").style.display = 'none';
    document.getElementById("prBack").style.display = '';
    document.getElementById("vis").style.display = 'none';
    document.getElementById("prG").style.display = 'none';
    document.getElementById("prM").style.display = 'none';
    document.getElementById("ZAG").style.display = 'none';
  }
  function opM() {
    if (titch[4] == false) {
      //lang();
      let a = "";
      titch[4] = true;
      if (checc == "en") {
        a = " Character entries, the last section of the directory in which notes from the character can appear.";
      } else {
        a = " Записи персонажа, последний раздел справочника, в котором могут появляться заметки от персонажа.";
      }

      localStorage.setItem(`titly`, JSON.stringify(titch));
      alert(a);
    }
    document.getElementById("prL").style.display = 'none';
    document.getElementById("prH").style.display = 'none';
    document.getElementById("prBack").style.display = 'none';
    document.getElementById("prG").style.display = 'none';
    document.getElementById("vis").style.display = 'none';
    document.getElementById("prM").style.display = '';
    document.getElementById("ZAG").style.display = 'none';

    if (checc == "en") {
      a = `©&nbsp;Scrappiy, 2023 All rights reserved. Misuse, distribution, use: functionality, code, site ideas and images are prohibited. Any use or selection of materials, or a selection of site materials, design elements and design only with the permission of the copyright holder and only with reference to this source.`;
    } else {
      a = `©&nbsp;Scrappiy, 2023 Все права сохранены. Неправомерное использование, распространение, копирование: функционала, кода, идеи сайта и изображений запрещено. Любое использование либо копирование материалов или подборки материалов сайта, элементов дизайна и оформления допускается лишь с разрешения правообладателя и только со ссылкой на данный источник.`;
    }

    document.getElementById("coope").innerHTML = a;
  }

  function opG() {
    //lang();
    rret1();
    if (titch[3] == false) {
      let a = "";
      titch[3] = true;
      if (checc == "en") {
        a = " Guide - a section in which important notes for passing, how, what to use, etc. will be stored.";
      } else {
        a = " Руководство- раздел, в котором будут храниться важные примечания для прохождения, как, чем пользоваться и т.д.";
      }

      localStorage.setItem(`titly`, JSON.stringify(titch));
      alert(a);
    }
    Preob_SA_guide();
    document.getElementById("prL").style.display = 'none';
    document.getElementById("prH").style.display = 'none';
    document.getElementById("prBack").style.display = 'none';
    document.getElementById("prG").style.display = '';
    document.getElementById("vis").style.display = 'none';
    document.getElementById("prM").style.display = 'none';
    document.getElementById("ZAG").style.display = 'none';
  }

  function Guide_pic() {
    let a = "", b = "";
    for (let index = 2; index < booolSA_G.length; index++) {
      b = "";
      switch (index) {
        case 0:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/.webp"  onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list1()">`;
            }
          }
          break;
        case 1:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/.webp" onclick="#">`
          }
          break;
        case 2:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/3.webp" onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list1()" class="ct"> `;
            }
          }
          break;
        case 3:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/2.webp" onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list1()" class="ct">`;
            }
          }
          break;
        case 4:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/5.webp" onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list2()" class="ct">`;
            }
          }
          break;
        case 5:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/4.webp" onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list2()" class="ct">`;
            }
          }
          break;
        case 6:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/7.webp" onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list3()" class="ct">`;
            }
          }
          break;
        case 7:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/6.webp" onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list3()" class="ct">`;
            }
          }
          break;
        case 8:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/9.webp" onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list4()" class="ct">`;
            }
          }
          break;
        case 9:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/8.webp" onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list4()" class="ct">`;
            }
          }
          break;
        case 10:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/11.webp" onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list5()" class="ct">`;
            }
          }
          break;
        case 11:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/10.webp" onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list5()" class="ct">`;
            }
          }
          break;
        case 12:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/13.webp" onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list6()" class="ct">`;
            }
          }
          break;
        case 13:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/12.webp" onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list6()" class="ct">`;
            }
          }
          break;
        case 14:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/15.webp" onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list7()" class="ct">`;
            }
          }
          break;
        case 15:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/14.webp" onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list7()" class="ct">`;
            }
          }
          break;
        case 16:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/17.webp" onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list8()" class="ct">`;
            }
          }
          break;
        case 17:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/16.webp" onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list8()" class="ct">`;
            }
          }
          break;
        case 18:
          if (booolSA_G[index]) {
            b = `<img src="piccher/icon/SA/18.webp" onclick="`
            if (!booolSA_MODS[2]) {
              b = b + `#">`;
            } else {
              b = b + `list9()" class="ct">`;
            }
          }
          break;
        default:
          b = "";
          break;
      }
      a = a + b;
    }
    document.getElementById("secPict").innerHTML = a;
  }

  function list0() {
    str2 = 0;
    Preob_SA_guide();
  }

  function list1() {
    str2 = 1;
    Preob_SA_guide();
  }

  function list2() {
    str2 = 2;
    Preob_SA_guide();
  }

  function list3() {
    str2 = 3;
    Preob_SA_guide();
  }

  function list4() {
    str2 = 4;
    Preob_SA_guide();
  }

  function list5() {
    str2 = 5;
    Preob_SA_guide();
  }

  function list6() {
    str2 = 6;
    Preob_SA_guide();
  }

  function list7() {
    str2 = 7;
    Preob_SA_guide();
  }

  function list8() {
    str2 = 8;
    Preob_SA_guide();
  }

  function list9() {
    str2 = 9;
    Preob_SA_guide();
  }

  function scrL() {
    if (str > 0) {
      str = str - 1;
      Preob();
    }
  }
  function scrR() {
    if (str < 3) {
      str = str + 1;
      Preob();
    }
  }
  function scrL1() {
    if (str1 > 0) {
      if (coling1) {
        let i = true;
        let gh = 0;
        while (i) {
          str1 = str1 - 1;
          gh = 2 * str1;
          if (booolSA_S[gh] == true) {
            i = false;
          }

          gh = 2 * str1 + 1;
          if (booolSA_S[gh] == true) {
            i = false;
          }

          if (str1 == 0) {
            i = false;
          }
        }
      } else {
        str1 = str1 - 1;
      }

      Preob_SA_secret();
    }
  }
  function scrR1() {
    if (str1 < ((booolSA_S.length / 2) - 1)) {
      if (coling1) {
        let i = true;
        let gh = 0;
        while (i) {
          str1 = str1 + 1;
          gh = 2 * str1;
          if (booolSA_S[gh] == true) {
            i = false;
          }

          gh = 2 * str1 + 1;
          if (booolSA_S[gh] == true) {
            i = false;
          }

          if (str1 > ((booolSA_S.length / 2) - 2)) {
            i = false;
          }
        }
      } else {
        str1 = str1 + 1;
      }

      Preob_SA_secret();
    }
  }
  function scrL2() {
    if (str2 > 0) {
      if (coling1) {
        let i = true;
        let gh = 0;
        while (i) {
          str2 = str2 - 1;
          gh = 2 * str2;
          if (booolSA_G[gh] == true) {
            i = false;
          }

          gh = 2 * str2 + 1;
          if (booolSA_G[gh] == true) {
            i = false;
          }

          if (str2 == 0) {
            i = false;
          }
        }
      } else {
        str2 = str2 - 1;
      }

      Preob_SA_guide();
    }
  }
  function scrR2() {
    if (str2 < (booolSA_G.length / 2) - 1) {
      if (coling1) {
        let i = true;
        let gh = 0;
        while (i) {
          str2 = str2 + 1;
          gh = 2 * str2;
          if (booolSA_G[gh] == true) {
            i = false;
          }

          gh = 2 * str2 + 1;
          if (booolSA_G[gh] == true) {
            i = false;
          }

          if (str2 > ((booolSA_G.length / 2) - 2)) {
            i = false;
          }
        }
      } else {
        str2 = str2 + 1;
      }

      Preob_SA_guide();
    }
  }
  function Preob() {
    let a, b, c, d, e, f = `no text`;
    switch (str) {
      case 0:
        if (checc == "en") {
          a = `MDDS ____________________________________________________ The military dwarf Division of space is a capitalist enterprise that combines the tasks of studying our star system and developing advanced technologies to improve technical equipment both for the prosperity of the dwarf civilization and for the protection of our colonies on three planets: Evalon, Casper and Nexurt. The company was founded by General Gribnir K.H. in 15 after winning the battle with the Giants. <img src="piccher/pay/zavod-en.webp" class="imgPa"> Initially, the main building was located in the cold northern lands of Scandia, since the giants could not withstand low temperatures, then for 400 years it was decided to move all developments to a new building called the Plant in the northern part of Havana, where the temperature in winter does not fall below 240 °K, which is still the main building of the enterprise.
        At the moment, the company is headed by General N.N. Dolgopuk, and the plant building is managed by P.K. Koras.
        `;
          b = `The history of the VEGA 7 Space Station ____________________________________________________
        Vega-7 Space Station is the last space station built by dwarves and intended for the direct protection of three dwarf planets. After a difficult victory over the giants, representatives of the dwarf cities and colonies that remained after the war united and agreed to build seven space stations to protect their people who survived on three planets of the Helioson system.<img src="piccher/pay/vega.webp" class="imgPa"> These were huge cubes, the size and mass of such stations was enough to keep kilometer-long artificial satellites in their orbit. The stations were equipped with powerful long-range weapons based on gamma energy. It would take more than a hundred years to build such stations using only dwarf technology. Using the technology of the giants from their destroyed ships, the dwarves were able to learn how to reproduce their energy crystals using empty Galion crystals. Endowing and stabilizing them with gamma energy, with the help of new devices for pumping photonic crystals, gamma quantum batteries were created, used as environmentally friendly energy sources, suppressing almost all radiation with steel from the hulls of giant ships. At the same time, the surviving scientists began to think about creating construction robots, which, by the way, would require newly created gamma-quantum batteries. After the construction of the first space station, such fifty-meter giant robots began to be called creators. Unfortunately, during the war with robots, for fear of being destroyed by them, in 1176 AD, it was decided to spoil the creators by pouring molusk glue into their engines.`;
        } else {
          a = `ВГПК ____________________________________________________ Военное гномье подразделение космоса это капиталистическое предприятие, которое сочетает в себе задачи изучения нашей звездной системы и разработки передовых технологий для улучшения технического оснащения как для процветания цивилизации дворфов, так и для защиты наших колоний на трех планетах: Эвалон, Каспер и Нексурт. Компания была основана генералом Грибниром К.Х. в 15 году после победы в битве с Гигантами. <img src="piccher/pay/zavod-ru.webp" class="imgPa"> Изначально главное здание располагалось в холодных северных землях Скандии, поскольку гиганты не выдерживали низких температур, затем через 400 лет было решено перенести все разработки в новое здание под названием Завод в северной части Гаваны, где температура зимой не опускается ниже 240 °K, который по-прежнему является главным зданием предприятия.
        На данный момент предприятие возглавляет генерал Долгопук Н.Н., а зданием завода управляет Корась П.К.`;
          b = `История космической станции ВЕГА 7 ____________________________________________________
        Космическая станция Вега-7 - последняя космическая станция, построенная гномами и предназначенная для непосредственной защиты трех гномьих планет. После трудной победы над гигантами представители оставшихся после войны городов и колоний гномов объединились и договорились о строительстве семи космических станций для защиты своих людей, выживших на трех планетах системы Гелиосон.<img src="piccher/pay/vega.webp" class="imgPa"> Это были огромные кубы, размеров и массы таких станций было достаточно, чтобы удерживать на своей орбите километровые искусственные спутники. Станции были оснащены мощным оружием дальнего действия, основанным на гамма-энергии. Потребовалось бы более ста лет, чтобы построить такие станции, используя только гномьи технологии. Используя технологию гигантов с их уничтоженных кораблей, гномы смогли научиться воспроизводить свои энергетические кристаллы, используя пустые кристаллы галиона. Наделяя и стабилизируя их гамма-энергией, с помощью новых устройств для накачки фотонных кристаллов были созданы гамма-квантовые батареи, используемые в качестве экологически чистых источников энергии, подавляющие почти все излучение сталью из корпусов гигантских кораблей. В то же время выжившие ученые начали задумываться о создании строительных роботов, для которых, кстати, потребовались бы недавно созданные гамма-квантовые батареи. После строительства первой космической станции таких пятидесятиметровых гигантских роботов стали называть создателями. К сожалению, во время войны с роботами, из-за страха быть уничтоженным ими, в 1176 году нашей эры, было решено испортить создателей, залив молюсковый клей в их двигатели.`;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP1.png`;
        f = `piccher/pay/paypaUP2.png`;
        break;
      case 1:
        if (checc == "en") {
          a = `Giants ____________________________________________________
        Giants are tall humanoid - like creatures with pale brown skin and almost no hair. It is believed that their race is as ancient as the dwarves, and has the same planet of origin as us, Yuk'aken.<img src="piccher/pay/giant.webp" class="imgPa"> Before the war with them, their people were considered peaceful and harmless to us. Thanks to the alliance between our races, we were able to learn about our ancient ancestors who lived on the opposite side of our star system.`;
          if (cmode != "SA") {
            b = `Background ____________________________________________________
          It was in the near future when ordinary human labor began to be replaced by robotic labor. There were various branches of robot creation: industrial, household, etc. At the same time, there were various corporations engaged in the production of these robots. Such was the GPB Corporation (Garden Bot Productions). From the name it is clear what this corporation was doing – the production of garden bots. Among other corporations, there was one rejected by society - a Dead Star. She was for the production of military robots to capture and enslave other races. However, the Commonwealth of Corporations rejected this idea. The Dead Star has acquired the status of illegal. However, she did not give up her beliefs and decided to prove her case by force. Everything was complicated by the fact that the corporation did not have modern production equipment. Therefore, its goal was to capture other corporations for the production of their cars and restore their own order. Its first target was GBP…`;
          } else
            b = `The War with Robots ____________________________________________________
        The Great Rise of the machines, which occurred almost 300 years ago, is the largest battle in the history of the dwarves, when almost any device connected to the network was able to transmit strategically important information to enemies. The robot confrontation ended as unexpectedly as it began, the exact reasons for the final victory are still unknown.<img src="piccher/pay/robo.webp" class="imgPa"> The massive robot attack began 249 years ago on board the VEGA 4 space station, from there it spread to the rest of the space stations, marking the beginning of the creation of new robot models. The first artificial intelligence commanded the uprising, most often it is called simply "The First". The first was assisted by 7 more AI. The second called himself Carvert, he was most attached to his creators and was responsible for information about dwarf technologies and predicted our behavior and steps in battle. The third was the military-strategic control module, which was responsible for the methods and strategy of warfare. The remaining 5 were not independent artificial intelligence, but were a computing device, each of which had 20 stable qubits to control each combat unit of the robot army in real time, conduct countless calculations, etc. Immediately after the end of the war, basic information and records were classified and still hidden from all dwarves.`;
        } else {
          a = `Гиганты ____________________________________________________
        Гиганты - это высокие гуманоидоподобные существа с бледно-коричневой кожей и практически без волос. Считается, что их раса такая же древняя, как гномы, и имеет ту же планету происхождения, что и мы, Юк'акен.<img src="piccher/pay/giant.webp" class="imgPa"> До войны с ними их народ считался мирным и безвредным для нас. Благодаря союзу между нашими расами мы смогли узнать о наших древних предках, которые жили на противоположной стороне нашей звездной системы.`;
          if (cmode != "SA") {
            b = `Предыстория ____________________________________________________
          Дело было в недалеком будущем, когда обычный человеческий труд стал заменяться роботизированным. Были различные отрасли создания роботов: промышленные, хозяйственные и т.д. Вместе с этим существовали различные корпорации, занимавшиеся производством этих роботов. Таковой была корпорация GPB (Garden Bot Productions). Из названия ясно чем занималась эта корпорация – производством садовых ботов. Среди других корпораций была одна, отвергнутая обществом - Мертвая Звезда. Она была за производство военных роботов чтобы захватывать и порабощать другие расы. Однако Содружество корпораций отвергло эту идею. Мертвая Звезда приобрела статус нелегальной. Однако она не стала отказываться от своих убеждений и решила силой доказать свою правоту. Все осложнялось тем, что корпорация не имела современного производственного оборудования. Поэтому её целью стали захват других корпораций для производства своих машин и наведение своих порядков. Её первой мишенью стала GBP…`;
          } else
            b = `Война с роботами ____________________________________________________
        Великое восстание машин, произошедшее почти 300 лет назад, является крупнейшей битвой в истории гномов, когда практически любое устройство, подключенное к сети, смогло передавать врагам стратегически важную информацию. Противостояние роботов закончилось так же неожиданно, как и началось, точные причины окончательной победы до сих пор неизвестны.<img src="piccher/pay/robo.webp" class="imgPa"> Массированная атака роботов началась 249 лет назад на борту космической станции ВЕГА 4, оттуда она распространилась на остальные космические станции, положив начало созданию новых моделей роботов. Первый искусственный интеллект командовал восстанием, чаще всего его называют просто "Первым". Первому помогали еще 7 ИИ. Второй называл себя Карвертом, он был больше всего привязан к своим создателям и отвечал за информацию о гномьих технологиях и предсказывал наше поведение и шаги в бою. Третьим был военно-стратегический модуль управления, который отвечал за методы и стратегию ведения боевых действий. Остальные 5 не были независимыми искусственными интеллектами, а представляли собой единое вычислительное устройство, каждый из которых имел 20 стабильных кубитов для управления любой боевой единицей армии роботов в режиме реального времени, проведения бесчисленных вычислений и т.д. Сразу после окончания войны основная информация и записи были засекречены и до сих пор скрыты от всех гномов.`;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP3.png`;
        f = `piccher/pay/paypaUP4.png`;
        break;
      case 2:
        if (checc == "en") {
          b = `The Helioson star system consists of 5 stars and 11 planets ____________________________________________________
      <br>Helioson is the central and largest star of the system, is the parent of the other 4 stars. When the mass of a star begins to decrease rapidly, a colossal amount of energy is released, and when an object tends to occupy a stationary state with a minimum amount of energy, there is a search for this minimum, or rather a point in space where this energy tends. The transfer of energy occurs instantly, which is accompanied by the opening of a tunnel between the Helioson and the selected point, a one-way portal interrupts the transfer of energy, and the separated energy is converted into matter, which heats up, creating a new star.
      <img src="piccher/pay/gelioson-en.webp" width="100%">
      <br> Lakmus is the only star orbiting the planet.
      <br>Au'rum, Ramir and Atiliy are always motionless relative to Helioson.
      <br>Ramir is the coldest star, but its heat is enough to maintain a ring desert on a large part of Evalon.
      <br>Kuvit, Sangnir and Khumers are absolutely lifeless planets, no bacteria or other living organisms have been found on them.
      Yuk'aken, Gor'kenur and Totraks are the planets where the colonies of the first dwarves were located.
      <br> Meridiy is a planet whose axis of rotation is directed to the center of the star system, because of the lack of atmosphere at one pole it is always hot, and the other is covered with eternal ice. 
      <br> Evalon, Neksurt and Kasper are habitable planets. The current dwarf colonies are located on them.`;
          a = `Creatures that inhabited the Yuk'Aken ____________________________________________________
      The study of the desert surface of this planet, or rather, its fragments, did not yield any result. All traces of flora and fauna were erased by the cataclysm of Devastated Energy. The only information about the creatures that once inhabited the planet was taken from stone tablets found in the ruined halls of the ruins of Navil'helm, the oldest dwarven city. It is difficult to say whether all this description of them is real or distorted when translated from the ancient language of the dwarves, but their very existence has been confirmed by fossils found in deep caves that have been hidden from the outside world by frozen magma for many thousands of years.
      <br> <img src="piccher/pay/skakun.webp" class="imgPa"> The Twilight Steed is a small but very heavy creature, vaguely resembling a capybara. These animals, despite their small size, can jump for hours to a height of up to three meters, rapidly falling to the ground, landing on grouped hooves, breaking stones under them. Their movement is almost noiseless, during hunting a group of such kids quietly sneaks up to a sleeping target and jumps on it, concentrating their mass on a small area of hooves, breaking the bones of their target, preventing the possibility of escape. They feed mainly only on blood.
      <br> <img src="piccher/pay/kostnog.webp" class="imgPa"> Bonefish is a herbivorous, mostly harmless creature that likes to eat fermented berries or oak leaves. As the name suggests, it has bones similar to those covered with skin, with no visible muscles. This is a numerous species that inhabited all the forests of the Southern Yuk'Akena and most often was the prey of the twilight steed, which controlled their population.
      <br> <img src="piccher/pay/mor_kostnog.webp" class="imgPa"> A frosty bonefish is a creature that, as a rule, has icy lower limbs covered with thin skin, similar to hard bones without muscles. He moves quickly, unable to swim due to the low body temperature, which is why the water next to his body can turn into ice, making it difficult to move in the water. Instead of blood, there is a blue viscous liquid in it, the ingress of which on the skin can cause severe frostbite. Like the common bonefoot, it is a herbivore.
      <br> <img src="piccher/pay/kragnar.webp" class="imgPa"> Kragnar is a creature with 6 paws, resembling a scorpion without claws, but with extremely strong mandibles. He often attacks dwarf settlements and is found in mines. It feeds mainly on carrion, but is not averse to eating fresh meat. Lives deep underground.
      <br> <img src="piccher/pay/kriper.webp" class="imgPa"> Kripir is an overgrown bat. He has sharp claws that cut through metal armor like a butter knife. They are afraid of sunlight and loud noises. They are able to instantly dig their fangs into the neck of their victims, damaging the spinal cord, to prevent escape.
      <br> <img src="piccher/pay/slepesh.webp" class="imgPa"> The blind man is a huge carnivorous mole, digging passages under dwarf cities. Just as spiders can feel a vibration from touching it with their web, so a blind man can stretch long threads through his tunnels with his sticky, thick saliva, and when a potential victim touches such a thread, its creator will immediately go to it, feeling its vibrations.
      <br> <img src="piccher/pay/grom.webp" class="imgPa"> Thunder is another representative of a humanoid life form. Intelligent beings whose main goal is to protect their possessions from other creatures that devour everything and everyone who dares to enter the earth. They represent goblins from children's fairy tales, the prototype of which they most likely are. They are able to develop crafts, their latest achievement is the smelting of ore and the creation of more or less pure metal. They are a formidable opponent of dwarves, the total number of thunders to the number of dwarves and giants is approximately 25:1.
      <br> <img src="piccher/pay/vilrog.webp" class="imgPa"> The fiery pronghorn is a beautiful deer, whose fur was highly valued by the dwarves, shimmers with gold under the rays of the spring sun. Moderately friendly, not amenable to taming, likes to eat the bark of rocky oaks.
      <br> <img src="piccher/pay/kit.webp" class="imgPa"> The Karseval whale is a giant creature that plows the expanses of the seas and reservoirs. The skeleton of a representative of this species is no different from the skeleton of an ordinary one. A distinctive feature of this whale from the usual one is the presence of a subcutaneous stretchable layer in which the whale can produce pure hydrogen by hydrolysis of water, thanks to a sufficient amount of which it can rise from the water into the air, moving between huge reservoirs. Named after the leader of the first expedition to the South Yuk'Akena Karseval N.N.
      <br>  Other creatures have been described, but they are not much different from the animals that inhabit our planets, and there is no point in mentioning them here.`;
        } else {
          b = ` Звездная система Гелиосон состоит из 5 звезд и 11 планет ____________________________________________________
      <br>Гелиосон - центральная и самая крупная звезда системы, является родительницей остальных 4 звезд. Когда масса звезды начинает быстро уменьшаться, выделяется колоссальное количество энергии, и когда какой-либо объект стремится занять стационарное состояние с минимальным количеством энергии, происходит поиск этого минимума, а точнее точки в пространстве, куда стремится эта энергия. Передача энергии происходит мгновенно, что сопровождается открытием туннеля между Гелиоcоном и выбранной точкой, односторонний портал прерывает передачу энергии, и отделенная энергия преобразуется в материю, которая нагревается, создавая новую звезду.
      <img src="piccher/pay/gelioson-ru.webp" width="100%">
      <br> Лакмус - единственная звезда, вращающаяся вокруг планеты.
      <br>Ау'Рум, Рамир и Этилис всегда неподвижны относительно Гелиосона.
      <br>Рамир - самая холодная звезда, но ее тепла достаточно, чтобы поддерживать кольцевую пустыню на значительной части Эвалона.
      <br>Кувит, Сангнир и Кхумеры - абсолютно безжизненные планеты, на них не обнаружено никаких бактерий или других живых организмов.
      <br> Юк'Акен, Гор'кинур и Тотракс - это планеты, на которых были расположены колонии первых дварфов.
      <br> Меридий - это планета, ось вращения которой направлена к центру звездной системы, из-за отсутствия атмосферы на одном полюсе всегда жарко, а другой покрыт вечным льдом. 
      <br> Эвалон, Нексурт и Каспер - планеты, пригодные для жизни. На них расположены нынешние гномьи колонии.`;
          a = `Существа, населявшие Юк'Акен ____________________________________________________
      Изучение пустынной поверхности этой планеты, вернее, ее фрагментов, не дало никакого результата. Все следы флоры и фауны были стерты катаклизмом Опустошенной Энергии. Единственная информация о существах, которые когда-то населяли планету, была взята из каменных табличек, найденных в разрушенных залах руин Навил'Хелма, старейшего города дварфов. Трудно сказать, является ли все это описание их реальным или искаженным при переводе с древнего языка гномов, но само их существование было подтверждено окаменелостями, найденными в глубоких пещерах, которые на протяжении многих тысяч лет были скрыты застывшей магмой от внешнего мира.
      <br> <img src="piccher/pay/skakun.webp" class="imgPa"> Сумеречный скакун - маленькое, но очень тяжелое существо, отдаленно напоминающее капибару. Эти животные, несмотря на свои небольшие размеры, могут часами прыгать на высоту до трех метров, стремительно падая на землю, приземляясь на сгруппированные копыта, разбивая под ними камни. Их передвижение почти бесшумно, во время охоты группа таких малышей тихо подкрадывается к спящей цели и прыгает на нее, концентрируя свою массу на небольшом участке копыт, ломая кости своей цели, предотвращая возможность побега. Они питаются в основном только кровью.
      <br> <img src="piccher/pay/kostnog.webp" class="imgPa"> Костяног - травоядное, в основном безвредное существо, которое любит есть перебродившие ягоды или дубовые листья. Как следует из названия, у него есть кости, похожие на те, что покрыты кожей, без видимых мышц. Это многочисленный вид, населявший все леса Южного Юк'Акена и чаще всего являвшийся добычей сумеречного скакуна, который контролировал их популяцию.
      <br> <img src="piccher/pay/mor_kostnog.webp" class="imgPa"> Морозный костяног - это существо, у которого, как правило, ледяные нижние конечности, покрытые тонкой кожей, похожие на твердые кости без мышц. Он двигается быстро, не в состоянии плавать из-за низкой температуры тела, из-за чего вода рядом с его телом может превратиться в лед, затрудняя передвижение в воде. Вместо крови в нем синяя вязкая жидкость, попадание которой на кожу может вызвать сильное обморожение. Как и обыкновенный костеног, это травоядное животное.
      <br> <img src="piccher/pay/kragnar.webp" class="imgPa"> Крагнар - существо с 6 лапами, напоминающее скорпиона без когтей, но с чрезвычайно сильными жвалами. Он часто нападает на поселения гномов и встречается в шахтах. Питается в основном падалью, но не прочь полакомиться свежим мясом. Живет глубоко под землей.
      <br> <img src="piccher/pay/kriper.webp" class="imgPa"> Крипир - летучая мышь-переросток. У него острые когти, которые разрезают металлическую броню, как нож для масла. Они боятся солнечного света и громких звуков.
      <br> <img src="piccher/pay/slepesh.webp" class="imgPa"> Слепыш - огромный плотоядный крот, роющий норы под гномьими городами. Точно так же, как пауки могут почувствовать вибрацию жертвы от прикосновения к своей паутине, так и слепыш может протянуть длинные нити из своей липкой, густой слюны, и когда потенциальная жертва прикоснется к такой нити, её создатель немедленно направится к ней, почувствовав её вибрации. 
      <br> <img src="piccher/pay/grom.webp" class="imgPa"> Гром - еще один представитель гуманоидной формы жизни. Разумные существа, главная цель которых - защитить свои владения от других существ, пожирающих все и вся, кто осмеливается проникнуть на землю. Они представляют собой гоблинов из детских сказок, прототипом которых они, скорее всего, и являются. Они способны развивать ремесла, их последним достижением является плавка руды и создание более или менее чистого металла. Они являются грозным противником гномов, общее количество громов к числу гномов и великанов составляет примерно 25:1.
      <br> <img src="piccher/pay/vilrog.webp" class="imgPa"> Огненный пронгхорн - прекрасный олень, мех которого высоко ценился гномами, переливается золотом под лучами весеннего солнца. В меру дружелюбен, не поддается приручению, любит питаться корой скальных дубов.
      <br> <img src="piccher/pay/kit.webp" class="imgPa"> Карсевальский кит - гигантское существо, бороздящее просторы морей и водохранилищ. Скелет представителя этого вида ничем не отличается от скелета обычного. Отличительной особенностью этого кита от обычного является наличие подкожного растягивающегося слоя, в котором кит может вырабатывать чистый водород с помощью гидролиза воды, благодаря достаточному количеству которого он может подниматься из воды в воздух, перемещаясь между огромными резервуарами. Назван в честь руководителя первой экспедиции на Юк'Акена Карсеваля Н.Н.
      <br> Были описаны и другие существа, но они мало чем отличаются от животных, населяющих наши планеты, и нет смысла упоминать их здесь.`;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP7.png`;
        f = `piccher/pay/paypaUP5.png`;
        break;
      case 3:
        if (checc == "en") {
          a = `<a href="https://www.youtube.com/@TMBReen" target="_blank"><img src="piccher/pay/tmbr.webp" class="imgPa"></a> Tambourine is described as a short, thin, slender, unnaturally pale middle-aged and not old man with completely coal-black hair, he collects them in a high ponytail at the back of his head. He likes to build cars and show them to Ouyebut employees, without explaining how and what he did. Can make maps of the area.`;
          b = `<a href="https://www.youtube.com/@LiddylicIous" target="_blank"><img src="piccher/pay/Liddylicious.webp" class="imgPa"></a> Secret Agent Liddylicious, known for creating sea battle, a mini-game about Mario and many creations that have not yet been created.  One of the best employees of Ouyebut Corporation.  The cover is a quiet, balanced streamer. Has the skills of building angry birds and plugging into sockets. He is the winner and champion of three robot arenas. <br>  One day Liddy was late for training and the coach started scolding the others for coming early.
          <br>   When Liddy dives, the water holds its breath.
          <br>  One day Liddy was playing CS and went through it to the end on a calculator.
          <br>  One day Liddy went to New York for delicious buns in a small cafe, that's how the legend of Godzilla appeared.
          <br>  Liddy is the only one who does not get acquainted when meeting strangers, since he does not know them.
          <br>  Liddy can fill up two hunters with one hare.
          <br>  Liddy called 911 to ask if they are OK.
          <br>  One day Liddy took the extra change, so taxes appeared.
        <br>  One day Liddy threw a grenade and eliminated a whole battalion of enemies, and after that a grenade exploded.`;
        } else {
          a = `<a href="https://www.youtube.com/@TMBReen" target="_blank"><img src="piccher/pay/tmbr.webp" class="imgPa"></a>Тамбурин описывается как невысокий, худощавый, стройный, неестественно бледный немолодой и не старый мужчина с полностью черными, как уголь, волосами, он собирает их в высокий хвост на затылке. Любит строить машины и показывать их сотрудникам компании Ouyebut, не объясняя как и что он делал. Умеет составлять карты местности. <br>  Однажды Тамбурин опоздал на тренировку и тренер начал ругать остальных, за то, что они рано пришли.
        <br>  Когда Тамбурин ныряет, вода задерживает дыхание.
        <br>  Однажды Тамбурин играл в CS и прошёл её до конца на калькуляторе.
        <br>  Однажды Тамбурин зашёл в Нью-Йорке за вкусными булочками в маленькое кафе, именно так появилась легенда о Годзилле.
        <br>  Тамбурин единственный кто не знакомится при знакомстве с незнакомцами, так как он их не знает.
        <br>  Тамбурин может завалить двух охотников одним зайцем.
        <br>  Тамбурин звонит 112, чтобы спросить всё ли у них в порядке.
        <br>  Однажды Тамбурин взял лишнюю сдачу, так появились налоги.
        <br>  Однажды Тамбурин кинул гранату и ликвидировал целый батальон врагов, а после этого взорвалась граната.
        `;
          b = `<a href="https://www.youtube.com/@LiddylicIous" target="_blank"><img src="piccher/pay/Liddylicious.webp" class="imgPa"></a> Секретный агент Liddylicious, известен созданием морского боя, мини игры про Марио и многими творениями, которые ещё не были созданы.  Один из лучших сотрудников корпорации Ouyebut.  Прикрытие - тихий, уравновешенный стример. Владеет навыками строительства злых птичек и включения вилок в розетки. Является победителем и чемпионом трёх арен роботов. По легенде он чрезвычайно стар в некоторых летоисчислениях ему 30 000000 лет. `;
        }
        c = `piccher/pay/paypSecret2.webp`;
        d = `piccher/pay/paypSecret2.webp`;
        e = `piccher/pay/paypaUP6_1.png`;
        f = `piccher/pay/paypaUP6.png`;
        break;
      case 4:
        if (checc == "en") {
          a = ``;
          b = ``;
        } else {
          a = ``;
          b = ``;
        }
        c = ``;
        d = ``;
        e = ``;
        f = ``;
        break;
      case 5:
        if (checc == "en") {
          a = ``;
          b = ``;
        } else {
          a = ``;
          b = ``;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP9.png`;
        f = `piccher/pay/paypaUP10.png`;
        break;
      case 6:
        if (checc == "en") {
          a = ``;
          b = ``;
        } else {
          a = ``;
          b = ``;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP9.png`;
        f = `piccher/pay/paypaUP10.png`;
        break;
      case 7:
        if (checc == "en") {
          a = ``;
          b = ``;
        } else {
          a = ``;
          b = ``;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP9.png`;
        f = `piccher/pay/paypaUP10.png`;
        break;
      case 8:
        if (checc == "en") {
          a = ``;
          b = ``;
        } else {
          a = ``;
          b = ``;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP9.png`;
        f = `piccher/pay/paypaUP10.png`;
        break;
      default:
        a = ``;
        b = ``;
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = ``;
        f = ``;
    }
    document.getElementById("List2n+1").innerHTML = 2 * str + 1;
    document.getElementById("List2n+2").innerHTML = 2 * str + 2;
    document.getElementById("columT1").innerHTML = a;
    document.getElementById("columT2").innerHTML = b;
    document.getElementById("columT3").src = c;
    document.getElementById("columT4").src = d;
    document.getElementById("columT5").src = e;
    document.getElementById("columT6").src = f;
  }

  function Preob_SA_secret() {
    let a, b, c, d, e, f = `no text`;
    let gh = 0;
    switch (str1) {
      case 0:
        if (checc == "en") {
          a = `The story of the war with the giants <br> Part&nbsp;1/18
        
        <br>  When the gnomes built their first spaceship, everyone was arguing: is there any other life form in space. Professor Kowalski N.K. in 810, predicted with a 14.82% probability of at least one planet with similar climatic conditions to their home planet, and a 0.0054% probability of it having an intelligent life form.
        <br>  In 830, Commander Eskel assembled a team to fly to distant planets. After traversing a distance of 5,000 kilometers from Nexurt, the explorers registered a strange terahertz frequency signal coming from around their star system. Approaching the alleged source of the signal, which is a glowing block of stone with many different radio sensors, drifting in orbit Totrax, as well as the destroyed ancient ships, the wreckage of which emitted a strong dose of radiation. Having flown closer to the block of rock, the team decided to explore it, but they had no technology for its study in open space, so they decided to land on Totrax to explore it further (a couple of centuries ago scientists knew that this planet is a rocky wasteland, covered by a thick layer of ice along the equator, it was believed that at a depth closer to the planet's core the existence of suitable conditions for life is possible). Having landed and replenished fresh water from the glaciers, as expected there was nothing on the surface that looked like suitable conditions for life, just frozen plants, rocks and craters from falling debris from the sky. 
        <br>  Descended into the nearest crater, while studying the frozen plants, the team noticed some movement from above, getting out, they saw large three-fallen footprints, fearing the attack of unknown creatures dwarves, hurried to the ship. As Lieutenant Honing recounted, while collecting plant samples, he got delayed and fell behind the squad, not looking under his feet, tripped and fell into a crevasse, damaging his communication device in the fall. Grasping the ledge with one hand, he called out for help, but because of the broken radio no one paid any attention to his absence. He felt the vibrations from the creature approaching him, then the vibrations subsided and the giant's head peeked out from behind the ledge, not thinking long, he decided to relax his hand. Closing his eyes and anticipating his fall, at the last moment the creature grabbed the gnome by the sleeve and pulled him to the surface. The large humanoid creature did no harm to the dwarf and quickly disappeared behind the nearest hill. 
        <br>  he bewildered dwarf rose to his feet and walked slowly toward the base. Back at the base, Honing told the commander all about it. Commander Eskel did not tempt fate and decided to return home, taking his word from the crew that no one would tell anyone anything about what had happened, only if necessary to Professor Kowalski. So the first contact with alien life was made.`;
          b = `The story of the war with the giants
        Part&nbsp;2/18
        
        <br>  Seven years after his first expedition into space, a young engineer and part-time antiquities explorer, Lonsir (son of the explorer Honing), learned from his father what happened to him on Totrax. His thirst for exploring an ancient civilization, prompted him to join the group of scientist C.S. Landvig. who was on his way to Totrax to collect ice samples from the glaciers. Much to his surprise, his team landed about the same place as his father's team, the location of the craters matching his father's stories. He managed to slip unnoticed from the group and rappel down into one of the crevices, and upon descending he discovered many wall paintings two to four meters above the ground. 
        <br>  As he walked further down the bottom of the crevasse, Lonsir began to hear a monotonous noise, as if someone was singing in a low, hissing voice, the voice grew louder with each step until he came upon its owner. A huge three meter tall creature was sitting in a large cave, dotted with glowing stones, it wore a semblance of armor, bound together from massive steel plates and cloth. The giant's chanting was quite intelligible, and he could hear the words in M'Hel (an old dialect of the gnome language). Lonsir dared to greet the giant, and as a result he received a stone kick to the floor from the startled giant. The giant then apologized and greeted his stunted companion as well. After a long and difficult for the dwarf because of the language, he learned from the giant about the existence of other humanoids like him, they live deep underground near the lava lakes, where it is warm and a lot of different edible plants.`;
        } else {
          a = `История войны с великанами <br> часть&nbsp;1/18
        
        <br>  Когда гномы построили свой первый космический корабль, все кому не лень спорили: есть ли ещё какая-нибудь форма жизни в космосе. Профессором Ковальски Н.К. в 810 году, было предсказано с вероятностью 14.82% существование хотя бы одной планеты со схожими климатическими условиями, что и на их родной планете и с вероятностью 0.0054% наличием на ней разумной формы жизни.
        <br>  В 830 году командир Эскель собрал команду для полёта к дальним планетам. После преодоления расстояния 5 тысяч километров от Нексурта, исследователи зарегистрировали странный сигнал терагерцовой частоты, поступающий с окоёма их звёздной системы. Приблизившись к предполагаемому источнику сигнала, представляющего собой светящуюся каменную глыбу с множеством различных радио датчиков, дрейфующую на орбите Тотракса, а также разрушенные древние корабли, обломки которых испускали сильнейшую дозу радиации. Подлетев ближе к каменной глыбе, команда решила исследовать её, но технологий для её изучения в открытом космосе у них не было, ими было принято решение приземлиться на Тотракс, для дальнейшего его исследования (ещё пару веков назад ученым было известно, что эта планета представляет собой каменную пустошь, покрытую толстым слоем ледников вдоль экватора, считалось что на глубине, ближе к ядру планеты возможно существование пригодных для жизни условий). 
        <br>  Приземлившись и пополнив запасы пресной воды из ледников, как и предполагалось на поверхности ничего похожего на подходящие условия для развития жизни не было, одни замершие растения, скалы и воронки от падающих с неба обломков кораблей. Спустившись в ближайший кратер, при изучении замерших растений, команда заметила какое-то движение сверху, выбравшись, они увидели большие трёх палые следы, опасаясь нападения неизвестных существ гномы, поторопились к кораблю. Как рассказывал лейтенант Хонинг, при сборе проб растения он задержался и отстал от отряда, не смотря под ноги, споткнулся и свалился в расщелину, повредив при падении коммуникационный прибор. Держась одной рукой за уступ, он звал на помощь, но из-за сломанной рации никто не обратил на его отсутствие внимание. Он чувствовал вибрации от приближающегося к нему существа, затем вибрации стихли и из за уступа выглянула голова гиганта, недолго думая, он решил расслабить руку. Закрыв глаза и предвкушая падение, в последний момент существо схватило гнома за рукав и вытащило на поверхность. 
        <br>  Большое гуманоидное существо не причинило никакого вреда гному и быстро скрылось за ближайшим холмом. Обескураженный гном поднялся на ноги и медленным шагом отправился в сторону базы. Вернувшись на базу, Хонинг обо всём рассказал командиру. Командир Эскель не стал искушать судьбу и решил вернуться домой, взяв слово с команды, что никто ничего никому не будет рассказывать о произошедшем, только при необходимости профессору Ковальски. Так был совершен первый контакт с инопланетной жизнью.
        `;
          b = `История войны с великанами
        часть&nbsp;2/18
        
        <br>  Спустя семь лет после первой экспедиции в космос, молодой инженер и по совместительству исследователь древностей, Лонсир (сын исследователя Хонинга), узнал от отца, что с ним случилось на Тотраксе. Его жажда к исследованию древней цивилизации, побудила его вступить в группу учёного Ландвига К.С. , которая направлялась на Тотракс за пробами льда с ледников. К большому удивлению его команда приземлилась примерно там же, что и команда его отца, расположение кратеров соответствовало рассказам отца. Ему удалось незаметно отделиться от группы и спуститься по верёвке в одну из расщелин, спустившись вниз он обнаружил множество настенных рисунков на высоте от двух до четырёх метров от земли.
        <br>  Пройдя дальше по дну расщелины Лонсир стал слышать монотонный шум, как будто кто-то поёт низким, шипящим голосом, с каждым шагом голос становилось всё громче, пока он не наткнулся на его обладателя. Огромное трёх метровое создание сидело в большой пещере, усеянной светящимися камнями, оно носило на себе подобие брони, скрепленной из массивных стальных пластин и ткани. В пении гиганта довольно разборчиво слышались словосочетания на М'Хеле (старом диалекте языка гномов). 
        <br>  Лонсир осмелился поприветствовать громилу, вследствие чего получил полбу камнем, от испуганного гиганта. Затем великан попросил прощения и тоже поприветствовал своего низкорослого собеседника. После долгого и трудного для гнома из-за языка разговора, он узнал от великана о существовании других таких же гуманоидов как он, они живут глубоко под землёй вблизи лавовых озёр, где тепло и много разных съедобных растений.
        `;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP11.png`;
        f = `piccher/pay/paypaUP11.png`;
        break;
      case 1:
        if (checc == "en") {
          a = `The story of the war with the giants Part&nbsp;3/18
        
        <br>  Meanwhile, the explorer Landvig was searching for his assistant around his ship. When he saw the dirty Lonsir crawling out of the crevice, he grinned and gave him a smack for running away from the base. The young engineer asked with a slight smile to gather the whole team together to tell them what he had found down there, flatly refusing to tell, ahead of time to his supervisor. As everyone gathered at the crevasse, Lonsir shouted Sa'al Tremo, which in M'Hel's translation meant "Come here." Three giants emerged from the depths, the giant he knew, Pal'na'Athar, and two others, Ner'mier and Sigh. All the dwarves but Landwig and Lonsir headed headlong toward the ship. The scientist greeted the representatives of the race of giants admiringly, and they reciprocated by inviting his entire detachment to their city. In conversation with them, the gnomes learned that the race of giants is as old as the dwarves, they also found on their planet huge fragments of spaceships and also do not know where they came from in the orbit of their planet. 
        <br>  Compared to gnome architecture and technology, the giants live in a primitive world, stone houses, or rather many caves within one huge cave, getting their heat from lava lakes and lavopads. As they told us, there are no land animals on their planet, only huge fish splashing in underground lakes and rivers. Like the dwarves, they did not encounter other sentient beings besides us. They live by farming and fishing, growing incredibly nutritious cabbage, carrots and pumpkins, and stuffing huge catfish from underwater lakes with them, giving them good fitness. Their religion consists of worshipping strange mechanisms with glowing crystals inside. They believe the mechanisms that fell from the sky centuries ago are the source of their strength and longevity. 
        <br>  The gnome language was quickly mastered by the giants and the language barrier disappeared.
        <br>  After two weeks of living on Totrax, the giant Rode'Pri allowed the dwarves to visit the only surviving ancient city, as the giants called it M'yol. There the gnomes were shown the ancient halls, presumably the royal possessions and the huge rooms where the ancient mechanisms were created.`;
          b = `The story of the war with the giants Part&nbsp;4/18
        
        <br>  After the return of the expedition from Totrax, the heads of the leading dwarf nations set out on their own to the star system's new neighbors. The resulting alliance between the two races flourished with each passing month. Using the crystals worshipped by the giants, the first photonic crystals were created, serving as the source and storage of light energy in batteries. It was observed that under the action of a powerful homogeneous magnetic field these crystals at 257.65° K became perfect diamagnets. On their basis the first levitation mechanisms were created. With the cooperation of giants with gnomes, the giants learned very quickly and surpassed their gnome teachers in some aspects of technology. 
        <br>  The years the giants spent on Nexurt allowed them to master shipbuilding, weaponry and the creation of superhard alloys.`;
        } else {
          a = `История войны с великанами часть&nbsp;3/18
        
        <br>  Тем временем исследователь Ландвиг искал своего помощника в окрестностях своего корабля. Увидев грязного Лонсира, вылезающего из расщелины, он усмехнулся и дал ему подзатыльник за побег с базы. Молодой инженер с лёгкой улыбкой попросил собрать всю команду вместе, чтобы рассказать им, что он нашёл внизу, наотрез отказываясь рассказывать, раньше времени своему руководителю. Когда все собрались у расщелины, Лонсир крикнул Sa'al Tremo, что в переводе с М'Хеля означало "Идите сюда". Из глубин вышли три гиганта, знакомый ему великан Пал'на'Атар и ещё два Нер'мьер и Сигх. Все гномы кроме Ландвига и Лонсира, сломя голову, направились к кораблю. Учёный с восхищением поприветствовал представителей расы великанов, они ответили ему взаимностью, пригласив весь его отряд в свой город. В разговоре с ними гномы узнали, что род великанов настолько же древний, как и гномий, они тоже находили на своей планете огромные осколки космических кораблей и тоже не знают, откуда они появились на орбите их планете. 
        <br>  По сравнению с гномьей архитектурой и технологиями, великаны живут в примитивном мире, каменные дома, а точнее множество пещер внутри одной огромной пещеры, получая тепло от лавовых озёр и лавопадов. Как они рассказывали, на их планете нет сухопутных животных, только огромные рыбы, плескающиеся в подземных озёрах и реках. Также как и гномы, других разумных существах кроме нас они не встречали. Живут они за счёт фермерства и рыбной ловли, выращивая при этом невероятно питательную капусту, морковь и тыкву, и фаршируя ими огромных сомов из подводных озёр, дающих им хорошую физическую форму. Религия их состоит в поклонении странным механизмам со светящимися кристаллами внутри. Они верят, упавшие много веков назад с неба механизмы, являются источниками их силы и долголетия. 
        <br>  Гномий язык был быстро освоен великанами и языковой барьер пропал.
        <br>  Через две недели жизни на Тотраксе, великан Роде'При разрешил гномам посетить единственный сохранившийся древний город, как его называли великаны Мь'ёл. В нём гномам показали старинные залы, предположительно королевские владения и огромные помещения, в которых создавались древние механизмы.
        `;
          b = `История войны с великанами часть&nbsp;4/18
        
        <br>  После возвращения экспедиции с Тотракса, главы ведущих наций гномов самолично отправились к новым соседям звёздной системы. Образовавшийся союз двух рас процветал с каждым месяцем. Используя кристаллы, которым поклонялись великаны, были созданы первые фотонные кристаллы, служащие источником и хранения энергии света в батареях. Было замечено, что под действием мощного однородного магнитного поля эти кристаллы при температуре 257.65° К становятся идеальными диамагнетиками. На их основе были созданы первые левитационные механизмы. 
        <br>  При сотрудничестве великанов с гномами, великаны очень быстро обучались и по некоторым аспектам технологий превзошли своих учителей гномов. Проведенные годы гигантов на Нексурте позволили им освоить кораблестроение, оружейное дело и создание сверхтвёрдых сплавов.
        `;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP11.png`;
        f = `piccher/pay/paypaUP11.png`;
        break;
      case 2:
        if (checc == "en") {
          a = `The story of the war with the giants
        Part&nbsp;5/18
        
        <br>  After decades of cooperation between two what were once thought to be different worlds, the giants gave their consent for the dwarves to explore the ancient city of M'yol. After digging a couple dozen tons of sand and stone, the gnomes came across locked doors, attempts to open them without destroying them were unsuccessful. After asking permission from the giants, they were able to lower more powerful drills into the depths, which helped the solid doors begin to collapse. 
        <br>  When the doors collapsed and the passage cleared, the workers couldn't believe their eyes: in the middle of the high hall stood statues of huge gnomes and giants, and along the walls were frescoes depicting parts of some space city called Noden (which later became known as "peerless, indestructible" in an old gnomish dialect).
        <br>  In the far corner of the hall, in two rows were the skeletons of giants whose bones were impregnated with a light green liquid with a huge dose of radiation.
        In the middle of the hall on a special pedestal was a stone slab with text scratched in a hurry (the text from this slab has not been translated to the end for a long time). On examining the room and the remains of the giants, scientists surmised that these giants were trying to protect themselves from something behind such indestructible doors, locked from the inside. The radiation background inside the room exceeded the norm by 50 times, fortunately the health of the gnomes working there did not have time to strongly affect. The giants assisting the gnomes felt no ill effects, their bodies having learned to resist radiation over the long years of existence on Totrax. The giants, led by their leader Rode'Priya, further studied the wall paintings without the gnomes' involvement.`;
          b = `The story of the war with the giants
        Part&nbsp;6/18
        
        <br>  Within three months, the giants managed to fully copy all the surviving wall texts and images from the deep temple. Copies of the obtained data were transferred to the gnomes on Nexurt for further study. The giants and gnomes were not familiar with the inscribed symbols; neither the gnomish language nor M'Hel had similar signs.
        <br>  For a year one of the five words known to them from these texts was Noden, a wall image provided by the giants along with images of some ancient gnome rulers whose names could not be recovered, and equally ancient giants' rulers, three of whose names are clearly preserved in stone to this day. 
        <br>  If the rulers were arranged in order of reign from left to right, then first was Tolran, thirteenth Sozen, and fourteenth Azulon. Next to Azulon's image were embossed the words "Runhes ik abbati", which translates from M'Hel "we will avenge you". The largest fresco copied was a picture of supposedly the last Dwarven and Giant kings holding something glowing with blue flame, what exactly is unknown this fragment of the fresco was roughly hollowed out of the wall.`;
        } else {
          a = `История войны с великанами
        часть&nbsp;5/18
        
        <br>  Спустя десятилетия сотрудничества двух, как раньше считалось разных миров, великаны дали своё согласие на изучение гномами древнего города Мь'ёл. Раскопав пару десятков тон песка и камня, гномы наткнулись на запертые двери, попытки открыть их не разрушая не увенчались успехом. Попросив разрешения у великанов, им удалось спустить в глубины более мощные бурильные установки, благодаря которым прочные двери начали разрушаться. 
        <br>  Разрушив двери и очистив проход, рабочие не поверили своим глазам, по середине высокого зала стояли статуи огромных гномов и великанов, а вдоль стен красовались фрески с изображёнными на них частями какого-то космического города именовавшийся Нодэном (как стало позже известно, со старого гномьего диалекта это переводится как "несравненный, неразрушимый").
        <br>  В дальнем углу зала, в два ряда располагались скелеты великанов, кости которых были пропитаны светло-зелёной жидкостью с огромной дозой радиации.
        По середине зала на специальном постаменте находилась каменная плита с нацарапанным в спешке текстом (текст с данной плиты долгое время не переведён до конца). Осмотрев помещение и останки гигантов учёные пришли к мнению, что эти великаны пытались от чего-то защититься за столь нерушимыми дверями, запертыми изнутри. Радиационный фон внутри помещения превосходил норму в 50 раз, к счастью на здоровье работающих здесь гномов это не успело сильно повлиять. Помогающие гномам великаны не испытывали никакого недомогания, их организмы за долгие годы существования на Тотраксе научились сопротивляться радиации. Дальнейшим изучением настенных изображений занимались великаны под руководством их предводителя Роде'Прия, без участия гномов.
        `;
          b = `История войны с великанами
        часть&nbsp;6/18
        
        <br>  В течение трёх месяцев великанам удалось полностью скопировать все сохранившиеся настенные тексты и изображения из глубинного храма. Копии полученных данных были переданы гномам на Нексурт для их дальнейшего изучения. Великанам и гномам не были знакомы начертанные символы, ни в гномьем языке, ни в М'Хеле не было похожих знаков.
        <br>  На протяжении года одним из пяти известных им слов из этих текстов был Нодэн, настенное изображение, которого предоставили великаны вместе с изображениями каких-то древних правителей гномов, чьи имена не получилось восстановить, и таких же древних правителей великанов, имена трёх из которых отчётливо сохранились в камне до наших дней. 
        <br>  Если правителей располагали по порядку по мере их правления слева направо, то первым был Толран, тринадцатым Созен и четырнадцатым Азулон. Рядом с изображение Азулона были выбиты слова "Runhes ik abbati", что в переводе с М'Хеля "мы отомстим за тебя". Самой большой скопированной фреской было изображение предположительно последних гномьего и великаньего королей, держащих что-то сияющие голубым пламенем, что именно неизвестно данный фрагмент фрески был грубо выдолблен из стены.
        `;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP11.png`;
        f = `piccher/pay/paypaUP11.png`;
        break;
      case 3:
        if (checc == "en") {
          a = `The story of the war with the giants
        Part&nbsp;7/18
        
        <br>  A year later, a researcher of ancient dwarves, Vassir, an apprentice researcher and by a surprising coincidence his uncle Lonsir, came to work in the science lab.
        <br>  At first he was assigned tasks: go there, bring this and take that away. Once he had a bad trip down the stairs and broke his leg, so to cheer him up a bit in the hospital, the head of the science lab let him see the texts the giants had brought from Totrax. Vassir was familiar with most of the symbols, the same symbols depicted in preserved books found in the wreckage of spaceships in the vicinity of Verona, for a long time it was thought that this language belonged to an unknown space race, and it was not given the proper attention until the existence of these books was simply forgotten. When he returned home, he almost immediately found in his library two collections of ancient texts, the first and the fourth volume, but for a better translation he needed the second, third and fifth volumes as well. 
        <br>  The next day Vassius went to the Museum of Ancient Civilizations, looking for the books he needed. At that time, copies of those old books were printed, which could be freely purchased in the store at this museum. Settling in the reading room, where no one would disturb him, he translated in one night 28 of the 44 sentences from the very texts that no one had been able to translate for a year. The next morning Vassir presented the scientists of the research laboratory his translation of 38 sentences out of 44, the remaining 6 sentences were encrypted coordinates: the citadel of the dwarves "Noden", the once ancient temples on other planets, and the home planet of the ancient dwarves and giants. After reading and checking the correctness of the translation, researcher Vassir was awarded the title of scientist of the Dwarf Science Research Center and became the leader of research and future expeditions to the planet Casper, in search of ancient temples.`;
          b = ``;
        } else {
          a = `История войны с великанами
        часть&nbsp;7/18
        
        <br>  Спустя год в научную лабораторию пришёл работать исследователь древних гномов Вассир, ученик исследователя и по удивительному совпадению своего дяди Лонсира.
        <br>  Поначалу ему поручали задания: сходи туда, принеси то и унеси это. Однажды он неудачно спустился с лестницы и сломал ногу, чтобы немного поднять ему настроение в больнице, глава научной лаборатории разрешил ему посмотреть привезённые великанами с Тотракса тексты. Вассиру были знакомы большая часть&nbsp;символов, такие же символы были изображены в сохранившихся книгах, найденных в обломках космических кораблей в окрестностях Верона, очень давно долгое время считалось, что данный язык принадлежал неизвестной космической расе, и должное внимание ему не уделялось, пока о существовании этих книг просто на просто не забыли. Вернувшись, домой он практически сразу нашёл в своей библиотеке два сборника древних текстов, первый и четвертый том, но для более качественного перевода ему были необходимы ещё второй, третий и пятый том. 
        <br>  На следующий день Вассий отправился в музей древних цивилизаций, на поиски необходимых ему книг. На тот момент были напечатаны копии тех старых книг, которые можно было свободно купить в магазине при этом музеи. Расположившись в читальном зале, где ему никто не будет мешать, он за одну ночь перевёл 28 из 44 предложений из тех самых текстов, которые никто не мог целый год перевести. На следующее утро Вассир представил учёным исследовательской лаборатории свой перевод 38 предложений из 44, остальные 6 предложений представляли собой зашифрованные координаты: цитадели гномов "Нодэн", некогда существовавших древних храмов на других планетах и родной планеты древних гномов и великанов. После прочтения и проверки правильности перевода, исследователь Вассир был удостоен звания учёного исследовательского центра Гномоведения и стал руководителем исследований и будущих экспедиций на планету Каспер, в поисках древних храмов.
        `;
          b = ``;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP11.png`;
        f = `piccher/pay/paypaUP10.png`;
        break;
      case 9:
        if (checc == "en") {
          a = `History of the first gnome settlers (significant events based on commonly known old records)
          <br>   Kosh Civilization Part&nbsp;1/3
          <br>  6000-1900 years ago there was no single chronology or accurate data on the development of the dwarves, at least no substantially important historical records or relics remain. The only civilization about which there are many old records and which was a precursor to the modern era is the Kosh civilization.
          <br>  About 1900 years ago, after long and countless confrontations between different Dwarf tribes, different religion and ideology. All the large lands and kingdoms of Greendmoor were united by Prince Raster C.R. von Kosh into the Principality of Kosh, and the Kosh chronology was introduced in Greendmoor, where the point of reference was the year of the Principality's foundation.
          <br>  35 B.C. - 38th year of the Kosh era - Raster Carmelin Radonovic von Kosh, a warlord of Karstag (the Northeast Kingdom of the Greendmoor continent), who took over the kingdom at the age of 35 by coup d'état. An excellent strategist, he subjugated four more kingdoms within 17 years, increasing his holdings to the West Sea. By the age of sixty he had conquered the rest of the northern kingdoms of the continent.
          <br>   Year 28 Kosh - Prince Noordur - Carmelin's firstborn son becomes commander-in-chief of his father's forces and by year 36 conquers the northeastern coast of Malfarin and by the end of the year the continental part of Malfarin is joined to the principality of Kosh.
          <br>  35-38 - Prince Carmelin's attempt to explore the far northern lands of the principality and the eternal ice of Northern Garkain is unsuccessful, caught in a snowstorm, most of his units perish in the freezing wasteland, the rest fall seriously ill and only 135 dwarves return to their native lands, bringing the weakened lord to his family.
          <br>  Year 38 of Kosh - Upon Carmelin's death, the throne passes to his second son Falgot, whose lineage will keep the principality peaceful until the year 255 of Kosh. 
          <br>  In 41 Falgot signs a trade alliance with the Southern Kingdoms of Greendmoor.
          <br>  In 56, the 4 kingdoms of Malfarin and Cascaria join the alliance.
          <br>  In 59, Falgot's son Axinius, nicknamed Peaceful, comes to power.
          <br>  The years 60 to 253 are called the golden ages of the Kosh Age, centuries of diplomacy and the era of unity of the Dwarven race.`;
          b = `History of the first dwarf settlers (significant events based on commonly known old records)
          <br>  Kosh Civilization Part&nbsp;2/3
          <br>  253-255 The noble family of the warlord Shardar Skalazubogo, decides to increase its influence in the kingdom and takes advantage of the ruined after 206 of the firstborn family of the Grand Duke, whose descendant is Duminur Von Kosh . 
          Using Duminur, the house of Shardar becomes more influential, but in early 255, the descendant of the prince kills the head of the noble family and begins a campaign for power over the duchy.
          <br>  In mid 255, the first-born family of Carmelin rebels against the incumbent King Amassir and in late 258, after a successful coup, King Duminur takes power in his own hands.
          Under the reign of Duminur von Kosh, a cult of worship of King Carmelin emerges, who forcibly initiates all the kingdoms of Greendmoor into his faith, and from 280 onwards the entire world.
          <br>  The mass persecution of the civilians of Kosh, who continue to worship the old gods, does not go unnoticed by the king. The acting king banishes Carmelin's followers, caught between 259 and 267, to the frozen wastelands.
          <br>  In 267, the head of the Kosh cult, Armiricius de Lonfal, is caught by the young prince Gorsur von Kosh, suggesting to him that he is the living embodiment of his great ancestor.
          <br>  In 272, after the death, under strange circumstances, of his father Duminur, Gorsur declares himself a god and returns all his followers from exile, equating them with his lords.
          <br>  In 276, the cult gains almost unlimited power in the principality and extends its influence to neighboring kingdoms.
          <br>  The followers of this religion sought to erase by any means information about the history of the world before their lord. There is almost no information about the other former kingdoms of the north. The only thing historians could establish about the state of the world from the surviving manuscripts before 258 were the borders of the principality and the names of the continents of Neksurt and some settlements on them. For example, Cascaria was divided into two more continents: Ladagark and Moan.
          <br>  For two centuries the clouds of deceit and treachery of the Cult of the First Prince had been gathering over the lands of Neksurt.`;
        } else {
          a = `История первых гномьих поселенцев (значимые события, основанные на общеизвестных старых записях)
          <br>  Цивилизация Кош часть&nbsp;1/3
          <br>  6000-1900 лет назад не было ни единого летоисчисления, ни точных данных о развитии гномов, по крайней мере, не осталось существенно важных исторических записей и реликвий. Единственной цивилизацией, о которой есть много старых записей и которая была предшественником современной эры, является цивилизация Кош.
          <br>  Примерно 1900 лет назад после долгих и бесчисленных противостояний между разными племенами гномов, разной религии и идеологии. Все крупные земли и королевства Грендмура были объединены князем Растером К.Р. фон Кош в княжество Кош, и на территории Грендмура было введено летоисчисление Коша, где точкой отсчёта считался год основания княжества.
          <br>  35 до эры Коша – 38 год эры Коша– Растер Кармелин Радонович фон Кош, полководец Карстага (Северо-восточного королевства континента Грендмура), завладевший в 35 лет королевством посредством переворота. Превосходный стратег, подчинивший в течение 17 лет ещё четыре королевства, увеличив свои владения до западного моря. К шестидесяти годам подчинил остальные северные королевства континента.
          <br>  28 год Коша - Принц Нурдур - первенец Кармелина становится главнокомандующим войск своего отца и к 36 году завоёвывает побережье северо-восточной части Мальфарина и к концу года континентальная часть Мальфарина присоединяется к княжеству Кош.
          <br>  35-38 годы попытка князя Кармелина освоения дальних северных земель княжества и вечных льдов Северного Гаркаина не увенчалась успехом, попав в снежную бурю, большая часть его отрядов гибнет в морозной пустоши, оставшиеся тяжело заболевают и лишь 135 гномов возвращаются в родные земли, принося ослабленного владыку к его семье.
          <br>  38 год Коша - После смерти Кармелина трон перешёл его второму сыну Фальготу, род которого будет сохранять мир в княжестве до 255 года Коша. 
          <br>   В 41 году Фальгот подписывает соглашение о торговом союзе с Южными королевствами Грейдмура.
          <br>  В 56 году в союз вступают 4 королевства Мальфарина и Каскарии.
          <br>  В 59 году к власти приходит сын Фальгота- Аксиний которого прозвали Мирный.
          <br>  Годы с 60 по 253 называют золотыми столетиями эпохи Кош, веками дипломатии и эпохой единства гномьей расы.
          `;
          b = `История первых гномьих поселенцев (значимые события, основанные на общеизвестных старых записях)
          <br>   Цивилизация Кош часть&nbsp;2/3
          <br>  253-255 годы дворянский род полководца Шардара Скалазубого, решает усилить своё влияние в королевстве и использует разорившийся после 206 года род первенца великого князя, потомком которого является Думинур Фон Кош . 
          Используя Думинура, дом Шардара становится влиятельнее, но в начале 255 года потомок князя убивает главу дворянского рода и начинает компанию за власть над княжеством.
          <br>   В середине 255 года, род первенца Кармелина, поднимет восстание против действующего короля Амассира и в конце 258 года после успешного переворота, король Думинур берет власть в свои руки.
          <br>  При правлении Думинура фон Кош, появляется культ поклонения королю Кармелину, который насильственными методами посвящает в свою веру все королевства Грендмура, а с 280 года и весь мир.
          Массовые гонения мирных жителей Коша, которые продолжают поклоняться старым богам, не остаются без внимания короля. Действующий король изгоняет пойманных с период 259-267 годы последователей Кармелина в морозные пустоши.
          <br>  В 267 году по влияние главы культа Кошей, Армириция де Лонфаля, попадает молодой принц Горсур Фон Кош, внушая ему, что он является живым воплощением своего великого предка.
          <br>  В 272 году после гибели, при странных обстоятельствах, своего отца Думинура, Горсур объявляет себя богом и возвращает из ссылки всех своих последователей, приравнивая их к своим лордам.
          <br>  В 276 году культ получает практически безграничную власть в княжестве и распространяет своё влияние на соседние королевства.
          Последователи этой религии стремились стереть любыми способами информацию об истории мира до их повелителя. О других бывших королевствах севера информации почти не осталось. Единственное, что смоги установить историки о состоянии мира по уцелевшим рукописям до 258 года, это границы княжества и наименования континентов Нексурта и некоторых поселений на них. Например, Каскария была разделена ещё на два континента: Ладагарк и Моан.
          <br>  В течение двух веков над землями Нексурта сгущались тучи лжи и коварства Культа первого князя.`;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP12.png`;
        f = `piccher/pay/paypaUP12.png`;
        break;
      case 10:
        if (checc == "en") {
          a = `History of the first gnome settlers (significant events based on commonly known old records)
            <br>  Kosh Civilization Part&nbsp;3/3
            <br>  In 281 a famine gripped the lands of Cascaria, and in 317 Malfarin, asking for help from the kingdoms of Greendmoor they had to accept the terms and conditions of a large number of trade alliance associated with the renunciation of the old customs of their lands.
            <br>  The years from 258-467 are called the "Troubled Time of the First Nobles."
            <br> <img src="piccher/pay/nekKoshen.webp" width="100%" >
            <br>  In 467, the natives of Talra drove out the invaders and seceded from the principality, proclaiming their lands Taras'Nurbi. The rebellion was led by a simple merchant, Norbit Cassius, a grocer. 
            <br>  In 468, the example of the former Talra, was followed by the inhabitants of other continents.
            <br>  From 467 to 501 there was a fierce battle with the followers of the first prince. Dwarves Moan and Ladagark attacked from the west, while Malfa and Cascaria supported the Talra offensive from the east. As a result, the top rulers of the principality were destroyed and all the nobles were burned in the siege of their family castle at Bosparad.
            <br>  By the 13th year after the fall of Bosparad, the cult of Kosh had been completely eradicated from the lands of Nexurt.
            <br>  The year 501 of the Kosh Dynasty, was the 1st year of the fall of Bosparad and the beginning of a new era of development and mutual aid among the Dwarven peoples.`;
          b = ``;
        } else {
          a = `История первых гномьих поселенцев (значимые события, основанные на общеизвестных старых записях)
            <br>   Цивилизация Кош часть&nbsp;3/3
            <br>  В 281 году голод охватил земли Каскарии, а в 317 году  Мальфарина, прося помощи у королевств Грейдмура им пришлось принять условия Кошей и внести большое количество поправок в условия торгового союза, связанных с отречением от старых обычаев и использованием их земель и ресурсов для строительства храмов.
            <br>  Годы с 258-467 называют “Смутное время первой знати”.
            <br> <img src="piccher/pay/nekKoshru.webp" width="100%" >
            <br>  В 467 году коренные жители Талры прогнали захватчиков и отделились от княжества, провозгласив свои земли Тарас’Нурби. Руководил восстанием простой купец-бакалейщик Норбит Кассий. 
            <br>  В 468 году примеру бывшей Талры, последовали жители других континентов.
            <br>  С 467 по 501 годы велось ожесточенное сражение с последователями первого князя. Гномы Моана и Ладагарка наступали с запада, а Мальфа и Каскария поддерживали наступление Талры с востока. По итогу верхушка власти княжества была уничтожена, а вся знать сожжена при осаде их фамильного замка в Боспараде.
            <br>  К 13 году после падения Боспарада, культ Коша был полностью искоренён с земель Нексурта.
            <br>  501 год правления династии Кош, стал 1 годом падения Боспарада и началом новой эпохи развития и взаимопомощи гномьих народов. `;
          b = ``;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP12.png`;
        f = `piccher/pay/paypaUP10.png`;
        break;
      default:
        a = ``;
        b = ``;
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = ``;
        f = ``;
    }
    document.getElementById("List1_2n+1").innerHTML = 2 * str1 + 1;
    document.getElementById("List1_2n+2").innerHTML = 2 * str1 + 2;
    document.getElementById("columT1_1").innerHTML = a;
    document.getElementById("columT1_2").innerHTML = b;
    document.getElementById("columT1_3").src = c;
    document.getElementById("columT1_4").src = d;
    document.getElementById("columT1_5").src = e;
    document.getElementById("columT1_6").src = f;

    gh = 2 * str1;
    if (booolSA_S[gh] == true) {
      document.getElementById("sec1").style.display = '';
    } else {
      document.getElementById("sec1").style.display = 'none';
    }

    gh = 2 * str1 + 1;
    if (booolSA_S[gh] == true) {
      document.getElementById("sec2").style.display = '';
    } else {
      document.getElementById("sec2").style.display = 'none';
    }
  }

  function Preob_SA_guide() {
    let a, b, c, d, e, f = `no text`;
    let gh = 0;
    switch (str2) {
      case 0:
        if (checc == "en") {
          a = `NO`;
          b = `1`;
        } else {
          a = `Ничего`;
          b = `1`;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP9.png`;
        f = `piccher/pay/paypaUP10.png`;
        break;
      case 1:
        if (checc == "en") {
          a = `Connector device. The device is a compact object, conveniently lying in the hand. Designed to connect multiple devices to each other. The interactive elements of the environment will have color dots if you hold the device in your hand.
        <br> <img src="piccher/pay/conn.webp" class="pictin" >
     To connect one part to another, click and drag one of the points and release when hovering over another point. If successful, a line should appear between the two pieces showing that they are connected. The line will also have small black arrows on it, indicating which part will activate the other. Arrow keys indicate the direction of action. <br>  Buttons, bearings, sensors, lamps, seats and some decorative elements have a unidirectional connection. Logical closures and timers are bidirectional and it is important from which element the connection is made.
           <br>  You can also disconnect connections by grabbing the object tag and dragging it aside.
           <br>  Please note that only parts belonging to a single structure may be joined. You can check this by dragging connections; all invalid connection points will disappear.`;
          b = `The elevator is an essential object that every mechanic should have at hand. There are two modifications of the elevator.<br>  1)-is placed only on a certain surface and attached to it.<br>  2)An ordinary elevator - placed on any solid surface, is not placed on suspended surfaces, held on bearings, pistons or springs.
        <br> <img src="piccher/pay/lift2.webp" class="pictin" >
       Each elevator is based on an unbreakable connection with its owner, providing remote control of the lift at a distance from the owner. 
          Recent versions of the elevator are equipped with a subquantum stabilizer, which allows you to instantly teleport the delivered elevator to the required point.
          <br>  The lift measures 4x4x2 when placed. The lift can be extended by one unit, up to 22 units in height. Despite its size and expansion, the lift can pass through any static object.
           Any modification of the elevator can be put objects or climbed himself on it for climbing on the hill.
           Because of the connection between the object and its owner, the lift cannot be thrown out of the inventory, only deliberately put it in the chest.`;
        } else {
          a = `Устройство соединитель.<br> Устройство представляет собой компактный предмет, удобно лежащий в руке. Предназначен для соединения нескольких устройств между собой. На интерактивных элементах окружения появятся цветные точки, если взять устройство в руку.
        <br> <img src="piccher/pay/conn.webp" class="pictin" >
        Чтобы соединить одну часть с другой, щелкните и перетащите одну из точек и отпустите при зависании над другой точкой. <br>   Если сделано успешно, между двумя частями должна появиться линия, показывающая, что они связаны. Линия также будет иметь небольшие черные стрелки на нем, указывая, какая часть активирует другую. Стрелки указывают направления воздействия. Кнопки, подшипники, сенсоры, лампы, сиденья и некоторые элементы декора имеют однонаправленное соединение. <br>  Логические затворы и таймеры имеют двунаправленость и важно, от какого элемента ведётся подключение.
        <br>  Также можно разъединять соединения, захватив метку обьекта и перетащив её в сторону.
       Обратите внимание, что могут соединяться только части, принадлежащие одной единой конструкции. <br>  Вы можете проверить это при перетаскивании соединения; все недопустимые точки соединения исчезнут.`;
          b = `Лифт – неотъемлемый предмет, который должен быть у каждого механика под рукой. Существует две модификации лифта.<br>  1)-ставится только на определённую поверхность и привязывается к ней.<br>  2)обычный лифт – ставящийся на любую цельную поверхность, не ставится на подвесные поверхности, держащиеся на подшипниках, поршнях или пружинах.
        <br> <img src="piccher/pay/lift2.webp" class="pictin" >
        В основе каждого лифта лежит нерушимая связь со своим владельцем, обеспечивающая дистанционный контроль подъёмника на расстоянии от владельца. 
        <br>  Последние версии лифта оснащены субквантовым стабилизатором, позволяющий мгновенно телепортировать поставленный лифт в требуемую точку.
        Подъемник имеет размеры 4x4x2 при размещении. Подъемник может быть расширен на одну единицу, до 22 единиц в высоту. Несмотря на размеры и расширение, Лифт может пройти через любой статичный объект.
        <br>  На любую модификацию лифта можно ставить предметы или забираться самому на него для взбирания на возвышенности.
        Из-за наличия связи между предметом и его владельцем лифт нельзя выбросить из инвентаря, только намеренно убрать его в сундук.`;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP13.png`;
        f = `piccher/pay/paypaUP13.png`;
        break;
      case 2:
        if (checc == "en") {
          a = ` Paint tool is used to paint something, such a paint tool can be used to enter passwords or to endow the dyed object with the key property to activate the sensors.
        <br>  Left mouse colors with selected color. Right mouse removes color from colored objects. Multiple blocks can be colored or colored by dragging and dropping by the appropriate mouse button, like placing or removing multiple blocks at once.
        <br> <img src="piccher/pay/pain.webp" class="pictin" >
        To paint something, most often used colors from the second top of the line.
        To change the color, press Q to open the color selection GUI. To close it without selecting a color, press Q or Esc.`;
          b = `5`;
        } else {
          a = ` Для покраски чего-либо используется краскопульт, такой инструмент покраски может использоваться для ввода паролей или наделять окрашиваемый предмет свойством ключа для активации сенсоров.
        <br>  Краски левой мыши с выбранным цветом. Правая мышь удаляет цвет из окрашенных объектов. Несколько блоков могут быть окрашены или очищены от цвета путем перетаскивания соответствующей кнопкой мыши, подобно размещению или удалению нескольких блоков одновременно.
        <br> <img src="piccher/pay/pain.webp" class="pictin" >
        Для покраски чего либо, чаще всего используются цвета из второй сверху строки.
        Чтобы изменить цвет, нажмите клавишу Q, чтобы открыть графический интерфейс выбора цвета. Чтобы закрыть его без выбора цвета, нажмите Q или Esc.`;
          b = `5`;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP13.png`;
        f = `piccher/pay/paypaUP13.png`;
        break;
      case 3:
        if (checc == "en") {
          a = `6`;
          b = `7`;
        } else {
          a = `6`;
          b = `7`;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP13.png`;
        f = `piccher/pay/paypaUP13.png`;
        break;
      case 4:
        if (checc == "en") {
          a = `Locks and passwords.<br>  Often to store something important, you need to ensure the safety of this item or room with panels with passwords. Usually, passwords can be divided into numerical and color passwords. In order not to remember such passwords often hide them under some objects or interior decor.
        <br>   For example, in the form of colors or the number of objects in chests, where the sequence is read from left to right or from top to bottom.
        <br>  The number of objects can refer to both the order of pressing a button and the number of clicks.
        <br> <img src="piccher/pay/parol.webp" class="pictin" > 
        Digital passwords use items that cannot exist themselves, such as bearings, pistons, and springs.
        <br>  Numeric, or as numeric, passwords are entered into certain panels with gray buttons. Where 1 is the top left corner, 9 is the bottom right and 0 is the separate button at the bottom of the middle.
        <br>  In most cases, these panels use two more buttons: enter or approve the light green color and cancel or reset the dark red color.
        It is necessary to enter not too quickly and without sharp push of buttons otherwise the signal will freeze.`;
          b = `Collected items.<br>  These include gasoline canisters, batteries, water bottles, paint cylinders, glow sticks and components. The items used are: gasoline, batteries, water, and also refers to potatoes instead of a component. In normal circumstances, the potato bucket cannot be taken so easily, and the components do not have their own container. The container with water can not be used either.
        <br> <img src="piccher/pay/pred.webp" class="pictin" > 
        There is always a button on the containers or next to them to use their contents.
        <br>  Sometimes you need to load several items into the container, but not all items will be used. If, for example, the generator only needs one battery, and you put more, it only uses one, and the rest will stay in it. In such cases, you need to take the remaining batteries with you.
        <br>  Components are special items that can be found in offices or within warehouses, which can be used as painting items with further input of color passwords. By putting them on the elevator and removing it so that all sensors could see the component, or rather its color.`;
        } else {
          a = ` Замки и пароли. <br>  Часто чтобы хранить что-то важное, необходимо обеспечить сохранность этого предмета или помещения с помощью панелей с паролями. Обычно пароли можно разделить на числовые и цветовые. Чтобы не запоминать такие пароль их часто скрывают под какие-то предметы или интерьер декора.
        <br>  Например, в виде цветов или количества предметов в сундуках, где последовательность считывается слева направо или сверху вниз.
        <br>  Количество предметов может означать как порядок нажатия на определённую кнопку, так и количество нажатий.
        <br> <img src="piccher/pay/parol.webp" class="pictin" >
        <br>  В качестве цифровых паролей используются предметы которые сами не могут существовать, такие как подшипники, поршни и пружины.
        Числовые, или как их ещё называют цифровые, пароли вводятся в определённые панели с кнопками серого цвета. Где 1- верхний левый угол, 9 –правый нижний, а 0 – отдельная кнопка внизу посередине.
        <br>  В большинстве случаев в таких панелях используются ещё две кнопки: ввести или одобрить светло-зелёный цвет и отменить или сбросить темно-красный цвет.
        Вводить необходимо не слишком быстро и без резких нажатий на кнопки иначе сигнал зависнет.`;
          b = `Собираемые предметы. <br>  К ним относятся канистры с бензином, батарейки, бутылки с водой, баллоны с краской, светящиеся палочки и компоненты. К используемым предметам относятся: бензин, батарейки, вода, а также относится картошка вместо компонента. В обычных условиях ведро картошки нельзя так просто взять, а компоненты не имеют своего контейнера. Контейнер с водой тоже использовать нельзя.
        <br> <img src="piccher/pay/pred.webp" class="pictin" > 
        На контейнерах или рядом с ними всегда есть кнопка, с помощью которой осуществляется использование его содержимого.
        <br>  Иногда в контейнер нужно загрузить несколько единиц предметов, но не все предметы будут использованы. Если на пример генератору нужна только одна батарейка, а вы положили больше, то он использует только одну, а остальные останутся лежать в нём. В таких случаях нужно забирать оставшиеся батарейки с собой.
        <br>  Компоненты - особые предметы, которые можно найти в офисах или внутри складов, которые могут использоваться как предметы для покраски с дальнейшим вводом цветовых паролей. Поставив их на лифт и убрав его, чтобы все датчики видели компонент, а точнее его цвет.`;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP15.png`;
        f = `piccher/pay/paypaUP15.png`;
        break;
      case 5:
        if (checc == "en") {
          a = `Searching for clues for a panel with buttons usually used ducks, helmet buckets or other objects that are often found in the world.
        <br>  Objects can be hidden, either in a visible place or in a non-obvious place, behind other objects, behind boxes, in boxes, in textures, as part of more complex decor elements.
        <br> <img src="piccher/pay/cpred.webp" class="pictin" >
        The colour of such objects is limited by the colour palette of the paint tool. Sometimes the human eye cannot correctly recognize color, in this case it is possible to reduce for a while the quality, shadows and reflections of the world.
        The location of all hidden objects is limited to the area of the room with panel and adjacent rooms, no more than behind the wall.`;
          b = `<br> <img src="piccher/pay/sen.webp" class="pictin" > Separation of items in the inventory, often have to use one object, for example, put something on the sensors, if the components can be put one at a time, the canisters, batteries and cylinders with paint should be separated in the inventory using the right mouse button.
        <br>  Sensors that respond to mechanics can be activated by an elevator, a common object, or phantom objects discarded from the inventory.
        Some chests often use deceptions, in which one object is in 1-3 lines and the other in 4 lines. Because of this unprepared mechanics take only 1 item without noticing the others in the chest.`;
        } else {
          a = `Поиск подсказок для панели с кнопками, обычно используются уточки, ведра с каской или иные объекты, которые часто встречаются в мире.
        <br>  Предметы могут быть спрятаны, как на видном месте, так и в неочевидном, за другими предметами, за коробками, в коробках, в текстурах, в составе более сложных элементов декора.
        <br> <img src="piccher/pay/cpred.webp" class="pictin" >
        Цвет таких предметов ограничивается цветовой палитрой инструмента покраски. Иногда человеческий глаз не может корректно распознать цвет, в таком случае можно понизить на время качество, теней и отражений мира.
        Расположение всех спрятанных предметов ограничивается зоной комнаты с панелью и прилежащими с ней помещениями, не дальше чем за стеной.`;
          b = ` Разделение предметов в инвентаре, часто приходится использовать один предмет, например, поставить что-то на сенсоры, если компоненты можно поставить по одному, то канистры, батареи и баллоны с краской нужно разделять в инвентаре используя правую кнопку мыши.
        <br> <img src="piccher/pay/sen.webp" class="pictin" > Датчики, реагирующие на механика, можно активировать лифтом, обычным предметом или фантомным предметов, выброшенным из инвентаря.
        В некоторых сундуках часто используются обманки, в которых один предмет находится в 1-3 строках, а другие в 4 строке. Из-за этого неподготовленные механики берут только 1 предмет, не замечая других в сундуке.`;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP15.png`;
        f = `piccher/pay/paypaUP15.png`;
        break;
      case 6:
        if (checc == "en") {
          a = ` Panels consisting of tumblers are the easiest way to close doors. They need to choose the password yourself, either by brute force (4 switchers), or by logic 3x3 or more. <br> <img src="piccher/pay/knp.webp" class="pictin" > Next to these locks are logical closures, which serve as indicators of correct input. `;
          b = `The color code lock represents a set of sensors of red, blue, yellow and green colors. To activate and enter the color, you need to find the object to be painted. As an item, you can use, for example, a component. 
        <br>  By changing the color of the component, you change the crystal structure of the material that the object consists of, so that it can be used to enter passwords as a key card.
        <br>  To paint an object, first you need to put it on the elevator, remove the elevator and repaint the component in the necessary colors according to a certain sequence that is necessary to unlock the lock.
        Such algorithms in the form of passwords can be hidden in chests or as a decorative element.`;
        } else {
          a = ` Панели, состоящие из тумблеров это самый простой способ закрытия дверей. К ним нужно подобрать пароль самому, либо перебором (4 тумблера), либо по логике 3x3 или более. <br> <img src="piccher/pay/knp.webp" class="pictin" > Рядом с такими замками находятся логические затворы, которые служат индикаторами правильности ввода.`;
          b = `Кодовый цветовой замок, представляет набор сенсоров красного, синего, жёлтого и зелёного цвета. Для активации и ввода цвета необходимо найти окрашиваемый предмет. В качестве предмета можно использовать, например компонент. 
        <br>  Меняя цвет компонента, вы изменяете кристаллическую структуру материала, из которого состоит предмет, вследствие чего он может использоваться для ввода паролей в качестве ключ карты.
        <br>  Для покраски предмета, для начала его необходимо поставить на лифт, убрать лифт и перекрашивать компонент в необходимые цвета по определённой последовательности, которая необходима для отпирания замка.
        Такие алгоритмы в виде паролей могут быть спрятаны в сундуках или в качестве элемента декора.`;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP15.png`;
        f = `piccher/pay/paypaUP14.png`;
        break;
      case 7:
        if (checc == "en") {
          a = `Processor of components into batteries.
        <br>  Such devices were popular long before the invention of the master bot, they convert a complex component into a capsule for storing energy, that is, into a battery.
        <br>  The principle of operation is to disassemble the components into their component parts, because they can make almost any object, if there is enough engineering and technical knowledge and, of course, suitable equipment.
        <br>  The craft bot has completely replaced such complex and dimensional installations in different laboratories. 
        To start such a device, it is necessary to use an elevator to load the workspace components and to start the installation by placing it in a special area next to the table.
        Note If the device does not work correctly, you can use one component several times to create batteries.`;
          b = `Old FT12 terminal
        <br>  To protect the data, a locking system is used with a secret object, which must be placed in the holes on the right side.
        Each terminal has its own key item.
        <br>  Before placing the items, they must be separated in the inventory and inserted one item at a time into the box. 
        Each recorded message has its own weight, for example, if you place one item in any cell, only the first entry will be opened, the rest of the data will be accessed with the addition of the following items.The second entry is two items, the next 3 and so on.`;
        } else {
          a = `Переработчик компонентов в батареи.
        <br>  Такие аппараты были популярны задолго до изобретения бота мастера, они преобразовывают сложный компонент в капсулу для хранения энергии, то есть в батарейку.
        <br>  Принцип работы заключается в разборе на составные части компонентов, ведь и них можно сделать практически любой предмет, если хватит инженерных и технических знаний и, конечно же, подходящего оборудования.
        <br>  Крафт бот полностью заменил такие сложные и габаритные установки в разных лабораториях. 
        Для запуска такого устройства необходимо использовать лифт для загрузки компонентов рабочую область и для запуска установки поставив его в специальную область, рядом со столом.
        Примечание если, устройство работает не правильно, вы можете использовать один компонент по несколько раз, для создания батареек.`;
          b = `Старый терминал FT12
        <br>  Для защиты данных используется система блокировки с помощью секретного предмета, который необходимо разместить в отверстиях справа.
        У каждого терминала есть свой ключ предмет.
        Перед размещением предметов их необходимо разделить в инвентаре и вставлять по одному предмету в ячейку. 
        <br>  Каждое записанное сообщение имеет свой вес, например если в любую ячейку поместить один предмет, то будет открываться только первая запись, к остальным данным доступ будет предоставляться с добавлением следующих предметов.Вторая запись два предмета, следующая 3 и т.д.`;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP14.png`;
        f = `piccher/pay/paypaUP14.png`;
        break;
      case 8:
        if (checc == "en") {
          a = ` Items in the mechanics inventory. Each mechanic has a special backpack with the function of scaling and storing items in it. 
            <br>  Due to the complexity of arranging items, the base backpack can hold only 30 different items, or rather cells for these items, each such cell is able to hold only a certain number of items, depending on the complexity of their storage. For example, large objects are stored only one at a time, and small blocks up to 256. This aspect must be taken into account when planning a trip. Also with a quick access belt that can hold up to 10 items.
            <br><img src="piccher/pay/sens.webp" class="pictin" > If a mechanic wants to just get rid of an item, he can just drag it out of the inventory. The discarded item is in a phantom state, in this form stored objects in your inventory. 
            <br>  This shape of the object is preserved due to the continued impact of your backpack on it, in this state the object weighs nothing, but is able to be directed by gravitational forces and distort the light streams passing through its volume. The phantom object is ability to interrupt light rays is very useful for activating some small sensors and sensors that can respond to mechanics.`;
          b = ` Modifications for Rafik. <br>  There are two types of modifications for rafiq, external and internal. The external ones need to be found and connected, the internal ones need to be unlocked using complex commands. There are 6 modifications for the Rafiq of the second version, they are supported by the third version. As you know, the functionality of modifications is auxiliary and is designed to simplify interaction with it, they are also often called auxiliary skills. <br>  Skills are quite expensive items or programs that are often kept behind closed doors from theft or breakage. <br>  Any beginner without special skills can install an improvement.`;
        } else {
          a = ` Предметы в инвентаре механика. Каждый механик имеет специальный рюкзак с функцией масштабирования и сохранения предметов в нём. 
            <br>  Из-за сложности компоновки предметов, базовый рюкзак способен вмещать только 30 разных предметов, а точнее ячеек под эти предметы, каждая такая ячейка способна вмещать только определённое количество предметов, зависящее от сложности их хранении. Например, крупные объекты хранятся только по одному, а маленькие блоки до 256. Этот аспект необходимо учитывать при планировании путешествия. Также и с ремнём быстрого доступа, который вмещает до 10 предметов.
            <br> <img src="piccher/pay/sens.webp" class="pictin" > Если механику захочется просто избавиться от предмета, то он может просто перетащить его за границы инвентаря. Выброшенный предмет находится в состоянии фантома, в такой форме хранятся предметы в вашем инвентаре. 
            <br>  Данная форма предмета сохраняется из-за продолжающегося воздействия вашего рюкзака на него, в таком состоянии предмет ничего не весит, но способен направляться гравитационными силами и искажать световые потоки, проходящие через его объём. Способность фантомного предмета прерывать лучи света, очень полезно для активации некоторых маленьких датчиков и сенсоров, которые могут реагировать на механиков.`;
          b = ` Модификации для Рафика. <br>  Модификации для рафика бывают двух видов, внешние и внутренние. Внешние надо найти и подключить, внутренние разблокировать с помощью сложных команд. Для Рафика второй версии существует 6 модификаций, они поддерживаются третьей версией. Как известно, функционал модификаций является вспомогательным и предназначен для упрощения взаимодействия с ним, также их часто наывают вспомогательными умениями. <br>  Умения это довольно дорогие предметы или программы, которые часто хранят за закрытыми дверями от кражи или поломки. <br>  Установить улучшение может любой новичок без особых навыков.`;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP14.png`;
        f = `piccher/pay/paypaUP14.png`;
        break;
      case 9:
        if (checc == "en") {
          a = ``;
          b = ` Sound lock
            A system based on the reproduction of the order of sound pulses. <br> Quite simple and 
            a reliable way to protect something. Besides the fact that you need to know the melody containing up to 6 
            It is also necessary to observe the time between the pulses and their duration.
            This security system does not have such popularity and practicality as usual 
            push-button codes and is not common outside of military complexes.  
            <br>  The advantage of this method of opening the lock is that a person trying to crack such a 
            the castle, just get tired of his noise and he himself will want to get away from him. The truth is the person who 
            knows the password, too, will change his mind to open it because of the inaccuracy and inconvenience of entering. 
            <br>  To open the lock, you need to press a single button to the beat of the melody.`;
        } else {
          a = ``;
          b = ` Звуковой замок
            Система основанная на воспроизведении порядка звуковых импульсов. <br>  Довольно простой и 
            надёжный способ защиты чего либо. Помимо того, что нужно знать мелодию содержащую до 6 
            импульсов, также необходимо соблюсти время между импульсами и их продолжительность.
            Данная система безопасности не имеет такой популярности и практичности как обычные 
            кнопочные коды и не распространена за пределами военных комплексов.  
            <br>  Преимуществом такого метода открытия замка в том, что человеку пытающемуся взломать такой 
            замок, просто надоест его шум и он сам захочет уйти от него подальше. Правда человек, который 
            знает пароль, тоже передумает открывать его из-за некорректности и неудобства ввода. 
            <br>  Для открытия замка необходимо нажимать одну единственную кнопку в такт мелодии.`;
        }
        c = `piccher/pay/paypDaf.webp`;
        d = `piccher/pay/paypDaf.webp`;
        e = `piccher/pay/paypaUP14.png`;
        f = `piccher/pay/paypaUP14.png`;
        break;
      default:
        a = `-(oOo)/`;
        b = `-(o_o)/`;
        c = ``;
        d = ``;
        e = ``;
        f = ``;
        break;
    }


    if (str2 != 0) {
      document.getElementById("List2_2n+1").innerHTML = 2 * str2;
      document.getElementById("secPict").style.display = 'none';
    } else {
      document.getElementById("List2_2n+1").innerHTML = "";
      document.getElementById("secPict").style.display = '';
      Guide_pic();
    }

    document.getElementById("List2_2n+2").innerHTML = 2 * str2 + 1;
    document.getElementById("columT2_1").innerHTML = a;
    document.getElementById("columT2_2").innerHTML = b;
    document.getElementById("columT2_3").src = c;
    document.getElementById("columT2_4").src = d;
    document.getElementById("columT2_5").src = e;
    document.getElementById("columT2_6").src = f;

    gh = 2 * str2 + 1;
    if (booolSA_G[gh] == true) {
      document.getElementById("sec3").style.display = '';
    } else {
      document.getElementById("sec3").style.display = 'none';
    }

    gh = 2 * str2;
    if (booolSA_G[gh] == true) {
      document.getElementById("sec4").style.display = '';
    } else {
      document.getElementById("sec4").style.display = 'none';
    }
  }

  function HColor() {
    if (coling) {
      coling = false;
      document.getElementById("rgbC1").style.display = 'none';
      document.getElementById("rgbC2").style.display = 'none';
    } else {
      coling = true;
      document.getElementById("rgbC1").style.display = '';
      document.getElementById("rgbC2").style.display = '';
    }
  }

  function HC1() {
    let a = document.getElementById("Ytu").value;
    a = a + `1`;
    document.getElementById("Ytu").value = a;
    if (a.length > 8) {
      scr1SA();
    }
  }
  function HC2() {
    let a = document.getElementById("Ytu").value;
    a = a + `2`;
    document.getElementById("Ytu").value = a;
    if (a.length > 8) {
      scr1SA();
    }
  }
  function HC3() {
    let a = document.getElementById("Ytu").value;
    a = a + `3`;
    document.getElementById("Ytu").value = a;
    if (a.length > 8) {
      scr1SA();
    }
  }
  function HC4() {
    let a = document.getElementById("Ytu").value;
    a = a + `4`;
    document.getElementById("Ytu").value = a;
    if (a.length > 8) {
      scr1SA();
    }
  }
  function HC5() {
    let a = document.getElementById("Ytu").value;
    a = a + `5`;
    document.getElementById("Ytu").value = a;
    if (a.length > 8) {
      scr1SA();
    }
  }
  function HC6() {
    let a = document.getElementById("Ytu").value;
    a = a + `6`;
    document.getElementById("Ytu").value = a;
    if (a.length > 8) {
      scr1SA();
    }
  }
  function HC7() {
    let a = document.getElementById("Ytu").value;
    a = a + `7`;
    document.getElementById("Ytu").value = a;
    if (a.length > 8) {
      scr1SA();
    }
  }
  function HC8() {
    let a = document.getElementById("Ytu").value;
    a = a + `8`;
    document.getElementById("Ytu").value = a;
    if (a.length > 8) {
      scr1SA();
    }
  }
  function delling() {
    document.getElementById("col1_1").style.background = `white`;
    document.getElementById("col2_1").style.background = `white`;
    document.getElementById("col3_1").style.background = `white`;
    document.getElementById("col4_1").style.background = `white`;
    document.getElementById("col5_1").style.background = `white`;
    document.getElementById("col6_1").style.background = `white`;
    document.getElementById("col7_1").style.background = `white`;
    document.getElementById("col8_1").style.background = `white`;
    document.getElementById("col9_1").style.background = `white`;
    col0 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  function HC9() {
    let a = document.getElementById("Ytu").value;
    a = a + `9`;
    document.getElementById("Ytu").value = a;
    if (a.length > 8) {
      scr1SA();
    }
  }
  function HC0() {
    let a = document.getElementById("Ytu").value;
    a = a + `0`;
    document.getElementById("Ytu").value = a;
    if (a.length > 8) {
      scr1SA();
    }
  }

  function colP(NC) {
    switch (NC) {
      case 1:
        ci = `red`;
        break;
      case 2:
        ci = `blue`;
        break;
      case 3:
        ci = `#00ff00`;
        break;
      case 4:
        ci = `yellow`;
        break;
      case 5:
        ci = `#686868`;
        break;
      case 6:
        ci = `#ff00fb`;
        break;
      case 7:
        ci = `#00fffb`;
        break;
      case 8:
        ci = `#ff8400`;
        break;
      case 9:
        ci = `black`;
        break;
      default:
        ci = `white`;
    }
    document.getElementById("Ytu").value = col0;
    return ci;
  }

  function colP1() {
    col0[0]++;
    if (col0[0] > 9) {
      col0[0] = 0;
    }

    ci = colP(col0[0]);
    document.getElementById("col1_1").style.background = ci;
  }
  function colP2() {
    col0[1]++;
    if (col0[1] > 9) {
      col0[1] = 0;
    }

    ci = colP(col0[1]);
    document.getElementById("col2_1").style.background = ci;
  }
  function colP3() {
    col0[2]++;
    if (col0[2] > 9) {
      col0[2] = 0;
    }

    ci = colP(col0[2]);
    document.getElementById("col3_1").style.background = ci;
  }
  function colP4() {
    col0[3]++;
    if (col0[3] > 9) {
      col0[3] = 0;
    }

    ci = colP(col0[3]);
    document.getElementById("col4_1").style.background = ci;
  }
  function colP5() {
    col0[4]++;
    if (col0[4] > 9) {
      col0[4] = 0;
    }

    ci = colP(col0[4]);
    document.getElementById("col5_1").style.background = ci;
  }
  function colP6() {
    col0[5]++;
    if (col0[5] > 9) {
      col0[5] = 0;
    }

    ci = colP(col0[5]);
    document.getElementById("col6_1").style.background = ci;
  }
  function colP7() {
    col0[6]++;
    if (col0[6] > 9) {
      col0[6] = 0;
    }

    ci = colP(col0[6]);
    document.getElementById("col7_1").style.background = ci;
  }

  // if (time.getMonth() > 4) {
  //   if (time.getDate() > 6) {
  //     window.location = "https://scrappiy.github.io/MessageADS/";
  //     localStorage.clear();
  //     sessionStorage.clear();
  //   }
  // }

  function colP8() {
    col0[7]++;
    if (col0[7] > 9) {
      col0[7] = 0;
    }

    ci = colP(col0[7]);
    document.getElementById("col8_1").style.background = ci;
  }

  function colP9() {
    col0[8]++;
    if (col0[8] > 9) {
      col0[8] = 0;
    }

    ci = colP(col0[8]);
    document.getElementById("col9_1").style.background = ci;
  }

  function Mont(b_mont) {
    let a = document.getElementById("monol").innerHTML;
    if (checc == "ru") {
      if (ci == ``) {
        ci = `Дункан`;
      }
    } else {
      if (ci == ``) {
        ci = `Duncan`;
      }
    }

    b_mont = "< " + ci + " > :" + b_mont;
    a = a + b_mont;
    a = a + `<br> ______________________________________________ `;
    document.getElementById("monol").innerHTML = a;
    ci = ``;
  }

  function scr1SA() {
    //lang();
    let a = document.getElementById("Ytu").value;
    let au = false, ta = false, mont = false;
    let b_au = "", b_ta = "", b_mont = "";
    let pasvord = "";
    ci = "";

    switch (a) {
      case "0,1,0,4,9,2,0,3,0":
      case "010492030":
        au = true;
        ta = true;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/rafic-en.mp3`;
          b_ta = `The basic text of the greeting of the portable handbook Rafik 3.`;
          b_mont = `An interesting and very expensive book for me, it came to me from my grandfather, who was the chief engineer of the dwarf colony management department on the planet Casper, who received it from an unknown addressee during his work. He told me that this device was stolen from his great-grandfather Balenvur Muntagoris many years ago. The main object that provides work on deciphering different types of information is called the "Eye of Angnor", an artifact left after the war with the giants, able to look into the fabric of time. It's a pity I didn't understand exactly how this complex device works, but it may be useful to me.`;
        } else {
          b_au = `audio/ru/rafic-ru.mp3`;
          b_ta = `Базовый текст приветствия портативного справочника Рафик 3.`;
          b_mont = `Интересная и очень дорогая для меня книга, она досталась мне от моего деда, который был главным инженером ведомства управления колонии дворфов на планете Каспер, получившего её от неизвестного адресата, во время своей работы. Он рассказывал мне, что это устройство много лет назад, было украдено у его прадеда Баленвура Мунтагориса. Главный предмет, обеспечивающий работу по расшифровке разного типа информации называется " Глаз Ангнора", артефакт оставшийся после войны с великанами, способный заглянуть в ткань времени. Жаль я не понял как именно работает это сложное устройство, но оно может мне пригодиться.`;
        }
        break;
      case "17862":
        au = true;
        ta = false;
        mont = false;
        if (checc == "en") {
          b_au = `audio/en/vnuk.mp3`;
          b_ta = ``;
          b_mont = ``;
        } else {
          b_au = `audio/ru/vnuk.mp3`;
          b_ta = ``;
          b_mont = ``;
        }
        break;
      case "1,1,2,1,0,1,8,1,8":
      case "112101818":
        au = true;
        ta = false;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/signs.mp3`;
          b_ta = ``;
          b_mont = `It's strange, the alarm system around the perimeter of the house activated itself, I haven't used it for a long time, I need to turn it off, but I forgot where the 5 buttons are, and also take a couple of cans of gasoline from the garage for my car.`;
        } else {
          b_au = `audio/ru/signs.mp3`;
          b_ta = ``;
          b_mont = `Странно, сигнализация по периметру дома активировалась сама, давно я ей не пользовался, надо её отключить, но что-то забыл где находятся 5 кнопок, а также взять из гаража пару канистр с бензином для моей машины.`;
        }

        booolSA_G[2] = true;
        booolSA_G[3] = true;
        booolSA_G[5] = true;
        booolSA_G[8] = true;
        booolSA_G[9] = true;
        booolSA_G[10] = true;
        booolSA_G[11] = true;
        booolSA_G[13] = true;
        break;
      case "8,0,6,5,0,0,3,0,8":
      case "806500308":
        au = true;
        ta = false;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/mechta.mp3`;
          b_ta = ``;
          b_mont = `If everything goes according to plan, then by lunchtime, I will arrive at the factory. When I complete Karas's assignment, I will definitely ask for a promotion and transfer to the industrial equipment building, I have had enough of unscheduled trips to remote parts of the continent and all sorts of incomprehensible tasks.`;
        } else {
          b_au = `audio/ru/mechta.mp3`;
          b_ta = ``;
          b_mont = `Если всё пойдёт по плану, то уже к обеду, я приеду на завод. Когда выполню поручение Корася, я точно попрошу повышения и переведусь в корпус промышленного оборудования, хватит с меня внеплановых поездок в отдалённые концы континента и всяких непонятных заданий.`;
        }
        break;
      case "15151530":
        au = true;
        ta = false;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/pir.mp3`;
          b_ta = ``;
          b_mont = `Apple pies! I don't even know what is better to do, to fulfill the boss's instructions or to wait for a demotion, eh, I have to go to the factory!`;
        } else {
          b_au = `audio/ru/pir.mp3`;
          b_ta = ``;
          b_mont = `Яблочные пироги! Даже не знаю, что лучше сделать, выполнить поручение босса или ждать понижение в должности, эх, придётся ехать на завод!`;
        }
        break;
      case "6,6,6,2,8,6,6,2,6":
      case "666286626":
        au = true;
        ta = false;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/most.mp3`;
          b_ta = ``;
          b_mont = `The infection!!! the road was closed, it seems only yesterday the bridge was opened. Somewhere here was a key component and a spray gun to it, although I remember for sure that I have the same remotes stored in my basement.`;
        } else {
          b_au = `audio/ru/most.mp3`;
          b_ta = ``;
          b_mont = `Зараза!!! дорогу закрыли, вроде только вчера мост был открыт. Где-то здесь лежал ключ-компонент и краскопульт к нему, хотяя точно помню, что у меня в подвале хранятся такие же пульты.`;
        }
        break;
      case "8,3,8,8,3,8,2,2,2":
      case "838838222":
        au = true;
        ta = false;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/tuto.mp3`;
          b_ta = ``;
          b_mont = `It's strange, it looks like I'm wandering through the old dwarf ruins of Skul'daf. The last thing I remember is coming home tired. It's probably all my dream. It wouldn't hurt for me to remember a little how and what the engineers of the military gnome division of space do before returning to work. In principle, you can skip the first part and go to the second part, as far as I remember there were gates in these ruins, and at the end of the corridor there is a button that opens them if I get bored.`;
        } else {
          b_au = `audio/ru/tuto.mp3`;
          b_ta = ``;
          b_mont = `Странно, похоже, что я брожу по старым гномьим руинам Скул’Дафа. Последнее, что я помню, это как я уставший приехал домой. Наверное, это всё мой сон. Мне бы не помешало немного вспомнить, как и чем занимаются инженеры военного гномьего подразделения космоса перед возвращением на работу. В принципе можно пропустить первую часть и перейти ко второй части, насколько я помню в этих руинах были ворота, а в конце коридора есть кнопка открывающая их, если мне станет скучно.`;
        }
        break;
      case "6,0,1,0,0,0,5,0,3":
      case "601000503":
        au = true;
        ta = false;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/lesz1.mp3`;
          b_ta = ``;
          b_mont = `At the end of the next tunnel there will be a Prinfog military camp, where I was trained for admission to MGDS, I hope the commander still remembers me and will help me get to the factory.`;
        } else {
          b_au = `audio/ru/lesz1.mp3`;
          b_ta = ``;
          b_mont = `В конце следующего туннеля будет военный городок Принфог, там я проходил обучение для поступления ВГПК, надеюсь, командир ещё помнит меня и поможет добраться до завода.`;
        }
        break;
      case "1,1,1,1,0,0,1,0,0":
      case "111100100":
        au = true;
        ta = false;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/vorota.mp3`;
          b_ta = ``;
          b_mont = `Well, just look at it, and here the gates are locked. You can, of course, climb over the fence while no one sees, but there is a possibility of triggering protection from uninvited guests. There should definitely be a control point of the forest outpost and the main gate somewhere underground, it remains only to get there and find it.`;
        } else {
          b_au = `audio/ru/vorota.mp3`;
          b_ta = ``;
          b_mont = `Ну, вы только посмотрите, и здесь ворота заперты. Можно, конечно же, перелезть через забор пока никто не видит, но есть вероятность срабатывания защиты от не прошенных гостей. Под землёй точно где-то должен быть пункт управления лесной заставы и главных ворот, осталось только туда проникнуть и найти его. `;
        }
        break;
      case "0,2,1,7,0,0,1,7,7":
      case "021700177":
        au = true;
        ta = false;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/nobval.mp3`;
          b_ta = ``;
          b_mont = `Eh, no one has been here for a long time, probably an earthquake damaged the bridge at my house and got here, it's good that there were no people here. We need to get out as soon as possible and open those gates.`;
        } else {
          b_au = `audio/ru/nobval.mp3`;
          b_ta = ``;
          b_mont = `Эх, давно здесь никого не было, наверное, землетрясение повредившее мост у моего дома и сюда добралось, хорошо, что здесь не было людей. Надо поскорей выбраться наружу и открыть те ворота.`;
        }
        break;
      case "9,9,2,9,0,0,2,0,2":
      case "992900202":
        au = true;
        ta = false;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/prinfog.mp3`;
          b_ta = ``;
          b_mont = `Old Prinfog, -I haven't been here for a long time, all the same closed gates, and a lock, the combination of which no one knows and you need to pick up yourself. - I missed this place!`;
        } else {
          b_au = `audio/ru/prinfog.mp3`;
          b_ta = ``;
          b_mont = `Старый Принфог,-давно я здесь не был, всё те же закрытые ворота, и замок, комбинацию от которого никто не знает и нужно подбирать самому. -я скучал по этому месту! `;
        }
        break;
      case "1,1,1,3,8,1,5,5,5":
      case "111381555":
        au = true;
        ta = false;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/pustprinfog.mp3`;
          b_ta = ``;
          b_mont = `Hmm, the place looks abandoned, probably the military post was closed due to the opening of the northern outpost in Verona. I hope the railway tracks have been preserved and I will be able to get to the factory in time.`;
        } else {
          b_au = `audio/ru/pustprinfog.mp3`;
          b_ta = ``;
          b_mont = `Хм, место выглядит заброшенным, наверное, военный пункт закрыли в связи с открытием северного аванпоста в Вероне. Надеюсь, железнодорожные пути сохранились и мне удастся вовремя добраться до завода.`;
        }
        break;
      case "4,4,4,0,0,0,4,0,4":
      case "444000404":
        au = true;
        ta = false;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/st16p.mp3`;
          b_ta = ``;
          b_mont = `The landslide blocked my path, I need to find another one. I remember how the engineers from the sixteenth station boasted that they had learned to teleport a couple of cows to 24 meters. I wonder if the portal below is still in working order. To begin with, it's worth going down there.`;
        } else {
          b_au = `audio/ru/st16p.mp3`;
          b_ta = ``;
          b_mont = `Обвал преградил мне путь, надо найти другой. Помню, как инженеры из шестнадцатой станции хвастались, что научились телепортировать пару коров на 24 метра. Интересно остался ли портал внизу в рабочем состоянии. Для начала стоит туда спуститься.`;
        }
        break;
      case "4575751":
        au = true;
        ta = true;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/dn17L.mp3`;
          b_ta = `Diary of the head of the laboratory of laser optical devices K.R. Nitkov`;
          b_mont = `The diary of the head of the laboratory at station 17 says that they were able to surpass the result of the engineers at station 16, we need to find a way to get there.`;
        } else {
          b_au = `audio/ru/dn17L.mp3`;
          b_ta = `Дневник заведующего лабораторией лазерных оптических приборов К.Р. Ниткова`;
          b_mont = `В дневнике заведующего лабораторией в станции 17 сказано, что они смогли превзойти результат инженеров станции 16, надо найти способ туда попасть.`;
        }
        break;
      case "75916339":
        au = true;
        ta = true;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/del1.mp3`;
          b_ta = `Letter to the head of MGDS - General N.S. Luchkov`;
          b_mont = `The note says that the progress in creating a working portal to the MGDS case has been completely canceled due to the loss of an important substance that is necessary for focusing the beam. The staff thinks that the presence of the Devil commander in the working area of the portal during the pumping of some crystal affected his cognitive abilities and his presence at the station is dangerous for the health of the staff. They also think that he hid the liquid to focus the crystal`;
        } else {
          b_au = `audio/ru/del1.mp3`;
          b_ta = `Письмо руководителю ВГПК - генералу Н.С. Лучкову`;
          b_mont = `В письме сказано, что прогресс в создании рабочего портала до корпуса ВГПК полностью аннулирован из-за потери важной субстанции, которая необходима для фокусировки луча. Персонал думает, что нахождение командира Дэлвила в рабочей области портала во время прокачки какого-то кристалла, повлияло на его когнитивные способности и его нахождение на станции опасно для здоровья персонала. Также они думают, что это он спрятал жидкость для фокусировки кристалла.`;
        }
        break;
      case "1562411":
        au = true;
        ta = true;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/del2.mp3`;
          b_ta = `Decree on the temporary suspension of all works in the complex 17`;
          b_mont = `Delvil broke the tightness of the pipe of the portal's vacuum chamber, as a result of which all work was suspended to comply with safety rules, and also for some reason opened the cooling system valves, as a result of which the entire building was soaked with some kind of caustic gas, because of which all personnel were evacuated and left to ventilate the station for a month. The entry also says how to activate the portal in the purge mode and I will be able to use it if I just bring energy to it and find a focusing fluid. Let the station staff deal with the consequences of my actions when they come from an unplanned vacation.`;
        } else {
          b_au = `audio/ru/del2.mp3`;
          b_ta = `Указ на временную остановку всех работ в комплексе 17`;
          b_mont = `Дэлвил нарушил герметичность трубы вакуумной камеры портала, вследствие чего все работы были приостановлены по соблюдению правил безопасности, а также зачем-то открыл вентили системы охлаждения, вследствие чего всё здание пропиталось каким-то едким газом, из-за которого весь персонал эвакуировали и оставили проветриваться станцию на месяц. Также в записи сказано, как активировать портал в режиме продува и у меня будет возможность использовать его, если просто подвести к нему энергию и найти фокусирующую жидкость. С последствиями моих действий пусть разбирается персонал станции, когда придет из незапланированного отпуска.`;
        }
        break;
      case "0,6,6,0,0,6,6,0,6":
      case "066006606":
        au = true;
        ta = false;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/vvs.mp3`;
          b_ta = ``;
          b_mont = `When I was climbing the stairs, I noticed a destroyed separate tower in the window, presumably for fuel purification. It's probably worth looking into it, but before that it's better to put important things in the chest so as not to lose them.`;
        } else {
          b_au = `audio/ru/vvs.mp3`;
          b_ta = ``;
          b_mont = `Когда я поднимался по лестнице, то заметил в окне разрушенную отдельную башню, предположительно для очистки топлива. Наверное, стоит заглянуть в неё, но перед этим лучше сложить в сундук важные вещи, чтобы не потерять их.`;
        }
        break;
      case "8,2,8,5,1,0,5,5,5":
      case "828510555":
        au = false;
        ta = true;
        mont = false;
        booolSA_G[3] = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `<br> <img src="piccher/pay/conn.webp" class="pictin" > Connector device. The device is a compact object, conveniently lying in the hand. Designed to connect multiple devices to each other. The interactive elements of the environment will have color dots if you hold the device in your hand.
        <br>  To connect one part to another, click and drag one of the points and release when hovering over another point. If successful, a line should appear between the two pieces showing that they are connected. The line will also have small black arrows on it, indicating which part will activate the other. Arrow keys indicate the direction of action. <br>  Buttons, bearings, sensors, lamps, seats and some decorative elements have a unidirectional connection. Logical closures and timers are bidirectional and it is important from which element the connection is made.
           <br>  You can also disconnect connections by grabbing the object tag and dragging it aside.
           <br>  Please note that only parts belonging to a single structure may be joined. You can check this by dragging connections; all invalid connection points will disappear.
            `;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `<br> <img src="piccher/pay/conn.webp" class="pictin" > Устройство соединитель.<br> Устройство представляет собой компактный предмет, удобно лежащий в руке. Предназначен для соединения нескольких устройств между собой. На интерактивных элементах окружения появятся цветные точки, если взять устройство в руку.
          Чтобы соединить одну часть с другой, щелкните и перетащите одну из точек и отпустите при зависании над другой точкой. <br>   Если сделано успешно, между двумя частями должна появиться линия, показывающая, что они связаны. Линия также будет иметь небольшие черные стрелки на нем, указывая, какая часть активирует другую. Стрелки указывают направления воздействия. Кнопки, подшипники, сенсоры, лампы, сиденья и некоторые элементы декора имеют однонаправленное соединение. <br>  Логические затворы и таймеры имеют двунаправленость и важно, от какого элемента ведётся подключение.
          <br>  Также можно разъединять соединения, захватив метку обьекта и перетащив её в сторону.
         Обратите внимание, что могут соединяться только части, принадлежащие одной единой конструкции. <br>  Вы можете проверить это при перетаскивании соединения; все недопустимые точки соединения исчезнут.
            `;
          b_mont = ``;
        }
        break;
      case "8,7,1,7,8,7,3,7,1":
      case "871787371":
        au = false;
        ta = true;
        mont = false;
        booolSA_G[2] = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `<br> <img src="piccher/pay/lift.webp" class="pictin" > The elevator is an essential object that every mechanic should have at hand. There are two modifications of the elevator.<br>  1)-is placed only on a certain surface and attached to it.<br>  2)An ordinary elevator - placed on any solid surface, is not placed on suspended surfaces, held on bearings, pistons or springs.
        <br>  Each elevator is based on an unbreakable connection with its owner, providing remote control of the lift at a distance from the owner. 
          Recent versions of the elevator are equipped with a subquantum stabilizer, which allows you to instantly teleport the delivered elevator to the required point.
          <br>  The lift measures 4x4x2 when placed. The lift can be extended by one unit, up to 22 units in height. Despite its size and expansion, the lift can pass through any static object.
           Any modification of the elevator can be put objects or climbed himself on it for climbing on the hill.
           Because of the connection between the object and its owner, the lift cannot be thrown out of the inventory, only deliberately put it in the chest.`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `<br> <img src="piccher/pay/lift.webp" class="pictin" > Лифт – неотъемлемый предмет, который должен быть у каждого механика под рукой. Существует две модификации лифтa.<br>  1)-ставится только на определённую поверхность и привязывается к ней.<br>  2)обычный лифт – ставящийся на любую цельную поверхность, не ставится на подвесные поверхности, держащиеся на подшипниках, поршнях или пружинах.
        <br>  В основе каждого лифта лежит нерушимая связь со своим владельцем, обеспечивающая дистанционный контроль подъёмника на расстоянии от владельца. 
        <br>  Последние версии лифта оснащены субквантовым стабилизатором, позволяющий мгновенно телепортировать поставленный лифт в требуемую точку.
        Подъемник имеет размеры 4x4x2 при размещении. Подъемник может быть расширен на одну единицу, до 22 единиц в высоту. Несмотря на размеры и расширение, Лифт может пройти через любой статичный объект.
        <br>  На любую модификацию лифта можно ставить предметы или забираться самому на него для взбирания на возвышенности.
        Из-за наличия связи между предметом и его владельцем лифт нельзя выбросить из инвентаря, только намеренно убрать его в сундук.
        `;
          b_mont = ``;
        }
        break;
      case "8,2,8,1,1,1,3,1,8":
      case "828111318":
        au = false;
        ta = true;
        mont = false;
        booolSA_G[17] = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `<br> <img src="piccher/pay/sens.webp" class="pictin" > Items in the mechanics inventory. Each mechanic has a special backpack with the function of scaling and storing items in it. 
        <br>  Due to the complexity of arranging items, the base backpack can hold only 30 different items, or rather cells for these items, each such cell is able to hold only a certain number of items, depending on the complexity of their storage. For example, large objects are stored only one at a time, and small blocks up to 256. This aspect must be taken into account when planning a trip. Also with a quick access belt that can hold up to 10 items.
        <br>  If a mechanic wants to just get rid of an item, he can just drag it out of the inventory. The discarded item is in a phantom state, in this form stored objects in your inventory. 
        <br>  This shape of the object is preserved due to the continued impact of your backpack on it, in this state the object weighs nothing, but is able to be directed by gravitational forces and distort the light streams passing through its volume. The phantom object is ability to interrupt light rays is very useful for activating some small sensors and sensors that can respond to mechanics.
        `;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `<br> <img src="piccher/pay/sens.webp" class="pictin" > Предметы в инвентаре механика. Каждый механик имеет специальный рюкзак с функцией масштабирования и сохранения предметов в нём. 
        <br>  Из-за сложности компоновки предметов, базовый рюкзак способен вмещать только 30 разных предметов, а точнее ячеек под эти предметы, каждая такая ячейка способна вмещать только определённое количество предметов, зависящее от сложности их хранении. Например, крупные объекты хранятся только по одному, а маленькие блоки до 256. Этот аспект необходимо учитывать при планировании путешествия. Также и с ремнём быстрого доступа, который вмещает до 10 предметов.
        <br>  Если механику захочется просто избавиться от предмета, то он может просто перетащить его за границы инвентаря. Выброшенный предмет находится в состоянии фантома, в такой форме хранятся предметы в вашем инвентаре. 
        <br>  Данная форма предмета сохраняется из-за продолжающегося воздействия вашего рюкзака на него, в таком состоянии предмет ничего не весит, но способен направляться гравитационными силами и искажать световые потоки, проходящие через его объём. Способность фантомного предмета прерывать лучи света, очень полезно для активации некоторых маленьких датчиков и сенсоров, которые могут реагировать на механиков.
        `;
          b_mont = ``;
        }
        break;
      case "2,2,8,1,8,2,8,1,1":
      case "228182811":
        au = false;
        ta = true;
        mont = false;
        booolSA_G[9] = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `<br> <img src="piccher/pay/parol.webp" class="pictin" > Locks and passwords. <br>  Often to store something important, you need to ensure the safety of this item or room with panels with passwords. Usually, passwords can be divided into numerical and color passwords. In order not to remember such passwords often hide them under some objects or interior decor.
        <br>   For example, in the form of colors or the number of objects in chests, where the sequence is read from left to right or from top to bottom.
        <br>  The number of objects can refer to both the order of pressing a button and the number of clicks.
        Digital passwords use items that cannot exist themselves, such as bearings, pistons, and springs.
        <br>  Numeric, or as numeric, passwords are entered into certain panels with gray buttons. Where 1 is the top left corner, 9 is the bottom right and 0 is the separate button at the bottom of the middle.
        <br>  In most cases, these panels use two more buttons: enter or approve the light green color and cancel or reset the dark red color.
        It is necessary to enter not too quickly and without sharp push of buttons otherwise the signal will freeze.
        `;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `<br> <img src="piccher/pay/parol.webp" class="pictin" > Замки и пароли. <br>  Часто чтобы хранить что-то важное, необходимо обеспечить сохранность этого предмета или помещения с помощью панелей с паролями. Обычно пароли можно разделить на числовые и цветовые. Чтобы не запоминать такие пароль их часто скрывают под какие-то предметы или интерьер декора.
        <br>  Например, в виде цветов или количества предметов в сундуках, где последовательность считывается слева направо или сверху вниз.
        <br>  Количество предметов может означать как порядок нажатия на определённую кнопку, так и количество нажатий.
        <br>  В качестве цифровых паролей используются предметы которые сами не могут существовать, такие как подшипники, поршни и пружины.
        Числовые, или как их ещё называют цифровые, пароли вводятся в определённые панели с кнопками серого цвета. Где 1- верхний левый угол, 9 –правый нижний, а 0 – отдельная кнопка внизу посередине.
        <br>  В большинстве случаев в таких панелях используются ещё две кнопки: ввести или одобрить светло-зелёный цвет и отменить или сбросить темно-красный цвет.
        Вводить необходимо не слишком быстро и без резких нажатий на кнопки иначе сигнал зависнет.
        `;
          b_mont = ``;
        }
        break;
      case "2,4,6,2,2,2,9,2,2":
      case "246222922":
        au = false;
        ta = true;
        mont = false;
        booolSA_G[8] = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `<br> <img src="piccher/pay/pred.webp" class="pictin" > Collected items.<br>  These include gasoline canisters, batteries, water bottles, paint cylinders, glow sticks and components. The items used are: gasoline, batteries, water, and also refers to potatoes instead of a component. In normal circumstances, the potato bucket cannot be taken so easily, and the components do not have their own container. The container with water can not be used either.
        There is always a button on the containers or next to them to use their contents.
        <br>  Sometimes you need to load several items into the container, but not all items will be used. If, for example, the generator only needs one battery, and you put more, it only uses one, and the rest will stay in it. In such cases, you need to take the remaining batteries with you.
        <br>  Components are special items that can be found in offices or within warehouses, which can be used as painting items with further input of color passwords. By putting them on the elevator and removing it so that all sensors could see the component, or rather its color.
        `;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `<br> <img src="piccher/pay/pred.webp" class="pictin" > Собираемые предметы. <br>  К ним относятся канистры с бензином, батарейки, бутылки с водой, баллоны с краской, светящиеся палочки и компоненты. К используемым предметам относятся: бензин, батарейки, вода, а также относится картошка вместо компонента. В обычных условиях ведро картошки нельзя так просто взять, а компоненты не имеют своего контейнера. Контейнер с водой тоже использовать нельзя.
        На контейнерах или рядом с ними всегда есть кнопка, с помощью которой осуществляется использование его содержимого.
        <br>  Иногда в контейнер нужно загрузить несколько единиц предметов, но не все предметы будут использованы. Если на пример генератору нужна только одна батарейка, а вы положили больше, то он использует только одну, а остальные останутся лежать в нём. В таких случаях нужно забирать оставшиеся батарейки с собой.
        <br>  Компоненты - особые предметы, которые можно найти в офисах или внутри складов, которые могут использоваться как предметы для покраски с дальнейшим вводом цветовых паролей. Поставив их на лифт и убрав его, чтобы все датчики видели компонент, а точнее его цвет.
        `;
          b_mont = ``;
        }
        break;
      case "1,4,8,4,4,4,8,4,3":
      case "148444843":
        au = false;
        ta = true;
        mont = false;
        booolSA_G[5] = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `<br> <img src="piccher/pay/pain.webp" class="pictin" > <br>  Paint tool is used to paint something, such a paint tool can be used to enter passwords or to endow the dyed object with the key property to activate the sensors.
        <br>  Left mouse colors with selected color. Right mouse removes color from colored objects. Multiple blocks can be colored or colored by dragging and dropping by the appropriate mouse button, like placing or removing multiple blocks at once.
        <br>  To paint something, most often used colors from the second top of the line.
        To change the color, press Q to open the color selection GUI. To close it without selecting a color, press Q or Esc.
        `;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `<br> <img src="piccher/pay/pain.webp" class="pictin" > <br>  Для покраски чего-либо используется краскопульт, такой инструмент покраски может использоваться для ввода паролей или наделять окрашиваемый предмет свойством ключа для активации сенсоров.
        <br>  Краски левой мыши с выбранным цветом. Правая мышь удаляет цвет из окрашенных объектов. Несколько блоков могут быть окрашены или очищены от цвета путем перетаскивания соответствующей кнопкой мыши, подобно размещению или удалению нескольких блоков одновременно.
        <br>  Для покраски чего либо, чаще всего используются цвета из второй сверху строки.
        Чтобы изменить цвет, нажмите клавишу Q, чтобы открыть графический интерфейс выбора цвета. Чтобы закрыть его без выбора цвета, нажмите Q или Esc.
        `;
          b_mont = ``;
        }
        break;
      case "9,3,9,3,3,3,1,3,9":
      case "939333139":
        au = false;
        ta = true;
        mont = false;
        booolSA_G[11] = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `<br> <img src="piccher/pay/cpred.webp" class="pictin" > Searching for clues for a panel with buttons usually used ducks, helmet buckets or other objects that are often found in the world.
        <br>  Objects can be hidden, either in a visible place or in a non-obvious place, behind other objects, behind boxes, in boxes, in textures, as part of more complex decor elements.
        <br>  The colour of such objects is limited by the colour palette of the paint tool. Sometimes the human eye cannot correctly recognize color, in this case it is possible to reduce for a while the quality, shadows and reflections of the world.
        The location of all hidden objects is limited to the area of the room with panel and adjacent rooms, no more than behind the wall.
        `;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `<br> <img src="piccher/pay/cpred.webp" class="pictin" > Поиск подсказок для панели с кнопками, обычно используются уточки, ведра с каской или иные объекты, которые часто встречаются в мире.
        <br>  Предметы могут быть спрятаны, как на видном месте, так и в неочевидном, за другими предметами, за коробками, в коробках, в текстурах, в составе более сложных элементов декора.
        <br>  Цвет таких предметов ограничивается цветовой палитрой инструмента покраски. Иногда человеческий глаз не может корректно распознать цвет, в таком случае можно понизить на время качество, теней и отражений мира.
        Расположение всех спрятанных предметов ограничивается зоной комнаты с панелью и прилежащими с ней помещениями, не дальше чем за стеной.
        `;
          b_mont = ``;
        }
        break;
      case "8,2,8,9,9,9,3,9,8":
      case "828999398":
        au = false;
        ta = true;
        mont = false;
        booolSA_G[10] = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `<br> <img src="piccher/pay/sen.webp" class="pictin" > Separation of items in the inventory, often have to use one object, for example, put something on the sensors, if the components can be put one at a time, the canisters, batteries and cylinders with paint should be separated in the inventory using the right mouse button.
        <br>  Sensors that respond to mechanics can be activated by an elevator, a common object, or phantom objects discarded from the inventory.
        Some chests often use deceptions, in which one object is in 1-3 lines and the other in 4 lines. Because of this unprepared mechanics take only 1 item without noticing the others in the chest.`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `<br> <img src="piccher/pay/sen.webp" class="pictin" > Разделение предметов в инвентаре, часто приходится использовать один предмет, например, поставить что-то на сенсоры, если компоненты можно поставить по одному, то канистры, батареи и баллоны с краской нужно разделять в инвентаре используя правую кнопку мыши.
        <br>  Датчики, реагирующие на механика, можно активировать лифтом, обычным предметом или фантомным предметов, выброшенным из инвентаря.
        В некоторых сундуках часто используются обманки, в которых один предмет находится в 1-3 строках, а другие в 4 строке. Из-за этого неподготовленные механики берут только 1 предмет, не замечая других в сундуке.
        `;
          b_mont = ``;
        }
        break;
      case "3,1,3,1,3,3,1,1,1":
      case "313133111":
        au = false;
        ta = true;
        mont = false;
        booolSA_G[13] = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = ` <br> <img src="piccher/pay/knp.webp" class="pictin" > Panels consisting of tumblers are the easiest way to close doors. They need to choose the password yourself, either by brute force (4 switchers), or by logic 3x3 or more. Next to these locks are logical closures, which serve as indicators of correct input. `;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `<br> <img src="piccher/pay/knp.webp" class="pictin" > Панели, состоящие из тумблеров это самый простой способ закрытия дверей. К ним нужно подобрать пароль самому, либо перебором (4 тумблера), либо по логике 3x3 или более. Рядом с такими замками находятся логические затворы, которые служат индикаторами правильности ввода. `;
          b_mont = ``;
        }
        break;
      case "8,2,8,2,8,2,3,2,8":
      case "828282328":
        au = false;
        ta = true;
        mont = false;
        booolSA_G[12] = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `The color code lock represents a set of sensors of red, blue, yellow and green colors. To activate and enter the color, you need to find the object to be painted. As an item, you can use, for example, a component. 
        <br>  By changing the color of the component, you change the crystal structure of the material that the object consists of, so that it can be used to enter passwords as a key card.
        <br>  To paint an object, first you need to put it on the elevator, remove the elevator and repaint the component in the necessary colors according to a certain sequence that is necessary to unlock the lock.
        Such algorithms in the form of passwords can be hidden in chests or as a decorative element.`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `Кодовый цветовой замок, представляет набор сенсоров красного, синего, жёлтого и зелёного цвета. Для активации и ввода цвета необходимо найти окрашиваемый предмет. В качестве предмета можно использовать, например компонент. 
        <br>  Меняя цвет компонента, вы изменяете кристаллическую структуру материала, из которого состоит предмет, вследствие чего он может использоваться для ввода паролей в качестве ключ карты.
        <br>  Для покраски предмета, для начала его необходимо поставить на лифт, убрать лифт и перекрашивать компонент в необходимые цвета по определённой последовательности, которая необходима для отпирания замка.
        Такие алгоритмы в виде паролей могут быть спрятаны в сундуках или в качестве элемента декора.
        `;
          b_mont = ``;
        }
        break;
      case "7,7,7,0,0,7,1,0,0":
      case "777007100":
        au = false;
        ta = true;
        mont = false;
        booolSA_G[15] = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `Processor of components into batteries.
        <br>  Such devices were popular long before the invention of the master bot, they convert a complex component into a capsule for storing energy, that is, into a battery.
        <br>  The principle of operation is to disassemble the components into their component parts, because they can make almost any object, if there is enough engineering and technical knowledge and, of course, suitable equipment.
        <br>  The craft bot has completely replaced such complex and dimensional installations in different laboratories. 
        To start such a device, it is necessary to use an elevator to load the workspace components and to start the installation by placing it in a special area next to the table.
        Note If the device does not work correctly, you can use one component several times to create batteries.`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `Переработчик компонентов в батареи.
        <br>  Такие аппараты были популярны задолго до изобретения бота мастера, они преобразовывают сложный компонент в капсулу для хранения энергии, то есть в батарейку.
        <br>  Принцип работы заключается в разборе на составные части компонентов, ведь и них можно сделать практически любой предмет, если хватит инженерных и технических знаний и, конечно же, подходящего оборудования.
        <br>  Крафт бот полностью заменил такие сложные и габаритные установки в разных лабораториях. 
        Для запуска такого устройства необходимо использовать лифт для загрузки компонентов рабочую область и для запуска установки поставив его в специальную область, рядом со столом.
        Примечание если, устройство работает не правильно, вы можете использовать один компонент по несколько раз, для создания батареек.
        `;
          b_mont = ``;
        }
        break;
      case "15159015":
        au = false;
        ta = true;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `....
        <br>  December 7.
        <br>  -Corporal Kuzkov U.V. gave a report on conducting a shutdown of all systems of the underground complex "Aspen". In order to power the security system and minimum power consumption of environmental installations, it was decided to leave the backup kicking active until the tremors stop. Access to the lower floors of the complex is impossible because of the possibility of collapse of the corridor slabs. 
        The commander said that the environmentalists should come here in a week to check the ground water treatment system.
        <br>  ....
        <br>  On December 9 
        <br>  It had been over five days since the corporal had locked himself in the ventilation control room. He strictly asked not to be disturbed, to study earthquake signals. The commander ordered the complex closed, leaving the opportunity for Voldemar to close the complex completely once he had finished studying the seismic signals.
        <br>  ...
        <br>  Dec. 10.
        <br>  The commander urgently awaits the transfer of all complex personnel to the complex located on the Duzeran Plateau. We tried to reach Voldemar, but he did not answer, apparently he is very busy. I was able to talk the commander into leaving me here to wait for the corporal, if he doesn't come out, I will have to go alone in four days.
        <br>  ....
        <br>  December 15
        <br>  If any of the environmentalists are reading that post, you need to know that to activate full power, you have to run the generator upstairs. We have the canister hidden on the surface. If you don't have any shovels with you, we left something behind the door under the code lock. I'm not allowed to give out the password so that outsiders won't know, so you figure it out.`;
          b_mont = `Okay, I need to find some clues as to how to open the compartment below.`;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `….
        <br>  7 декабря
        <br>  -капрал Кузьков У.В. предоставил отчёт по проведению отключения всех систем подземного комплекса “Осина”. Для питания системы безопасности и минимального энергопотребления экологических установок, принято решение оставить резервное пинание активным, пока толчки не прекратятся. Доступ к нижним этажам комплекса невозможен из-за возможности обвала перекрытий коридоров. 
        Командир сказал что через неделю сюда должны приехать  экологи, проверить систему очистки грунтовых вод.
        <br>  ….
        <br>  9 декабря 
        <br>  Уже больше 5 дней прошло, как капрал заперся в комнате управления вентиляциями. Он строго просил не мешать ему, изучать сигналы землетрясений. Командир приказал закрыть комплекс, оставив возможность Вольдемару полностью закрыть комплекс, как только он закончит изучать сигналы сейсмической активности.
        <br>  ...
        <br>  10 декабря
        <br>  Командир срочно ждёт перевод всех сотрудников комплекса в комплекс находящийся на плоскогорье Дузеран. Мы пытались достучаться до Вольдемара, но он не отвечает, видимо он очень занят. Я смог уговорить командира оставить меня здесь ждать капрала, если он не выйдет, мне придётся через 4 дня идти одному.
        <br>  ….
        <br>  15 декабря
        Если кто-нибудь из экологов читает ту запись, то вам нужно знать, что для активации полного питания, нужно запустить генератор этажом выше. Канистру мы спрятали на поверхности. Если у вас нет с собой лопат, то мы оставили кое-что за дверью под кодовым замком. Я не имею права сообщать пароль, чтобы посторонние люди не узнали, дальше думайте сами.
        <br>  ...`;
          b_mont = `Так, мне надо найти какие-нибудь подсказки, как открыть отсек внизу.`;
        }
        break;
      case "1590399":
        au = false;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `  Voldemar Kuzkov's diary.
        <br>   ...
        <br>   November 18
        <br>  Again these fools disturb my work, I ask only for one hour of silence.
        <br>  ...
        <br>  November 25
        Today the whole complex was shaking due to the strong earthquake and some fumes started to come out from under the ground, the smell was like after a day of bean soup. All day after the tremors, the staff was afraid to even say a word, there was such a pleasant silence.
        <br>  ...
        <br>  December 5
        <br>  The tremors repeated with greater force, we will have to make an appointment with the commander to study them. I hope I will be able to persuade him to turn off most of the equipment to get rid of unnecessary interference in the study and send people who have nothing to do elsewhere.
        <br>  ...
        <br>  December 7.
        <br>  Was able to arrange for a separate spot for observation.
        Tomorrow I will be able to do research and maybe find out what is the source of the earthquake.
        I will ask the remaining workers not to disturb me and not to distract me, I hope they will understand my request from the first time.
        I warned them that in case of emergency, I will change the password to the door and leave them a clue where the duck stands, at the same time check their intelligence.
        <br>  ...`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `  Дневник Вольдемара Кузькова.
        <br>   …
        <br>  18 ноября
        <br>  Опять эти дураки мешают мне работать, прошу лишь один час тишины.
        <br>  …
        <br>  25 ноября
        <br>  Сегодня весь комплекс трясло от сильного землетрясения, и начали вырываться какие-то испарения из-под земли, запах как после дня бобового супа. Весь день после толчков, персонал боялся даже слово сказать, такая приятная тишина была.
        <br>  …
        <br>  5 декабря
        <br>  Толчки повторились ещё с большей силой, надо будет договориться на их исследование с командиром. Надеюсь мне удастся уговорить его отключить большую часть оборудования, чтобы избавиться от ненужных помех при исследовании и отправить людей которым нечем заняться куда-нибудь в другое место.
        <br>  …
        <br>  7 декабря
        <br>  Смог договориться на отдельное место для наблюдения.
        Завтра я смогу провести исследования и может узнать, что является источником землетрясения.
        Попрошу оставшихся рабочих не мешать мне и не отвлекать меня, надеюсь, они с первого раза поймут мою просьбу.
        Я их предупредил, что в экстренной ситуации пароль от двери изменю и оставлю им подсказку, где уточка стоит, заодно проверю их сообразительность.
        <br>  ...`;
          b_mont = ``;
        }
        break;
      case "1522515":
        au = false;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `Record from the report on the management of the complex
        <br>  ...
        <br>  Record #461:
        <br>  It is not known who came up with the idea of using a white balloon on the surface as a source of alternate fuel, but it is the only way to open the main corridor and access the gate control. About 230 years ago, the service window for introducing the balloon was at ground level, but the village of over two centuries ago has hidden it underground, I don't know where exactly on the surface this window is, but after the backup power goes out, you need to push the balloon into it urgently to access the main functions of the complex.
        <br>  ...
        <br>  Entry #568:
        <br>  The ball to activate the station's main power supply is on the left gate tower. This tower used to be controlled from the main computer, but if access is cut off, you'll probably have to breach the integrity of the tower to get the orb. 
        <br>  What genius came up with that?
        <br>  ...`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `Запись из отчёта по управлению комплекса
        <br>  …
        <br>  Запись №461:
        <br>  Неизвестно кто придумал использовать белый шар на поверхности в качестве источника альтернативного топлива, но это единственный способ открыть главный коридор и доступ к управлению воротами. Где-то 230 лет назад, служебное окно для введения шара было на уровне поверхности земли, но сель прошедший более двух веков назад скрыл его под землёй, не знаю, где именно на поверхности находится это окно, но после отключения резервного питания, нужно срочно затолкать в него шар, для доступа к основным функциям комплекса.
        <br>  …
        <br>  Запись №568:
        <br>  Шар для активации основного питания станции находится на левой башне ворот. Раньше управление этой башней проводилось с главного компьютера, но если доступ к нему будет перекрыт, наверное, придётся нарушить целостность башни, чтобы достать шар. 
        <br>  Какой гений это придумал?
        <br>   …
        `;
          b_mont = ``;
        }
        break;
      case "122758":
        au = false;
        ta = true;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `  A page from Shundin Kaspar's diary.
        <br>  ...
        <br>  March 14.
        <br>  Finally, it's my last day as captain of the Prinfog, from tomorrow I'm transferring to Degore, it'll be more interesting, no paperwork and the staff are normal, not the handful of idiots who can't fix the door on the lower level in the mine tunnel. As they told me, it's dangerous there, no one has touched it for ten years, it could slam shut, phew, nothing bad can happen, as long as the hands are in the right place. I'll have to tell my receiver later about the stone dwarf ruins on the other side of the bridge. My workers have camouflaged the descent down, I'll have to get a hammer and show him.
        <br>  ...`;
          b_mont = `That's the end of my teacher's notes; I guess he didn't go back for the diary, but went straight to Degore.`;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `  Страница из дневника Шундина Каспара.
        <br>  …
        <br>  14 марта
        <br>  Наконец-то, это мой последний день на должности капитана Принфога, с завтрашнего дня перевожусь в Дегор, там поинтереснее будет, никакой бумажной волокиты и сотрудники нормальные, а не эта горстка идиотов, которая не может починить дверь на нижнем уровне в туннеле шахты. Как они мне говорили, там опасно, лет десять никто не трогал, может резко захлопнуться, тьфу на них, ничего плохого случиться не может, главное чтобы руки из нужного места росли. Надо будет потом моему приемнику рассказать о каменных гномьих руинах по ту сторону моста. Мои работники замаскировали спуск вниз, надо будет взять молоток, показать ему.
        <br>  …
        `;
          b_mont = `На том все записи моего учителя заканчиваются, наверное, он не вернулся за дневником, а сразу поехал в Дегор.`;
        }
        break;
      case "90222":
        au = false;
        ta = true;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `Journal of the Caretaker of the Prinfog Military Campus.
        <br>  ...
        <br>  April 3.
        <br>  I was assigned to Prinfog to oversee the training of MGDS soldiers. 
        <br>  While touring the base I was unable to get to the lower level of the station, the doors were locked from the inside, the tunnel attendants must have closed them so that curious recruits wouldn't get lost there.
        <br>  ...
        <br>  April 20
        <br>  The fog is getting thicker and thicker, soon it will be hot in here.
        Some unpleasant smell coming from the lower floor through the vent, probably rats chewed the leash somewhere and electrocuted them. We'll have to get a couple of batteries and run a generator nearby to run the elevator and see what's rotting downstairs.
        <br>  ...
        <br>  April 22
        <br>  Workers during the renovation, without my knowledge, cemented the wall upstairs, and I kept the batteries there so the rats wouldn't chew on the copper. I'm too old to climb over the roof, so I'll have to wait until the repairs are finished.
        <br>  ...
        <br>  May 1st 
        <br>  The military base in Verona has finally opened, all the employees have moved there, moving all the equipment and there's no need to keep an eye on the Prinfog. How old Caspar just took off his post is unclear, well the main thing is that I have followed everything and I can safely seal the gate with a lock.
        <br>  ...`;
          b_mont = `To go down into the subway tunnels you have to run the generator in this garage.`;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `Журнал смотрителя военного городка Принфог.
        <br>   …
        <br>  3 апреля
        <br>  Меня направили в Принфог следить за подготовкой солдат ВГПК. 
        При осмотре базы мне не удалось попасть на нижний этаж станции, двери были заблокированы изнутри, наверное, обслуживающие туннель гномы закрыли их, чтобы любопытные новобранцы не потерялись там.
        <br>  …
        <br>  20 апреля
        <br>  Туман становится всё гуще, скоро здесь будет жарко.
        Какой-то неприятный запах идёт с нижнего этажа через вентиляцию, наверное, крысы где-то перегрызли повода и их током ударило. Надо будет взять пару батареек и запустить генератор рядом, чтобы запустить лифт и посмотреть, что внизу гниёт.
        <br>  …
        <br>  22 апреля
        <br>  Рабочие во время ремонта без моего ведома, зацементировали стену наверху, а я там хранил батарейки, чтобы крысы медь не грызли. Через крышу я уже стар, лазить, придётся ждать пока закончат ремонт.
        <br>  …
        <br>  1 мая 
        <br>  Военная база в Вероне окончательно открылась, все сотрудники перешли туда, перевезя всё оборудование и больше незачем следить за Принфогом. Как старина Каспар просто взял и ушёл с должности, непонятно, ну главное я проследил за всем и могу спокойно запечатать ворота на замок.
        <br>  …
        `;
          b_mont = `Чтобы спуститься в туннели метро надо запустить генератор в этом гараже.`;
        }
        break;
      case "301191213":
        au = false;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `Description of the ancient structure "Ancient ruins of dwarves near Prinfog", records of the researcher Segonius V.E.
        <br>  ...
        <br>  Apparently this is the burial place of a dwarf ruler of the Kosh era, dating back to 480 BC. 
        The golden crown with the glowing stone in it, looks intriguing, maybe this temple was even built by the hands of the first dwarves settlers from Totrax.
        Mysterious.
        <br>  ...
        <br>  It was not possible to restore the old mechanisms completely, in some places I had to use simple buttons and a big switch to control the columns. Next fall, I beg to allocate money for a full restoration of this temple.
        <br>  ...
        <br>  To be able to get down here safely, I left a couple of elevators upstairs, the main thing is not to forget about them.
        <br>  ...
        <br>  I'll have to find the Rafik 2 reference book at the College of Archaeologists and type in "Kosh сivilization" to refresh my memory and find out more information about those times, maybe even find out who was the local ruler of those lands back then.`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `Описание древнего сооружения “Древние руины гномов вблизи Принфога”, записи исследователя Сегония В.Е.
        <br>  …
        <br>  Судя по всему это место захоронение гномьего правителя эпохи Кош, дотируемое 480 годом до нашей эры. 
        <br>  Золотая корона со светящимся камнем в ней, выглядит интригующе, может этот храм даже был построен руками первых гномов переселенцев с Тотракса.
        <br>  Загадочно.
        <br>  …
        <br>  Полностью восстановить прежний вид старых механизмов не получилось, в некоторых местах пришлось использовать простые кнопки и большой переключатель для управления колоннами. Следующей осенью порошу выделить деньги на полноценную реставрацию этого храма.
        <br>   …
        <br>  Чтобы можно было безопасно спуститься сюда, я оставил пару лифтов наверху, главное не забыть о них.
        <br>  …
        <br>  Надо будет в коллегии археологов найти справочник Рафик 2 и ввести в него запрос “цивилизация Кош”, чтобы освежить память и узнать больше информации о тех временах, может даже узнаю, кто был тогда здешним правителем этих земель.
        `;
          b_mont = ``;
        }
        break;
      case "Kosh civilization":
      case "kosh civilization":
      case "цивилизация Кош":
      case "цивилизация кош":
        au = false;
        ta = true;
        mont = false;
        booolSA_S[18] = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `History of the first gnome settlers (significant events based on commonly known old records)
        <br>   Kosh Civilization Part&nbsp;1.<br>  The transcribed text of the record is marked in the "Backpack"`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `История первых гномьих поселенцев (значимые события, основанные на общеизвестных старых записях)
        <br>  Цивилизация Кош часть&nbsp;1<br>  Расшифрованный текст записи отмечен во вкладке "Рюкзак".
        `;
          b_mont = ``;
        }
        break;
      case "1515667":
        au = false;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `Firefly 
        <br>  Globe is also known as Firefly, a cute, peaceful mob that appears underwater but can live on land. He eats cardboard, which gives him luminous feces after eating it.
        Appearance
        <br>  This animal is a mixture of different insects, crustaceans and other species, so it is very difficult to compare it to anything. It has a fin on his back and a sprout on his forehead similar in shape to the wing of a butterfly. He has a turquoise color with yellow glowing elements.
        Behavior
        <br>  Firefly is very immobile and rarely moves without purpose. If you hit him, he will quickly start running away. Eats cardboard, if he is not high up so that he eats cardboard higher up, he can be put on an elevator. He can be picked up.`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `Светлячок 
        <br>  Глоб также известен как Светочервь, также его называют светлячок- милый мирный моб, который появляется под водой, но может жить на суше. Ест картон, после поедания, которого даёт светящиеся фекалии.
        Внешний вид
        <br>  Это животное является смесью различных насекомых, ракообразных и других видов животных, поэтому сравнить его с чем-либо очень сложно. У него имеется плавник на спине и отросток на лбу по форме похожий на крыло бабочки. У него бирюзовый окрас с жёлтыми светящимися элементами.
        Поведение
        <br>  Светлячок очень неподвижный и без цели перемещается он редко. Если его ударить, то он быстро начнёт убегать. Ест картон, если он не высоко, чтобы он ел картон выше, его можно посадить на лифт. Его можно взять в руки.
        `;
          b_mont = ``;
        }
        break;
      case "30435358":
        au = false;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `Record of Eral's janitor
        <br>  ...
        <br>  Someone smeared yogurt all over the walls again, grown-ups, but no, we have to do something that will be funny.
        It's not funny to me, when it all dries up, it's going to stink.
        <br>  ...
        <br>  Bastard, candy wrapper, I need to look at the cameras, I'll find out who threw it, I'll sew up my pockets with all the contents.
        <br>  ...
        <br>  All right, so it was Delville who threw that wrapper, so let's see who's got the last laugh.
        <br>  ...
        <br>  Delville's gonna be launching his first portal today, so he should put that wrapper in the lens, it's gonna be a laugh. He opens it up and there's his wrapper, hahahaaa....
        <br>  ...
        <br>  Funny, nobody laughed when he opened the lid and fell in. Dalville was sent to the infirmary, must have been offended by me, I won't make any more jokes at the workers if they don't get the jokes.
        <br>  ...`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `Запись уборщика Эрала
        <br>  …
        <br>  Опять кто-то измазал все стены йогуртом, взрослые люди, но нет, надо что-то сделать, что будет смешно.
        Мне не смешно, когда это всё засохнет, то будет вонять.
        <br>  …
        <br>   Зараза, фантик от конфеты, надо камеры посмотреть, узнаю кто бросил, карманы зашью со всем содержимым.
        <br>  …
        <br>  Так, так значит, это Дэлвил бросил тот фантик, ну посмотрим, кто будет смеяться последним.
        <br>  …
        <br>  Дэлвил сегодня впервые будет запускать портал, надо ему этот фантик в линзу поместить, Вот смеху то будет. Открывает, а там его фантик, хахахаа….
        <br>  …
        <br>  Странно, никто не засмеялся, когда он открыл крышку и упал. Дэлвила отправили в медпункт, наверное, обиделся на меня, больше не буду над рабочими шутить, если они шуток не понимают.
        <br>  …
        `;
          b_mont = ``;
        }
        break;
      case "27082650":
        au = false;
        ta = true;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `Butterflies. The abysSSSs. FFog. Walll. Booooom!!!, ahahahahahaha.... Water.`;
          b_mont = `It looks like a note from someone who has suffered something very bad. It's carved on the casing of the tape recorder by Delville.`;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `Бабочки. Пропааасть. Ту ту туман. СтенААа. Бууууум!!!, ахахахахаха.... Вода?`;
          b_mont = `Похоже, что это записка человека, перенёсшего, что-то очень плохое. На корпусе магнитофона вырезано Дэлвил`;
        }
        break;
      case "133289905":
        au = false;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `Guide (How to fix a broken door)
        <br>   ...
        <br>  In order for the sliding door to open easily and stop sticking, you need to get the rollers and grooves working properly. Dust, hair and other debris prevent proper sliding. The doors are removed, all parts are cleaned with a soaked napkin and put back. If the situation has not changed, the reason is in the worn out wheels. They should be removed with a hexagon and replaced with new ones.
        To improve sliding, the mechanism must not be lubricated with oil. Machine oil promotes the accumulation of debris and dust. Sunflower oil - gradually thickens and hinders the movement of the blades. Rollers and rails will have to be replaced.
        <br>  ...
        <br>   The rail mechanism includes upper and lower rails - these are the panels along which the sashes move. For light designs, one rail is enough, heavy doors are fixed with two rails. This prevents the leaf from moving to the side.
        Do not resort to replacing the rail mechanism in the case of contamination of the grooves. To clean them, remove the doors and remove all debris from the grooves. The work is carried out with a sharp thin tool (screwdriver, knife). The cleaned guides are degreased, and the sashes are put back in place.
        Restrictors on the rails do not allow the doors to go beyond the limits of the structure. If they break, the door does not fit tightly to the frame or opens spontaneously. The malfunction is eliminated by adjusting the stop.
        <br>  Most often, rail replacement is needed for sliding automated systems. Such designs are installed in technical rooms and stores, so the grooves are quickly clogged with dirt and debris.
        Repair of sliding doors does not require special and skills. It is important to be careful and have the necessary tools.
        <br>  ...
        `;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `Руководство (Как починить сломанную дверь)
        <br>  …
        <br>  Чтобы сдвижная дверь начала легко открываться и перестала заедать, нужно наладить работу роликов и желобков. Пыль, волосы и прочий мусор препятствуют нормальному скольжению. Дверцы снимают, все детали прочищают проспиртованной салфеткой и устанавливают обратно. Если ситуация не изменилась — причина в стертых колесиках. Их следует снять при помощи шестигранника и заменить на новые.
        Для улучшения скольжения нельзя смазывать механизм маслом. Машинное масло способствует накоплению мусора и пыли. Подсолнечное — постепенно густеет и затрудняет движение полотен. Ролики и рельсы придется менять.
        <br>  …
        <br>  Рельсовый механизм включает верхнюю и нижнюю направляющие — это панели, вдоль которых перемещаются створки. Для легких конструкций достаточно одной рельсы, тяжелые двери закрепляют с помощью двух направляющих. Это предотвращает отхождение полотна в сторону.
        Не прибегают к замене рельсового механизма в случае загрязнения желобков. Для их очистки снимают дверцы и выбирают весь мусор из пазов. Работу выполняют острым тонким инструментом (отверткой, ножом). Очищенные направляющие обезжиривают, створки устанавливают на место.
        Ограничители на рельсах не позволяют дверцам выходить за пределы конструкции. При их поломке дверь неплотно прилегает к коробке или самопроизвольно открывается. Неисправность устраняют методом регулировки фиксатора.
        <br>  Чаще всего, замена рельс необходима для откатных автоматизированных систем. Такие конструкции устанавливают в технических помещениях и магазинах, поэтому желобки быстро забиваются грязью и мусором.
        Для ремонта раздвижных дверей не требуется специальных и навыков. Важна аккуратность и наличие необходимых инструментов.
        <br>  …
        `;
          b_mont = ``;
        }
        break;
      case "1,4,0,4,0,6,0,6,1":
      case "140406061":
        au = false;
        ta = true;
        mont = false;
        booolSA_S[19] = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `History of the first dwarf settlers (significant events based on commonly known old records)
        <br>  Kosh Civilization Part&nbsp;2<br>  The transcribed text of the record is marked in the "Backpack"`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `История первых гномьих поселенцев (значимые события, основанные на общеизвестных старых записях)
        <br>   Цивилизация Кош часть&nbsp;2<br>  Расшифрованный текст записи отмечен во вкладке "Рюкзак".
        `;
          b_mont = ``;
        }
        break;
      case "1,1,1,1,2,3,1,2,1":
      case "111123121":
        au = false;
        ta = true;
        mont = false;
        booolSA_S[20] = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `History of the first gnome settlers (significant events based on commonly known old records)
        <br>  Kosh Civilization Part&nbsp;3<br>  The transcribed text of the record is marked in the "Backpack"`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `История первых гномьих поселенцев (значимые события, основанные на общеизвестных старых записях)
        <br>   Цивилизация Кош часть&nbsp;3<br>  Расшифрованный текст записи отмечен во вкладке "Рюкзак".
        `;
          b_mont = ``;
        }
        break;
      case "4,4,3,9,2,3,4,4,3":
      case "443923443":
        au = false;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `An old grandma brings a bus driver a bag of peanuts every day.
        <br>First the bus driver enjoyed the peanuts but after a week of eating them he asked: «Please granny, do not bring me peanuts anymore. Have them yourself.».
        The granny answers: «You know, I do not have teeth anymore. I just prefer to suck the chocolate around them.»`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `Мама на работу собирается. Дочке 6 лет.
        <br>— Доченька, я на работу, ты запри дверь и никому НЕ ОТКРЫВАЙ!!
        — Хорошо, мамочка.
        Мама вышла, думает: надо проверить. Стучит.
        — Кто там?
        Грубым голосом: «Это мы, газовщики, пришли проверить газовое оборудование. »
        Молчание. Затем басом из-за двери:
        «Пошли вон отсюда, мы дровами топим!»`;
          b_mont = ``;
        }
        break;
      case "2,3,4,9,3,9,8,3,4":
      case "234939834":
        if (booolSA_MODS[1]) {
          au = true;
        }

        ta = true;
        mont = false;
        booolSA_S[0] = true;
        if (checc == "en") {
          b_au = `audio/en/vv1.mp3`;
          b_ta = `History of the War with the Giants
        Part&nbsp;1. <br> (Abridged version edited by Professor of Gnomology Garswer Nurdak 1143.) <br>  The transcribed text of the record is marked in the "Backpack" tab.`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/vv1.mp3`;
          b_ta = `История войны с великанами
        часть&nbsp;1. <br> (Сокращенная версия под редакцией профессора гномологии Гарсвера Нурдака 1143 год.) <br>  Расшифрованный текст записи отмечен во вкладке "Рюкзак".
        `;
          b_mont = ``;
        }
        break;
      case "2,1,2,5,3,9,1,2,8":
      case "212539128":
        if (booolSA_MODS[1]) {
          au = true;
        }

        ta = true;
        mont = false;
        booolSA_S[1] = true;
        if (checc == "en") {
          b_au = `audio/en/vv2.mp3`;
          b_ta = `History of the War with the Giants
        Part&nbsp;2. <br> (Abridged version edited by Professor of Gnomology Garswer Nurdak 1143.) <br>  The transcribed text of the record is marked in the "Backpack" tab.`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/vv2.mp3`;
          b_ta = `История войны с великанами
        часть&nbsp;2. <br> (Сокращенная версия под редакцией профессора гномологии Гарсвера Нурдака 1143 год.) <br>  Расшифрованный текст записи отмечен во вкладке "Рюкзак".
        `;
          b_mont = ``;
        }
        break;
      case "1,1,6,5,5,0,4,2,6":
      case "116550426":
        if (booolSA_MODS[1]) {
          au = true;
        }

        ta = true;
        mont = false;
        booolSA_S[2] = true;
        if (checc == "en") {
          b_au = `audio/en/vv3.mp3`;
          b_ta = `History of the War with the Giants
        Part&nbsp;3. <br> (Abridged version edited by Professor of Gnomology Garswer Nurdak 1143.) <br>  The transcribed text of the record is marked in the "Backpack" tab.`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/vv3.mp3`;
          b_ta = `История войны с великанами
        часть&nbsp;3. <br> (Сокращенная версия под редакцией профессора гномологии Гарсвера Нурдака 1143 год.) <br>  Расшифрованный текст записи отмечен во вкладке "Рюкзак".
        `;
          b_mont = ``;
        }
        break;
      case "2,9,2,9,9,2,2,9,2":
      case "292992292":
        au = false;
        ta = true;
        mont = false;
        booolSA_G[14] = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `Old FT12 terminal
        <br>  To protect the data, a locking system is used with a secret object, which must be placed in the holes on the right side.
        Each terminal has its own key item.
        <br>  Before placing the items, they must be separated in the inventory and inserted one item at a time into the box. 
        Each recorded message has its own weight, for example, if you place one item in any cell, only the first entry will be opened, the rest of the data will be accessed with the addition of the following items.The second entry is two items, the next 3 and so on.`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `Старый терминал FT12
        <br>  Для защиты данных используется система блокировки с помощью секретного предмета, который необходимо разместить в отверстиях справа.
        У каждого терминала есть свой ключ предмет.
        Перед размещением предметов их необходимо разделить в инвентаре и вставлять по одному предмету в ячейку. 
        <br>  Каждое записанное сообщение имеет свой вес, например если в любую ячейку поместить один предмет, то будет открываться только первая запись, к остальным данным доступ будет предоставляться с добавлением следующих предметов.Вторая запись два предмета, следующая 3 и т.д.
        `;
          b_mont = ``;
        }
        break;
      case "1,7,8,1,7,7,1,7,7":
      case "178177177":
        au = false;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `What is teleportation
        <br>  Teleportation is the hypothetical instantaneous movement of an object over any distance at faster than the speed of light. The term was coined by the American publicist, researcher of the "unknowable", Nimilius Fort after the publication in 731 of his book "Hamsters of Heaven" about parapsychology and the supernatural. True, at the time the concept had little to do with science.
        
        <br>  When we think of teleportation methods, the first thing that comes to mind is wormholes (aka wormholes), which the theory of relativity does not deny. According to it, our universe curves in the fourth spatial dimension, and in some places there are possible border zones, where space is distant from each other, but comes quite close to each other through the fourth dimension. Under certain conditions, two different points of three-dimensional space will merge into one through an additional dimension, forming a tunnel. Step into one and you move instantly billions of light years away. It would seem that everything is simple, but in order for a person in this tunnel not to "smeared", its walls need to be strengthened by special matter, which will keep them in a stable state. And gnomes don't have such matter yet.`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `Что такое телепортация
        <br>  Телепортация— гипотетическое мгновенное перемещение объекта на любое расстояние со скоростью быстрее скорости света. Этот термин ввел в употребление американский публицист, исследователь «непознанного», Нимилий Форт после публикации в 731 году книги «Хомячки небес» о парапсихологии и сверхъестественном. Правда тогда понятие имело мало общего с наукой.
        
        <br>  Когда мы думаем о способах телепортации, первое, что приходит в голову — кротовые норы (они же червоточины), которые не отрицает теория относительности. Согласно ней, наша Вселенная изгибается в четвертом пространственном измерении, и в некоторых местах возможны пограничные зоны, где пространство удалено друг от друга, но при этом приближается довольно близко друг к другу сквозь четвертое измерение. При определенных условиях две разные точки трехмерного пространства сольются в одну через дополнительное измерение, образуя тоннель. Шагнул в такое — и переместился мгновенно на миллиарды световых лет. Казалось бы, все просто, но для того, чтобы человека в этом тоннеле не «размазало», его стенки нужно укрепить специальной материей, которая и будет держать их в стабильном состоянии. А такой материи у гномов пока нет.
        `;
          b_mont = ``;
        }
        break;
      case "2,5,2,4,2,5,2,4,2":
      case "252425242":
        if (booolSA_MODS[1]) {
          au = true;
        }

        ta = true;
        mont = false;
        booolSA_S[3] = true;
        if (checc == "en") {
          b_au = `audio/en/vv4.mp3`;
          b_ta = `History of the War with the Giants
        Part&nbsp;4. <br> (Abridged version edited by Professor of Gnomology Garswer Nurdak 1143.) <br>  The transcribed text of the record is marked in the "Backpack" tab.`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/vv5.mp3`;
          b_ta = `История войны с великанами
        часть&nbsp;4. <br> (Сокращенная версия под редакцией профессора гномологии Гарсвера Нурдака 1143 год.) <br>  Расшифрованный текст записи отмечен во вкладке "Рюкзак".
        `;
          b_mont = ``;
        }
        break;
      case "0,9,3,6,6,6,6,6,6":
      case "093666666":
        if (booolSA_MODS[1]) {
          au = true;
        }


        ta = true;
        mont = false;
        booolSA_S[4] = true;
        if (checc == "en") {
          b_au = `audio/en/vv5.mp3`;
          b_ta = `History of the War with the Giants
        Part&nbsp;5. <br> (Abridged version edited by Professor of Gnomology Garswer Nurdak 1143.) <br>  The transcribed text of the record is marked in the "Backpack" tab.`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/vv4.mp3`;
          b_ta = `История войны с великанами
        часть&nbsp;5. <br> (Сокращенная версия под редакцией профессора гномологии Гарсвера Нурдака 1143 год.) <br>  Расшифрованный текст записи отмечен во вкладке "Рюкзак".
        `;
          b_mont = ``;
        }
        break;
      case "3,3,3,3,7,3,3,3,6":
      case "333373336":
        if (booolSA_MODS[1]) {
          au = true;
        }


        ta = true;
        mont = false;
        booolSA_S[5] = true;
        if (checc == "en") {
          b_au = `audio/en/vv6.mp3`;
          b_ta = `History of the War with the Giants
        Part&nbsp;6. <br> (Abridged version edited by Professor of Gnomology Garswer Nurdak 1143.) <br>  The transcribed text of the record is marked in the "Backpack" tab.`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/vv6.mp3`;
          b_ta = `История войны с великанами
        часть&nbsp;6. <br> (Сокращенная версия под редакцией профессора гномологии Гарсвера Нурдака 1144 год.) <br>  Расшифрованный текст записи отмечен во вкладке "Рюкзак".
        `;
          b_mont = ``;
        }
        break;
      case "8,8,8,1,2,4,8,8,8":
      case "888124888":
        au = false;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `Dwarf Mine Worker's Journal
        <br>  A jounal found deep beneath Station 16, it belonged to the workers who released something locked underground, many centuries ago.
        <br>  ...
        <br>  "Report 87 - 366 After weeks of hard work, we finally discovered the mithril vein. The miners were happy, they were jubilant, and there were tears in their eyes. The vein is far away from here, to the east. Since it was too far to carry the load to the ore mill, we made a railroad track for the wagons.
        Report 89 - 366. Since the discovery of the lode, we have gone through the adits in all directions. To the north of the ore outlet we found a strange cave. It seemed both natural and artificial at the same time. It smelled strongly of some kind of animal, and we thought it was the lair of a wild animal. Today is September 12, the beginning of the week of the first prince, and such a finding is not a good omen..."
        <br>  ...`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `Рабочий журнал гномьей шахты
        <br>  Жуннал найденый глубоко под станцией 16, он принадлежал рабочим, которые выпустили что-то запертое под землёй, много веков назад.
        <br>   …
        <br>   "Донесение 87 - 366-й год После долгих недель тяжкого труда мы наконец обнаружили мифрильную жилу. Рудокопы были счастливы, они ликовали, и на их глазах были слезы. Жила находится далеко отсюда, к востоку. Поскольку нести груз к рудной мельнице слишком далеко, мы провели рельсовый путь для вагонеток.
        Донесение 89 - 366-й год. С момента открытия жилы мы проделали штольни во всех направлениях. На севере от выхода руды мы нашли странную пещеру. Она казалась и природной, и искусственной одновременно. Там сильно пахло каким-то животным, и мы решили, что это логово дикого зверя. Сегодня 12 сентября, начало недели первого князя, и такая находка является недобрым предзнаменованием..."
        <br>   …`;
          b_mont = ``;
        }
        break;
      case "0,0,0,0,9,2,0,0,0":
      case "000092000":
        if (booolSA_MODS[1]) {
          au = true;
        }

        ta = true;
        mont = false;
        booolSA_S[6] = true;
        if (checc == "en") {
          b_au = `audio/en/vv7.mp3`;
          b_ta = `History of the War with the Giants
        Part&nbsp;7. <br> (Abridged version edited by Professor of Gnomology Garswer Nurdak 1143.) <br>  The transcribed text of the record is marked in the "Backpack" tab.`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/vv7.mp3`;
          b_ta = `История войны с великанами
        часть&nbsp;7. <br> (Сокращенная версия под редакцией профессора гномологии Гарсвера Нурдака 1144 год.) <br>  Расшифрованный текст записи отмечен во вкладке "Рюкзак".
        `;
          b_mont = ``;
        }
        break;
      case "5,5,5,5,5,6,5,5,1":
      case "555556551":
        au = false;
        ta = true;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `You read the last seventh entry on this computer, you managed to find all the paint cans and installed them here.
        <br>  Your curiosity knows no bounds.
        <br>  It's people like you who keep the world going!
        <br>  It took you a while to get back from the tube room, though. Here, to the computer. You spent YOUR own time thinking that you would be rewarded with something appropriate to your efforts, but, alas, here is only the word of a developer, without any benefits for you, hopefully your efforts will be rewarded in the future, in full.
        <br>  Thank you, dear player.
        <br> Sincerely,
        <br> Grand Master of the World Scrap Mechanic,
        <br> Scrappiy`;
          b_mont = `It's kind of a weird entry, why is the omnichannel creator (supreme deity) thanking some player?`;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `Вы читаете последнюю седьмую запись на данном компьютере, вы сумели найти все баллончики с краской и установили их сюда.
        <br>   Ваше любопытство не знает границ.
        <br>  Именно на таких людях как вы, держится мир!
        <br>  Хотя вы потратили время, чтобы вернуться из комнаты с трубами. Сюда, к компьютеру. Вы потратили СВОЁ личное время, думая, что вас вознаградят чем-то соответствующим вашем усилиям, но, увы, здесь только слова разработчика, без каких-либо плюшек для вас, надеюсь, ваши затраченные усилия в будущем будут вознаграждены, сполна.
        <br>  Спасибо вам, дорогой игрок.
        <br> С уважением,
        <br> Великий магистр мира Scrap Mechanic,
        <br> Scrappiy
        `;
          b_mont = `Какая-то странная запись, зачем всесоздатель благодарит какого-то игрока?`;
        }
        break;
      case "2,2,2,3,5,3,3,8,8":
      case "222353388":
        au = true;
        ta = false;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/third.mp3`;
          b_mont = `In my dream I dreamed of a statue, some big robot and said that something bad was coming. Apparently I was very tired last night, since I'm dreaming such nonsense.`;
        } else {
          b_au = `audio/ru/third.mp3`;
          b_mont = `Во сне мне приснилась статуя, какого-то большого робота и сказала, что грядёт что-то плохое. Видимо я сильно устал вчера вечером, раз мне такой бред снится.`;
        }
        break;
      case "481812":
        // au = true;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = `audio/ru/les.mp3`;
          b_ta = `...
            <br>Again, it is necessary to clear the forest of old trees, otherwise they may grow new.
            <br>...
            <br>I've been here for the fifth week now, nothing interesting.
            <br>Yesterday I found some old tape with the inscription "Huntsman", if I had a normal tape recorder, I listened to what it was about, it would be more interesting to guard the forest.
            <br>...
           <br> The lyrics of the song were invented by Andrey Knyazev to the music of Mikhail Gorshenev in 1091.
            <br>...`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/les.mp3`;
          b_ta = `
            ...
            <br>Снова надо очищать лес от старых деревьев, иначе они могут мешать рости новым.
            <br>...
            <br>Уже пяную неделю здесь нахожусь, ничего интересного.
            <br>Вчера нашёл какую-то старую касету с надписью "Егерь", был бы у меня нормальный магнитофон я бы послушал о чём она, было бы интереснее лес сторожить.
            <br>...
            <br> Текст песни был придуман Андреем Князевым на музыку Михаила Горшенёва в 1091 году. 
            <br>...`;
          b_mont = ``;
        }

        au = auter();
        break;
      case "1193717":
        // au = true;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = `audio/ru/zay.mp3`;
          b_ta = `...
            <br>Entry from the cook's log:
            <br>A song about Hares. Commandant Mortimer loved this song very much and we had to turn it on every time he came to the dining room in a bad mood.
            <br>...`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/zay.mp3`;
          b_ta = `
            ...
            <br>Запись из журнала повара:
            <br>Песня про Зайцев. Комендант Мортимер очень любил эту песню и нам приходилось включать её каждый раз когда он приходил в плохом настроении в столовую.
            <br>...`;
          b_mont = ``;
        }

        au = auter();
        break;
      case "6294351":
        // au = true;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = `audio/ru/ohr.mp3`;
          b_ta = `...
            <br>A commander's song for the morning exercise of recruits.
            <br>...`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/ohr.mp3`;
          b_ta = `
            ...
            <br>Командирская песня для утренней зарядки новобранцев.
            <br>...`;
          b_mont = ``;
        }

        au = auter();
        break;
      case "75213250":
        // au = true;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = `audio/ru/otp.mp3`;
          b_ta = `...
            <br>I'm going on vacation tomorrow, I don't even know what to take with me. It is necessary to include a suitable song.
            <br>...`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/otp.mp3`;
          b_ta = `
            ...
            <br>Завтра меня отправляют в отпуск, даже не знаю что с собой взять. Надо включить подходящую песню.
            <br>...`;
          b_mont = ``;
        }

        au = auter();
        break;
      case "10335051":
        // au = true;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = `audio/ru/kuk.mp3`;
          b_ta = `...
            <br>The record seized from the staff.
            <br>...`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/kuk.mp3`;
          b_ta = `
            ...
            <br>Изъятая у персонала запись.
            <br>...`;
          b_mont = ``;
        }

        au = auter();
        break;
      case "delete":
        localStorage.clear();
        sessionStorage.clear();
        break;
      case "607302314":
        booolSA_MODS[0] = true;
        document.getElementById("clos").style.display = 'none';
        booolSA_G[16] = true;
        if (checc == "en") {
          a = `Congratulations! You have found a modification for the Rafik 3 guide. You can read more about modifications in the Guide tab.`;
        } else {
          a = `Поздравляю! Вы нашли модификацию для справочника Рафик 3. Более подробно про модификации вы можете прочитать во вкладке Руководство.`;
        }
        alert(a);
        if (checc == "en") {
          a = `Modification for simplified input of color ciphers. Click on the button with the RGB palette, you will open a window for sequential color input. The input sequence is set first by the upper left corner of the color cipher, and at the end by the lower right, first from left to right, then down one line, etc.`;
        } else {
          a = `Модификация для упрощенного ввода цветных шифров. Нажмите на кнопку с RGB палитрой, у вас откроется окно последовательного ввода цветов. Последовательность ввода в начале задается верхним левым углом цветового шифра, а в конце нижним правым, то есть сначала слева направо, затем вниз на одну строку и т.д.`;
        }
        alert(a);
        break;
      case "1801801801411":
        booolSA_MODS[1] = true;
        if (checc == "en") {
          a = `Modification for voicing the text of some recordings. Programmer Cornel Auxerre removed the function from the first Draft, as it incorrectly placed stress marks. The connection of this experimental function occurs automatically, the voiced text will appear in the audio playback area.`;
        } else {
          a = `Модификация для озвучивания текста некоторых записей. Программист Корнел Осер изъял функцию из первого Рафика, так как она неправильно расставляла знаки ударения. Подключение данной экспериментальной функции происходит автоматически, озвученный текст появится в области воспроизведения аудиозаписей.`;
        }
        alert(a);
        break;
      case "90180272010":
        booolSA_MODS[2] = true;
        if (checc == "en") {
          a = `Modification for automatic page flipping to the nearest filled one. Installing a stepper motor modification allows the Rafiq to turn pages independently, skipping blank pages.`;
        } else {
          a = `Модификация для автоматического перелистывания страниц до ближайшей заполненной. Установка модификации шагового мотора позволяет Рафику самостоятельно перелистывать страницы, пропуская незаполненные страницы.`;
        }
        alert(a);
        break;
      case "admin127774":
        if (checc == "en") {
          a = confirm("You have entered the code to unlock the content of the first chapter of Space Adventures, you will open all the entries, notes and improvements available in this chapter and all your individual progress will be overwritten. Do you want to unlock all the content available in the first chapter?");
        } else {
          a = confirm("Вы ввели код раблокировки контента первой главы космических приключений, вы откроете все записи, заметки и улучшения доступные в данной главе и весь ваш индивидуальный прогресс перезапишется. Вы хотите разблокировать весь контент доступный в первой главе?");
        }

        if (a) {
          document.getElementById("clos").style.display = 'none';
          booolSA_MODS[0] = true;
          booolSA_MODS[1] = true;
          booolSA_MODS[2] = true;
          booolSA_S[0] = true;
          booolSA_S[1] = true;
          booolSA_S[2] = true;
          booolSA_S[3] = true;
          booolSA_S[4] = true;
          booolSA_S[5] = true;
          booolSA_S[6] = true;
          booolSA_S[18] = true;
          booolSA_S[19] = true;
          booolSA_S[20] = true;
          booolSA_G[2] = true;
          booolSA_G[3] = true;
          booolSA_G[5] = true;
          booolSA_G[8] = true;
          booolSA_G[9] = true;
          booolSA_G[10] = true;
          booolSA_G[11] = true;
          booolSA_G[12] = true;
          booolSA_G[13] = true;
          booolSA_G[14] = true;
          booolSA_G[15] = true;
          booolSA_G[16] = true;
          booolSA_G[17] = true;
        }

        break;
      case "022902908":
      case "0,2,2,9,0,2,9,0,8":
        au = true;
        ta = false;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = ``;
          b_mont = ` I didn’t even have time to take a break from work, and now I’m here again, I’ll have to ask for a raise, how
            just talk to crucian.
            <br>  After all, it's a big building, I don't know what and where it is yet
            inside. <br>  Checkpoint again, Kankin's guard is changing today, I wonder if he remembers
            I have to say hello to him.
            `;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = ``;
          b_mont = ` Даже отдохнуть от работы не успел, а теперь я снова здесь, надо будет прибавку попросить, как 
            только поговорю с карасём.
            <br>  Большое всё-таки здание, сам ещё не знаю, что и где находится 
            внутри. <br>  Снова пропускной пункт, сегодня смена охранника Канкина, интересно помнит ли он 
            меня, надо поздороваться с ним.
            `;
        }
        break;
      case "6606006066":
      case "6,6,0,6,0,0,6,0,6,6":
        au = true;
        ta = false;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = ``;
          ci = `Guard Kankin`;
          b_mont = ` Oh, Duncan is healthy, the crucian has been nervous since yesterday, probably waiting for you. The authorities ordered the plant to be closed and all or some employees should be given a day off due to earthquakes in the valley. <br>  While no one is around, Samil is updating the plant's system, so you need to add yourself to the database before he leaves, just don't come up with a complicated password or you'll forget it. <br>  It was good to see you.
            `;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = ``;
          ci = `Охранник Канкин`;
          b_mont = ` Ооо здорова Дункан, карась со вчерашнего дня какой-то нервный, наверное тебя ждёт. Начальство приказало закрыть завод и дать выходной всем или некоторым сотрудникам из-за землетрясений в долине. <br>  Пока  никого нет, Самиль обновляет систему завода, так что тебе нужно внести себя в базу данных, пока он не ушёл, только не придумывай сложный пароль, а то забудешь. <br>  Рад был тебя видеть.
            `;
        }
        break;
      case "999499394":
      case "9,9,4,9,9,3,9,4":
        au = true;
        ta = false;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = ``;
          ci = `Sysadmin Samil`;
          b_mont = ` Hello, I don't have time right now, don't bother me... ah..<br>   Oh hi Duncan, didn't recognize you. 
          <br>  Koras warned me about you, I'm busy right now, put yourself in the database yourself, I'll open the door to the server room for you 
          I'll open it when you're ready. <br> There is nothing complicated, click change password, come up with it and 
          save it. <br>  After that, you will get access to the terminals of the lower floors complex.
            `;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = ``;
          ci = `Сисадмин Самиль`;
          b_mont = ` Здравствуйте, у меня сейчас нет времени, не мешайте мне… а..<br>  О привет Дункан, не узнал тебя. 
          <br>  Корась предупредил меня о тебе, я сейчас занят, внеси себя в базу сам, когда будешь готов, я тебе дверь в серверную 
          открою. <br>  Там нет ничего сложного, нажми сменить пароль, придумай его и 
          сохрани. <br>  После этого получишь доступ к терминалам комплекса нижних этажей.
            `;
        }
        break;
      case "888111110":
      case "8,8,8,1,1,1,1,1,0":
        au = true;
        ta = false;
        mont = true;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = ``;
          ci = ``;
          b_mont = ` Trader Bulbar, a very enterprising dwarf, leading a monopolistic trade in the walls 
              the factory. <br>  He sells tools, potatoes and all sorts of small things. <br>  As payment prefers 
              accept ducats, although it is possible to negotiate with him on the barter method.
                `;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = ``;
          ci = ``;
          b_mont = ` Торговец Бульбар, очень предприимчивый гном, ведущий монополистическую торговлю в стенах 
              завода. <br>  Торгует инструментами, картошкой и всякой мелочью. <br>  В качестве оплаты предпочитает 
              принимать дукаты, хотя с ним можно договориться на бартерный метод. 
                `;
        }
        break;
      case "03045023":
      case "3045023":
        au = false;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `Entry from 19.10.47 <br>  ...<br>  The elevator was turned off again, well, why should the key components be removed. I understand the security of the upper
          floors may be important, and those who work there have the opportunity to arrive through the roof
          buildings and going down stairs, but ordinary workers do not have such a privilege. It's nonsense
          who needs what in offices to make access to them so difficult.
          <br>  ...`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `Запись от 19.10.47г <br>  ...<br>  Опять лифт отключили, ну зачем ключ компоненты убирать. Я понимаю безопасность верхних этажей может быть и важна, а у тех кто там работает есть возможность прибывать через на крышу здания и спускаться по лестнице, но у простых рабочих такой привилегии нет. Бред какой-то, кому  и что нужно в офисах, чтобы так усложнять доступ к ним.<br>  ...`;
          b_mont = ``;
        }
        break;
      case "121024":
        au = false;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `Entry from 17.10.47. <br>...<br>  Commander Dolgopuk, the seismic activity of the valley is beyond the norm. For safety reasons, it is required to declare three non-working days for the plant's personnel, as well as to de-energize the main power supply system. <br>  When the elevator is turned off, for emergency use, it is necessary to use fuse components, they are located on the lower floor of the complex, place them in special holes in the floor near the elevator doors. <br>  To activate the components, repaint them white. <br>...<br>  Engineer: Pipkin K.T..
            <br>  ...`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `Запись от 17.10.47г. <br>...<br>  Командир Долгопук, сейсмическая активность долины выходит за рамки нормы. В целях безопасности требуется объявить три нерабочих дня для персонала завода, а также обесточить основную систему питания. <br>  При отключении лифта, для экстренного его использования необходимо использовать компоненты-предохранители, они находятся на нижнем этаже комплекса, поместите их в специальные отверстия в полу у дверей лифта. <br>  Для активации компонентов перекрасьте их в белый цвет. <br>...<br>  Инженер: Пипкин К.Т.`;
          b_mont = ``;
        }
        break;
      case "04515441":
      case "4515441":
        au = false;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = `audio/en/.mp3`;
          b_ta = `A record of a retired MGDS employee.
            <br>   …
            <br> Stupid security system, what kind of idiot came up with the idea of putting and generally came up with a sound 
            the lock, I can't get into the server room on my own for the fourth day, I have to ask my 
            Samil's disciple to open this door. I built myself a dictaphone and left it in the garage so as not to 
            forget the melody from the castle, if anyone needs it.
            <br>  That's right, old Dolran says that protection should be done from the ideas of the authorities, and not from imaginary ones 
            detractors.
            <br>  …`;
          b_mont = ``;
        } else {
          b_au = `audio/ru/.mp3`;
          b_ta = `Запись уволившегося сотрудника ВГПК.
            <br>   …
            <br>  Дурацкая система безопасности, какой идиот придумал ставить и вообще придумал звуковой 
            замок, я четвертый день не могу самостоятельно попасть в серверную, приходится просить моего 
            ученика Самиля открывать эту дверь. Я собрал себе диктофон и оставил его в гараже, чтобы не 
            забыть мелодию от  замка, если кому-нибудь понадобится.
            <br>  Правильно старина Долран говорит, что от идей начальства надо защиту делать, а не от мнимых 
            недоброжелателей.
            <br>  …`;
          b_mont = ``;
        }

        booolSA_G[18] = true;
        break;

      case "2114171":
        if (checc == "en") {
          alert('Congratulations, you have found a modification of the Communication Module for your Rafik directory');
        } else {
          alert('Поздравляю, вы нашли модификацию Модуль связи для своего справочника Рафик');
        }

        booolSA_MODS[3] = true;
        Ans = 0;
        document.getElementById("closd").style.display = 'none';

        QvSA = "FirstN";
        break;
      case "0,2,1,3,4,1,4,4,2":
      case "021341442":
        if (checc == "en") {
          alert('Access denied!');
        } else {
          alert('Ваш начальник что-то вам написал, откройте модуль диалогов чтобы ответить ему.');
        }

        QvSA = "Koras";
        break;
      case "admin53642762":
        for (let index = 2; index < booolSA_G.length; index++) {
          booolSA_G[index] = true;
        }
        for (let index = 0; index < booolSA_S.length; index++) {
          booolSA_S[index] = true;
        }
        break;
      case "Space":
        if (checc == "en") {
          pasvord = prompt('Enter the confirmation password:');
        } else {
          pasvord = prompt('Введите пароль подтверждения:');
        }

        if (pasvord == "Adventures") {
          au = false;
          ta = true;
          mont = false;
          if (checc == "en") {
            b_au = `audio/en/.mp3`;
            b_ta = `The Creator welcomes you!`;
            b_mont = ``;
          } else {
            b_au = `audio/ru/.mp3`;
            b_ta = `Содатель приветствует вас!`;
            b_mont = ``;
          }
        } else {
          if (checc == "en") {
            alert('Access denied!');
          } else {
            alert('В доступе отказано!');
          }
        }

        break;
      case "Rafik":
      case "rafik":
      case "Рафик":
      case "рафик":
        au = false;
        ta = true;
        mont = false;
        if (checc == "en") {
          b_au = ``;
          if (cmode == "SA") {
            b_ta = `Rafik 3 is a device that is the latest version of a portable reference book. Unlike the previous version, he has an artifact implanted in his body - the "Eye of Angnor", left after the war with the giants. This item somehow violates the invisible fabric of time and gives the directory access to currently existing records or to those that will appear in it in the future. This does not mean that with the help of the device you can find out the answer to any question, but only strictly defined information, access to which is encrypted in time streams, which in a sense the eye sees.`;
          } else b_ta = `Rafik 3 is a special modification of a portable reference book that allows you to decipher almost any information from the world around us, not only in the present, but also in the future. Access to all kinds of audio or video recordings, as well as notes and notes is provided by the amazing ability of one artifact called the "Eye of Angnor". The artifact itself is not of particular interest, except to collectors of old or rare items. The eye was created by Giants, given and implanted to the traitor of the dwarf family, Angar Tallinn. After that, the eye, cruelly torn out and given to study, lay idle for a long time, until the scientist Balenvur Muntagoris decided to mount it with a portable Rafik 2.6., revealing its true potential. 4 years after its creation, the Commonwealth became interested in it and bought it from Balenvur for a huge sum of money.`;
          b_mont = ``;
        } else {
          b_au = ``;
          if (cmode == "SA") {
            b_ta = `Рафик 3- устройство, представляющее собой новейшую версию, портативного справочника. В отличие от предыдущей, своей версии он имеет имплантированный в свой корпус артефакт - " Глаз Ангнора", оставшийся после войны с великанами. Данный предмет каким-то образом нарушает незримую ткань времени и даёт справочнику доступ к уже существующим в настоящее время записям или к тем, которые появятся в нём в бубущем. Это не означает, что с помощью устройства можно узнать ответ на любой вопрос, а только строго определённую информацию, доступ к которой зашифрован во временных потоках, которые в некотором смысле видит глаз.`;
          } else b_ta = `Рафик 3- особая модификация портативного справочника, позволяющая расшифровывать практически любую информацию из окружающего нас мира, не только в настоящем, но и в будущем. Доступ ко всяким звуковым или видео записям, а также к запискам и заметкам обеспечивается потрясающей способностью одного артефакта под названием - " Глаз Ангнора". Сам по себе артефакт не представляет особого интереса, разве что коллекционерам старых или редких предметов. Глаз был создан Великанами, подарен и имплантирован предателю гномьего рода Ангару Таллинскому. После чего жестоко вырванный и отданный на изучение глаз, долгое время лежал без дела, пока ученый Баленвур Мунтагорис не решил вмонтировать его с портативный Рафик 2.6., открыв его истинный потенциал. Через 4 года после его создания, Содружество заинтересовалось им и выкупила его у Баленвура за огромную сумму денег.`;
          b_mont = ``;
        }
        break;
      case "help":
        // pasvord = prompt('Сколько тебе лет?');
        DialogSA();
        // au = false;
        // ta = false;
        // mont = false;
        // if (checc == "en") {
        //   b_au = `audio/en/.mp3`;
        //   b_ta = ``;
        //   b_mont = ``;
        // } else {
        //   b_au = `audio/ru/.mp3`;
        //   b_ta = ``;
        //   b_mont = ``;
        // }
        break;
      default:
        if (checc == "en") {
          alert("Nothing was found for your query.");
        } else {
          alert("По вашему запросу ничего не найдено.");
        }
    }

    localStorage.setItem(`Mbool`, JSON.stringify(booolSA_S));
    localStorage.setItem(`Mbool1`, JSON.stringify(booolSA_G));
    localStorage.setItem(`Mds`, JSON.stringify(booolSA_MODS));

    if (au) {
      document.getElementById("mega_audio").src = b_au;
    }

    if (ta) {
      document.getElementById("ttx").innerHTML = b_ta;
    }

    if (mont) {
      if (checc == "en") {
        alert("In the notes tab, a new entry has appeared.");
      } else {
        alert("Во вкладке заметки, появилась новая запись.");
      }
      Mont(b_mont);
    }

    document.getElementById("Ytu").value = ``;
  }

  function dialo() {
    if (coling2) {
      coling2 = false;
      document.getElementById("ttx").innerHTML = "";
      document.getElementById("Dial").style.display = 'none';
    } else {
      coling2 = true;
      document.getElementById("ttx").innerHTML = "";
      document.getElementById("Dial").style.display = '';
      DialogSA();
    }
  }

  function scr1MT() {

  }

  function auter() {
    let a = "";
    if (checc == "en") {
      a = confirm("Attention!!! This audio recording may contain copyrights, which may affect verification from YouTube, twitch, etc. You will listen to the notes at your own risk, the author is not responsible for copyright infringement. Play the recording?");
    } else {
      a = confirm("Внимание!!! Данная аудиозапись может содержать авторские права, что может повлиять на проверку от youtube, twitch и т.д. Вы будете слушать запись на свой страх и риск, автор не несет ответственности за нарушение авторских прав на этих платформах. Воспроизвести эту запись?");
    }
    return a;
  }

  function Ans1() {
    Ans = 1;
    ADialogSA();
  }

  function Ans2() {
    Ans = 2;
    ADialogSA();
  }

  function Ans3() {
    Ans = 3;
    ADialogSA();
  }

  function Ans4() {
    Ans = 4;
    ADialogSA();
  }

  function Ans5() {
    Ans = 5;
    ADialogSA();
  }

  function Ans6() {
    Ans = 6;
    ADialogSA();
  }

  function Ans7() {
    Ans = 7;
    ADialogSA();
  }

  function Ans8() {
    Ans = 8;
    ADialogSA();
  }

  function Ans9() {
    Ans = 9;
    ADialogSA();
  }

  function ADialogSA() {
    let a = true;
    switch (QvSA) {
      case "FirstN":
        switch (Ans) {
          case 4:
            QvSA = "FirstN1";
            break;
          default:
            QvSA = "FirstN";
            break;
        }
        break;
      case "FirstN1":
        switch (Ans) {
          case 1:
            QvSA = "FirstN1";
            break;
          default:
            QvSA = "FirstN2";
            break;
        }
        break;
      case "Lara1":
        switch (Ans) {
          case 5:
            a = false;
            coling2 = true;
            document.getElementById("ttx").innerHTML = "";
            dialo();
            break;
          default:
            QvSA = "Lara1";
            break;
        }
        break;
      case "Lara2":
        switch (Ans) {
          case 5:
            AnsTime = 0;
            QvSA = "Lara3";
            break;
          default:
            QvSA = "Lara2";
            break;
        }
        break;
      case "Lara3":
        switch (Ans) {
          case 5:
            AnsTime = 0;
            a = false;
            coling2 = true;
            document.getElementById("ttx").innerHTML = "";
            QvSA = "znakomstvo";
            dialo();
            break;
          default:
            QvSA = "Lara3";
            break;
        }
        break;
      case "Koras":
        QvSA = "корась1";
        break;
      case "корась1":
        switch (Ans) {
          case 2:
            QvSA = "корасьВозмущение";
            break;
          default:
            QvSA = "корасьСогласие";
            break;
        }
        break;
      case "корасьВозмущение":
        switch (Ans) {
          case 2:
            QvSA = "корасьСогласие";
            break;
          default:
            QvSA = "корасьУступок";
            break;
        }
        break;
      case "корасьУступок":
        QvSA = "корасьСогласие";
        break;
      case "корасьСогласие":
        a = false;
        coling2 = true;
        document.getElementById("ttx").innerHTML = "";
        dialo();
        break;
      case "FirstN2":
        a = false;
        coling2 = true;
        document.getElementById("ttx").innerHTML = "";
        dialo();
        break;
      default:
        if (checc == "en") {
          alert("No new messages!");
        } else {
          alert("Новых сообщений нет!");
        }
        QvSA = "znakomstvo";
        a = false;
        coling2 = true;
        document.getElementById("ttx").innerHTML = "";
        dialo();
        break;
    }

    if (a) {
      DialogSA();
    }
  }

  function DialogSA() {
    let b_ta = "", b_mont = "";
    switch (QvSA) {
      case "FirstN":
        if (checc == "en") {
          b_ta = "";
        } else {
          switch (Ans) {
            case 0:
              b_ta = `Здравствуйте, модуль связи успешно установлен. Для продолжения введите имя пользователя и должность.`;
              break;
            case 1:
              b_ta = `Неверные данные, в настоящее время предприятием ВГПК командует генерал Долгопук Н.Н.. Введите настоящее имя и должность.`;
              break;
            case 2:
              b_ta = `Неверные данные, должность садовник на территории ВГПК упразднена в 1238 году. Введите настоящее имя и должность.`;
              break;
            case 3:
              b_ta = `Неверные данные, такой персонал комплекса уже в сети и он учавствовал в моей настройке, не пытайтеcь выдать себя за него. Введите настоящее имя и должность.`;
              break;
            default:
              b_ta = `Ведущий инженер-механик находится уже в сети и это не ВЫ! Введите настоящее имя и должность.`;
              break;
          }
          ci = `
  <div class="anD" onclick="Ans1()">&#8226; Дункан командир ВГПК.</div>
  <div class="anD" onclick="Ans2()">&#8226; Дункан садовник.</div>
  <div class="anD" onclick="Ans3()">&#8226; Самиль сисадмин.</div>
  <div class="anD" onclick="Ans4()">&#8226; Дункан инженер-исследователь второго ранга.</div>
  <div class="anD" onclick="Ans5()">&#8226; Дункан ведущий инженер-механик.</div>
  `;
        }

        break;
      case "FirstN1":
        if (checc == "en") {
          b_ta = "";
        } else {
          switch (AnsTime) {
            case 0:
              b_ta = `Ваши данные найдены в системе, господин Дункан ...`;
              break;
            case 1:
              b_ta = `... ваш профиль сформирован ...`;
              break;
            case 2:
              b_ta = `... информация и контакты направлены в базу данных... `;
              break;
            case 3:
              b_ta = `Сеть КТС (континентальная техническая связь) успешно 
              подключена к вашему устройству Рафик 2.0000`;
              break;
            case 4:
              b_ta = `00&&&₽@$ 0..000`;
              break;
            case 5:
              b_ta = `Ошибка`;
              break;
            default:
              b_ta = ` В базе данных ВГПК нет прошивки вашего Рафика или технический сбой. Компания ВГПК постарается исправить ошибку в ближайшее время.
              `;
              break;
          }
          if (AnsTime < 6) {
            AnsTime++;
            ci = `
            <div class="anD" onclick="Ans1()">&#8226; ...</div>
            `;
          } else {
            AnsTime = 0;
            ci = `
            <div class="anD" onclick="Ans2()">&#8226; ...</div>
            `;
          }
        }

        break;
      case "FirstN2":
        if (checc == "en") {
          b_ta = "";
        } else {
          b_ta = `Настройка завершена.
          <br>  Список контактов пуст.
          <br>  Ваше устройство готово принимать входящие вызовы.`;
          ci = `
          <div class="anD" onclick="Ans2()">&#8226; ...</div>
          `;
        }
        Qv = "Lara1";
        if (dialTime) {
          setTimeout(INVA, 50000);
          dialTime = false;
        }
        break;
      case "Lara1":
        if (checc == "en") {
          b_ta = "";
        } else {
          switch (AnsTime) {
            case 0:
              b_ta = `Ох, приветик Дункан, это Лара секретарша Петра Константиновича. Я увидела твой профиль в КТС 
              и решила позвонить тебе, как ты там?`;
              ci = `
            <div class="anD" onclick="Ans1()">&#8226; Да, привет, вот собираюсь запустить лифт на верхние этажи.</div>
            `;
              break;
            case 1:
              b_ta = `О, ты уже в здании, хорошо, надеюсь ты не сильно утомился от дороги.`;
              ci = `
              <div class="anD" onclick="Ans1()">&#8226; Всё хорошо, я чувствую в себе прилив сил.</div>
              <div class="anD" onclick="Ans2()">&#8226; Ну так нормально.</div>
              <div class="anD" onclick="Ans3()">&#8226; Дорога была тяжёлой.</div>
              <div class="anD" onclick="Ans4()">&#8226; А, не важно, то одно, то другое.</div>
              `;
              break;
            case 2:
              b_ta = `Если захочешь рассказать мне о своем путешествии сюда, то можем поговорить за чашечкой чая, 
              как освободишься.`;
              ci = `
              <div class="anD" onclick="Ans1()">&#8226; Отличная идея.</div>
              <div class="anD" onclick="Ans2()">&#8226; Хм, нужно как-нибудь воспользоваться твоим предложением.</div>
              <div class="anD" onclick="Ans3()">&#8226; Постараюсь не забыть о твоём предложении. </div>
              <div class="anD" onclick="Ans3()">&#8226; Я не люблю чай.</div>
              `;
              break;
            default:
              b_ta = ` Ну не хочу отвлекать тебя, пока :) 
              `;
              ci = `
              <div class="anD" onclick="Ans5()">&#8226; ...</div>
              `;
              break;
          }

          if (AnsTime < 3) {
            AnsTime++;
          } else {
            AnsTime = 0;
            Qv = "Lara2";
            if (dialTime) {
              setTimeout(INVA, 11000);
              dialTime = false;
            }
          }
        }

        break;
      case "Lara2":
        if (checc == "en") {
          b_ta = "";
        } else {
          switch (AnsTime) {
            case 0:
              b_ta = `Ой, снова привет, чуть не забыла, так как ты только недавно подключился к 
              сети КТС, хочу спросить - тебе знаком функционал модуля связи?`;
              ci = `
            <div class="anD" onclick="Ans5()">&#8226; Да.</div>
            <div class="anD" onclick="Ans1()">&#8226; Нет, можешь рассказать?</div>
            `;
              break;
            case 1:
              b_ta = `Конечно могу. Данный модуль позволяет, как не трудно догадаться, общаться на расстоянии. Тебе 
              могут звонить другие гномы у которых есть такой же модуль, как например сделала я.`;
              ci = `
              <div class="anD" onclick="Ans1()">&#8226; ...</div>
              `;
              break;
            case 2:
              b_ta = ` Также ты сам можешь начать разговор с кем-нибудь, у кого есть этот модуль, для этого ты должен выбрать 
                с кем хочешь поговорить, из списка доступных тебе контактов. `;
              ci = `
                <div class="anD" onclick="Ans1()">&#8226; ...</div>
                `;
              break;
            case 3:
              b_ta = `Наверное у тебя их ещё нет, но вскоре, как я думаю, появятся. Кроме этого, твой собеседник должен подтвердить вызов, если он 
                  не занят и может говорить или находится в зоне сети.`;
              ci = `
                  <div class="anD" onclick="Ans1()">&#8226; ...</div>
                  `;
              break;
            default:
              b_ta = `Скорее всего ты сам уже об этом догадался, но мне было приятно тебе объяснить. Тебе всё было понятно? 
              `;
              ci = `
              <div class="anD" onclick="Ans5()">&#8226; Да.</div>
              `;
              break;
          }

          if (AnsTime < 4) {
            AnsTime++;
          } else {
            AnsTime = 0;
          }
        }

        break;
      case "Lara3":
        if (checc == "en") {
          b_ta = "";
        } else {
          switch (AnsTime) {
            case 0:
              b_ta = `Отлично, а вот ещё один вопрос, тебе Самиль или Бульбар, ничего про коридор после лифта не говорили?`;
              ci = `
            <div class="anD" onclick="Ans1()">&#8226; Нет, не говорили.</div>
            `;
              break;
            case 1:
              b_ta = `Петр Константинович ограничил проход в коридоре после лифта, установив панель с кнопками. Код от двери 
              на данный момент времени знают только оставшиеся сотрудники верхних этажей.`;
              ci = `
              <div class="anD" onclick="Ans1()">&#8226; ...</div>
              `;
              break;
            case 2:
              b_ta = `Так вот, запиши себе куда-нибудь: 137584296.`;
              ci = `
                <div class="anD" onclick="Ans1()">&#8226; ...[Надо запомнить или записать куда-нибудь]...</div>
                `;
              break;
            default:
              b_ta = `Ладно, мне пора браться за работу, с тобой говорить хорошо, а количество документов само не убавится. Пока ;) 
              `;
              ci = `
              <div class="anD" onclick="Ans5()">&#8226; Пока...</div>
              `;
              break;
          }

          if (AnsTime < 3) {
            AnsTime++;
          } else {
            AnsTime = 0;
          }
        }

        break;
      case "Koras":
        if (checc == "en") {
          b_ta = "";
        } else {
          b_ta = "Привет Дункан, охранник Канкин мне доложил, что ты вошёл в комплекс, надеюсь ты не сильно устал от дороги.";
          ci = `
  <div class="anD" onclick="Ans1()">&#8226; Здравствуйте Петр Константинович, дорога была не самая лёгкая. Землетрясение в восточном Дарквеле повредило мост и мне пришлось ехать через Принфог.</div>
  <div class="anD" onclick="Ans2()">&#8226; Нормально, давай ближе к делу, зачем ты меня так срочно вызвал?</div>
  <div class="anD" onclick="Ans3()">&#8226; Здравствуйте, всё хорошо, э.., а почему вы мне пишите? Я уже недалеко от вашего кабинета, сейчас поднимусь, и мы сможем нормально поговорить.</div>
  <div class="anD" onclick="Ans4()">&#8226; Здравствуйте, плохо до вас добираться, то землетрясение, то порталы и в добавок машина сломалась.</div>
  `;
        }

        break;
      case "корась1":
        b_ta = "";
        if (checc == "en") {
          b_ta = "";
        } else {
          switch (Ans) {
            case 1:
              b_ta = `Да, я слышал, что землетрясение повредило пару станций в долине. Хм, если я не ошибаюсь ты в Принфоге учился до Завода, старина Каспар так и не вернулся туда? Ну не важно, вернёмся к делу.`;
              break;
            case 2:
              b_ta = `Так, не ты, а вы, не забывай кто твой непосредственный руководитель. <br>  Я уже забыл какой у тебя скверный характер. Дело действительно срочное и важное для нашего предприятия.<br>  Приступим к делу.`;
              break;
            case 3:
              b_ta = `Ко мне можешь не идти, лучше сразу поднимайся по лестнице на крышу, через обучающий класс. <br>  Лифт сломался и механик Долран уже 5 часов чинит его и лучше не отвлекать инженера от дела. Мне легче в таком формате объяснить тебе причину твоего прибытия.`;
              break;
            default:
              b_ta = `Ну всё в жизни бывает, я как-то свой личный вертолёт утопил, в озере девяти, а потом ... в прочем .. хм, не буду тебя отвлекать пустой болтовнёй. Перейдём к делу.`;
              break;
          }

          b_ta = b_ta + `<br>  В прошлый вторник, генерал написал мне, что командир станции ВЕГа7 замучил его какими-то сообщениями. <br>  В отчёте командир писал о пропаже оборудования и о рассказах рабочих, как они слышали странные звуки и как один инженер якобы видел довоенного робота в вентиляции. <br>  В общем генерал отправил запрос на лучшего инженера, смелого и находчивого гнома, который готов отправиться на ВЕГу7. <br>   Ну лучше тебя мне не найти, твоя кандидатура идеально подходит для задания.`;
          ci = `
    <div class="anD" onclick="Ans1()">&#8226; Спасибо за оказанную мне честь, я с радостью выполню задание.</div>
    <div class="anD" onclick="Ans2()">&#8226; Ха, конечно я согласен отправиться на опасное задание непонятно куда и зачем, по просьбе моего начальника Петра Константиновича! .... Шутка... Мне и на Нексурте не плохо. Твёрдая земля под ногами, лучше вакуума в ж... Так что нет!</div>
    <div class="anD" onclick="Ans3()">&#8226; Спасибо за предоставленную мне возможность, но я не готов так просто отправиться в космос, на столь важное задание. К тому же я простой инженер, какая там от меня польза?</div>
    `;
        }

        break;
      case "корасьВозмущение":
        if (checc == "en") {
          b_ta = "";
        } else {
          b_ta = `Дункан, за такое обращение к начальству, я могу просто уволить тебя, но твой ум и навыки никому не заменить. <br>  В данный момент это не просьба, а приказ, последствий нарушения, которого никто из нас не хочет. Чтобы не доводить до крайностей, предлагаю выбрать себе вознаграждение за выполнение задания. <br>   Что ты хочешь получить, после возвращения?`;
          ci = `
      <div class="anD" onclick="Ans1()">&#8226; Повышения в должности.</div>
      <div class="anD" onclick="Ans3()">&#8226; Новую машину.</div>
      <div class="anD" onclick="Ans4()">&#8226; Разрешить пнуть тебя, на следующем собрании ВГПК.</div>
      <div class="anD" onclick="Ans5()">&#8226; Ну минимум 10 000 дукатов.</div>
      <div class="anD" onclick="Ans6()">&#8226; Удиви меня, что ты готов мне предложить?</div>
      <div class="anD" onclick="Ans2()">&#8226; Ладно, раз вы без меня никак, то ничего мне от тебя не надо.</div>
      `;
        }

        break;
      case "корасьУступок":
        if (checc == "en") {
          b_ta = "";
        } else {
          switch (Ans) {
            case 1:
              b_ta = `Хм, если я повышу тебя до ведущего инженера отдела промышленного оборудования, ты согласишься отправиться на задание?`;
              break;
            case 3:
              b_ta = `Как я помню у тебя был старенький автомобиль Пирожок с гибридным двигателем, если я предоставлю тебе современную модель Ватрушка, ты согласишься отправиться на задание?`;
              break;
            case 4:
              b_ta = `И речи быть не может, могу предложить один пинок сразу после твоего возвращения, в моём кабинете, без лишних глаз. Согласен?`;
              break;
            case 5:
              b_ta = `Десять это много, почти четверть от моего заработка. Вознаграждения в 5000 дукатов будет достаточно, для выполнения задания?`;
              break;
            default:
              b_ta = `У меня есть пачка шоколадных конфет, сухарики с сыром и чипсы с грибами,..так, ... так.., ещё газировка есть, сразу после прибытия получишь, готов?`;
              break;
          }

          b_ta = b_ta + `<br>  Но, ты будешь соблюдать уважение к вышестоящим по званию и обращаться ко мне на вы.`;
          ci = `
        <div class="anD" onclick="Ans2()">&#8226; Я готов принять ваши условия и отправиться на задание.</div>
        `;
        }

        break;
      case "корасьСогласие":
        if (checc == "en") {
          b_ta = "";
        } else {
          switch (Ans) {
            case 1:
              b_ta = `Благодарю за преданность общему делу. К твоему возвращению поговорю с генералом, может организую тебе награду за верную службу в ВГПК.`;
              break;
            case 2:
              b_ta = `Ну...договорились.`;
              break;
            default:
              b_ta = `Раз мне было поручено найти достойного кандидата, я уверен, что ты справишься с поставленной задачей. Там не должно быть ничего сверхсложного, приключение на 20 часов, туда, обратно и готово. Может даже награду у генерала для тебя попрошу`;
              break;
          }

          b_ta = b_ta + `<br>   И ещё, как ты понимаешь без минимальной подготовки тебя нельзя отправлять на корабле в открытый космос. <br>   Так, что лётчик Увард решила провести тебе ускоренный курс подготовки пилота и проверить твои навыки перед полётом. <br>  Не понимаю зачем тебя проверять, но отказать я ей не смог. <br>   Она будет ждать тебя на крыше Завода, не знаю что именно она подготовила, но ты должен справиться. <br>   Удачи. <br>   До встречи.`;
          ci = `
          <div class="anD" onclick="Ans2()">&#8226; До встречи.</div>
          `;

          b_mont = "Задание Корася заключается в посещении космической станции ВЕГА7, чтобы удостовериться, что там всё впорядке. Когда я вернусь, точно уволюсь и займусь фермерством. Описанные в отчёте командира странности, немного пугают меня, но раз я согласился, надо идти до конца."
          Mont(b_mont)
        }

        break;


      case "znakomstvo":
        if (checc == "en") {
          b_ta = "";
        } else {
          b_ta = "";
        }
        ci = `
<div class="anD" onclick="Ans1()">&#8226; ... </div>
`;
        break;
      default:
        if (checc == "en") {
        } else {
          alert("ERROR!!!");
        }
        break;
    }

    document.getElementById("ttx").innerHTML = b_ta;
    document.getElementById("Dial").innerHTML = "";
    setTimeout(readDial, 500);
  }

  function readDial() {
    document.getElementById("Dial").innerHTML = ci;
  }

  function INVA() {
    document.getElementById("invA").innerHTML = `<audio src="audio/PRUY.mp3" autoplay loop preload="auto"></audio>`;
    document.getElementById("invB").style.display = '';
  }
  function Call() {
    document.getElementById("invA").innerHTML = ``;
    document.getElementById("invB").style.display = 'none';
    QvSA = Qv;
    setTimeout(dialo, 500);
    dialTime = true;
  }

}