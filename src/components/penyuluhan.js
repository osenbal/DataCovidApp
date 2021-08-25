import iconCorona from '../img/coronavirus.png';
import img2 from '../img/img2.png';
import socialDistance from '../img/sosial-distance.png';
import washingHand from '../img/washing-hand.png';
import wearMask from '../img/wear-mask.png';

class Penyuluhan extends HTMLElement {
  constructor() {
    super();
    this.shadowPenyuluhan = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowPenyuluhan.innerHTML = `
        <style>
            :host  {
                color: white;
                display: block;
                margin-top: 100px;
            }
            .explaining {
                display: grid;
                grid-template-columns: 1fr;
                gap: 24px;
                margin-bottom: 100px;
            }
            .explaining > img {
                width: 15vw;
                align-self: center;
                justify-self: center;
            }
            .explaining > .explaining-content {
                align-self: center;
                justify-self: center;
                font-size: 1.5em;
            }
            .gejala {
                display: grid;
                grid-template-columns: 1fr;
                gap: 24px;
            }
            .gejala > img {
                width: 30vw;
                align-self: center;
                justify-self: center;
            }
            .gejala > .gejala-content {
                align-self: center;
                font-size: 1.5em;
            }
            .solusi {
                margin-top: 150px;
                font-size: 1.5em;
            }
            .list-item {
                display: grid;
                grid-template-columns: repeat(2, minmax(300px, 1fr));
                justify-content: center;    
                text-align: center;
            }

            .list-item > .solusi-item > img {
                width: 20vw;
                border-radius: 50%;
                border: 2px solid #fff;
            }

            @media screen and (max-width: 768px) {
                .explaining > .explaining-content {
                    text-align: center;
                    font-size: 1.3;
                }
                .gejala > .gejala-content > h2 {
                    text-align: center;
                    font-size: 1.3;
                }
                .solusi > h2 {
                    text-align: center;
                    font-size: 1.3;
                }
                .list-item {
                    grid-template-columns: repeat(1, minmax(300px, 1fr));
                }
            }
            @media screen and (min-width: 998.99px) {
                .explaining {
                    grid-template-columns: 0.3fr 1fr;
                }
                .gejala {
                    grid-template-columns: 0.3fr 1fr;
                }
                .list-item {
                    grid-template-columns: repeat(3, minmax(300px, 1fr));
                }
            }
        </style>

        <div class="explaining">
            <img src="${iconCorona}" alt="explaining.png">
            <div class="explaining-content">
                <h2>Apa itu Covid-19 ?</h2>
                <p>Virus Corona atau severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) adalah virus yang menyerang sistem pernapasan. Penyakit karena infeksi virus ini disebut COVID-19. Virus Corona bisa menyebabkan gangguan ringan pada sistem pernapasan, infeksi paru-paru yang berat, hingga kematian.</p>
            </div>
        </div>
        
        <div class="gejala">
            <img src="${img2}" alt="gejala.png">

            <div class="gejala-content">
                <h2>Yuk Kenali Gejalanya</h2>
                <p>Gejala yang paling umum:</p>
                <ul>
                    <li>demam</li>
                    <li>batuk kering</li>
                    <li>kelelahan</li>
                </ul>
                
                <p>Gejala yang sedikit tidak umum:</p>
                <ul>
                    <li>rasa tidak nyaman dan nyeri</li>
                    <li>nyeri tenggorokan</li>
                    <li> hilangnya indera perasa atau penciuman</li>
                    <li>ruam pada kulit, atau perubahan warna pada jari tangan atau jari kaki</li>
                </ul>
                
                <p>Gejala serius:</p>
                <ul>
                    <li>Kesulitan bernapas atau sesak napas</li>
                    <li>nyeri dada atau rasa tertekan pada dada</li>
                    <li>hilangnya kemampuan berbicara atau bergerak</p></li>
                </ul>
            </div>
            
        </div>

        <div class="solusi">
            <h2>Cara Mencegah Supaya Tidak Tertular</h2>
            <div class="list-item">
                <div class="solusi-item">
                    <img src="${wearMask}" alt="masker.png">
                    <p>Memakai Masker</p>
                </div>
                <div class="solusi-item">
                    <img src="${washingHand}" alt="cuci-tangan.png">
                    <p>Mencuci Tangan dengan Sabun</p>
                </div>
                <div class="solusi-item">
                    <img src="${socialDistance}" alt="social-distance.png">
                    <p>Menjaga Jarak</p>
                </div>
            </div>
        </div>
    `;
  }
}

customElements.define('penyuluhan-section', Penyuluhan);
