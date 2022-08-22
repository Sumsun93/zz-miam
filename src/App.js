import { useState } from "react";
import classNames from "classnames";

import './App.css';

import zzTop from './zz-top.png';
import zzBot from './zz-bot.png';
import miam from './miam.mp3';

const App = () => {
    const audio = new Audio(miam);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        audio.play();
        setIsPlaying(true);

        audio.onended = () => {
            setIsPlaying(false);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <button className={classNames("ZZ-Button", { "ZZ-Button-move": isPlaying })} onClick={handleClick}>
                    <img src={zzTop}/>
                    <img className={classNames({ "zz-bottom": isPlaying })} src={zzBot}/>
                </button>
            </header>
        </div>
    );
}

export default App;
