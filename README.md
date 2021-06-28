# Rocket Launch APP

Projeto construído em React com o objetivo de exibir os últimos e fúturos lançamentos de foquetes da SpaceX.
Duas rotas foram criadas uma raiz e uma /past.
A raiz traz o último, o proximo e todos os futuros lançamentos.
Ja a rota past traz todos os lançamentos que já aconteceram.
Além de um css geral, o projeto foi componentizado usando styled-components para garantir isolamento e independencia para os componentes.
O projeto conta com o analytics, hotjar e um experimento do Google Optimize configurados. 
O experimento é ilustrativo e ideia foi testar uma mundaça do CTA que direciona para a página de lançamentos passados.

O deploy de uma versão em funcionamento foi feito na Vercel e conta com entrega continua a partir da branch main e pode ser acessado aqui.
https://rocket-launch-app.vercel.app/

## Todo

Algumas melhorias a serem implementadas.

- Adicionar loading state
- Adicionar placeholder
- Ajustar responsividade
- Adicionar tratamento de erro e retorno vazio
- Adicionar testes de interface / e2e

## Installation

Para rodar o projeto a primeira vez instale as dependencias e rode o primeiro build.

```sh
cd rocket_launch_app
yarn install
yarn build
yarn start
```

Abra o link http://localhost:3000