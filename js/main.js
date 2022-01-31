function roborogers(string, name) {
  let loopedArray = [];
  const number = parseInt([string]);
  if (number[0] === 0) {
    loopedArray.push(string);
  }
  for (let i=0; i <= number; i++) {
    if (i.toString().includes('3')) {
      loopedArray.push("won't you be my neighbor? ");
    }
    else if (i.toString().includes('2')) {
      loopedArray.push("boop ");
    }
    else if (i.toString().includes('1')) {
      loopedArray.push("beep ");
    }
    else {
      loopedArray.push(i.toString() + " ");
    }
  }
  typeName(loopedArray, name);
  
}

function waitForNm() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}
function waitForMs() {
  return new Promise(resolve => setTimeout(resolve, 100))
}

async function typeName(sentence, name) {
  const letters = name.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs();
    $("#output-name").append(letters[i]);
    i++
  }
  await waitForNm();
  typeWriter(sentence);
}

async function typeWriter(sentence) {
  const letters = sentence.toString().replace(/[,.]/g,"").split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs();
    $("#output").append(letters[i]);
    i++
  }
  return;
}

$(document).ready( function() {
  $("#speak").on("click", function() {
    let numString = $("#user-input").val();
    let name = ("Hello " + $("#name").val());
    $("#output").html("");
    $("#output-name").html("");
    roborogers(numString, name);
  });
});

