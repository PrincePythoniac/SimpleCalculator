let cal = ""
let res = ""

function calc(input) {
    cal += input
    const doc = document.querySelector('.calcs');
    doc.innerText = concat(cal.replace('/100','%'))
      }
      
function clear() {
    cal = ''
    res = ''
    calc(cal)
}

function equal() {
    res = eval(cal)
        document.querySelector('.calcs').innerText = res;
    cal = String(res)
}
      
function concat(inputString) {
    if (inputString.length > 16){
        const last15Characters = inputString.slice(-18);
        return last15Characters;
    } else {
        return inputString
        }
    }
