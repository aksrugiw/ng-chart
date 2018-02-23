import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  url = "https://api.mockaroo.com/api/7e1a5150?count=10";
  apiKey = "85b221e0";

  constructor(private _http: HttpClient) { }

  fetchData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-API-Key': this.apiKey
      })
    };

    return this._http.get(this.url, httpOptions)
      .map(result => result);
  }

  fetchMockData() {
    let data = [
      {"id":"e8fdbb2f-ac77-4124-bf58-81903c4ddf05","name":"Viva","value":754223.83,"pvalue":0.2970446148838030376936149,"data":[{"id":1,"name":"China","value":374657.0,"pvalue":0.122787594382656129582925126},{"id":2,"name":"Mongolia","value":796155.17,"pvalue":0.532129204447522295611784181},{"id":3,"name":"China","value":738924.0,"pvalue":0.098402207372168916399835973},{"id":4,"name":"China","value":548886.38,"pvalue":0.119303212864640714406172132},{"id":5,"name":"Russia","value":395906.19,"pvalue":0.11190800619630518245905784},{"id":6,"name":"China","value":974441.41,"pvalue":0.27375181370475944801065286},{"id":7,"name":"China","value":820776.04,"pvalue":0.324094220756193795983562633}]},
      {"id":"0fbe5220-2c35-4ce1-9fed-fe8de3a3c0b4","name":"Thoughtstorm","value":971271.58,"pvalue":0.105157360313282333248862343,"data":[{"id":1,"name":"Slovenia","value":410543.79,"pvalue":0.12109770070518085596462039},{"id":2,"name":"Poland","value":434081.52,"pvalue":0.545817056310079004791416283},{"id":3,"name":"Netherlands","value":57976.51,"pvalue":0.136939257296955021719615281},{"id":4,"name":"France","value":435385.48,"pvalue":0.107904210429548446209137418},{"id":5,"name":"Jordan","value":530665.96,"pvalue":0.556321554679520611582154391},{"id":6,"name":"Poland","value":11712.12,"pvalue":0.135140652069932118188836818},{"id":7,"name":"Belarus","value":66300.49,"pvalue":0.16665046103222056155671786},{"id":8,"name":"Croatia","value":632445.44,"pvalue":0.413072723011303811016906997},{"id":9,"name":"Indonesia","value":740628.62,"pvalue":0.097617584029130896801929734}]},
      {"id":"209a82ad-176c-4a0e-b82d-8be3b55ed690","name":"Jatri","value":831452.66,"pvalue":0.241297700403659196758340857,"data":[{"id":1,"name":"Peru","value":401017.28,"pvalue":0.11940404877580072277893505},{"id":2,"name":"Poland","value":621053.04,"pvalue":0.11142064848983608838205278},{"id":3,"name":"Canada","value":200612.56,"pvalue":0.107728263882855507690086343},{"id":4,"name":"Tanzania","value":559325.98,"pvalue":0.085666374705197929774848231},{"id":5,"name":"Finland","value":510390.24,"pvalue":0.120563833141121457072003743},{"id":6,"name":"China","value":885143.76,"pvalue":0.117226918560143127287009108}]},
      {"id":"82b0a510-3a48-4a00-8653-2b526eae81d0","name":"Divavu","value":227558.01,"pvalue":0.065971379223818062545489236,"data":[{"id":1,"name":"Argentina","value":582369.82,"pvalue":0.033610618523167405316322804},{"id":2,"name":"Philippines","value":314924.9,"pvalue":0.060270620370276322971722792},{"id":3,"name":"Portugal","value":746550.0,"pvalue":0.029733113211276680374486913},{"id":4,"name":"Nigeria","value":370830.16,"pvalue":0.036777749092182731941208775},{"id":5,"name":"South Africa","value":703072.01,"pvalue":0.027048788342724643070372046},{"id":6,"name":"China","value":784684.55,"pvalue":0.032567817098105230831371159},{"id":7,"name":"China","value":149571.52,"pvalue":0.054025331219012358348756485}]},
      {"id":"cb32ad25-15b0-45be-86e7-26960a9fd19f","name":"Mita","value":65315.88,"pvalue":0.006615583171051567938027193,"data":[{"id":1,"name":"Indonesia","value":237941.49,"pvalue":0.024910635576976404489775586},{"id":2,"name":"Canada","value":258091.14,"pvalue":0.009360513482317650282768232},{"id":3,"name":"Russia","value":857799.08,"pvalue":0.006822641194379825892789124},{"id":4,"name":"Indonesia","value":524151.79,"pvalue":0.029719813742141541366958401},{"id":5,"name":"China","value":990765.66,"pvalue":0.016020979917718263562024048},{"id":6,"name":"Madagascar","value":266756.62,"pvalue":0.017045290022990837089291093},{"id":7,"name":"Portugal","value":59109.88,"pvalue":0.007185848237227240022097848}]},
      {"id":"6723cd22-070c-44fe-bcb2-0fa02ccc6c97","name":"Dabshots","value":782320.35,"pvalue":0.081442478362941275064594233,"data":[{"id":1,"name":"China","value":572933.66,"pvalue":0.23018682275042479638775615},{"id":2,"name":"Philippines","value":679269.73,"pvalue":0.120691227893933826980446372},{"id":3,"name":"Sweden","value":854177.7,"pvalue":0.08609678702397654371311885},{"id":4,"name":"Pakistan","value":958969.23,"pvalue":0.12883613550281416334490707},{"id":5,"name":"China","value":601933.92,"pvalue":0.325436002223117678588227484},{"id":6,"name":"Paraguay","value":270101.94,"pvalue":0.393644860829470385606653616},{"id":7,"name":"Argentina","value":150447.33,"pvalue":0.134884408889948459530272994},{"id":8,"name":"Liberia","value":196951.8,"pvalue":0.126007104967732627791275623}]},
      {"id":"5fd9f0c3-751f-498a-837a-b5f503c50079","name":"Teklist","value":167825.99,"pvalue":0.047183691726545438081899273,"data":[{"id":1,"name":"China","value":523170.46,"pvalue":0.017962571898545010533949854},{"id":2,"name":"Portugal","value":972000.67,"pvalue":0.018043203187708356525379984},{"id":3,"name":"Tajikistan","value":679284.3,"pvalue":0.130132966497357735993633545},{"id":4,"name":"Czech Republic","value":282183.34,"pvalue":0.104156252200618392525297609},{"id":5,"name":"Spain","value":800069.8,"pvalue":0.022867220507251254175512996},{"id":6,"name":"China","value":247913.05,"pvalue":0.040656003702194948168616283},{"id":7,"name":"Slovenia","value":247681.0,"pvalue":0.019480575796001318292333253},{"id":8,"name":"Mauritius","value":543179.0,"pvalue":0.020586689469858730731829307},{"id":9,"name":"China","value":828261.93,"pvalue":0.032461345854669881166971997}]},
      {"id":"04bf1689-389d-473b-81a4-9d999f18cb8f","name":"Dynabox","value":684489.45,"pvalue":0.423109524011950533120550014,"data":[{"id":1,"name":"Niger","value":93169.87,"pvalue":0.073935463457629948309588126},{"id":2,"name":"China","value":232475.34,"pvalue":0.102737402946408373122436669},{"id":3,"name":"Kyrgyzstan","value":216379.37,"pvalue":0.069833457308097013398109098},{"id":4,"name":"China","value":564940.2,"pvalue":0.4464512093423647265578525},{"id":5,"name":"Indonesia","value":742170.74,"pvalue":0.077872812640049472460063},{"id":6,"name":"China","value":559759.38,"pvalue":0.110781151339567027032712983},{"id":7,"name":"Brazil","value":68638.85,"pvalue":0.106525831026456612916034728},{"id":8,"name":"Spain","value":607157.34,"pvalue":0.070698544777332925374731265},{"id":9,"name":"Russia","value":263549.88,"pvalue":0.088021459549168633342940093}]},
      {"id":"81bc6401-0273-48f2-bb34-c033b5238632","name":"Yacero","value":309568.15,"pvalue":0.044481698674750944116245611,"data":[{"id":1,"name":"Portugal","value":318862.03,"pvalue":0.093940380601464638438708187},{"id":2,"name":"Colombia","value":405864.42,"pvalue":0.085408169483485447246339179},{"id":3,"name":"Brazil","value":87813.12,"pvalue":0.124540486886807311828601975},{"id":4,"name":"Peru","value":830632.92,"pvalue":0.05271304488162838640501199},{"id":5,"name":"Russia","value":417944.2,"pvalue":0.074698779848929955134772011},{"id":6,"name":"Indonesia","value":877736.0,"pvalue":0.147504518256799338720682044}]},
      {"id":"fa87ddb3-8a41-4772-ad7f-3dc549e9975b","name":"Skaboo","value":33753.85,"pvalue":0.004602064144832408583125647,"data":[{"id":1,"name":"China","value":252214.44,"pvalue":0.003777871309328542884417106},{"id":2,"name":"China","value":510187.56,"pvalue":0.003704476715644268523252683},{"id":3,"name":"Philippines","value":728460.12,"pvalue":0.00379636432836283051196058},{"id":4,"name":"China","value":516559.35,"pvalue":0.003830955653817625585905463},{"id":5,"name":"United States","value":428642.83,"pvalue":0.003680269106924808648084063},{"id":6,"name":"China","value":509112.18,"pvalue":0.005127602614158959776213224},{"id":7,"name":"Cuba","value":118342.38,"pvalue":0.008580331867755004116334863}]}
    ];

    return Observable.create( observer => {
      observer.next(data);
      observer.complete();
    });
  }

}
