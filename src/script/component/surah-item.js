class surahItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set surah(surah) {
        this._surah = surah;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        
        :host {
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }
        
        .img-surah {
            display: block;
            margin: auto;
            max-width: 100%;
            height: auto;
        }
        
        .surah-info {
            padding: 24px;
        }
        
        .surah-info > h2 {
            font-weight: lighter;
        }
        
        .surah-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
        } 
        </style>
        
        <div class="surah-info">
        <center>
            <h2>${this._surah.name}</h2>
            <p>${this._surah.ayat} ayat</p>
        </center>    
        </div>
        <img class="img-surah" src="${this._surah.img_surah}" alt="Gambar Surah">
        `;
    }
}

customElements.define("surah-item", surahItem);