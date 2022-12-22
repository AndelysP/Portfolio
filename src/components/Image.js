import me from '../img-me/me.png';
import astronaut from '../img-me/me-astronaut.png';
import { Component } from 'react';

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [me, astronaut],
            index: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    /**
     * Si l'index est égal à la longueur du tableau, l'index est sur 0. Sinon, il est incrémenté de 1
     */
    handleClick() {
       if (this.state.index === this.state.images.length -1) {
        this.setState({index:0});
       } else {
        this.setState({index: this.state.index+1});
       }        
    }

    render() {
        const currentImage = this.state.images[this.state.index]
        return (
            <img src={currentImage} alt="" onClick={this.handleClick}/>
        )
    }
}

export default Image