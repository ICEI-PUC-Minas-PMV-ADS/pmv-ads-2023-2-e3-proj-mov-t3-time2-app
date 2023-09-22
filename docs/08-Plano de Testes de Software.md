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
| **Passos** | - 1.	Acessar o sistema com perfil de gestor. <br> - 2. Inserir e-mail <br> - 3. Inserir senha <br> - 4. Acionar o comando Login. <br> - 5. Acionar o Criar Projetos. <br> - 6. Acionar o comando "+" (nova tarefa). <br> - 7. Preencher os dados. <br> - 8. Acionar o comando Salvar. |
| **Critérios de Êxito** | O sistema deve permitir o cadastro de projetos e tarefas. |

| **Caso de Teste** | CT 03 - Vincular funcionários em projetos e tarefas |
|------------------ | ------------------------ |
| **Requisitos Associados** | RF003 - Permitir a alocação dos funcionários entre projetos e tarefas |
| **Objetivo do Teste** | Destinar projetos e tarefas para o usuário desejado. |
| **Passos** | - 1.	Acessar o sistema com perfil de gestor. <br> - 2. Inserir e-mail <br> - 3. Inserir senha <br> - 4. Acionar o comando Login. <br> - 5. Acionar o comando Projetos. <br> - 6. Acionar o comando "+" (nova tarefa). <br> - 7. Preencher os dados. <br> - 8. Acionar o comando Salvar. |
| **Critérios de Êxito** | O sistema deve permitir a alocação dos funcionários entre projetos e tarefas. |

