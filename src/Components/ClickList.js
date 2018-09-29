import React,{Component} from 'react';
import Horoscope from './NavTabs/Horoscope';
import sampleImage from '../sampleImage.json';

class ClickList extends Component
{
    removeHoroscope = (id) =>
{
    // alert(id);
    const Horoscope = this.state.ClickCharacters.filter(horoscope => horoscope.id != id);//hidde the item that's deleted(no data base to delete)
    //when changing the sate of the web use this.sate
    this.setState({ClickCharacters : Horoscope})

};
    state =
    {
        ClickCharacters :sampleImage
    };

    render() {
// make sure you pass the id, removeHoroscope ---the chilkd and the parent have to be comm.
    return(
    <ul>
        {this.state.ClickCharacters.map(item => (
            <li>
                 <Horoscope id={item.id} removeHoroscope ={this.removeHoroscope} name = {item.name}  image={item.image} />
              
            </li>
        ))}

    </ul>
    )
    }
}


export default ClickList;