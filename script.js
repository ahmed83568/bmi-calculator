const form=document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    const height=document.querySelector("#height");
    const weight=document.querySelector("#weight");
    const result=document.querySelector("#results")
    if(height===''||height<0||isNaN(height)){
        result.innerHTML="please enter a valid height"
    }
    else if(weight===''||weight<0||isNaN(weight)){
        result.innerHTML="please enter a valid weight"
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        result.innerHTML=`<span>${bmi}</span>`
    }
})