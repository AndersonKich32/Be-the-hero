import React, {useState} from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [watsapp, setWatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();

   async function handleRegister(e){
        e.preventDefault(); {/*Evita de ficar carregando a pagina quando evia o formulario*/}

        const data ={
            name,
            email,
            watsapp,
            city,
            uf
        };

        try{
            const response = await api.post('/ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`)
            history.push('/');
        }
        catch(erro){
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return(
       <div className="register-container">
           <div className="content">
               <section>
                  <img src={logoImg} alt='Be The Hero'/>
                  <h1>Cadastro</h1>
                  <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                  <Link className='back-link' to='/'>
                        <FiArrowLeft size={16} color='#E02041'/>
                         Não tenho cadastro
                    </Link>
               </section>

               <form onSubmit={handleRegister}> {/*dispara o evento pelo formulario*/}
                    <input placeholder='Nome da Ong'
                        value={name} 
                        onChange={e => setName(e.target.value)}/> {/*onChange escuta o que esta dentro do input e depois passo para o state*/}

                    <input type='email' placeholder='Email' 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}/>

                    <input placeholder='Watsapp' 
                        value={watsapp} 
                        onChange={e => setWatsapp(e.target.value)}/>

                    <div className="input-group">
                      <input placeholder='Cidade' 
                        value={city} 
                        onChange={e => setCity(e.target.value)}/>

                      <input placeholder='UF' style={{width: 80}} 
                        value={uf} 
                        onChange={e => setUF(e.target.value)}/>
                    </div>

                    <button className='button' type='submit'>Cadastrar</button>
               </form>
           </div>
       </div>
    )
}