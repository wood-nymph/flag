document.getElementById(`start`).onclick = funck;

function funck() {
    for(let j = 1; j<=10; j++) {
        let Hello = [];
        Hello[0] = `Hello HTML`;
        Hello[1] = `Hello CSS`;
        Hello[2] = `Hello JS`;
        let rand = Hello.sort(func);
        function func(a, b) {
          return 0.5 - Math.random();
        }
        let value = rand;
        document.write(`<font color="#000000">` + value[0] + `</font>` + `<br \/>` + `<font color="red">` + value[1] + `</font>` + `<br \/>` + `<font color="#FFD700">` + value[2] + `</font>` + `<br \/>` + `<br \/>`);
    }
    document.write();
}

document.getElementById(`start1`).onclick = funck1;

function funck1() {
    for(let j = 1; j<=10; j++) {
        let Hello = [];
        Hello[0] = `Hello HTML`;
        Hello[1] = `Hello CSS`;
        Hello[2] = `Hello JS`;
        let rand = Hello.sort(func);
        function func(a, b) {
          return 0.5 - Math.random();
        }
        let value = rand;
        document.write(`<font color="#DB0000">` + value[0] + `</font>` + `<br \/>` + `<font color="#00008B">` + value[1] + `</font>` + `<br \/>` + `<font color="#FFA500">` + value[2] + `</font>` + `<br \/>` + `<br \/>`);
    }
    document.write();
}

document.getElementById(`start2`).onclick = funck2;

function funck2() {
    for(let j = 1; j<=10; j++) {
        let Hello = [];
        Hello[0] = `Hello HTML`;
        Hello[1] = `Hello CSS`;
        Hello[2] = `Hello JS`;
        let rand = Hello.sort(func);
        function func(a, b) {
          return 0.5 - Math.random();
        }
        let value = rand;
        document.write(`<font color="#F5C700">` + value[0] + `</font>` + `<br \/>` + `<font color="#327B48">` + value[1] + `</font>` + `<br \/>` + `<font color="#DB0000">` + value[2] + `</font>` + `<br \/>` + `<br \/>`);
    }
    document.write();
}