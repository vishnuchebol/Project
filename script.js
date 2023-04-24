const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")
const searchInput2 = document.getElementById("search2")
const searchInput3 = document.getElementById("search3")


let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users2.forEach(user => {
    const isVisible =
      user.job.toLowerCase().includes(value) 
    user.element.classList.toggle("hide", !isVisible) 
  })
})
searchInput2.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
      users2.forEach(user => { 
        const isVisible =
          user.country.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
      })
    })
  

searchInput3.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users2.forEach(user => {
    const isVisible =
      user.time.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})
countries=[];

var headers = new Headers();
headers.append("X-CSCAPI-KEY","YTBLNHBHVkdvM2JWUEt2djhzWWZGN2ZZME5QcDZTcGtvblRlUTI2Qw==" );

var requestOptions = {
method: 'GET',
headers: headers,
redirect: 'follow'
};

fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
.then(response => response.json())
  .then(data => {
    countries=data.map(country =>{
      states=[];
      fetch("https://api.countrystatecity.in/v1/countries/"+country.iso2+"/states",requestOptions)
      .then(response => response.json())
      .then(data => {
        states= data.map(state =>{
          return({name: state.name})
        }

        )
      })

      return({name:country.name, states:states})
    })})
 

    users2=[
      {
          "job":"Program Manager",
          "country":"India",
          "company":"Google",
          "time":"Full time",
          "overview":"A high paying job with limited work",
          "requirements":"Good command over django and python",
          "work_involved":"Creating backend part of apps"
      },
      {
          "job":"Software developer",
          "country":"US",
          "company":"Apple",
          "time":"Part Time",
          "overview":"A well paid job with ",
          "requirements":"Command over software designs",
          "work_involved":"Developing software for ios "
      },
      {
          "job":" Physics Professor",
          "country":"US",
          "company":"MIT ",
          "time":"Part time",
          "overview":"A dream job for any teacher at the best institute in the world!!",
          "requirements":"Good command over Physics upto engineering level",
          "work_involved":"Teaching engineering students"
      },
      {
          "job":"Lawyer",
          "country":"China",
          "company":"XYZ limited",
          "time":"Full time",
          "overview":"Practise your profession here which pays really well!",
          "requirements":"Good command over the constitution and Law",
          "work_involved":"Offering legal service to clients"
      },
      {
          "job":" Elementary Teacher",
          "country":"India",
          "company":"PSBBLLA",
          "time":"Part time",
          "overview":"Teach children in your free time and earn cash!!",
          "requirements":"Basic education till class 12",
          "work_involved":"Teaching children Mon-Fri 9-5"
      },
      {
          "job":"Doctor",
          "country":"Ukraine",
          "company":"XYZ hospitals limited",
          "time":"Full time",
          "overview":"A high paying job with limited work",
          "requirements":"MBBS in a reputed college",
          "work_involved":"Cancer treatement"
      },
      {
          "job":"Artist",
          "country":"Australia",
          "company":"Learn Arts",
          "time":"Part time",
          "overview":"Unleash you creativity and earn cash.",
          "requirements":"Need excellent command over pencil sketching",
          "work_involved":"Contesting in contests and winning awards for the company"
      },
      {
          "job":"Spy",
          "country":"Pakistan",
          "company":"ISIS",
          "time":"Full time",
          "overview":"Spy indian soldiers and help Pakistan",
          "requirements":"Good observation skills and quick thinking",
          "work_involved":"Spying on indian soldiers/army"
      },
      {
          "job":"Journalist",
          "country":"Bangladesh",
          "company":"XYZ limited",
          "time":"Full time",
          "overview":"Report news to earn good money",
          "requirements":"Good command over English and Public speaking",
          "work_involved":"Reporting news"
      },
      {
          "job":"Computer programmer",
          "country":"India",
          "company":"Microsoft",
          "time":"Full time",
          "overview":"A high paying job with limited work",
          "requirements":"Good command over almost all programming languages",
          "work_involved":"Hard coding difficult problems"
      },
      {
          "job":"Software engineer",
          "country":"Australia",
          "company":"Microsoft",
          "time":"Part time",
          "overview":"A high paying job with limited work",
          "requirements":"Good command over C",
          "work_involved":"Creating softare for various applications"
      }
  ]

    users2.forEach(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[title]")
      const headers =card.querySelector("[data-header]")
      const overview = card.querySelector(".card-text")
      const requirements = card.querySelector(".card-text2")
      const work_involved = card.querySelector(".card-text3")

      header.textContent = user.job+"||"+user.company;
      headers.textContent = user.country+"||"+user.time;
      overview.textContent = "JOB OVERVIEW:"+user.overview;
      requirements.textContent ="REQUIREMENTS:"+ user.requirements;
      work_involved.textContent="WORK INVOLVED:"+user.work_involved
      userCardContainer.append(card)
      return { job: user.job, country: user.country,time:user.time, element: card }
    })
  
  let h2= document.querySelector("#head");
  h2.onmouseover = function(){
    h2.style.color = 'red';
  }
  h2.onmouseout = function(){
    h2.style.color = 'lime';
  }
  let s1= document.querySelector("#search4");
  s1.onmouseover = function(){
    s1.style.color = 'red';
  }
  s1.onmouseout = function(){
    s1.style.color = ' rgba(251, 243, 2, 0.98)';
  }

  let s2= document.querySelector("#search5");
  s2.onmouseover = function(){
    s2.style.color = 'red';
  }
  s2.onmouseout = function(){
    s2.style.color = ' rgba(251, 243, 2, 0.98)';
  }
  let s3= document.querySelector("#search6");
  s3.onmouseover = function(){
    s3.style.color = 'red';
  }
  s3.onmouseout = function(){
    s3.style.color = ' rgba(251, 243, 2, 0.98)';
  }
