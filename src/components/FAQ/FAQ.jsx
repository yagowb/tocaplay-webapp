import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


function FAQ() {
  return (
    <>
      <div>
          <h2 className='faq-title'>Perguntas Frequentes</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Como faço meu Cadastro?</Accordion.Header>
          <Accordion.Body>
          Preenchendo o formulário para cadastro com seus dados ou pode também se conectar com suas redes sociais.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Como criar uma Playlist?</Accordion.Header>
          <Accordion.Body>
          De forma bem simplificada, na música que está sendo reproduzida existe o ícone de adicionar + clique em cima que será redirecionado a Playlist que você escolher.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Quais os tipos de Planos?</Accordion.Header>
          <Accordion.Body>
          São os Planos: TocaPlay Gold com todas funcionalidades liberadas, TocaPlay Family pra toda sua família curtir o melhor das atualidades da música ou TocaPlay PRO para utilização profissional podendo fazer playback.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>O que é o TocaPlay?</Accordion.Header>
          <Accordion.Body>
          É um serviço digital que dá acesso instantâneo a milhões de músicas, podcasts, vídeos e outros conteúdos de criadores no mundo todo e está disponível para vários dispositivos, incluindo computadores, celulares, tablets, TVs e carros.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Posso ouvir as músicas offline no TocaPlay?</Accordion.Header>
          <Accordion.Body>
          Dependendo do Plano adquirido o usuário pode baixar as músicas preferidas para um armazenamento próprio para ouvir offline na plataforma TocaPlay.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    </>
  );
}

export default FAQ;
