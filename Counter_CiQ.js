var current_count = 0;

function lowerCount() {
    current_count-=1;
    document.getElementById('count').innerHTML=current_count;
    
    if (current_count>0){

        document.getElementById('count').style.color='green';

    }

    else if (current_count<0){

        document.getElementById('count').style.color='red';
    }

    else{

        document.getElementById('count').style.color='blue';
    }
}

function addCount() {
    current_count+=1;
    document.getElementById('count').innerHTML=current_count;

    if (current_count>0){

        document.getElementById('count').style.color='green';

    }

    else if (current_count<0){

        document.getElementById('count').style.color='red';
    }

    else{

        document.getElementById('count').style.color='blue';
    }
}



