import logo from './logo.svg';
import './App.css';
import  Myjoke from './src/Joke'

function App() {
  return (
     <div className="row">
      <Myjoke 
      imgUrl="https://187011.selcdn.ru/thumbnails/photos/2017/02/10/ex3uxw9rfghuav0w_1024.jpg" 
      quastion="Что такое переходной возраст?" 
      answer="На работу не берут потому, что старый. Пенсию не дают потому, что молодой…"/>
      <Myjoke 
      imgUrl="https://vokrug.tv/pic/news/f/7/e/c/f7ec0808293ca4cbc1690cc75e515344.jpg" 
      quastion="Какова ваша личная жизнь?" 
      answer="Наличночти не хватает"/>
       <Myjoke 
      imgUrl="https://report.if.ua/wp-content/uploads/2020/08/prytula.jpg" 
      quastion="Яка різниця між музикантом та репером ?" 
      answer="коли вони помирають одних відспівують других відчитують"/>
        <Myjoke 
      imgUrl="https://s0.tchkcdn.com/g-r5BEMO4Tn5uFCHTyD1Xw1A/11/397912/660x480/f/0/cc8_photo5278664177612859821.jpg" 
      quastion="Как индифицировать патриота Украины" 
      answer="Прсто спросить кто такой Путин"/>
        <Myjoke 
      imgUrl="https://images.1plus1.ua/uploads/articles/000/563/193/2d768bde254e2383d2295ccfffe1687d_665x442.png?v=1568128264" 
      quastion="Что бы вы хотели поменять в своей жизни?" 
      answer="Печень."/>
     </div>
  );
}

export default App;
