const getData = () => {
    let prefix = document.getElementById("prefix").value;
    return { prefix };
  };
  
  const generateNumber = (prefix) => {
    var st = ["J", "Z", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
    var fg = ["X", "W", "U", "T", "R", "Q", "P", "N", "M", "L", "K"];
    var m = ["X", "W", "U", "T", "R", "Q", "P", "N", "J", "L", "K"];
  
    let nric = "";
  
    let number = `${Math.floor(Math.random() * 1000000) + 1000000}`;
    let weight = [];
  
    weight[0] = parseInt(number[0], 10) * 2;
    weight[1] = parseInt(number[1], 10) * 7;
    weight[2] = parseInt(number[2], 10) * 6;
    weight[3] = parseInt(number[3], 10) * 5;
    weight[4] = parseInt(number[4], 10) * 4;
    weight[5] = parseInt(number[5], 10) * 3;
    weight[6] = parseInt(number[6], 10) * 2;
  
    let weightSum = weight.reduce((a, b) => a + b, 0);
  
    if (prefix === "T" || prefix === "G") {
      weightSum += 4;
    }
    if (prefix === "M") {
      weightSum += 3;
    }
    console.log(weightSum % 11);
  
    if (prefix === "T" || prefix === "S") {
      nric = `${prefix}${number}${st[weightSum % 11]}`;
    }
    if (prefix === "G" || prefix === "F") {
      nric = `${prefix}${number}${fg[weightSum % 11]}`;
    }
    if (prefix === "M") {
      nric = `${prefix}${number}${m[weightSum % 11]}`;
    }
    return nric;
  };
  
  document.getElementById("prefix").addEventListener("change", () => {
    let { prefix } = getData();
    let number = generateNumber(prefix);
    document.getElementById("nric").value = number;
  });
  document.getElementById("generate").addEventListener("click", () => {
    let { prefix } = getData();
    let number = generateNumber(prefix);
    document.getElementById("nric").value = number;
  });
  
  let { prefix } = getData();
  let number = generateNumber(prefix);
  document.getElementById("nric").value = number;
  