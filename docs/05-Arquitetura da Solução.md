# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![DIAGRAMA DE CLASSE](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/6d36e3ab-5813-4243-8e87-8a05d90bb1d8)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

![modelo ER](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/bbe46060-a642-40fa-9009-aa84a7836d75)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

- Linguagem: JavaScript
- Biblioteca: React Native
- IDE: Visual Studio Code e Expo.dev
- Ferramenta Wireframes: Figma
- Ferramenta de Comunicação: Whatsapp e Teams
- Ferramenta de Gestão de Projeto: Trello

![tecnologias utilizadas](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/c3d2930c-de20-4acc-808b-86750cc334fe)


## Hospedagem

Por enquanto, a equipe optou por utilizar a orientação da instituição e não usar um banco de dados estruturado e uma hospedagem que comporte essa estrutura. Assim sendo, usaremos JSON server para buscar os dados necessários para demonstrarmos o projeto.

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, a equipe identificou, inicialmente, as sub-características que serão utilizadas como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. A seguir, mostramos quais as sub-caracteristicas escolhidas, com sua respectiva justificativa e metricas de avaliação:

| Caracteristica | Subcaracteristica | Justificativa | Métrica |
| -------------- | ----------------- | ------------- | ------- |
| Funcionalidade | Adequação | Para avaliar se o sistema atende bem os requisitos levantados pela equipe. | O software atende os requisitos levantados? 1- Atende 2- Atende a maioria 3- Não atende. Sendo nota 0 para o "Não atende", 3 para o "Atende a maioria" e 5 para o "Atende".|
| Confiabilidade | Recuperabilidade | A equipe considera essa subcaracteristica importante, pois muitos dados podem ser perdidos após uma falha do sistema, trazendo muitos problemas aos projetos que foram iniciados. | Os dados anteriores foram recuperados? 1- Sim 2- Não. Use "Sim" se TODOS os dados foram recuperados e "Não" se pelo menos um dado está faltando. Será avaliado, em porcentagem, se o sistema obteve exito na recuperação dos dados.|
| Usabilidade | Apreensibilidade | A equipe optou por essa subcaracteristica para poder entender melhor o quão dificil está para o usuário aprender a usar todas as funcionalidades oferecidas pelo sistema. | O sistema é de fácil entendimento? 1- Totalmente 2- Grande Parte 3- Não. Sendo nota 5 para "Totalmente", 3 para "Grande Parte" e 0 para "Não"|
| Eficiência | Comportamento em relação ao tempo | Por ser um sistema que disponibiliza ferramentas para criação de projetos e tarefas, é extremamente importante a avaliação do tempo quando é requisitado um dado na tela. | O sistema demora quando tempo para responder sua requisição? 1- De 0 a 3 segundos 2- De 4 a 7 segundos 3- De 7 a 10 segundos 4- mais de 10 segundos. Sendo nota 5 para "de 0 a 3 segundos", nota 3 para " de 4 a 7 segundos", nota 2 para " de 7 a 10 segundos" e nota 0 para " mais de 10 segundos".|
| Manutenibilidade | Analisabilidade | a equipe considerou uma subcaracteristica importante, pois é uma forma de verificar o quanto o código está sendo escrito com fácil compreensão e o quão fácil será para corrigir um erro | Quanto tempo levou para analisar e corrigir um erro? 1- 15 min a 1 hora 2- 1 hora a 2 horas 3- mais de 3 horas. Sendo notas 5 para a opção 1, nota 3 para a opção 2 e nota 0 para a opção 3. |
| Segurança | Confidencialidade | Para proteger os dados do projeto de cada equipe, foi escolhido essa subcaracteristica para avaliação. | O dados estão criptografados? 1- Sim 2- Não. A senha continua criptografada após o usuário realizar o login? 1- Sim 2- Não.||
|Portabilidade | Adaptabilidade | Para analisar a capacidade do aplicativo se adaptar ao android e ios. | Qual o tempo médio para implementar mudanças ou atualizações exigidas na plataforma usada? 1- 15 min a 1 hora 2- 1 hora a 2 horas 3- mais de 3 horas. Sendo notas 5 para a opção 1, nota 3 para a opção 2 e nota 0 para a opção 3. |

