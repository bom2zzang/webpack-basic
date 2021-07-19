# webpack-basic

> [생활코딩](https://opentutorials.org/module/4566) <br/> > [webpack](https://webpack.js.org/)

- 장점

  - 여러개의 파일을 하나로 묶어주기 때문에 네트워크 접속의 부담을 줄 일 수 있습니다. 더 빠른 서비스를 제공할 수 있습니다.
  - 여러개의 서로 다른 패키지들이 서로 같은 이름의 전역 변수를 사용하면 프로그램은 오동작하게 됩니다. 이런 문제를 극복하기 위해서 등장한 것이 모듈입니다. 웹팩은 아직 최신 기술이라서 적용하기가 애매한 기술인 모듈을 오래된 브라우저에서도 사용할 수 있게 도와줍니다.
  - 웹팩에는 매우 많은 플러그인들이 존재합니다. 이런 플러그인을 이용하면 웹개발시에 필요한 다양한 작업을 자동화 할 수 있습니다.

- 웹팩 이전의 세계와 모듈의 개념

- 웹팩의 도입

  1. npm 설치
  2. `npm init` node.js의 프로젝트로 선언 > package.json파일 생성 확인
  3. `npm install -D webpack webpack-cli`

  4. entry js인 index.js 파일을 생성한다.
  5. `npx webpack --entry ./source/index.js --output-path ./public` > public폴더에 main.js가 생성됨.
  6. index.html에서 public폴더의 main.js를 스크립트에 추가

- [설정파일의 도입](https://webpack.js.org/configuration/)

  1. webpack.config.js 파일을 만든다.
  2. 설정을 작성하고 `npx webpack --config webpack.config.js` > public폴더에 main.js가 생성됨.
  3. 또는 설정파일의 이름이 webpack.config.js라면 `npx webpack`로 깔끔하게 가능!

- [운영 모드의 도입](https://webpack.js.org/configuration/mode/)

  1. Mode
     ```
         string = 'production': 'none' | 'development' | 'production'
     ```
  2. webpack.config.prod.js 를 만들어 개발모드와 운영모드를 분리한다. > 한 파일안에서 시스템 환경변수로 제어할 수도 있음!

- [로더의 도입](https://webpack.js.org/guides/asset-management/)

  1. `npm install --save-dev style-loader css-loader`
  2. webpack.config.js에 설정 추가
  3. src폴더 아래의 소스들이 번들링 대상임 > public에 있는애들은 아님!
  4. [loaders](https://webpack.js.org/loaders/)

- [output 설정](https://webpack.js.org/configuration/output/)

  1. 파일을 쪼갤지, 하나로 합칠지!
  2. webpack.config.js의 output부분 설정 추가

- [플러그인 도입](https://webpack.js.org/plugins/)

  1. 웹팩의 두가지 형태의 확장기능
     - 로더 : 동작형태가 규정되어있다.
     - **플러그인** : 복합적이고 자유롭다.
  2. HtmlWebpackPlugin 설치 `npm install --save-dev html-webpack-plugin`
  3. \*.html을 src폴더 아래로 넣고 스크립트태그 제거
  4. [플러그인 옵션](https://github.com/jantimon/html-webpack-plugin#options)을 확인하여 webpack.config.js 설정 수정
  5. public폴더아래에 생긴 index.html을 확인

- --watch 옵션
  1. 바뀔 때마다 `npx webpack` 명령 귀찮다.
  2. `npx webpack --watch` 소스 변경 감지하면 자동으로 컴파일 됨.
