import api from "../../../utils/api";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function InfoTeams(){
    const [funcionario, setFuncionario] = useState([])
    const { id } = useParams()

    useEffect(() => {
        api.get(`/teams/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            console.log(typeof response.data)
            setFuncionario(response.data)
        })

        console.log(funcionario)
    }, [id])

    const { 
        nome, 
        telefone, 
        email, 
        banco, 
        agencia, 
        conta,
        role
    } = funcionario

    return(
        <section>
            <div>
                <h1>Informações do Funcionário: {nome}</h1>
            </div>
            <div>
                <p> Nome: 
                    <span>{nome}</span>
                </p>
                <p> Telefone: 
                    <span>{telefone}</span>
                </p>
                <p> Email: 
                    <span>{email}</span>
                </p>
                <p> Banco:
                    <span>{banco}</span>
                </p>
                <p> Agência:
                    <span>{agencia}</span>
                </p>
                <p> Conta:
                    <span>{conta}</span>
                </p>
                <p> Função:
                    <span>{role}</span>
                </p>
            </div>
        </section>
    )
}

export default InfoTeams;