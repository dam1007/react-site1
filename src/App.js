//확장기능 중 자동완성 기능 쓸거임. ES7+React/Redux/React-Naive snippets 설치할 것. 독타입 선언할 때 !엔터 치면 선언되는 것처럼 rfec 엔터치면 자동완성 됨.
import React from 'react';
//css 연동. 연동시킬 땐 경로만 쓰면 됨. 필요한 파일 import
import "./App.css";
// import로 자른 헤더 불러오기.
import Header from "./components/Header";
import Slider from "./components/Slider";
import Image from "./components/Image";
import ImgText from './components/ImgText';
import Card from './components/Card';
import Banner from './components/Banner';
import Text from './components/Text';
import Footer from './components/Footer';
import Contents from './components/Contents';

//자바스크립트 : 동적인 부분(데이터 표현하는 것. html, css로는 데이터 표현할 수 없으니까.)
//자스는 데이터 입력, 출력이 중요함. 입,출력을 한 다음엔 실행.
//실행 시, 데이터를 컨트롤 할 줄도 알아야 함 -> 데이터 제어하기
//데이터 저장 방법 4가지 : 변수, 상수, 배열, 객체. 배열은 한 개 이상, 두 개 이상. 객체는 키와 값으로 이루어진 정보. 리액트에서는 props에 저장. 
//데이트 출력 방법 : 변수, 상수, 배열, 객체를 통해서 출력 가능. 저장, 출력 방법이 동일!!! 이 방법을 알고 있어야 함.
//함수 표현 방법이 함수가 있고 클래스가 있음. 개발자는 클래스 많이 쓰고 프론트, 퍼블은 함수를 많이 씀.

//함수 안에 실행문이 안 들어가는 경우가 있음. 이를 결과를 출력하고 싶어서 return을 쓰는 것. 자스에는 다 return이 다 들어가있음. 근데 안 쓰는 이유는 생략된 것.
//react는 무조건 결과값이 나와야 하기 때문에 무조건 return 쓴다. return 다음에 코딩한 것 넣어주면 됨.
//리액트는 #을 못 써서 /로 써야함. 클래스 안 쓰고 className 씀.
function App() {
  return (
    <>
      {/* 잘린 헤더 불러오기 */}
      {/* 속성 전달 . 다수의 속성 전달하면 배열 사용. */}
      <Header fonts="gmarket" />
      <Contents>
        <Slider fonts={["slider__wrap", "nexon"]} />
        <Image skill={["section", "nexon"]} />
        <ImgText skill={["section", "nexon", "gray"]}/>
        <Card skill={["section", "nexon"]}/>
        {/* <section id="cardType" className="card__wrap section nexon">
              <h2>웹스토리보이 강의</h2>
              <p>
                  웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자를 위한 강의 사이트입니다.<br/> 
                  Gmarket Sans Light 22px 150% /67778A 
              </p>
              <div className="card__inner container">
                  <article className="card">
                      <figure className="card__header">
                          <img className="img" src="assets/img/card_bg01.jpg" alt="이미지1"/>
                      </figure>
                      <div className="card__body">
                          <h3 className="title">웹표준 사이트 만들기</h3>
                          <p className="desc">사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본 강의입니다.</p>
                          <a className="btn" href="/">
                              더 자세히 보기
                              <svg width="52" height="8" viewBox="0 0 52 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z" fill="/5B5B5B"/>
                              </svg>
                          </a>
                      </div>
                  </article>
                  <article className="card">
                      <figure className="card__header">
                          <img className="img" src="assets/img/card_bg02.jpg" alt="이미지2"/>
                      </figure>
                      <div className="card__body">
                          <h3 className="title">웹표준 사이트 만들기</h3>
                          <p className="desc">사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본 강의입니다.</p>
                          <a className="btn" href="/">
                              더 자세히 보기
                              <svg width="52" height="8" viewBox="0 0 52 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z" fill="/5B5B5B"/>
                              </svg>
                          </a>
                      </div>
                  </article>
                  <article className="card">
                      <figure className="card__header">
                          <img className="img" src="assets/img/card_bg03.jpg" alt="이미지3"/>
                      </figure>
                      <div className="card__body">
                          <h3 className="title">웹표준 사이트 만들기</h3>
                          <p className="desc">사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본 강의입니다.</p>
                          <a className="btn" href="/">
                              더 자세히 보기
                              <svg width="52" height="8" viewBox="0 0 52 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z" fill="/5B5B5B"/>
                              </svg>
                          </a>
                      </div>
                  </article>
              </div>
        </section> */}
        <Banner skill={["section", "gmarket"]}/>
        <Text skill={["section", "nexon"]} />
      </Contents>
      <Footer skill={["section", "gmarket", "gray"]}/>
    </> 
  );
}
//다른 데에서 쓸 수 있게 export
export default App;