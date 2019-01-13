import React, {Component} from "react";
import axios from "axios";
import CryptoList from './CryptoList';
class Crypto extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            cryptoList: [],
            value: ""
        }
    }

    componentDidMount = () => {
            this.getData();
        setInterval(() => {
            if (this.state.value === "") {
                this.getData();
            }
        }, 5000)    
        
      };  

      getData = () => {
        axios.get('https://blockchain.info/pl/ticker')
        .then(response => {
            let data = response.data; 
            // console.log("Co pięć sekund", data);
            let cryptoList = this.state.cryptoList;
            let newCryptoList = [];

            // for (let key in data) {
            //     let currentObject = {};
            //     currentObject.currency = key;
            //     currentObject.data = data[key];
                
            //     cryptoList.push(currentObject);

            //     console.log(currentObject);
            // }


            newCryptoList = Object.keys(data).map(waluta => {
                let currentObject = {};
                currentObject.currency = waluta;
                currentObject.buy = data[waluta].buy;
                currentObject.sell = data[waluta].sell;
                currentObject.symbol = data[waluta].symbol;
                currentObject.last = data[waluta].last;
                
                let lastCurrentObject = cryptoList.find(oldObject => oldObject.currency === currentObject.currency);

                if (lastCurrentObject !== undefined) {
                      if (lastCurrentObject.last > currentObject.last) {
                          currentObject.class = "green";    
                      } else if (lastCurrentObject.last < currentObject.last) {
                          currentObject.class = "red";
                      } else {
                          currentObject.class = "blue";
                      }
                };

                return currentObject;       
            });

            this.setState({
                cryptoList: newCryptoList, 
            });

            console.log(cryptoList);
        })
        .catch(error => {
            console.log(error);
        });
      }

      onInputChange = (e) => {
        let filterValue = e.target.value.trim().toUpperCase();
        // console.log(filterValue);
        let cryptoList = this.state.cryptoList;

        cryptoList = cryptoList.filter(currObj => currObj.currency.search(filterValue) !== -1);


        this.setState({
            cryptoList: cryptoList,
            value: filterValue});
        // console.log("Na zmianę: ", this.state.value);
    };

render() {
    return(
    <div className="crypto">
    <input className="cryptoInput" type="text" placeholder="Filter" value={this.state.value} onChange={this.onInputChange}/>
        <CryptoList cryptoList={this.state.cryptoList} />
    </div>
    )
}
}
export default Crypto;