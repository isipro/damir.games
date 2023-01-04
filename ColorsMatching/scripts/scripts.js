let onClick = () => {
    // alert('button clicked');
}

let colorOne = '';
let colorTwo = '';

let selectedOne = undefined;
let selectedTwo = undefined;

let onGetColor = ($event) => {

    if(selectedOne != undefined && selectedTwo != undefined){
        deselect(selectedOne);
        deselect(selectedTwo);
        selectedOne = undefined;
        selectedTwo = undefined;
        colorOne = '';
        colorTwo = '';
    }else if($event.target === selectedOne){
        deselect(selectedOne);
        selectedOne = undefined;
        colorOne = '';
    }
    else if($event.target === selectedTwo){
        deselect(selectedTwo);
        selectedTwo = undefined;
        colorTwo = ''
    }else{
        if(colorOne === ''){
            colorOne = $event.target.style.backgroundColor;
            selectedOne = $event.target;
            select(selectedOne);
    
        }else if(colorTwo === ''){
            colorTwo = $event.target.style.backgroundColor;
            selectedTwo = $event.target
            select(selectedTwo);
        }else {
            colorOne = '';
            colorTwo = ''
        }
    }
    // alert('Current Color: ' + colorOne + ' ' + colorTwo);
}

let onSetColor = ($event) => {
    if(colorOne === '' || colorTwo == ''){
        alert('Please select two colors');
    }
    debugger;
    setColor($event.target, colorOne, colorTwo);
}

let setColor = (el, colorOne, colorTwo) => {
    debugger;
    let parcedColorOne = colorOne.slice(4,13).split(', ').map(i => parseInt(i));
    let parcedColorTwo = colorTwo.slice(4,13).split(', ').map(i => parseInt(i));
    let composedColor = [(parcedColorOne[0] + parcedColorTwo[0])/2, (parcedColorOne[1] + parcedColorTwo[1])/2, (parcedColorOne[2] + parcedColorTwo[2])/2];
    debugger;
    el.style.backgroundColor =  "rgb(" + composedColor.toString() + ")";
}

let deselect = (el) => {
    if(el.classList.contains("selected")){
        el.classList.remove('selected');
    }
}

let select = (el) => {
    if(!el.classList.contains("selected")){
        el.classList.add('selected');
    }
}