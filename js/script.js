function checkLogin(e) {
    var user = localStorage.getItem("user");
    if (user) {
        document.getElementById("in").style.display = "none"
        document.getElementById("profile").style.display = "block"
        document.getElementById("out").style.display = "block"
    } else {
        document.getElementById("in").style.display = "block"
        document.getElementById("profile").style.display = "none"
        document.getElementById("out").style.display = "none"

        // alert("no user")
    }
}

function loginPage() {
    document.getElementById('id01').style.display = 'block'
}

places = [{
        from: "Surulere",
        to: "Lekki",
        date: "10/01/2018",
        time: " 3:30 pm",
        img: "https://unsplash.it/800/600?image=82"
    },
    {
        from: "Lekki",
        to: "Bar Beach",
        date: "10/01/2018",
        time: " 8:30 am",
        img: "https://unsplash.it/800/600?image=42"
    }, {
        from: "Surulere",
        to: "Ikeja",
        date: "10/01/2018",
        time: " 10:30 am",
        img: "https://unsplash.it/800/600?image=38"
    },
    {
        from: "Surulere",
        to: "Funtopia Water Park",
        date: "10/01/2018",
        time: " 3:30 pm",
        img: "https://unsplash.it/800/600?image=32"
    },
    {
        from: "Ikeja",
        to: "Eleko Beach",
        date: "10/01/2018",
        time: " 1:30 pm",
        img: "https://unsplash.it/800/600?image=55"
    },
    {
        from: "Surulere",
        to: "Atlantic Economic City",
        date: "10/01/2018",
        time: " 2:30 pm",
        img: "https://unsplash.it/800/600?image=39"
    }
]

function init() {
    let populate = places.map(p => {
        return `
        
    <li class="cards__item">
            <div class="card">
                <div class="card__image" style="background-image: url(${p.img})" ></div>
                <div class="card__content">
                    
                    <p class="card__text">From ${p.from} to   ${p.to}, on ${p.date} at ${p.time}</p>
                   
                    <button class="btn btn--block card__btn">
                    <a href="">Join Rides</a>
                    </button>
                </div>
            </div>
        </li>
   
        `
    }).join("")
    document.getElementById("available-rides").innerHTML += populate

}
init()

console.log("hey theye")