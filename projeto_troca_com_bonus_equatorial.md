### Produtos Digitais & Cloud

#### Troca com Bônus Equatorial — Plataforma de Cadastro e Vendas (PEE ANEEL)
*3e Soluções · [ano de início]–presente*

Liderei tecnicamente a plataforma digital que sustenta a adesão de clientes ao programa Troca com Bônus da Equatorial Goiás, iniciativa do Programa de Eficiência Energética da ANEEL realizada em parceria com rede varejista. A plataforma concentra o pré-registro do consumidor, o fluxo de avaliação de elegibilidade por unidade consumidora e um dashboard de acompanhamento em tempo real para a gestão da campanha.

Mantive a stack do time em PHP e levei o backend para arquitetura serverless na AWS, garantindo elasticidade para absorver picos de acesso concentrados em campanhas de curta duração sem gestão de servidores. O front-end é publicado via AWS Amplify, com dupla camada de proteção de acesso por AWS WAF e Cloudflare, em um contexto de coleta de dados pessoais aberta ao público.

**Impactos:**
- Processou mais de 16 mil solicitações de cadastro, com mais de 14 mil clientes aprovados para participação no programa
- Aplicou regras de elegibilidade de forma consistente: entre os cadastros já avaliados, cerca de 93% foram aprovados e 7% reprovados por não atenderem aos critérios
- Operou campanha de alta demanda sem nenhum incidente grave, com proteção de borda contra bots e tráfego malicioso
- Deu visibilidade em tempo real à evolução da campanha por meio de dashboard de cadastros e vendas

**Tecnologias:** PHP, AWS Serverless, AWS Lambda, AWS Amplify, AWS WAF, Cloudflare, APIs REST, Dashboard em tempo real
