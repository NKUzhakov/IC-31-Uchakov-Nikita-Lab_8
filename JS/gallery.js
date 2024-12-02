import * as basicLightbox from "../node_modules/basiclightbox/src/scripts/main.js";

const images = [
    {
      preview: "https://pohcdn.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/Tokyo-3.jpg",
      original:"https://upload.wikimedia.org/wikipedia/commons/2/20/Tokyo_Tower_and_Tokyo_Sky_Tree_2011_January.jpg",
      description: "Місто Токіо",
    },
    {
      preview:"https://media.cntraveler.com/photos/617086eb88e80fd76c019d36/4:3/w_1600%2Ch_1200%2Cc_limit/Los%2520Angeles_GettyImages-845028274.jpg",
      original:"https://static7.depositphotos.com/1035224/710/i/450/depositphotos_7108264-stock-photo-modern-city.jpg",
      description: "Місто Лос-Анжелес",
    },
    {
        preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUB5vQZZ_s6dMYZca2lM38JnhYij8Dq_5oQ&s",
        original:"https://d17916g5ax9y2r.cloudfront.net/public/uploads/article/image_attachment/file/706/sm_format-zhk-misto-v-misti.jpg",
        description: "Місто Сингапур",
    },
    {
        preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzGLw0TOC09nwQT50tMcwyEvnZBCKz66Olg&s",
        original:"https://mojapl.com/wp-content/uploads/2023/05/IMG_3707-jpg.webp",
        description: "Місто Венеція",
    },
    {
        preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglcNFEoOYRsinMp8wezEFtGrN_S7pD6sS2Q&s",
        original:"https://pohcdn.com/guide/sites/default/files/styles/paragraph__text_with_image___twi_image/public/2021-02/Singapore.jpg",
        description: "Місто Гонконг",
    },
    {
        preview:"https://pohcdn.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2022-08/San-Miguel-de-Allende-in-Guanajuato.jpg",
        original:"https://a.storyblok.com/f/176292/1536x864/1cfc32f2b2/luchshie-goroda-dlya-zhizni-kakoj-gorod-vybrat-dlya-prozhivaniya-271916083.jpg",
        description: "Місто Мексика",
    },
    {
        preview:"https://tripmydream.cc/travelhub/travel/blocks/14/6598/block_146598.jpg?v1",
        original:"https://turvopros.com/wp-content/uploads/2018/12/samie-bolshie-goroda.jpg",
        description: "Місто Пекін",
    },
    {
        preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDh_IUg2TVzaiqtqFWKZosdm1qf_xi42wEyw&s",
        original:"https://fialan.ua/images/news/2017/07/gorod-yiwu-v-kitae-foto-1024x641.jpg",
        description: "Місто Уі-Ву",
    },
    {
        preview:"https://prosto.aero/uploads/posts/2017-05/1493907885_ozbeoz-com-new-york-1.jpg",
        original:"https://moya-planeta.ru/upload/images/xl/d9/4c/d94c5ff3cecfaa841a4dcc4a046d1ed23bfa0363.jpg",
        description: "Місто Нью-Йорк",
    }
];

let gallery = document.querySelector("ul.gallery");
images.forEach((image) => {addImage(image)});

function addImage(imageObject){
    let imageElement = document.createElement("img");
    imageElement.src = imageObject.preview;
    imageElement.alt = imageObject.description;

    let imageLi = document.createElement("li");
    imageLi.append(imageElement);
    gallery.append(imageLi);
}
gallery.addEventListener("click",(event)=>{
    let previewLink = event.target.src;
    let imageObject = images.find((image)=>image.preview==previewLink);

    const instance = basicLightbox.create(`
        <div class="modal">
            
                <img src="${imageObject.original}" alt="${imageObject.description}">
                <p>${imageObject.description}</p>
            
        </div>        
    `, {closable: true});
    instance.show();
    console.log();
})
//===============================

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>`);
// instance.show();