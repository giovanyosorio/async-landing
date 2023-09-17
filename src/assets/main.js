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
}
//    <img src="${airport..thumnail.high.url}" alt="${airport.snippet.description}" class="w-full">
(async ()=>{
    try {
        const airports=await fetchData(API)
/*         console.log("aeropuertos",airports.rows)
        let view=`
        ${airports.rows.map(data=>`
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${data.name}
                </h3>
                </div>
            </div>
        `).slice(0,5).join("")}
        `
        content.innerHTML=view */
       // let iteration=airports.rows.map((airport)=>airport.name)
        //console.log(iteration)
        console.log("aerpouertos",airports)
    } catch (error) {
        console.log(error)
    }
})();