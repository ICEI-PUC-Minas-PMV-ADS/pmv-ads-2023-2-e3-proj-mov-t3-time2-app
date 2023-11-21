# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
| **Caso de Teste** | CT 01 - Logar no Sistema |
|------------------ | ------------------------ |
| **Requisitos Associados** | RF001 - O sistema deve autenticar cada usuário. |
| **Objetivo do Teste** | Permitir que o usuário acesse a plataforma através do login e senha. |
| **Passos** | - 1. Acessar o sistema. <br> - 2. Inserir e-mail <br> - 3. Inserir senha <br> - 4. Acionar o comando Login. |
| **Critérios de Êxito** | O sistema deve autenticar corretamente e deve ter acesso de acordo com as permissões concedidas. |

| **Caso de Teste** | CT 02 - Cadastrar projetos e tarefas |
|------------------ | ------------------------ |
| **Requisitos Associados** | RF002 - Permitir que o gestor cadastre projetos e tarefas. |
| **Objetivo do Teste** | Realizar cadastro de projetos e tarefas. |
| **Passos** | - 1.	Acessar o sistema . <br> - 2. Inserir e-mail <br> - 3. Inserir senha <br> - 4. Acionar o comando Login. <br> - 5. Acionar o Criar Projetos. <br> - 6. Acionar o comando "+" (nova tarefa). <br> - 7. Preencher os dados. <br> - 8. Acionar o comando Salvar. |
| **Critérios de Êxito** | O sistema deve permitir o cadastro de projetos e tarefas. |

| **Caso de Teste** | CT 03 - Vincular usuários em projetos e tarefas |
|------------------ | ------------------------ |
| **Requisitos Associados** | RF003 - Permitir a alocação dos usuários entre projetos e tarefas |
| **Objetivo do Teste** | Destinar projetos e tarefas para o usuário desejado. |
| **Passos** | - 1.	Acessar o sistema . <br> - 2. Inserir e-mail <br> - 3. Inserir senha <br> - 4. Acionar o comando Login. <br> - 5. Acionar o comando Projetos. <br> - 6. Acionar o comando "+" (nova tarefa). <br> - 7. Preencher os dados. <br> - 8. Acionar o comando Salvar. |
| **Critérios de Êxito** | O sistema deve permitir a alocação dos funcionários entre projetos e tarefas. |

| **Caso de Teste** | CT 04 - Visualizar tarefas em tempo real |
|------------------ | ------------------------ |
| **Requisitos Associados** | RF004 - Permitir o acompanhamento em tempo real das tarefas por todos os usuários do projeto. |
| **Objetivo do Teste** | Permitir um monitoramento das tarefas em tempo real para tomada de decisões. |
| **Passos** | - 1.	Acessar o sistema. <br> - 2. Inserir e-mail <br> - 3. Inserir senha <br> - 4. Acionar o comando Login. <br> - 5. Acionar o comando Projetos. <br> - 6. Clicar em um projeto. <br> - 7. Visualizar tarefas. |
| **Critérios de Êxito** | O sistema deve permitir que o usuário visualize as tarefas em tempo real. |

| **Caso de Teste** | CT 05 - Emitir relatório de tarefas |
|------------------ | ------------------------ |
| **Requisitos Associados** | RF005 - Emitir um relatório de tarefas no mês. |
| **Objetivo do Teste** | Permitir a emissão de relatório de tarefas para um melhor acompanhamento e auxílio na tomada de decisões. |
| **Passos** | - 1.	Acessar o sistema. <br> - 2. Inserir e-mail <br> - 3. Inserir senha <br> - 4. Acionar o comando Login. <br> - 5. Acionar o comando Gerar Relatório <br> - 6. Clicar em um projeto. <br> - 7. Clicar em uma tarefa. <br> - 8. Clicar no comando PDF. |
| **Critérios de Êxito** | O sistema deve emitir um documento em pdf contendo as informações daquela tarefa. |

| **Caso de Teste** | CT 06 - Reabrir ou replicar projetos. |
|------------------ | ------------------------ |
| **Requisitos Associados** | RF006 - Deve permitir que projetos sejam reabertos ou replicados |
| **Objetivo do Teste** | Permitir que o usuário visualize dados de projetos já executados e que, dessa forma, replique para um novo projeto o que já foi feito, otimizando assim o tempo da equipe. |
| **Passos** | - 1.	Acessar o sistema; <br> - 2. Inserir e-mail <br> - 3. Inserir senha <br> - 4. Acionar o comando Login. <br> - 5. Acionar o comando Projetos <br> - 6. Clicar em um projeto. <br> - 7. Clicar em um padrão. <br> - 8. Visualizar/Alterar dados. <br> - 9. Salvar. |
| **Critérios de Êxito** | O sistema deve permitir a reabertura de um projeto finalizado bem como a replicação. |



