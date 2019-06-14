import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            url: 'https://www.youtube.com/watch?v=Z-qzMfq47Ik',
            playing: true,
            controls: true,
            volume: 0.7,
            played: 0,
            playIndex: 0,
            playlist: ["https://www.youtube.com/watch?v=Z-qzMfq47Ik", "https://www.youtube.com/watch?v=gfLo-1Sjkr8"]
        };      
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    changeSong = () => {
        if(this.state.playIndex === 0){
            this.setState({playIndex: 1},
                          () => this.load(this.state.playlist[this.state.playIndex]))
            
        } else {
            this.setState({playIndex: 0},
                          () => this.load(this.state.playlist[this.state.playIndex]))
        }
    }

    load = (url) => {
        this.setState({
            url,
            played: 0,
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
                    <input value="Change url" type="button" onClick={() => this.changeSong()}/>
                    <input value="Go to middle" type="button" onClick={() => this.goToMiddle()}/>
                </div>
            </div>
        );
    }
}

export default App;
