const api_key= "AIzaSyCRVOc5HDZgcovRyPv0IAYo7GKw8ir2K6o";


let search = async () =>{
    try{
    let query = document.getElementById("query").value;

    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;

    let res= await fetch(url);

    let data = await res.json();

    append(data.items);

    // console.log(data);

    }
    catch(err){
        console.log(err);
    }
}

//append the data on dom

let append = (data) =>{

    let container =document.getElementById("results");

    container.innerHTML=null;
    // console.log(data);
    data.forEach(({id : {videoId}, snippet: {title, thumbnails}}) =>{
    //    console.log(videoId)  
    //    console.log(title)
    //    console.log(thumbnails.default.url);
       let div = document.createElement("div");
        // let iframe = document.createElement("iframe");
        // iframe.src=`https://www.youtube.com/embed/${videoId}`;
        let image= document.createElement("img")
        image.src = thumbnails.default.url;
        image.id= "thumb";
        let h3 = document.createElement("h3");
        h3.innerText = title;
        h3.style.color= "white";

        div.append(image,h3);

        div.addEventListener('click',function(){
            playVideo({id : {videoId}})
            window.location.href="player.html"
        })

        container.append(div);
    });
    

}


let playVideo = ({id : {videoId}})=>{

    let x={videoId};

localStorage.setItem("vid",JSON.stringify(x));

    // console.log(x);
    
}




let popular = async () =>{
    try{
        
    // let url1 = "https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=20&+91=%2B91&key=AIzaSyDj3LDTO9jZc-pWEK0aBWEyqEjEsdsbR4A";
   let urlp = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=in&key=AIzaSyCRVOc5HDZgcovRyPv0IAYo7GKw8ir2K6o';


    let res= await fetch(urlp);

    let data = await res.json();

    appendpopular(data.items);

    console.log(data);

    }
    catch(err){
        console.log(err);
    }
}

popular();

let appendpopular = (data) =>{

    let container =document.getElementById("results");

    container.innerHTML=null;
    console.log(data);
    data.forEach(function(el){
       let div = document.createElement("div");
        let iframe = document.createElement("iframe");
        iframe.src=`https://www.youtube.com/embed/${el.id}`;
        let h4 = document.createElement("h4");
        h4.innerText = el.etag;
        h4.style.color= "white";

        div.append(iframe,h4);


        container.append(div);
    });
    


}