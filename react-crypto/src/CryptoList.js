import React, {Component} from "react";
class CryptoList extends Component {
render() {
    return(

    <ul className="cryptoList">
        CryptoList
        {this.props.cryptoList.map(waluta => 
                <li className="cryptoListItem" key={waluta.currency}> 
                <span>Last rate: </span><span className={waluta.class}>{waluta.buy} </span>
                <span>{`${waluta.currency}  [${waluta.symbol}]`}</span>
                </li>)
            }
    </ul>)
}
}
export default CryptoList;