
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
      <h2 class="card-title">${element.title}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      
    </div>
  </div>
    `; 
   newsDisplay.appendChild(div);
    console.log (element)
})

    // console.log (iddata)


    // console.log (catagoriID)

}
