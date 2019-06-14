import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            url: 'https://www.youtube.com/watch?v=Z-qzMfq47Ik',
            playing: true,
            controls: false,
            volume: 0.7,
            played: "1"
        };      
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    load = (url) => {
        this.setState({
            url,
            played: parseFloat(0.2),
            loaded: 0
        })
    }

    ref = player => {
        this.player = player
    }
    goToMiddle = () => {
        this.setState({
            played: parseFloat(0.5)
        })
        this.player.seekTo(parseFloat(0.5))
    }
    render(){
        return (
            <div className="home-container">
                <div className="player-container">
                    <ReactPlayer
                        ref={this.ref}
                        className="react-player"
                        url={this.state.url}
                        playing={this.state.playing}
                        controls={this.state.controls}
                        volume={this.state.volume}
                        played={this.state.played}
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className="column">hahaha
                    <input value="Change url" type="button" onClick={() => this.load("https://www.youtube.com/watch?v=szkOJVHYwSM")}/>
                    <input value="Go to middle" type="button" onClick={() => this.goToMiddle()}/>
                </div>
            </div>
        );
    }
}

export default App;
