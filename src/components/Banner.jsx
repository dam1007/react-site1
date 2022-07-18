// rfce 엔터. 기본문법 나옴.
import React from 'react'

function Banner() {
  return (
    // 문법 중 하나는 div 박스를 연달아 쓸 수 없음. 반드시 한 가지 부모가 있어야 함. 
    <section id="bannerType" className="banner__wrap section gmarket">
      <h2 className="ir_so">배너 영역</h2>
      <div className="banner__inner">
          <h3 className="banner__title">유튜버 웹보이</h3>
          <p className="banner__desc">
              더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
              <a href="/">youtube.com/c/Webstoryboy</a>
          </p>
          <span className="banner__sub">배너 영역01</span>
      </div>
    </section>
  )
}

export default Banner