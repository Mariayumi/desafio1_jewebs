import Input from "../components/input"
import React, { useState } from 'react';
import NoAnimationExample from "../components/tabs"
import "./principal.css"

function Principal(){

    const [pessoa, setPessoa] = useState({ nome: 'Nome Completo', trabalho: 'Cargo', email: 'email@gmail.com', telefone: '(12) 3456-7890',nomeEmpresa:'Nome da empresa' ,webSite: 'WebSite', endereco: 'Rua, bairro, número',logo: 'Logo',twitter: 'Twitter' ,instagram: 'Instagram',facebook: 'Facebook', linkedin: 'Linkedin'});

    function mudarNome(event){
        setPessoa(({...pessoa,nome: event.target.value }))
    }
    
    function mudarTrabalho(event){
        setPessoa(({...pessoa,trabalho: event.target.value }))
    }

    function mudarEmail(event){
        setPessoa(({...pessoa,email: event.target.value }))
    }

    function mudarTelefone(event){
        setPessoa(({...pessoa,telefone: event.target.value }))
    }

    function mudarEmpresa(event){
        setPessoa(({...pessoa,nomeEmpresa: event.target.value }))
    }

    function mudarWebsite(event){
        setPessoa(({...pessoa,webSite: event.target.value }))
    }

    function mudarEndereco(event){
        setPessoa(({...pessoa,endereco: event.target.value }))
    }

    function mudarLogo(event){
        setPessoa(({...pessoa,logo: event.target.value }))
    }

    function mudarTwitter(event){
        setPessoa(({...pessoa,twitter: event.target.value }))
    }

    function mudarInstagram(event){
        setPessoa(({...pessoa,instagram: event.target.value }))
    }

    function mudarFacebook(event){
        setPessoa(({...pessoa,facebook: event.target.value }))
    }

    function mudarLinkedin(event){
        setPessoa(({...pessoa,linkedin: event.target.value }))
    }

    return(
        <>
        <div className="app">
            <div className="row col-12">
                <div className="col-4 box">
                    <div className="caixa">
                        <h3>Dados Pessoais</h3>
                        <form action="">
                            <div class="row">
                                <Input function={(e)=>mudarNome(e)} label="Nome completo" class="mb-3 col-12" type="text"/>
                                <Input function={(e)=>mudarTrabalho(e)} label="Trabalho" class="mb-3 col-12" type="text"/>
                                <Input function={(e)=>mudarEmail(e)} label="E-mail" class="mb-3 col-6" type="text"/>
                                <Input function={(e)=>mudarTelefone(e)} label="Telefone" class="mb-3 col-6" type="number"/>
                            </div>
                        </form>
                    </div>

                    <div className="caixa">
                        <h3>Dados da empresa</h3>
                        <form action="">
                            <div class="row">
                                <Input function={(e)=>mudarEmpresa(e)} label="Nome da empresa" class="mb-3 col-12" type="text"/>
                                <Input function={(e)=>mudarWebsite(e)} label="Website" class="mb-3 col-12" type="text"/>
                                <Input function={(e)=>mudarEndereco(e)} label="Endereço" class="mb-3 col-12" type="text"/>
                                <Input function={(e)=>mudarLogo(e)} label="Logo" class="mb-3 col-12" type="text" text="Link do logo da empresa"/>
                            </div>
                        </form>
                    </div>

                    <div className="caixa">
                        <h3>Redes sociais</h3>
                        <form action="">
                            <div class="row">
                                <Input function={(e)=>mudarTwitter(e)} label="Twitter" class="mb-3 col-12" type="text"/>
                                <Input function={(e)=>mudarInstagram(e)} label="Instagram" class="mb-3 col-12" type="text"/>
                                <Input function={(e)=>mudarFacebook(e)} label="Facebook" class="mb-3 col-12" type="text"/>
                                <Input function={(e)=>mudarLinkedin(e)} label="Linkedin" class="mb-3 col-12" type="text"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-8">
                    <NoAnimationExample pessoa={pessoa} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Principal