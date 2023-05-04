import React from 'react';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { GameCover } from "../game-cover";
import { GameBuy } from "../game-buy";
import { GameGenre } from "../game-genre";
import './game-item.css';
import { setCurrentGame } from "../../../app/games/reducer";

export const GameItem = ({game}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerClick = () => {
        dispatch(setCurrentGame(game));
        navigate(`/${game.title}`);
    }

    return (
            <div className='game-items' onClick={handlerClick}>
                <GameCover image={game.image}/>
                <div className="game-item__details">
                    <span className='game-item__title'>{game.title}</span>
                    <div className='game-item__genre'>
                        {game.genres.map((genre, index) => {
                            return (
                                <GameGenre genre={genre} key={genre}/>
                            )
                        })}
                    </div>
                    <div className='game-item__buy'>
                        <GameBuy game={game}/>
                    </div>
                </div>
            </div>
    );
};
