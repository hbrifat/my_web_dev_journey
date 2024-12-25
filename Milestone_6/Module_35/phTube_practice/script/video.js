function getTime(time){

    /* 

    // get hour
    const hour = parseInt(time / 3600);
    // temporary second
    let remainingSecond = time % 3600;
    // then minute
    let minute = parseInt(remainingSecond / 60);
    // now second 
    remainingSecond = remainingSecond % 60;

    return `${hour} h ${minute} min ${remainingSecond} sec ago`;

    */

    // get days
    const year = parseInt(time / 31536000);
    let remainingSecond = time % 31536000;

    // get month
    let month = parseInt(remainingSecond / 2592000);
    remainingSecond = remainingSecond % 2592000;

    // get day
    let day = parseInt(remainingSecond / 86400);
    remainingSecond = remainingSecond % 86400;

    // get hour
    let hour = parseInt(remainingSecond / 3600);
    remainingSecond = remainingSecond % 3600;

    // get minute
    let minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;

    return `${year} y ${month} mon ${day} day ${hour} h ${minute} min ${remainingSecond} sec ago`;
}


const removeActiveClass = () => {
    const btnGroup = document.getElementsByClassName("btn-group");

    for(let btn of btnGroup){
        btn.classList.remove("active");
    }
}


const loadVideoCategories = (id) => {
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then((response) => response.json())
        .then((data) => {
            const btn = document.getElementById(`btn-${id}`);
            
            // first remove active class from all btn

            removeActiveClass();

            // add active class to the btn

            btn.classList.add("active");
            
            displayVideos(data.category)
        })
        .catch((error) => console.log("error found!", error));
}

const showVideoDetails = (object) => {
    const modalContent = document.getElementById("modal-content");

    modalContent.innerHTML = `
    <div class="space-y-3">
        <img class="w-full h-full" src=${object.thumbnail}/>
        <p>${object.description}</p>
    </div>
    `
    // show modal
    // way-1
    // document.getElementById("customModalBtn").click();

    // way-2
    document.getElementById("customModal").showModal();
}

const loadVideoDetails = async (video_id) => {
    // console.log(video_id);
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${video_id}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.video);

    showVideoDetails(data.video);
}




// fetch, load & display data

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((response) => response.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log("error found!", error));
};

const displayCategories = (categories) => {
    // console.log(categories);
    const categoryContainer = document.getElementById("categories");

    categories.forEach((item) => {
        // console.log(item);
        const btnContainer = document.createElement("div");
        btnContainer.innerHTML = `
            <button id="btn-${item.category_id}" class="btn btn-group" onclick="loadVideoCategories(${item.category_id})">${item.category}</button>
        `;
        categoryContainer.append(btnContainer);
    });
};

// load videos


// const dummyOBject = {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }



const loadVideos = (query="") => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${query}`)
        .then((res) => res.json())
        .then((data) => displayVideos(data.videos))
        .catch((error) => console.log("Error in videos api", error));
};

const displayVideos = (videos) => {
    // console.log(videos);
    const videosContainer = document.getElementById("videos");
    videosContainer.innerHTML = "";

    if(videos.length === 0){
        videosContainer.classList.remove('grid');
        videosContainer.innerHTML = `
            <div class="min-h-[400px] flex flex-col justify-center items-center gap-5">
                <img src="assets/Icon.png" class=""/>
                <p class="text-bold text-xl text-center"> Oops!! Sorry, There is no content here </p>
            </div>
        `;
    } else {
        videosContainer.classList.add('grid');
    }

    videos.forEach((video) => {
        // console.log(video);
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML = `
        <figure class="h-[200px] relative">.
            <img
            src=${video.thumbnail}
            alt="videos" 
            class="h-full w-full object-cover"/>
            ${video.others.posted_date?.length === 0 ? "" : `<span class="absolute right-2 bottom-2 p-1 bg-black text-white text-xs rounded">
                ${getTime(video.others.posted_date)}
                </span>`}
        </figure>
        <div class="px-0 py-3 flex gap-3">
            <div>
                <img class="w-10 h-10 rounded-full object-cover" src="${video.authors[0].profile_picture}"/>
            </div>
            <div>
                <h3 class="font-bold text-lg">${video.title}</h3>
                <div class="flex gap-1 object-cover items-center>
                    <p class="text-gray-400 font-semibold">${video.authors[0].profile_name}</p>
                    ${video.authors[0].verified === true ? `<img class="h-5" src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000"/>` : ""}
                    
                </div>
                <p><button onclick="loadVideoDetails('${video.video_id}')" class="btn btn-sm bg-error text-white"> Details </button></p>
            </div>
        </div>
        `;
        videosContainer.append(card);
    });
};

loadCategories();
loadVideos();

document.getElementById("searchInput").addEventListener("keyup", (event) => {
    // console.log(event.target.value);
    loadVideos(event.target.value);
})
