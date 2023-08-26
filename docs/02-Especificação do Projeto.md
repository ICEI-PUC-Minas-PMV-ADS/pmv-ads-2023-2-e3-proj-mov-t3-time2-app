# Especificações do Projeto

O nosso projeto visa ajudar empresas a organizarem e acompanharem as tarefas dos trabalhos da melhor forma possível, com a possibilidade de o gerente de projetos criar um espaço onde os colaboradores consigam colocar o que já foi feito, o que está em progresso e o que ainda falta.

## Personas

Gabriel tem 30 anos, é formado em TI e está atuando como gerente de projetos em uma grande empresa, ele busca uma plataforma onde consiga colocar todos os projetos que está liderando e consiga acompanhar quem está responsável por cada tarefa, quanto tempo demorou e quais tarefas ainda estão pendentes de fazer.

Marcela, tem 25 anos, formada em Análise e desenvolvimento de sistemas, ela atua como UX em projetos de uma grande empresa, e gostaria de ter uma plataforma onde conseguisse acompanhar todas as tarefas que tem que fazer em cada projeto, e assim, conseguir gerenciar o seu tempo em cada uma.

Carol, 27 anos, formada em Análise e desenvolvimento de sistemas, atua na parte de testes em um novo software em uma empresa, gostaria de ter uma plataforma onde conseguisse acompanhar quais os softwares ela já pode fazer o teste e também conseguisse documentar que já foi feito.

João Pedro, 32 anos, formado em TI, atua como Desenvolvedor de sistemas em uma empresa, gostaria de ter um lugar onde ele e todos os seus colegas de trabalho conseguissem colocar quais partes do trabalho já foram feitas e quais ainda não, assim, eles evitariam duplicidade e também fazer algo que o colega é o responsável.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Gerente de projetos | ter um local onde consigo acompanha de perto o projeto   | Que tudo saia conforme pedido pelo cliente       |
|Gerente de projetos | Ter um local que consiga delegar as tarefas aos funcionários e consiga colocar e retirar quem terá acesso | Verificar quanto tempo os colaboradores demoram por tarefas, quem já fez quais tarefas, entre outros |
|Desenvolvedor | Local onde consiga ver quem fez as atividades, e o que falta fazer| Para que façam tudo que foi pedido e entreguem no tempo estipulado |
|Tester | Verificar quais partes do software já podem ser testadas, e ver quais ainda faltam.  | Para que seja entregue com tudo funcioando  |


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. 

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve autenticar cada usuário | ALTA |
|RF-002| Permitir que o gestor cadastre projetos  e tarefas | ALTA |
|RF-003| Permitir que a alocação dos funcionários entre projetos e tarefas | ALTA |
|RF-004| Permitir o acompanhamento em tempo real das tarefas por todos os usuários do projeto | MÉDIA |
|RF-005| Emitir um relatório de tarefas no mês | MÉDIA |
|RF-006| Deve permitir que projetos sejam reabertos ou replicados |  MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve rodar em aplicação móvel | ALTA |
|RNF-002| O sistema deve suportar documentação em PDF, JPEG, JPG, BMP  | MÉDIA |
|RNF-003| Deve processar requisições do usuário em no máximo 3s |  BAIXA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


## Diagrama de Casos de Uso

![Eixo3-DiagramaCasosDeUso](https://github.com/geraldohomero/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/70844369/2c7be98c-5876-40f2-b28a-c79c53c0502d)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

	
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/79220860/d3b71079-2c67-4401-af4e-a3d788cc9082)


> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

Com base no cronograma estipulado pela Intituição PUC Minas, a divisão das tarefas em relação as datas ficaram da seguinte forma (Demonstrado a partir da Planilha e Gráfico de Gannt):

**Etapa 1 do Projeto:**

![Tabela Gantt Etapa 1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/60390440-9065-42be-aeb9-836d775583ca)

![Grafico Gantt Etapa 1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/a606a582-9e3b-40cf-8b90-06dce2516184)


**Etapa 2 do Projeto:**

![Tabela Gantt Etapa 2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/f3bd55b6-4e17-4182-867d-9c8aeee940d4)

![Grafico Gantt Etapa 2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/7f0f61e6-0f6c-4f31-90b2-ded8ee282068)


**Etapa 3 do Projeto:**

![Tabela Gantt Etapa 3](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/b0402464-95d0-4cc0-9d22-3392012d17ef)

![Grafico Gantt Etapa 3](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/53f8fe8a-6271-45ab-8740-d2bafc2a134e)


**Etapa 4 do Projeto:**

![Tabela Gantt Etapa 4](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/20b7947e-4297-4118-87ff-d99677ecaae9)

![Grafico Gantt Etapa 4](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/999415eb-3e56-4324-a548-5b5eed4356a4)


**Etapa 5 do Projeto:**

![Tabela Gantt Etapa 5](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/cd9d7332-24a9-448c-9b80-5b2977a28984)

![Grafico Gantt Etapa 5](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/e3e42f17-4540-4c45-ad76-9f4c7f2747c6)


A partir do desenvolvimento de cada etapa, as atividades seguintes ficarão mais detalhadas, seguindo os Requisitos estabelecidos pela equipe e sua ordem de prioridade para execução.

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Gerenciamento de Equipe](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/90e8cfd0-c43b-4e54-be07-fe5d42abf004)


## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento Projeto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/113808083/4f604a6d-cd86-4427-98ce-6c8a1d15f339)

