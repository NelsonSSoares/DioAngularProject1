class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());

    }
    build(){
        const componenteRoot = document.createElement('div');
        const cardLeft = document.createElement('div');
        const cardRight = document.createElement('div');

        componenteRoot.setAttribute("class","card");
        cardLeft.setAttribute("class","card__left");
        cardRight.setAttribute("class", "card__right");

        const autor = document.createElement('span');
        autor.textContent ="By " + (this.getAttribute("autor")|| "Anonymous");

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content');

        const newsImage = document.createElement('img');
        newsImage.setAttribute("class","img-responsive");
        newsImage.src= this.getAttribute("photo") || "assets/defaultimage.png";


        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        
        cardRight.appendChild(newsImage);



        componenteRoot.appendChild(cardLeft);
        componenteRoot.appendChild(cardRight);


        return componenteRoot;
    }
    style(){
        const style = document.createElement("style");
        style.textContent=`
        
        .card{
            width: 720px;
            -webkit-box-shadow: 13px 13px 24px 5px rgba(0,0,0,0.75);
            -moz-box-shadow: 13px 13px 24px 5px rgba(0,0,0,0.75);
            box-shadow: 13px 13px 24px 5px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 80%;
        }
        
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        .card__left > h1{
            margin-top: 15px;
            font-size: 25px;
        }
        .card__left > p{
            color: gray;
        }
        .card__left > span{
            font-weight: 400;
        }
        
        .card__right{
        
        }
        .img-responsive{
            max-width: 100%;
              height: auto;
        }
        `;

        return style;
    } 
}

customElements.define("card-news", CardNews);