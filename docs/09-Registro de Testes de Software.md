# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

**CT 01 - Logar no Sistema**

- Registros em 15/10/2023

![telaloginInicial](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/b4ccc994-de47-4f87-9e24-9ebb499ea3dc)

**Problemas:** Ao clicar em Login, não Loga. Ao clicar em registrar senha, não acontece nada.

Botão Registrar:

![telaregistrar](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/797c33e9-a5af-49cc-95de-715dfd1b5361)

**Problemas:** Ao clicar em registrar, não dá nenhuma memsagem de sucesso ou erro.

- Registros em 20/11/2023

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/d8a5cb2d-1fda-46f2-919a-e3a6c66a904a

**Problemas Identificados:** Dados estão "chumbados" no projeto, ainda não há uma rota de autenticação que permita o acesso de forma adequada por e-mail e senha. Também não há uma conexão com a API para registrar um novo usuário.


**CT 02 - Cadastrar Projeto e Tarefas**

- Registro em 15/10/2023

A funcionalidade foi implementada, mas devido a problemas de WebApi, não conseguimos implemetar ela funcionando.

![telahome](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/bbb0fc9e-0d14-4e95-8362-6f551d2def6c)

**Problemas:** Ao clicar nos bot~eos, não há navegação.

![telaprojetos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/c90c483b-8f83-4a33-9461-0b6098a5875d)

**Problemas:** Ao clicar nos projetos ja existentes, não abre para fazer alterações ou visualizar outras informações. Ao clicar em +, não abre a tela de cadastro.

![telanovoprojeto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/cde6797e-f8d1-48e3-883f-cbe245344012)

**Problemas:** Nao permite o cadastro e botões nao funcionam.

- Registro em 20/11/2023

**Cadastro de Projeto**

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/bf0bab75-1035-4c24-95b6-1fbf9015d67d

**Problemas Identificados:** Apesar de conseguirmos conexão com a API, estamos com problemas para salvar o projeto criado. Os projetos que aparecem na tela, foram criados diretamente no MySql Worbench ou no Postman, ou seja, a API funciona, so não conseguimos conecta-la perfeitamente ao projeto. Também não tem a lógica para identificar projetos em andamento e finalizados.

**Cadastro Tarefas**

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/fe29af1e-464d-4be0-88d8-0eee0c9001e1

**Problemas Identificados:** Apesar de conseguirmos conexão com a API, estamos com problemas para salvar a tarefa criada. As tarefas que aparecem na tela, foram criadas diretamente no MySql Worbench ou no Postman, ou seja, a API funciona, so não conseguimos conecta-la perfeitamente ao projeto.

**CT 03 - Vincular Usuários a Projetos e Tarefas**

- Registro em 20/11/2023

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/46866abf-8b54-411a-9b17-e6a20c2d36a9

**Problemas Identificados:** Apesar de aparecer o usuário já cadastrado no banco, ao vincular ao projeto ou à tarefa, não conseguimos salvar com os dados selecionados, ele salva vazio.

**CT 03 - Visualizar Tarefas em tempo real**

- Registro em 22/10/2023

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/489c8156-b91d-4598-8774-1c777292bfe3

**Problemas Identificados:** Conseguimos visualizar a tarefa criada, mas não há a lógica para saber se ela está em andamento ou finalizada.

