const API = 'https://flight-radar1.p.rapidapi.com/airports/list';

const content=null || document.getElementById("content")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9e957b7ddfmshfff975666d142bbp19d1bbjsnc39dbac049c8',
		'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
	}
};


async function  fetchData(urlAPi){
    const response=await fetch(urlAPi,options)
    const data=await response.json()
    console.log("data",data)
    console.log("data rows",data.rows[0])
    return data
}
//    <img src="${airport..thumnail.high.url}" alt="${airport.snippet.description}" class="w-full">
(async ()=>{
    try {
        const airports=await fetchData(API)
         console.log("aeropuertos",airports.rows)
        let view=`
        ${airports.rows.map(data=>`
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-black-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${data.name} 
                    ---
                    ${data.country}
                </h3>
                </div>
            </div>
        `).slice(0,10).join("")}
        `
        content.innerHTML=view 
        
       // let iteration=airports.rows.map((airport)=>airport.name).slice(1,10).join("")
        //console.log("iteration",iteration)

    } catch (error) {
        console.log(error)
    }
})();