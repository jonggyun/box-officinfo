# Box-officinfo

[영화진흥위원회 OPEN API](http://www.kobis.or.kr/kobisopenapi/homepg/main/main.do)를 이용한 정적 페이지 프로젝트

API를 Client에서 불러와서 사용하였기에 Back-end는 따로 개발하지 않음.

Live URL: https://heuristic-galileo-99c180.netlify.com

> Goal

typescript에 익숙해지기, typescript와 react를 함께 사용하기

styled-components 익숙해지기

netlify를 통한 deploy

> Setting

CRA에서 제공하는 typescript kit을 사용해서 진행

```
npx create-react-app box-officinfo --typescript
```

> How to use

1. 프로젝트를 다운받고 패키지를 설치

```
git clone https://github.com/jonggyun/box-officinfo

yarn install
```

2. root 경로에 .env 파일을 생성한 뒤 REACT_APP_API_KEY에 영화진흥위원회에서 받은 API 키를 입력

```
NODE_PATH=src
REACT_APP_API_KEY=your key
```

3. 프로젝트를 실행

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
