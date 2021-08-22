// src폴더안에 App.js을 연 다음 기존 내용을 모두 지우고 아래의 내용으로 작성해 보세요
import React from 'react';
import Counter from './03/Counter';

class App extends React.Component {
  render() {
    return (
      // 아래의 내용이 JSX 양식 입니다.
      <div>
       <Counter count={9} />
      </div>
    );
  }
}
export default App;

