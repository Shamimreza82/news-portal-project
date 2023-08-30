
const dataHandalar = async () => {
    const res = await fetch ('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json()
    const newsData = data.data.news_category.slice(0,5); 
    displayData (newsData);
}

dataHandalar()


const displayData = (data) => {

    const arryLoop = data.forEach(element => {
        const news = document.getElementById ('displayNews');
        const div = document.createElement ('div');
        div.innerHTML = `
        <h1 onclick="Iddata('${element.category_id}')">${element.category_name} </h1>
        `
        news.appendChild(div)
        // console.log (element)
    });
    
}


const Iddata = async (catagoriID) => {
    const res = await fetch (`https://openapi.programming-hero.com/api/news/category/${catagoriID}`)
    const data = await res.json();
    const iddata = data.data; 


    const newsDisplay = document.getElementById("newsDisplay");
    newsDisplay.innerHTML = " "

iddata?.forEach(element => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card card-compact bg-base-100 shadow-xl">
                  <figure><img src=${element.image_url}/></figure>
                  <div class="card-body">
                    <div class="flex justify-between">
                      <h2 class="card-title">${element.title.slice(0,58)}</h2>
                      <button class="btn btn-primary rounded-full">${element.rating.badge}</button>
                    </div>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <h2>Total Viws: ${element.total_view || " "}</h2>
                     <div class="flex justify-between items-center">
                      <div>
                        <img class="w-[50px] rounded-full" src=${element.author.img} alt="">
                      </div>
                      <div class="lg:mr-16">
                        <h4>J${element.author.name}</h4>
                        <h4>${element.author.published_date}</h4>
                      </div>
                      <button class="btn btn-primary rounded-full">ditiles</button>
                     </div> 
                  </div>
                </div>
    `; 
   newsDisplay.appendChild(div);
    console.log (element)
})

    // console.log (iddata)


    // console.log (catagoriID)

}
