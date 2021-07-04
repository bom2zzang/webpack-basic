# webpack-basic

* [생활코딩](https://opentutorials.org/module/4566)

* 장점
    - 여러개의 파일을 하나로 묶어주기 때문에 네트워크 접속의 부담을 줄 일 수 있습니다. 더 빠른 서비스를 제공할 수 있습니다. 
    - 여러개의 서로 다른 패키지들이 서로 같은 이름의 전역 변수를 사용하면 프로그램은 오동작하게 됩니다. 이런 문제를 극복하기 위해서 등장한 것이 모듈입니다. 웹팩은 아직 최신 기술이라서 적용하기가 애매한 기술인 모듈을 오래된 브라우저에서도 사용할 수 있게 도와줍니다. 
    - 웹팩에는 매우 많은 플러그인들이 존재합니다. 이런 플러그인을 이용하면 웹개발시에 필요한 다양한 작업을 자동화 할 수 있습니다. 

* 웹팩 이전의 세계와 모듈의 개념

* 웹팩의 도입
    1. npm 설치
    2. `npm init` node.js의 프로젝트로 선언 > package.json파일 생성 확인
    3. `npm install -D webpack webpack-cli`
    
    4. entry js인 index.js 파일을 생성한다.
    5. `npx webpack --entry ./source/index.js --output-path ./public` > public폴더에 main.js가 생성됨.
    6. index.html에서 public폴더의 main.js를 스크립트에 추가