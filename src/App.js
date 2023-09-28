import './App.sass'
import { MenuUnit } from './Components/MenuUnit';

function App() {

  let starters = [
    {name: 'Мясные деликатесы', composition: 'Бастурма, суджук, охотничьи колбаски 120гр', price: '350'},
    {name: 'Сет "Чизон"', composition: 'Чечел копченый, сулугуни копченый, балык копченый 120гр', price: '350'},
    {name: 'Чечел жареный', composition: '100гр', price: '340'},
    {name: 'Картофельный микс "Фри"', composition: 'Деревенский, классический 150гр', price: '280'},
    {name: 'Бородинские гренки со сметанно-чесночным соусом', composition: '100/50гр', price: '250'},
    {name: 'Тигровые креветки в соусе том ям на рисовых чипсах', composition: '130гр', price: '390'},
    {name: 'Кальмар ким-чи с соусом спайси', composition: '130/50гр', price: '350'},
    {name: 'Ореховый микс', composition: 'арахис, кешью, фисташка 90гр', price: '290'},
    {name: 'Тар-тар из говядины с гренками', composition: '120гр', price: '440'},
    {name: 'Тар-тар из лосося с тостами и сырным кремом', composition: '140гр', price: '450'},
    {name: 'Крылья куриные спайси', composition: '150/50гр', price: '340'}
  ]

  let salads = [
    {name: 'Хрустящие баклажаны с крем-сыром и томатами', composition: '170гр', price: '350'},
    {name: 'Крабовый салат с авокадо айоли', composition: '200гр', price: '400'},
    {name: 'Цезарь с цыпленком', composition: '200гр', price: '400'},
    {name: 'Цезарь с хрустящими креветками', composition: '200гр', price: '480'},
    {name: 'Тигровые креветки с манго, авокадо и азиатским соусом', composition: '200гр', price: '550'}
  ]
  
  let hots = [
    {name: 'Томленая телятина в соусе демиглас с картофельным кремом', composition:'300гр', price: '490'},
    {name: 'Лосось с паровыми овощами и икорным соусом', composition:'180/50гр', price: '580'},
    {name: 'Паста птитим в соусе "биск" с креветками', composition:'230гр', price: '530'},
    {name: 'Фетучини с телятиной в соусе "жус"', composition:'220гр', price: '550'}
  ]

  let sups = [
    {name: 'Том-ям с морепродуктами', composition: '350гр', price: '530'},
    {name: 'Сырный крем-суп с копченым цыпленком', composition: '350гр', price: '390'},
  ]

  let asia = [
    {name: 'Филадельфия с авокадо', composition: '280гр', price: '440'},
    {name: 'Филадельфия классическая', composition: '280гр', price: '440'},
    {name: 'Калифорния с креветкой', composition: '240гр', price: '420'},
    {name: 'Дракон с копченым угрем', composition: '290гр', price: '480'},
    {name: 'С копченым цыпленком и муссом из пармезана', composition: '300гр', price: '400'},
    {name: 'Тигровая креветка с тропиками', composition: '300гр', price: '490'},
  ]

  let hotRols = [
    {name: 'Сливочная креветка', composition: '300гр', price: '420'},
    {name: 'Сливочный угорь', composition: '300гр', price: '480'},
    {name: 'Сливочный лосось', composition: '300гр', price: '480'},
  ]

  let Desserts = [
    {name: 'Брауни с мороженым', composition: '170гр', price: '280'},
    {name: 'Чизкейк классический', composition: '120гр', price: '250'},
    {name: 'Мороженое', composition: '80гр', price: '120'},
  ]

  return (
    <div className="App">
      <div className='content'>
        <p className='header'>Стартеры / Закуски</p>
          { starters.map((x) => <MenuUnit name={x.name} composition={x.composition} price={x.price}/>)}
        <p className='header'>Салаты</p>
          { salads.map((x) => <MenuUnit name={x.name} composition={x.composition} price={x.price}/>)}
        <p className='header'>Горячее</p>
          { hots.map((x) => <MenuUnit name={x.name} composition={x.composition} price={x.price}/>)}
        <p className='header'>Супа</p>
          { sups.map((x) => <MenuUnit name={x.name} composition={x.composition} price={x.price}/>)}
        <p className='header'>Азия</p>
          { asia.map((x) => <MenuUnit name={x.name} composition={x.composition} price={x.price}/>)}
        <p className='header'>Горячие роллы</p>
          { hotRols.map((x) => <MenuUnit name={x.name} composition={x.composition} price={x.price}/>)}
        <p className='header'>Десерты</p>
          { Desserts.map( (x) => <MenuUnit name={x.name} composition={x.composition} price={x.price} />)}
      </div>
    </div>
  );
}

export default App;

