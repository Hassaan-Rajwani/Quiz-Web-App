alert("Each Question Carries 5 Number !!")

function submit(){
    var score = 0
    var show = document.getElementById("show")
    var show_1 = document.getElementById("show1")
    var show_2 = document.getElementById("show2")
    var show_3 = document.getElementById("show3")
    var scoore = document.getElementById("score")

    var a_1 = document.getElementById("a1")
    if(a_1.checked == true){
        show.style.color = 'green'
        show.innerHTML = "Yor Awnser Is Correct"
        score+=5
        scoore.innerHTML = score
    }
    else{
        show.style.color = 'red'
        show.innerHTML = "Yor Awnser Is Wrong !!"
    }


    var a_2 = document.getElementById("a2")
    if(a_2.checked == true){
        show_1.style.color = 'green'
        show_1.innerHTML = "Yor Awnser Is Correct"
        score+=5
        scoore.innerHTML = score
    }
    else{
        show_1.style.color = 'red'
        show_1.innerHTML = "Yor Awnser Is Wrong !!"
    }


    var a_3 = document.getElementById("a3")
    if(a_3.checked == true){
        show_2.style.color = 'green'
        show_2.innerHTML = "Yor Awnser Is Correct"
        score+=5
        scoore.innerHTML = score
    }
    else{
        show_2.style.color = 'red'
        show_2.innerHTML = "Yor Awnser Is Wrong !!"
    }


    var a_4 = document.getElementById("a4")
    if(a_4.checked == true){
        show_3.style.color = 'green'
        show_3.innerHTML = "Yor Awnser Is Correct"
        score+=5
        scoore.innerHTML = score
    }
    else{
        show_3.style.color = 'red'
        show_3.innerHTML = "Yor Awnser Is Wrong !!"
    }
    alert("Check Your Score On Top")
}
