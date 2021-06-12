// store를 설정하는 configure JS 파일입니다.
// npm i next-redux-wrapper 로 다운받아줘야합니다.
/* 컨피규어 스토어는 이런 식으로 만듭니다
  const configureStore = () => {

  };

  const wrapper = createWrapper(configureStore);

  export default wrapper;
*/
const { createWrapper } = require('next-redux-wrapper');
const configureStore = () => {};

const wrapper = createWrapper(configureStore);

export default wrapper;
