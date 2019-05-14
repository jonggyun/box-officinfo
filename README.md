# Box-officinfo

It is static SPA(Single Page Application) project using [KOBIS OPEN API](http://www.kobis.or.kr/kobisopenapi/homepg/main/main.do)

There is no Back-end server. because I call OPEN API in client.

Live URL: https://heuristic-galileo-99c180.netlify.com

> Goal

1. Get used to typescript and use typescript with reactjs.

2. Get used to styled-components

3. Deploy netlify

> Setting

Use CRA(creat-react-app) typescript kit.

```
npx create-react-app box-officinfo --typescript
```

> How to use

1. Download project and set up package use yarn.

```
git clone https://github.com/jonggyun/box-officinfo

yarn install
```

2. Create .env file in you root path and enter REACT_APP_API_KEY that is KOBIS OPEN API in your .env file.

```
NODE_PATH=src
REACT_APP_API_KEY=your key
```

3. Start project.

```
yarn start
```

> Specification

- react 16.8.4

- redux

- redux-thunk

- react-router v4

- styped-component

- typescript

- Immer

> Project Structure

```
├── App.tsx
├── components
│   ├── boxoffice
│   │   └── BoxofficeList.tsx
│   ├── common
│   │   ├── DoNotHaveItem.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── MenuNavigator.tsx
│   ├── main
│   │   └── MainTemplate.tsx
│   ├── movieInfo
│   │   ├── MovieDetail.tsx
│   │   ├── MovieInfoList.tsx
│   │   └── detail
│   │       ├── Actors.tsx
│   │       ├── Companies.tsx
│   │       ├── Directors.tsx
│   │       ├── Genre.tsx
│   │       ├── ShowTypes.tsx
│   │       └── Staffs.tsx
│   └── person
│       ├── PersonDetail.tsx
│       └── PersonList.tsx
├── containers
│   ├── boxoffice
│   │   └── BoxofficeListContainer.tsx
│   ├── movieInfo
│   │   ├── MovieDetailContainer.tsx
│   │   └── MovieInfoContainer.tsx
│   └── person
│       ├── PersonContainer.tsx
│       └── PersonDetailContainer.tsx
├── index.css
├── index.tsx
├── lib
│   ├── api
│   │   ├── boxoffice.ts
│   │   ├── company.ts
│   │   ├── customApi.ts
│   │   ├── movie.ts
│   │   └── people.ts
│   ├── styles
│   │   ├── common.ts
│   │   └── responsive.ts
│   └── types
│       └── movieInfo.ts
├── modules
│   ├── boxoffice.ts
│   ├── movie.ts
│   ├── person.ts
│   └── reducers.ts
├── pages
│   ├── BoxofficePage.tsx
│   ├── MainPage.tsx
│   ├── MovieInfoPage.tsx
│   └── PersonPage.tsx
├── react-app-env.d.ts
└── serviceWorker.ts
```
