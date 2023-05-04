import React from 'react';
import {useSelector} from "react-redux";
import {GameCover} from "../../components/main/game-cover";
import {GameGenre} from "../../components/main/game-genre";
import {GameBuy} from "../../components/main/game-buy";
import './game-page.css'

export const GamePage = () => {
    const game = useSelector(state => state.games.currentGame)

    if (!game) return null

    return (
        <section className='game-page'>
            <h1 className="game-page__title">{game.title}</h1>
            <div className="game-page__content">
                <div className="game-page__left">
                    <iframe
                        width="90%"
                        height="400px"
                        src={game.video}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
                <div className="game-page__right">
                    <GameCover image={game.image}/>
                    <p>{game.description}</p>
                    <p className="secondary-text">Популярные метки этого продукта:</p>
                    <div className="game-page__popular">
                        {game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)}
                    </div>
                    <div className='game-page__buy-game'>
                        <GameBuy game={game}/>
                    </div>
                </div>
            </div>
        </section>
    );
};
