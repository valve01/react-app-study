import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
// import pizzas from './assets/pizzas.json';

function App() {
	const [items, setItems] = React.useState([]);
	React.useEffect(() => {
		// Далаем запрос на сервак, как если бы файл pizzas.json был только на сервере.
		fetch('https://64845cf9ee799e3216269459.mockapi.io/items')
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				console.log(arr);
				setItems(arr);
			});
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{items.map((obj) => {
							return (
								// Спрэд-оператор. Он самостояетельно раскрывает объект и помещает все свойства в пропс этого компонента.
								// Если ВСЕ названия "атрибутов", которые мы вытаскиваем из пропса будут совпадать с названиями ключей объекта, из которого мы достаем данные, то можно просто передать объект с тремя точками. Вот так:
								<PizzaBlock
									key={obj.id}
									{...obj}
								/>
								// т.к. obj -это массив из pizza.json, то обратившись к нему можно использовать id его элементов

								// И можно не расписывать, как ниже:
								// <PizzaBlock
								// 	title={obj.title}
								// 	price={obj.price}
								// 	imageUrl={obj.imageUrl}
								// 	sizes={obj.sizes}
								// 	types={obj.types}
								// />
							);
						})}
						{/* <PizzaBlock title="Туапсинская" price="700"/> */}
						{/* То что мы передаем в jsx как атрибуты в html добвляется в объект props, который мы можем передать в качестве аргумента в первом параметре функционального компонента, во время его создания  */}
						{/* <PizzaBlock title="Краснодарская" price={800}/> */}
						{/* <PizzaBlock />
						<PizzaBlock />
						<PizzaBlock />
						<PizzaBlock />
						<PizzaBlock />
						<PizzaBlock />
						<PizzaBlock /> */}
						{/* <div className="pizza-block">
							<img
								className="pizza-block__image"
								src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
								alt="Pizza"
							/>
							<h4 className="pizza-block__title">Чизбургер-пицца</h4>
							<div className="pizza-block__selector">
								<ul>
									<li className="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li className="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div className="pizza-block__bottom">
								<div className="pizza-block__price">от 395 ₽</div>
								<div className="button button--outline button--add">
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
											fill="white"
										/>
									</svg>
									<span>Добавить</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div className="pizza-block">
							<img
								className="pizza-block__image"
								src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
								alt="Pizza"
							/>
							<h4 className="pizza-block__title">Чизбургер-пицца</h4>
							<div className="pizza-block__selector">
								<ul>
									<li className="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li className="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div className="pizza-block__bottom">
								<div className="pizza-block__price">от 395 ₽</div>
								<div className="button button--outline button--add">
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
											fill="white"
										/>
									</svg>
									<span>Добавить</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div className="pizza-block">
							<img
								className="pizza-block__image"
								src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
								alt="Pizza"
							/>
							<h4 className="pizza-block__title">Чизбургер-пицца</h4>
							<div className="pizza-block__selector">
								<ul>
									<li className="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li className="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div className="pizza-block__bottom">
								<div className="pizza-block__price">от 395 ₽</div>
								<div className="button button--outline button--add">
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
											fill="white"
										/>
									</svg>
									<span>Добавить</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div className="pizza-block">
							<img
								className="pizza-block__image"
								src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
								alt="Pizza"
							/>
							<h4 className="pizza-block__title">Чизбургер-пицца</h4>
							<div className="pizza-block__selector">
								<ul>
									<li className="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li className="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div className="pizza-block__bottom">
								<div className="pizza-block__price">от 395 ₽</div>
								<div className="button button--outline button--add">
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
											fill="white"
										/>
									</svg>
									<span>Добавить</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div className="pizza-block">
							<img
								className="pizza-block__image"
								src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
								alt="Pizza"
							/>
							<h4 class="pizza-block__title">Чизбургер-пицца</h4>
							<div class="pizza-block__selector">
								<ul>
									<li class="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li class="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div class="pizza-block__bottom">
								<div class="pizza-block__price">от 395 ₽</div>
								<div class="button button--outline button--add">
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
											fill="white"
										/>
									</svg>
									<span>Добавить</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div class="pizza-block">
							<img
								class="pizza-block__image"
								src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
								alt="Pizza"
							/>
							<h4 class="pizza-block__title">Чизбургер-пицца</h4>
							<div class="pizza-block__selector">
								<ul>
									<li class="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li class="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div class="pizza-block__bottom">
								<div class="pizza-block__price">от 395 ₽</div>
								<div class="button button--outline button--add">
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
											fill="white"
										/>
									</svg>
									<span>Добавить</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div class="pizza-block">
							<img
								class="pizza-block__image"
								src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
								alt="Pizza"
							/>
							<h4 class="pizza-block__title">Чизбургер-пицца</h4>
							<div class="pizza-block__selector">
								<ul>
									<li class="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li class="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div class="pizza-block__bottom">
								<div class="pizza-block__price">от 395 ₽</div>
								<div class="button button--outline button--add">
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
											fill="white"
										/>
									</svg>
									<span>Добавить</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div class="pizza-block">
							<img
								class="pizza-block__image"
								src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
								alt="Pizza"
							/>
							<h4 class="pizza-block__title">Чизбургер-пицца</h4>
							<div class="pizza-block__selector">
								<ul>
									<li class="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li class="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div class="pizza-block__bottom">
								<div class="pizza-block__price">от 395 ₽</div>
								<div class="button button--outline button--add">
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
											fill="white"
										/>
									</svg>
									<span>Добавить</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div class="pizza-block">
							<img
								class="pizza-block__image"
								src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
								alt="Pizza"
							/>
							<h4 class="pizza-block__title">Чизбургер-пицца</h4>
							<div class="pizza-block__selector">
								<ul>
									<li class="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li class="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div class="pizza-block__bottom">
								<div class="pizza-block__price">от 395 ₽</div>
								<div class="button button--outline button--add">
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
											fill="white"
										/>
									</svg>
									<span>Добавить</span>
									<i>2</i>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
