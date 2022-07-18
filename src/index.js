import React from 'react'; //리액트 쓰겠다고 선언해준 것
import ReactDOM from 'react-dom/client'; //리액트 돔구조를 쓰겠다고 선언한 것. 리액트 구조는 필요한 것만 로딩함. 기존 html은 헤더, 메인, 푸터 순차적으로 로딩했음. so 필요한 것만 로딩되어서 소스가 낭비가 안됨. reactDOM = virtualDOM. so SPA. 수많은 컴포넌트 중 필요한 컴포넌트 중 로딩해주는 것. ex) 페이스북. 
//문제점 - 페이지 소스를 보면 소스가 하나도 없음. 노출이 안 되는 문제점 생김. 사이트의 제일 중요한 점은 마케팅. 메타 데이터가 노출이 안 됨. so SEO가 약한 것이 SPA의 단점. 대신 부분적으로 로딩하기 때문에 속도는 빠름. SEO를 개선하기 위해 만든 게 SSR. 이걸 쓰면 리액트를 써도 페이지에 기본 소스들이 노출이 되어서 검색 가능. 이걸 이용한 게 Next.js 
//index.js는 기본 룰이라 지우면 안 되고 App.js는 지움. 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
