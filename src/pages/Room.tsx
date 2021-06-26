import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import '../styles/room.scss';

export function Room() {
    return(
        <div className="content" >
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>codigo</div>
                </div>
            </header>
            
            <main className="content">
                <div className="room-title">
                    <h1>sala do React</h1>
                    <span>4perguntas</span>
                </div>

                <form>
                    <textarea
                        placeholder="O que voce quer perguntar?"
                    />
                    <div className="form-footer">
                        <span>Para enviar sua pergunta, <button> faca seu login</button></span>
                        <Button type="submit">Enviar pergunta</Button>
                    </div>
                </form>

            </main>
        </div>
    );
}