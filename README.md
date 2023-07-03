<!-- Конспект по обучению реакту -->
<!-- npx create-react-app react-app -->
<!-- Ctrl+D -Выделить следующую такую же выделенную конструкцию -->
<!-- Тэги не требующие закрытия в html в jsx нужно зарывать так <tag />. Наример : <input />  -->
<!-- Чтобы передать пропсы не в виде строки, то вместо "" оборачиваем это в {}. Это работает с любыми типами данных -->
<!-- 						<PizzaBlock title="Туапсинская" price="700"/>  число передастся в виде строки-->
<!-- 						<PizzaBlock title="Краснодарская" price={800}/> число передастся в виде числа-->

<!-- Так как props - это объект. Чтобы сократить код, можно не обращаясь к props, доставать из него price, а просто прописать в {} price, но для этого нужно вытащить все элементы из props на этапе объявления функционального компонетна (декструктуризация пропса). Для этого в фигурных скобках, описываем вытаскиваемые элементы -->

    <!-- 				<div class="pizza-block__price">от {price} ₽</div>
    			 			<div class="pizza-block__price">от {props.price} ₽</div>  -->

<!-- function PizzaBlock({ title, price }) {}
	// function PizzaBlock(props) {} -->

<!-- Деструктуризация объекта. Простейший пример -->
<!--
 const obj={a:1,b:2,c:3};
const a = obj.a
const b = obj.b
const c = obj.c
console.log(a,b,c)
 -->
<!--
const {a,b,c}={a:1,b:2,c:3};
console.log(a,b,c)
 -->
 <!-- Эти 2 блока кода выше делают одно и то же -->

<!-- В jsx нужно писать className, вместо class в html -->
<!--  свойства svg картинок, которые обычно пишутся через - , в jsx пишутся через camelCase (stroke-width => strokeWidth) -->

<!-- хуки - это функции внутри react -->
<!-- Чтобы использовать хук в файле, нужно импортировать его из библиотеки react. Вот так: -->
<!-- import React, { useState } from 'react' -->
<!-- Если нам нужно записать данные в переменную, которые мы захотим потом изменить, и при этом эти данные должны отрисовываться на странице - то нужно использовать хук-useState. Если данные не будут меняться - не используем этот хук -->
<!-- Хук заставляет браузер не просто хранить данные в переменной, а заново рендерить данные, в случае их изменений -->

<!-- Вебпак по умолчанию считает что мы находимся в папке public, когда пишем путь к картинкам -->
<!-- Чтобы использовать файлы, находящиеся НЕ ВНУТРИ папки public, нужно их импортировать в тот компонент, где мы хотим их использовать. Например import logo from "../logo.svg". Соответсвтенно путь прописываем относительно компонента -->

<!-- Если мы рендерим список, то каждый элемент массива внутри map должен иметь уникальный (внутри этого массива) ключ (указывается ключ внутри открывающего родительского тэга). Для статичных массивов можно использовать индекс.
Для динамических - id, или что-то кроме индекса. Если не указывать явно key, то по умолчанию будет использован индекс.
 -->

{types.map((type, index) => {
return (

<li
key = {type}
onClick={() => onClickType(index)}
className={activeType === index ? 'active' : ''} >
{typeNames[type]}
</li>
);
})}

<!-- Чтобы не хранить большие объемы данных на фронте, данные для приложения принято запрашивать с сервера. Мы делаем запрос на бэк с определенными параметрами, бэк шарится по своей базе и собирает нам ответы с параметрами, которые мы задали в пакет, потом отправляет нам собранный пакет. -->

<!-- https://mockapi.io/ -->
<!-- Сервис. Предоставляет сервер, для хранения серверных данных, для бэка. Подходит только для пет проектов. -->

<!-- Чтобы воспользоваться скелетоном нужно установить библиотеку react-content-loader -->
<!-- npm i react-content-loader -->

<!-- Ставим реакт роутер -->
<!-- npm install react-router-dom localforage match-sorter sort-by -->
<!-- Чтобы наглядно применить реакт роутер разделим приложение на части и положим эти части в папку pages -->
<!-- Не забываем подправить пути к импортам после разбивки на части -->

<!-- Сейчас принято использовать css модули. Это когда каждый компонент имеет свой собственный файл css. БЭМ при этом не нужен, достигается инкапсуляция стилей, нет конфликтов классов. Перед расширением указываем префикс module.[ext] -->

<!-- Делаем функционал сортировки и фильтрации пицц. При выборе каждой категории должны отображаться только соответсвтующие ей пиццы. При выборе критерия сортироки, результаты выстраиваются по убыванию или возрастанию по выбранному критерию.-->
<!-- Делать мы это будем путем изменения запроса на сервер, чтобы он нам по условию возвращал json с отфильтрованными и отсортированными данными. Смотри документацию mockapi.io -->

<!-- Сортировка -->

<!-- Вот наш обычный запрос массива пицц с бэкенда -->
<!-- https://64845cf9ee799e3216269459.mockapi.io/items -->

<!-- А вот запрос с сортировкой -->
<!-- https://64845cf9ee799e3216269459.mockapi.io/items?sortBy=price&order=asc -->

<!-- Где ? - знак уточнения запроса. Что дальше идут searchParams -->
<!-- sortBy (sortby,orderBy,orderby) - параметры поиска, которые сортируют элементы. Например: sortBy=price - сортировка по полю (свойству) price. -->
<!-- order - параметр , отвечающий за то, сортировать по возрастанию (acs) или убыванию (desc) -->

<!-- Можно через searchParams:
const url = new URL(https://64845cf9ee799e3216269459.mockapi.io/items)
url.searchParams.append('sortBy', 'price');
url.searchParams.append('order', 'asc');
-->

<!-- Фильтрация.Фильтрация реализована с помощью параметров поиска -->
<!-- Запрос с фильтрацией -->
<!-- https://64845cf9ee799e3216269459.mockapi.io/items?filter=Пепперони&order=asc -->
<!-- Где по параметру filter=Пепперони (или search=Пепперони) нам вернутся все элементы, соответствующие строке "Пепперони" в любом из полей -->

<!-- https://64845cf9ee799e3216269459.mockapi.io/items?rating=4 -->
<!-- Если мы хотим Получить все элементы, у которых значение поля (свойства) rating, совпадает с 4-->

<!-- Нам нужно как-то передавать параметры фильтрации и сортировки в  -->
<!-- В jsx родитель элемента не может получить сведения о стейтах (States) дочерних элементов. Но зато можно разместить States, необходимые для дочерних элементов внутри родителя и передавать их внутрь дочерних элементов как параметры -->
<!-- Делаем все в Home.jsx и Categories.jsx -->

<!-- Теперь Sort.jsx -->
<!-- Для начала делаем все то же самое, что и раньше, но теперь нужно прикрутить логику, что если выбираем "популярности"- сортировать по полю rating, "цене" - по полю price, "алфавиту" - title. -->

<!-- В обычном реакте можно передавать пропы только от родителя к дочерним компонентам, причем нужно это делать по цепочке, передавая их с 1 уровня на второй, со второго на третий и т.д. Если таких промежуточных элементов больше одного, то эта ситуация называется props drilling и ее следует избегать с помощью React context-->
<!-- Для того чтобы выполнять какие-либо действия по изменению инпута в реакте существуют контролируемые инпуты (controlled inputs), по событию они возвращают event, но не простой, а обернутый логикой реакта. synteticBaseEvent. И из него можно вытаскивать все те же свойства, что и из обычного инпута-->

<!-- Для начала сделаем фильтрацию пицц при помощи js -->
<!-- Потом сделаем фильтрация при помощи бэкенда через useEffect -->

<!-- Делаем пагинацию -->

<!-- Ставим библиотеку для пагинации -->
<!-- npm install react-paginate --save -->

<!-- ============================================================================================================= -->

<!-- React Context -->

<!-- Кстати ReactRouter и Redux использует React Context -->

<!-- React Context предоставляет возможность обращаться и прокидывать пропсы напрямую от одного компонента к другому. (Помогает избежать Props Drilling ) Покажем как он работает на примере поиска. -->
<!-- Полное описание как использовать context -->
<!-- Создаем объект context в App.jsx. т.к. он является общим родителем для компонента Search.jsx и Home.jsx.  -->
<!-- const SearchContext = React.createContext(); -->
<!-- Объект SearchContext содержит в себе компоненты Consumer и Provider -->
<!-- Подобно тому как мы оборачивали все наше приложение в ReactRouter. Aналогично чтобы подключить логику ReactContext нам нужно обернуть содержимое div className="wrapper" в компонент объекта context - Provider. Т.е. в <SearchContext.Provider>...</SearchContext.Provider> -->
<!-- И присвоим значение для нашего context - передадим туда объект с переменными из useState: {searchValue, setSearchValue} -->
<!-- 			<SearchContext.Provider value={{searchValue, setSearchValue}}> -->
<!--Т.к. мы теперь будем доставать searchValue, setSearchValue из context - больше не нужно из извлекать из пропсов. И не нужно дальше передавать их в Search.jsx и там тоже потом извлекать не нужно-->

<!-- Каждый объект Context используется вместе с Provider компонентом, который позволяет дочерним компонентам, использующим этот контекст, подписаться на его изменения. -->
<!-- Также существует useContext. Он подобен addEventListner - отслеживает изменения контекста и все перерисовывает компоненты, которые хоть как-то используют этот контекст в случае его изменения. -->
<!-- const value = useContext(MyContext);  Принимает объект контекста (значение, возвращённое из React.createContext) и возвращает текущее значение контекста для этого контекста. Текущее значение контекста определяется пропом value ближайшего <MyContext.Provider> над вызывающим компонентом в дереве. -->

<!-- Вытаскиваем то что нам нужно context в том месте где нам нужно получить доступ к содержимому context  -->
<!-- В нашем случае мы вытаскиваем весь объект, поэтому и указываем объект {} (можем вытаскивать и просто переменную, массив) внутри Search.jsx-->
<!-- 	const {}= React.useContext(SearchContext) -->
<!-- Получается, что хук useContext внутри Search.jsx ссылается на переменную SearchContext, которая является объектом контекста и определена в Аpp.jsx. А значению этой переменной с помощью компонента Provider в Аpp.jsx мы присвоили объект value={{searchValue, setSearchValue}} -->
<!-- И теперь мы можем вытащить наши переменные с помощью useContext, просто вписав их внуть только что созданной const в Search.jsx  -->
<!-- 	const {searchValue, setSearchValue}= React.useContext(SearchContext) -->
<!-- Теперь Search.jsx не может найти SearchContext. Нужно его туда экспортировать. Но нельзя писать export default дважды. Чтобы экспортировать отдельные куски кода, достаточно перед ключевым словом объявления сущности (const, let, function) приписать export  -->
<!-- В App.jsx дописываем export -->
<!-- export const SearchContext = React.createContext(); -->
<!-- Теперь в том месте, где нам нужно вытащить (нашем случае это Search.jsx) импортируем context-->
<!-- import { SearchContext } from '../../App'; -->
<!-- Обращаем внимание что мы вытаскиваем через деструктуризацию, иначе нам вернется jsx компонент, который через export default экспортирован (т.е. App.jsx в нашем случае) а не переменная значение SearchContext-->

<!-- Готово! Теперь у нас работает поиск с помощью ReactContext при этом мы избежали Props Drilling -->

<!-- Теперь разбираемся что мы сделали -->
<!-- По смыслу const SearchContext = React.createContext() это создание глобальной переменной -->
<!-- Дальше в этой строчке -->
<!-- 			 <SearchContext.Provider value={{searchValue, setSearchValue}}>...</SearchContext.Provider> -->
<!-- Мы говорим Provider оповести все компоненты, которые ты обернул, что переменной SearchContext мы присвоили значение value={{searchValue, setSearchValue}} -->
<!-- Теперь экспортируем SearchContext из App.jsx и импортируем в Search.jsx -->
<!-- И теперь мы можем извлечь записанные в переменную данные с помощью деструктурицазии и использования хука useContext в любом дочернем компоненте, компонента где мы мы context создавали  -->
<!-- const { searchValue, setSearchValue } = React.useContext(SearchContext); -->
<!-- Т.о useContext(SearchContext) вернет нам то, что хранится в value в SearchContext.Provider, а у нас там value={{searchValue, setSearchValue}}  -->

<!-- Теперь заюзаем context в Home.jsx вместо прокидывания переменных в пропсы -->

<!-- ======================================================================================================================== -->

<!-- Redux Toolkit-->
<!-- На сегодня это самая популярная и актуальная библиотека для создания глобального хранилища -->
<!-- Redux Toolkit можно использовать с любым фреймворком и с clearJS -->

<!-- Сделаем фильтрацию по категориям через Redux -->

<!-- Ставим редакс тулкит и перемычку между реактом и редаксом -->
<!-- npm i @reduxjs/toolkit react-redux-->

<!-- Начало практики Redux 53:10 -->

<!-- Создаем Redux хранилище -->
<!-- Создаем файл store.js и импортируем метод для создания хранилища из библиотеки, создаем хранилище и экспортируем его -->

<!-- configureStore - этот метод просто создает хранилище -->
<!--

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

 -->
 <!--В объект reducer мы будем записывать подразделения нашего хранилища -->

<!-- Импотрируем наше хранилище в index.js -->
<!-- import {store} from './redux/store'  -->

<!-- Чтобы Redux и наше хранилище store подружить с реактом мы используем библиотеку react-redux -->
<!-- Как и с контестом импортируем Provider из библиотеки react-redux ! Важно ! Не из '@reduxjs/toolkit'. Передаем провайдеру пропс store, который мы создали -> Записываем в атрибут(пропс) store Провайдера наше хранилище (которое существует в виде js объекта) и оборачиваем провайдером наше приложение. Можно с оборачивать вместе с роутером или без роутера. Теперь все наше приложение знает что в нем есть логика redux -->

<!-- Теперь наш root.render в index.js выглядит так

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
			<App />
			</React.StrictMode>
		</BrowserRouter>
	</Provider>,
);

 -->

 <!--На данном этапе: хранилище создано (пока оно пустое). React и Redux знают друг о друге. -->
 <!-- Теперь нужно создать слайс -->
 <!-- Slice - это такой кусочек от общего хранилища, в котором все живет своей жизнью. стор - это все хранилище целиком, состоящее из складов-слайсов. -->
 <!-- Для разных компонентов мы будем создавать свой слайс -->
 <!-- У нас будет 3 слайса:
 - pizzaSlice.js - логика для массива пицц
 - cartSlice.js - логика для корзины
 - filterSlice.js - логика для категорий и сортировки, ну и наверное поиска
  -->

<!-- Для начала, для примера сделаем счетчик -->

<!-- Создаем их в папке slices и копируем туда код из документации -->

<!-- Экспортируем экшены для изменения state, чтобы потом воспользоваться ими в нужном нам файле -->
<!-- export const { increment, decrement, incrementByAmount } = counterSlice.actions -->
<!-- Экспортируем из filterSlice.js в store.js функцию - counterReducer -->
<!-- В filterSlice.js пишем -->
<!-- export default counterSlice.reducer -->
<!-- В store.js пишем -->
<!-- import counterReducer from "./slices/filterSlice" -->
<!-- Теперь у нас есть доступ в store.js к counterReducer -->
<!-- Передаем ее в reducer в store.js -> Меняем значение reducer в store.js с пустого объекта на { counter: counterReducer }. В данном случае мы назвали наше состояние - counter и вся логика, которая будет менять это состояние находится в counterReducer -->

<!-- Slice создан и подключен. -->
<!-- Теперь мы можем использовать хуки React-Redux, чтобы позволить компонентам React взаимодействовать с хранилищем Redux. Мы можем считывать (извлекать/доставать) данные из хранилища с помощью useSelector и совершать действия с помощью useDispatch.  -->

<!-- Идем в файл, где хотим использовать хуки и импортируем их. Мы будем их использовать в Арр.jsx -->
<!-- import { useSelector, useDispatch } from 'react-redux' -->
<!-- В этот же файл импортируем экшены, которыми мы хотим воспользоваться из нашего слайса -->
<!-- import { decrement, increment } from './redux/slices/filterSlice' -->
<!-- Создаем переменные в нашем компоненте для использованию хуков -->
<!--
const count = useSelector((state) => state.counter.count);
const dispatch = useDispatch();
	-->
<!-- Теперь можно вставить кусок разметки ниже в наш компонент (у нас это Арр.jsx) и убедиться в работоспособности кода -->
<!--
 			<button
				aria-label="Increment value"
				onClick={() => dispatch(increment())}
			>
				Increment
			</button>
			<span>{count}</span>
			<button
				aria-label="Decrement value"
				onClick={() => dispatch(decrement())}
			>
				Decrement
			</button>
-->

<!-- Готово! -->

<!-- Теперь разбираемся как мы создали счетчик. 1:18:50 -->
<!-- Наше глобальное хранилище может содержать много разных редюсеров из разных слайсов -->
<!-- Когда мы создавали наш редюсер, то задали ему начальное состояние, (как для хука):

const initialState = {
  count: 0,
  count1: 0,
  count2: 0,
  count3: 0,
  count4: 0,
}

 -->
<!-- Свойств в initialState может быть сколько угодно -->
<!-- Далее мы создаем логику, которая будет обрабатывать наш state -->
<!-- Для этого мы используем метод createSliсe из reduxToolkit -->
<!-- Весь слайс мы записываем в переменную counterSlice и экспортируем ее для получения доступа к ней в других файлах -->
<!-- В сам метод createSliсe мы передаем объект в котором указываем настройки нашего слайса: название, начальное состояние и в свойстве reducers методы, которые будут менять наш State (экшены)-->
<!-- incrementByAmount - позволяет вручную поменять значение счетчика, вписав туда свое значение -->

<!-- Потом мы вытаскиваем из объекта counterSlice.actions все экшены (методы) и экспортируем их -->
<!-- В counterSlice.actions - содержится объект описанный в свойстве reducers настроек нашего слайса -->

<!-- Функция counterSlice.reducer обрабатывает слайс и его методы , которые указаны в настройках слайса в reducers, так, чтобы могли просто воспользоваться слайсом и его  методами в нужных нам файлах, если мы импортировали эти методы в нужные файлы -->

<!-- Т.о мы экспортируем:
1. сам слайс -  counterSlice.- export const counterSlice = createSlice({...})
2. все его методы для изменения state из counterSlice.actions.- export const { increment, decrement, incrementByAmount } = counterSlice.actions
3. и версию слайса, подготовленную для записи в глобальное хранилище store.- export default counterSlice.reducer
 -->

 <!-- Чтобы добавить новый метод, для изменения state, нужно прописать его в свойстве reducers настроек нашего слайса -->

 <!-- Далее мы в хранилище (store.js) импортируем на слайс -->
 <!-- import counterReducer from './slices/filterSlice'; -->
 <!-- И говорим: store, у тебя будет редюсер, который будет называться counter и ему мы присвоим логику из counterReducer, который мы импортировали из  -->
 <!-- './slices/filterSlice'; -->
 <!-- Можно редюсер назвать также как и значение - counterReducer, тогда можно использовать сокращенную запись объета -->

 <!-- Далее мы пошли в Аpp.jsx и импортировали туда хуки - useSelector, useDispatch и наши методы для изменения state - increment, decrement, incrementByAmount -->
 <!-- Теперь вешаем на нужный объект обработчик. Например: -->
 <!-- 				onClick={() => dispatch(increment())} -->
 <!-- Просто прописать onClick={() => increment()}  - нельзя , работать не будет. Потому что increment() - вернет нам объект со свойствами payload и type, который передав в dispatch() выполнит заданное в increment() действие. Функция, записанная в dispatch сама сделает все что нужно.  -->
<!-- ============================================================================================================= -->
<!-- Axios -->
<!-- Подробнее -->
<!-- https://axios-http.com/ -->
<!-- Устанавливаем Axios -->
<!-- npm i axios -->
<!-- импортируем в файл, где хотим воспользоваться, в нашем случае Home.jsx -->
<!-- import axios from 'axios'; -->
<!-- У axios много методов, мы сейчас посылаем запрос для получение данных от сервера, для этого существует метод get -->
<!-- 			// При использовании axios в response будут данные уже в js формате, а не в json, как при fetch, но они будут в виде объекта. Сама же основа будет храниться в свойстве data, обращаясь к нему мы пожемо пользоваться данными -->
<!-- ========================================================================================================================= -->

<!-- хук useRef -->
<!-- Нужен для взаимодействия с дом-элементами -->
<!-- Делаем чтобы при очистке инпута поиска, на нем оставался фокус -->
<!-- 1 Создаем переменную, которая будет хранить ссылку на дом-элемент инпута -->
<!-- const inputRef=React.useRef() -->
<!-- 2 Теперь в нужном элементе в атрибуте ref указываю внутри {} в качестве ссылки нашу переменную -->
<!--
<input
ref={inputRef}
/>
-->
<!-- Ссылка сохранена -->

<!-- 3 Сделаем ф-цию, которая будет одноверменно очищать и оставлять фокус на инпуте
	const clearInput = () => {
		setSearchValue('');
		inputRef.current.focus();
	};
	-->
 <!-- Вешаем ее на нашу иконку  -->
 <!--     <img
					onClick={clearInput}
					className={styles.close}
					src={close}
					alt="closeIcon"
			  	/> -->
<!-- ================================================================================================================ -->
<!-- Debounce -->

<!-- Чтобы запрос на бэк делался не моментально по изменению инпута, а через промежуток небольшой (когда мы все допишем) используем Debounce -->
<!-- Функция debounce Lodash возвращает функцию debounce, которая при вызове будет выполнять функцию через X миллисекунд, прошедших с момента ее последнего выполнения. -->
<!-- Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms. -->
<!-- Устанавливаем Debounce -->
<!-- npm i lodash.debounce -->
<!-- lodash - это большая библиотека разных готовых функций для js -->
<!-- Вся она нам не нужна, а только debounce в ней -->
<!-- Синтаксис такой же как у setTimeout, но в первый аргумент можно передавать только функцию, react сам не будет из других форматов функцию делать -->

<!-- 	const testDebounce = debounce(() => {
		console.log('Сделал паузу и написал это');
	},2000);
	 -->
<!-- Если ф-ция debounce (код выше) находится внутри компонента Search, то каждое изменение инпута (=> изменение state) приводит к перерисовке компонента Search => ф-ция debounce будет пересоздаваться и перезапускаться после каждого перерендера через указанное время. Чтобы решить эту проблему и функцию запускалась, только 1 раз, когда мы весь запрос дописали, используется хук useCallback -->
<!-- Синтаксис у useCallback похож на useEffect, отличия в работе: useCallback - создаст,вернет функцию и запишет ее в переменную, useEffect - не вернет ф-цию, но вызовет ее -->
<!-- useCallback возвращает один и тот же экземпляр передаваемой функции (параметр 1) вместо создания нового при каждом повторном рендеринге компонента. Новый экземпляр передаваемой функции (параметр 1) может быть создан только при изменении массива зависимостей (параметр 2). -->
<!-- Оборачиваем хуком нашу функцию. (не забывам у зависимостях узазать пустой массив [](т.к. мы не собираемся ее пересоздавать)) И теперь у нас в testDebounce записана та же функцию, что и раньше, но благодаря хуку useCallback этот конкретный экземпляр не будет пересоздаваться и его теперь можно использовать внутри изменяющегося компонента Search-->

<!--
	const testDebounce = React.useCallback(
		debounce(() => {
			console.log('Сделал паузу и написал это');
		}, 2000),
		[],
	);
-->

<!-- Применим useCallback и debounce к нашей функции, вызываемой при изменении инпута -->
<!--
    const onChangeInput = React.useCallback(
		debounce((event) => {
			setSearchValue(event.target.value);
		}, 2000),
		[],
	);
	 -->

<!-- При попытке писать тепрь не появляется в инпуте ничего -->
<!-- Получилось следующее: у нас принудительно value у инпута задано value={searchValue}, а оно у нас == '' по умолчанию. event-это событие и оно не вызывается сразу, в момент изменения инпута. И у нас висит задержка на event в 2000ms через debounce. Новое значение searchValue должно присвоиться через ms, причем получить его должно из инпута, но т.к. через ms в инпуте по прежнему '', то новое значение searchValue остается ''. Замкнутый круг. -->
<!-- Чтобы это исправить теперь нам нужно создать дополнительно локальный state, чтобы иметь возможность писать в инпут, чтобы потом взять из него данные и на их основе изменить searchValue через время, указанное в debounce-->
<!-- Пишем внутри Search -->
<!-- 	const [value,setValue]=React.useState('') -->

<!-- меняем в инпуте и в иконке крестика searchValue на value -->

<!-- Изменим и переименуем функцию с debounce на updateSearchValue -->
<!-- сделаем, чтобы вызывался updateSearchValue при изменении value -->

<!--
     const updateSearchValue = React.useCallback(
	 	debounce((value) => {
	 		setSearchValue(value);
	 	}, 2000),
	 	[],
	 ); -->

<!-- Функцию onChangeInput меняем -->

<!--
const onChangeInput = (event) => {
		// Вот это действие выполняется сразу: value - присваивается значение event.target.value (т.е. то что мы ввели в инпут)
setValue(event.target.value);
		// А это только через 2000мс. Т.к. в функции updateSearchValue записана функция оберннутая в debounce с таймером 2000мс
updateSearchValue(event.target.value);
	};
	-->
<!-- Теперь можно писать в инпут и setSearchValue будет отрабатывать как положено; -->
<!-- Обновим функцию для очистки поля инпута -->
<!--
	const clearInput = () => {
		setSearchValue('');
		setValue('');
		inputRef.current.focus();
	};
 -->
<!-- Получилось так: мы моментально меняем значение инпута, получаем это значение, а потом мы создали новую ф-цию, которая будет менять searchValue, но с задержкой (updateSearchValue()), ссылку на эту функцию мы сохраняем с помощью useCallback, чтобы она не пересоздавалась и не перезапускалась, а запускалась лишь при первом рендере -->
<!-- !Извлекать searchValue из  React.useContext(SearchContext) нам больше не нужно -->
<!-- Дальше при запуске updateSearchValue() происоходим изменение searchValue, новое значение попадает в context, а оттуда его берет Home.jsx и там уже попадает в useEffect и меняется запрос на сервер-->
<!-- ================================================================================================================ -->
<!-- Делаем пагинацию на Redux -->
<!-- Работаем в filterSlice.jsx -->
<!-- Добавляем в initialState  -->
<!-- currentPage:1 -->
<!-- Добавляем в reducers метод для изменения currentPage -->
<!--
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
 -->

 <!-- И добавляем его в перечень экспортируемых -->
 <!-- export const { setActiveCategory, setActiveSortType, setCurrentPage } = filterSlice.actions; -->

<!-- Импортируем хук из 'react-redux' в Pagination.jsx-->
<!-- import { useSelector } from 'react-redux'; -->
 <!-- Добавляем к импортируемым из filterSlice методам метод setCurrentPage в Home.jsx-->
<!-- import { setActiveCategory, setCurrentPage } from '../redux/slices/filterSlice'; -->

<!-- Старый стейт нам не нужен=> удаляем: -->
<!-- const [currentPage, setCurrentPage] = React.useState(1); -->

<!-- Добавляем currentPage к перечню переменных, доставаемых из слайса через useSelector -->
<!-- 	const { sortType, activeCategory, currentPage } = useSelector((state) => state.filter); -->

<!-- dispatch мы уже достали заранее -->
<!-- 	const dispatch = useDispatch(); -->

<!-- Создаем новую функцию, которая будет менять стейт текущей страницы по событию -->
<!--
	const onChangePage = (value) => {
		dispatch(setCurrentPage(value));
	};
 -->
 <!-- В атрибутах компонента Pagination в Home.jsx прописываем новую функцию на выполнение по событию   -->
 <!-- onChangePage={onChangePage} -->
 <!-- И убирам оттуда и из пропсов в PaginationBlock в Pagination.jsx currentPage-->
 <!-- currentPage={currentPage} -->

<!-- Достаем currentPage из store в Pagination.jsx-->
 <!-- 	const { currentPage } = useSelector((state) => state.filter); -->

 <!-- В принципе нет разницы: передать в проспсы в Home.jsx в компонент Pagination currentPage={currentPage} или достать currentPage из store в Pagination.jsx -->

 <!-- В атрибутах в PaginationBlock в Pagination.jsx уже прописано -->
 <!-- 
page={currentPage}
onChange={handleChange} 
-->
<!-- И handleChange уже написана -->
<!--
	const handleChange = (event, value) => {
		onChangePage(value);
	};
 -->

<!-- Готово! -->
<!-- ========================================================================================================================================== -->
<!-- Сохраняем параметры фильтрации в URL -->
<!-- Ставим библиотеку QS (querystring)-->
<!-- npm i qs -->
<!-- Позволяет спарсить или сгенерировать параметры запроса -->
<!-- Парсер строки запроса, поддерживающий вложенность и массивы, с ограничением глубины.. -->
<!-- Импортируем qs в Home.jsx -->
<!-- import qs from 'qs'; -->
<!-- Создаем отдельный useEffect,который будет отвечать за парсинг запросов и вшивание их в адресную строку -->

<!--
React.useEffect=(()=>{

},[activeCategory, sortType, searchValue, currentPage])
 -->

<!-- Пишем логику: если к нам пришли какие-то параметры - то мы должный превратить их в одну целую строчку -->
<!-- Воспользуемся методом библиотеки qs qs.stringify - он преобразовывает переданный объект в строку-->

<!--
React.useEffect=(()=>{
const queryString = qs.stringify({

})
},[activeCategory, sortType, searchValue, currentPage])
 -->

 <!-- Передали в этот объект наши данные из store -->

 <!-- 
 	React.useEffect =
		(() => {
			const queryString = qs.stringify({
				sortProperty: sortType.sortProperty,
				activeCategory: activeCategory,
				currentPage: currentPage,
			});
		},
		[activeCategory, sortType, searchValue, currentPage]);
  -->
<!-- Сморим что вернет нам 		console.log(queryString) -->
<!-- Вернемся к этому уроку позже. Чего-то явно не хватает -->

<!-- ========================================================================================================================================== -->
<!-- #16 -->
<!-- Реализуем закрытие попапа по клику на любое место вне его -->
<!-- Получаем ссылку на элемент, за которым хотим следить -->
<!-- Создаем переменную sortRef для записи ссылки на элемент и вешаем на этот элемент атрибут ref с этой переменной в значении ref={sortRef} -->
<!--

	    const sortRef = useRef();

      <div
			className="sort"
			ref={sortRef}
			>
			</div>
 -->
 <!-- Теперь, когда попап активен в нашей ссылке на элемент будет элемент с классом sort, у которого дочерние элементы sort__label и sort__popup -->
 <!-- Теперь внутри компонента Sort делаем обработчик клика на весь body. Пишем его внутри useEffect, иначе ссылка не него будет теряться и мы не сможем удалять именно его впоследствии. -->

 <!-- 	const sortRef = useRef();
	// console.log(sortRef.current);

	const popupCloser = (event) => {
		// JavaScript метод composedPath() объекта Event возвращает путь события, представляющий собой массив объектов, на которых будут вызваны обработчики событий.
		if (!event.composedPath().includes(sortRef.current)) {
			setIsShow(false);

		}
	};
	// Получается так: в sortRef.current хранится наш компонент с классом sort. event.composedPath() - возвращает массив элементов на которых слышно событие. И теперь по клику в любом месте идет проверка - содержит ли массив из event.composedPath() элемент с классом sort. Если не содержит - то ставим флаг isShow=false.

	// Оборачиваем обработчик событий в useEffect без зависимостей, чтобы он навешивался только при первом рендере, и не пересоздавался и не навешивал новые.
	React.useEffect(() => {
		// Мы можем вешать обработчики через addEventListener на "главных родителей", к которым по другому нельзя обратиться из компонента
		window.document.body.addEventListener('click', popupCloser);
	}, []);
	 -->

 <!-- Сейчас, если уйти со страницы, а потом вернуться - навесится новый обработчик на body, но старый сам не удаляется, (потому что технически мы на одной странице находимся) нужно его удалять вручную -->
 <!-- Для этого добавим в useEffect строчки -->
 <!-- 
 		return () => {
			window.document.body.removeEventListener('click', popupCloser);
		};
  -->
<!-- Эта стрелочная функция внутри return будет вызываться перед размонтированием элемента (Согласно документации useEffect). Она и будет удалять наш обработчик при "переходе" на другие страницы -->

<!-- ========================================================================================================================================== -->
<!-- Делаем редакс логику для корзины -->
<!-- По хорошему нужно сделать так: добавлять в массив все пиццы, а потом в Cart.jsx делать группировку по характеристикам (опциям) и по id -->
<!-- Сделаем для начала простой функционал -->
<!-- Сделаем группировку только по id -->
<!-- Создаем новый слайс cartSlice.js -->

<!--
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	items: [],
	totalPrice: 0,
};
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		// Добавление в корзину в главном меню
		addItem(state, action) {
			state.items.push(action.payload);
		},
		// Удаление всех товаров данного типа из корзины(Крестик напротив элемента в корзине)
		removeItem(state, action) {
			state.items = state.items.filter((obj) => obj.id !== action.payload);
		},
		// Полная очистка корзины
		clearItems(state) {
			state.items = [];
		},
		// Общая стоимость товаров в корзине
		setTotalPrice(state, action) {
			state.totalPrice = action.payload;
		},
	},
});

export const { addItem, removeItem, clearItems, setTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
 -->
 <!-- Добавляем в store новый слайс cartSlice -->

 <!-- 
import cartReducer from './slices/cartSlice';
export const store = configureStore({
 	reducer: {
		filter: filterReducer,
		cart: cartReducer,
	},})
  -->

<!-- Переходим в Header.jsx -->
<!-- Имптортируем хук -->
<!-- import { useSelector} from 'react-redux'; -->
<!-- Вытаскиваем states -->

<!-- 	const { totalPrice, items } = useSelector((state) => state.cart); -->

<!-- Вставляем значения стейтов в поля компонента -->

<!-- Элемент с общей ценой товаров в корзине -->
<!-- <span>{totalPrice} ₽</span> -->

<!-- Элемент с количеством товаров в корзине -->
<!-- <span>{items.length}</span> -->

<!-- Делаем добавление товара в корзину. Переходим в pizzaBlock -->
<!-- Импортируем хуки -->
<!-- import { useDispatch, useSelector } from 'react-redux'; -->
<!-- Создаем функцию onClickAddItem, которая будет срабатывать по нажатию на кнопку "добавить в корзину" -->
<!-- Внутри неё Генерируем объект item, который будем отправлять в корзину -->

<!--
	const onClickAddItem = () => {
		const item = {
			id,
			title,
			price,
			imageUrl,
			size: activeSize,
			type: activeType,
		};
	};
 -->

<!-- Достаем dispatch -->
<!-- 	const dispatch = useDispatch(); -->

<!-- Импортируем метод из reducers из cartSlice -->
<!-- import {addItem} from "../../redux/slices/cartSlice" -->

<!-- Добаляем dispatch к нашей функции -->
<!--
	const onClickAddItem = () => {
		const item = {
			id,
			title,
			price,
			imageUrl,
			size: activeSize,
			type: typeNames[activeType],
		};
		dispatch(addItem(item))
	};
 -->

 <!-- Вешаем функцию onClickAddItem на нужную нам кнопку -->
 <!-- onClick={onClickAddItem} -->

 <!-- Теперь в редакс передаются все нужные нам данные для отображения товаров в корзине и работает счетчик кол-ва товаров в Header.jsx -->

<!-- Вычисляем totalPrice -->
<!-- Идем в cartSlice -->
<!-- Изменяем метод addItem -->
<!--
		addItem(state, action) {
			state.items.push(action.payload);
			// При добавлении товара сразу вычисляем общую стоимость товаров в корзине, используем для этого метод reduce
			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.price + sum;
			}, 0);
		},
 -->
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- reduce - метод переборки массивов, часто используется для перебора с накоплением суммы -->
<!-- В reduce передаем:
1. коллбэк функцию, которая будет вычислять значение ((prev,item,index)=>{return prev+item;})
2. изначальное состояние вычисляемого значения (по умолчанию - значение элемента с индексом 0), но можно задать принудительно. Причем допустим любой тип данных. у нас так и есть. Оно = (0) 

В свою очередь функция, которая будет вычислять значение принимает в себя параметры:
1. Вычисляемое значение (prev)
2. текущий элемент массива (item)
3. индекс текущего элемента массива (index)
 -->

<!-- Не забываем сделать return, все что вернет функция запишется в prev  -->

<!--
let a = [1,2,3,4]
let b = a.reduce((prev,item,index)=>{
	return prev+item;
},0);

console.log(b) //10
 -->
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- Продолжаем -->
<!-- Сделаем чтобы добавлялся в корзину всегда только один уникальный объект товар (пицца), а дополнительные - увеличивали его количество -->
<!--  -->


<!-- ========================================================================================================================================== -->
<!-- ========================================================================================================================================== -->
<!-- ========================================================================================================================================== -->

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
