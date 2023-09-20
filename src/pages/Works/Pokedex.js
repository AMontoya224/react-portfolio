import axios from 'axios';
import { useEffect, useState } from 'react';
import './Pokedex.css';


function Pokedex( props ) {
    const { selectLan } = props;
    const [btnOn, setBtnOn] = useState(false);
    const [pokemonInput, setPokemonInput] = useState("");
    const [pokemonId, setPokemonId] = useState(0);
    const [pokemonSend, setPokemonSend] = useState("");
    const [wrong, setWrong] = useState(false);
    const [well, setWell] = useState(false);
    const [load, setLoad] = useState(false);
    const [result, setResult] = useState("");

    const onBtnOn = () => {
        if(!btnOn){
            setBtnOn(true);
        }
        else{
            setBtnOn(false);
        }
            setPokemonSend("");
    };

    const onBtnLeft = () => {
        setLoad(true);
        if(pokemonId === 0 || pokemonId === 1 || pokemonId === undefined){
            setPokemonInput(905);
            setPokemonSend(905);
        }
        else{
            setPokemonInput(pokemonId-1);
            setPokemonSend(pokemonId-1);
        }
    };

    const onBtnRight = () => {
        setLoad(true);
        if(pokemonId === 0 || pokemonId === 905 || pokemonId === undefined){
            setPokemonInput(1);
            setPokemonSend(1);
        }
        else{
            setPokemonInput(pokemonId+1);
            setPokemonSend(pokemonId+1);
        }
    };

    const onBtnCenter = () => {
        setLoad(true);
        setPokemonInput(1);
        setPokemonSend(1);
    };

    const handlePokemon = e => {
        setPokemonInput(e.target.value);
    };

    const onSubmitHandle = e => {
        e.preventDefault();
        setLoad(true);
        setPokemonSend(pokemonInput);
    };

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonSend}`)
            .then( response => {
                setResult(response.data);
                setPokemonId(response.data.id);
                setWell(true);
                setWrong(false);
                setLoad(false)
            })
            .catch( err => {
                setWell(false);
                setWrong(true);
                setLoad(false)
            })
    }, [pokemonSend]);

    return (
        <div className='Pokedex'>
            <div className="container">
                <img src={require('./../../images/pokedex.webp')} alt='pokedex'/>
                <div className='ind-voce'>
                    <div></div>
                </div>
                <div className={!btnOn ? 'pnt-image' : load ? 'pnt-image load' : 'pnt-image active'}>{btnOn && !load && well && pokemonSend !== "" ? <img style={{maxWidth: "21rem", height: "13rem", marginTop: "1rem"}} src={result.sprites.other.dream_world.front_default} alt="pokemon"/> : <></>}</div>
                <div className={!btnOn ? 'pnt-data' : load ? 'pnt-data load' : 'pnt-data active'}>{btnOn && !load && well && pokemonSend !== "" ? <div><div><b>TIPO:</b> {result.types[0].type.name}{result.types.length >= 2 ? ", " + result.types[1].type.name : ""}</div><div><b>{selectLan ? 'HEIGHT:' : 'ALTURA:'}:</b> {result.height} cm</div><div><b>{selectLan ? 'WEIGHT:' : 'PESO:'}</b> {result.weight} kg</div><div><b>{selectLan ? 'BASE EXPERIENCE:' : 'EXPERIENCIA BASE:'}</b> {result.base_experience}</div><div><b>{selectLan ? 'MOVES:' : 'ACCIÓN:'}</b> {result.moves.length === 0 ? "" : result.moves[0].move.name}</div></div> : <></>}</div>
                <form onSubmit={onSubmitHandle}>
                    <input type='text' className={btnOn ? 'active' : ''} placeholder={btnOn && !selectLan ? '¿Qué pokemon?' : btnOn && selectLan ? 'What pokemon?' : ''} value={pokemonInput} onChange={handlePokemon}/>
                    <button type='submit'>
                        <span className="material-symbols-rounded">send</span>
                    </button>
                </form>
                <button className={btnOn ? 'btn-on active' : 'btn-on'} onClick={onBtnOn}>
                    <span className="material-icons-round">power_settings_new</span>
                </button>
                <button className={btnOn ? 'btn-play active' : 'btn-play'}>
                    <span className="material-icons-round">play_arrow</span>
                </button>
                <button className={btnOn ? 'btn-pause active' : 'btn-pause'}>
                    <span className="material-icons-round">pause</span>
                </button>
                <button className={btnOn ? 'btn-left active' : 'btn-left'} onClick={onBtnLeft}>
                    <span className="material-icons-sharp">arrow_left</span>
                </button>
                <button className={btnOn ? 'btn-right active' : 'btn-right'} onClick={onBtnRight}>
                    <span className="material-icons-sharp">arrow_right</span>
                </button>
                <button className={btnOn ? 'btn-up active' : 'btn-up'}>
                    <span className="material-icons-sharp">arrow_drop_up</span>
                </button>
                <button className={btnOn ? 'btn-down active' : 'btn-down'}>
                    <span className="material-icons-sharp">arrow_drop_down</span>
                </button>
                <div className={btnOn ? 'btn-center active' : 'btn-center'} onClick={onBtnCenter}>
                    <span className="material-icons-round">radio_button_checked</span>
                </div>
                <div className={wrong ? 'ind-wrong active' : 'ind-wrong'}></div>
                <div className={well && pokemonSend !== "" ? 'ind-well active' : 'ind-well'}></div>
                <div className={btnOn ? 'pnt-name active' : 'pnt-name'} style={{textOverflow: "Ellipsis", overflow: "hidden"}}>{btnOn && !load && well && pokemonSend !== "" ? result.name.toUpperCase() : " "}</div>
                <div className={btnOn ? 'pnt-stats active' : 'pnt-stats'}>
                    <div><b>HP</b></div>
                    <div><b>ATK</b></div>
                    <div><b>DEF</b></div>
                    <div><b>S-A</b></div>
                    <div><b>S-D</b></div>
                    <div><b>SPD</b></div>
                    <div>{btnOn && !load && well && pokemonSend !== "" ? result.stats[0].base_stat : " "}</div>
                    <div>{btnOn && !load && well && pokemonSend !== "" ? result.stats[1].base_stat : " "}</div>
                    <div>{btnOn && !load && well && pokemonSend !== "" ? result.stats[2].base_stat : " "}</div>
                    <div>{btnOn && !load && well && pokemonSend !== "" ? result.stats[3].base_stat : " "}</div>
                    <div>{btnOn && !load && well && pokemonSend !== "" ? result.stats[4].base_stat : " "}</div>
                    <div>{btnOn && !load && well && pokemonSend !== "" ? result.stats[5].base_stat : " "}</div>
                </div>
            </div>
        </div>
    );
}
export default Pokedex;
