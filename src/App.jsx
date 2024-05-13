// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.

import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";


function App() {
  return (
    <>
      {<Header/>}
      {<Main/>}
      {<Card/>}
      {<Footer/>}

      
    </>
  );
}

export default App;
