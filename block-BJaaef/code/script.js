
let mainSection = document.querySelector(".box");

for ( let house of got.houses){


    for(let data of house.people){
        let section = document.createElement("section");
        section.classList.add("card")
        let div = document.createElement("div");
        section.append(div);
        div.classList.add("name")
        
        let image = document.createElement("img");
       image.src = data.image;
        let h3 = document.createElement("h3");
        h3.classList.add("charName")
       div.append(image);
       div.append(h3);
        h3.innerText =data.name;
        let para = document.createElement("p");
        para.innerText = data.description;
    
        let button = document.createElement("a");
        button.classList.add("btn");
        button.href = "#"
        button.innerText = "Learn More!";
    
        section.append(para);
        section.append(button);
        mainSection.append(section);
    }



}




