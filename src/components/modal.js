import React from 'react';
import '../App.css';

const Modal = ({ card, closeModal }) => {
  let content;

  switch (card) {
    case 'breno':
      content = <div><h2>Breno</h2><p>Comecei minha carreira na área de TI na BRQ Digital Solutions, onde fui estagiário de desenvolvimento android no ano de 2019. Sou Desenvolvedor Android no momento na empresa PicPay. Graduado em Análise e Desenvolvimento de Sistemas pela Fatec São Caetano do Sul.</p></div>;
      break;
    case 'fernando':
      content = <div><h2>Fernando César Martins</h2><p>Forte experiência de trabalho usando padrões de projeto (Design Patterns), incluindo: MVC, MVP, MVVM, Adapter, Observer, Factory Method , Singleton, Abstract Factory, Composite, Strategy e Template Method; princípios SOLID e GRASP em desenvolvimento; conhecimentos aplicados em GIT, Bitbucket, Jenkins, Sonar, APIs, JSON, RESTful, Retrofit, SOAP, testes unitários Mockito e JUnit e testes instrumentados, Kotlin Flow, Koin, Coroutines, Firebase Integrations, Continous Deploy, 

      AWS Skills: Cloud Front, Lambda, S3, VPC, EC2, Elastic Beanstalk, RDS, Dynamo.
      
      Experiência também trabalhando com banco de dados Oracle e PL/SQL (Procedures, Triggers, Packages e rotinas), MySql, MongoDB, Neo4J, Redis.
      
      Práticas em documentação completa de software (UML), desde os diagramas estruturados, comportamentais e também na execução e planejamento de testes.</p></div>;
      break;
    case 'matheus':
      content = <div><h2>Matheus Lopes</h2><p> formado em Engenharia de Controle e Automação e atualmente trabalho como desenvolvedor Android. Possuo conhecimento de processo de pagamento e de terminais POS (Point of Sale), desenvolvimento de software baseado em arquitetura limpa e boas práticas de programação como design patterns e princípios SOLID, monitoramento de indicadores (Google Analytics e New Relic), testes unitários e instrumentados, padrão de apresentação de projeto (MVVM, MVP), utilização da plataforma Firebase, desenvolvimento de aplicações com toolkit Jetpack Compose e framework Flutter, sistemas de controle de versionamento (Git) e metodologias ágeis (Scrum).
      Gosto muito de aprender sobre novas tecnologias e participar de projetos desafiadores.</p></div>;
      break;
    case 'sandro':
      content = <div><h2>Sandro Nakamura</h2><p>Sou um engenheiro de computação que vive em busca da inovação e acredito que com a tecnologia podemos causar um impacto positivo na sociedade. Minha experiência inclui idealização, planejamento e prototipação de projetos.

      Gosto de gerar novas soluções viáveis com o auxílio da tecnologia para resolver problemas amplamente relevantes. Atualmente focado em me aprimorar no desenvolvimento Mobile.</p></div>;
      break;
    default:
      content = null;
      break;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        {content}
      </div>
    </div>
  );
}

export default Modal;
