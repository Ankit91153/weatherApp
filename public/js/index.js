const submitBtn=document.getElementById("submitBtn");
const cityname=document.getElementById("cityName")
const city_name=document.getElementById("city_name");
const temperature=document.getElementById("temperature");
const temp_status=document.getElementById("temp_status");
const datahide=document.querySelector(".middle_layer");

const getInfo=async(e)=>{
    e.preventDefault();
    let city=cityname.value;
    if(city ===""){
        city_name.innerText="Please Enter the City Name";
        datahide.classList.add("data_hide")
    }
    else{
        try{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=matric&appid=4e47a9310c44531f27b6250a2abe97f4`;
            const response=await fetch(url);
            const data=await response.json();
            const arrData=[data];
            temperature.innerHTML=Math.round(arrData[0].main.temp-273.15);
            const tempMood=arrData[0].weather[0].main;
            city_name.innerHTML=`${arrData[0].name},${arrData[0].sys.country} `;

            if(tempMood==="Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }
            else if(tempMood==="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"

            }
            else if(tempMood==="Rain"){
                temp_status.innerHTML="<i class='fas fa-rain' style='color:#a4b0be;'></i>"
                
            }
            else{
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"

            }





            datahide.classList.remove("data_hide")

        }
        catch(e){
            city_name.innerText="Please Enter the City Name Properly";
            datahide.classList.add("data_hide")


        }
        

    }
    
   

}
submitBtn.addEventListener("click",getInfo)


const nav_link=document.querySelectorAll(".nav_link");

nav_link.forEach((nav)=>{
    nav.addEventListener("click",()=>{
        document.querySelector(".active")?.classList.remove("active");
        nav.classList.add("active");
    })
})