# Novo Projeto + Artigo — Troca com Bônus Equatorial GO

> Números arredondados em relação ao dashboard interno (ver nota acima). Se preferir os valores exatos, é só pedir a versão sem arredondamento.

---

## 1. Card para "04 · Projetos & impactos"

Sugestão: inserir como card **full-width** (flagship), logo depois do eco3e — mantém o padrão de alternância que a seção já tem (âncora → par lateral → âncora → par lateral).

```
Categoria: ARQUITETURA & DADOS

Título: Troca com Bônus Equatorial GO — arquitetura para escala e operação financeira

Descrição:
Condução tecnológica da plataforma que sustenta o programa Troca com Bônus da
Equatorial Goiás, do cadastro do cliente à confirmação da venda. Arquitetura
responsável por absorver picos de acesso em campanha, com dashboard gerencial
para acompanhar a operação em tempo real.

Bullets de resultado:
- Sustentou mais de 2 milhões de requisições sem intervenção manual em pico de campanha
- Processou uma operação que movimentou mais de R$ 12 milhões em verba
- Dashboard gerencial permitiu decisão de negócio quase em tempo real, não só monitoramento técnico

Tags de stack: Laravel · Laravel Nova · MySQL · Observabilidade · Integrações
```

---

## 2. Card para "05 · Artigos & estudos de caso"

```
Categoria: ARQUITETURA & DADOS

Título: De 2 milhões de requisições a R$ 12 milhões em operação: os desafios
de engenharia por trás do Troca com Bônus Equatorial GO

Blurb:
Por que escala técnica sozinha diz pouco, e o que aprendi conectando
arquitetura, dados e resultado financeiro numa operação real de grande porte.

Data: Set 2026 · 6 min de leitura
Ícone sugerido: gráfico de crescimento (linha ascendente) — reforça "escala",
mantém a linha dos ícones temáticos já usados nos outros 3 artigos.
```

---

## 3. Artigo completo (corpo da página)

# De 2 milhões de requisições a R$ 12 milhões em operação: os desafios de engenharia por trás do Troca com Bônus Equatorial GO

Em tecnologia, é relativamente fácil falar sobre escalabilidade quando o sistema ainda está no diagrama de arquitetura.

O desafio real começa quando milhares de pessoas passam a utilizar a solução, o volume cresce rapidamente e cada indisponibilidade deixa de ser apenas um problema técnico para se tornar um problema operacional e financeiro.

Em 2026, tive a oportunidade de participar da condução tecnológica do projeto Troca com Bônus — Equatorial Goiás, uma operação que conectou tecnologia, atendimento ao cliente, varejo, análise de dados e eficiência energética.

Durante a operação, a arquitetura responsável pelo fluxo de cadastros precisou suportar mais de 2 milhões de requisições, mantendo disponibilidade e capacidade de processamento em um cenário de grande concentração de acessos.

Mas escala técnica, isoladamente, diz pouco.

O que torna esse projeto particularmente interessante são os números de negócio que estavam por trás dessas requisições. No momento deste levantamento, o dashboard da operação registrava a casa de **15 mil pré-cadastros aprovados**, mais de **6 mil vendas confirmadas** e uma verba de projeto já consumida na faixa de **99% do total disponível** — cerca de **R$ 12 milhões**.

Ou seja: não estávamos simplesmente mantendo uma aplicação web funcionando. Estávamos sustentando tecnologicamente uma operação que movimentou mais de R$ 12 milhões.

## Quando arquitetura deixa de ser apenas uma decisão técnica

Projetar uma aplicação para alguns milhares de acessos é uma coisa. Projetá-la sabendo que uma campanha pode gerar picos concentrados de requisições é outra completamente diferente.

Nesse tipo de cenário, algumas decisões passam a ser fundamentais:

**Escalabilidade** — a infraestrutura precisa absorver crescimento sem exigir intervenção manual a cada aumento de demanda.

**Observabilidade** — não basta saber que "o sistema está funcionando". É necessário acompanhar comportamento, erros, gargalos e capacidade da infraestrutura.

**Performance** — uma diferença de poucos segundos pode representar milhares de pessoas esperando simultaneamente por uma resposta.

**Resiliência** — falhas precisam ser isoladas para evitar que um problema específico comprometa toda a operação.

**Dados** — a tecnologia também precisa transformar a operação em informação capaz de orientar decisões.

Foi justamente por isso que o dashboard gerencial se tornou uma parte importante da solução. Ele permitiu acompanhar não apenas indicadores técnicos, mas o resultado da operação praticamente em tempo real.

## Dados transformando operação em decisão

Os números do dashboard não serviam só para acompanhamento técnico — apoiavam perguntas diretas de negócio: onde existe maior adesão, onde existe capacidade para expansão, quais equipamentos possuem maior demanda, onde concentrar operação, estoque ou atendimento, quais regiões precisam de ações específicas.

É nesse momento que engenharia de software, dados e estratégia começam a se encontrar.

Uma aplicação transacional gera dados. Uma boa plataforma transforma esses dados em capacidade de decisão.

## O maior aprendizado não foi sobre infraestrutura

Projetos assim reforçam algo que tenho percebido cada vez mais atuando na gestão de tecnologia: escalabilidade não é somente aumentar servidores. É necessário escalar arquitetura, processos e pessoas ao mesmo tempo.

A aplicação pode estar preparada para milhões de requisições, mas o projeto ainda falha se o suporte não estiver preparado. O sistema pode responder em milissegundos, mas a operação ainda pode parar se uma integração não tiver mecanismos adequados de contingência. O banco pode suportar milhares de transações, mas a gestão continua tomando decisões lentamente se não existir uma camada de dados capaz de transformar essas informações em indicadores.

Por isso, hoje enxergo arquitetura em pelo menos quatro dimensões: **Tecnologia → Dados → Operação → Negócio.**

Quando uma decisão tecnológica melhora essas quatro dimensões simultaneamente, deixamos de falar apenas de desenvolvimento de software e começamos a falar de engenharia aplicada ao resultado empresarial.

## Tecnologia precisa aparecer no resultado

Talvez esse seja o ponto que mais gosto nesse projeto.

É possível olhar para a infraestrutura e discutir requisições, APIs, banco de dados, processamento e disponibilidade. Mas também é possível olhar para o mesmo sistema e encontrar: mais de R$ 12 milhões processados, milhares de vendas confirmadas, milhares de clientes aprovados no pré-cadastro, mais de 2 milhões de requisições suportadas pela arquitetura.

Para mim, esse é um dos melhores indicadores de maturidade de uma área de tecnologia: quando conseguimos explicar uma solução tanto para um engenheiro de software quanto para uma diretoria — usando linguagens diferentes, mas falando sobre o mesmo resultado.

Tecnologia não deveria ser percebida apenas pelo sistema que entregamos. Ela precisa ser percebida pelo resultado que ajudamos o negócio a alcançar.

---

## 4. Post de lançamento para o LinkedIn (separado do artigo)

O fechamento com pergunta e hashtags não entra na página do site — funciona melhor como o post que anuncia o artigo e direciona tráfego pra ele. Se quiser, eu monto esse post separadamente (curto, com os 4 números principais em destaque) na próxima etapa — é só pedir.
