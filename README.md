# Box-officinfo

영화진흥위원회 api를 이용한 정적 페이지 프로젝트.

api를 client에서 불러와서 사용하였기에 back-end는 따로 개발하지 않음.

> Project Stack

- React 16.8.4

- Redux

- React-router v4

- styped-component

- typescript

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
