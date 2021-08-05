## Учебный проект "Интернет магазин японской кухни"

__Этапы реализации:__

* __Commit 1__ - написана предварительная **HTML** верстка главной страницы,
верстка написана максимально семантично (соответственно уровню знаний и опыта автора) 
с применением принципов доступности, без применения **css** стилей на данный момент.
Верстка проверенна на валидность, добавленна папка с **HTML** файлами страниц для возможности проверки
валидности верстки в любой момент на https://validator.w3.org/#validate_by_uri;

* __Commit 2__ - предварительная верстка главной страницы распределенна по отдельным компонентам с сохранением валидности и
семантичности, а так же принципов доступности;

* __Commit 3__ - подготовленна и настроена основная структура файлов стилей. Стилизацию приложения буду производить
с помощью препроцессора **SCSS**;

* __Commit 4__ - добавленны файлы шрифтов, подключенны и настроенны шрифты, добавленны переменные с основными цветами 
и переменные с разрешениями экранов;

* __Commit 5__ - исправил неправильное распределение верстки по компонентам, так как при начале стилизации компонента Header
заметил неправильное расположение блока переключения категорий, добавил новый компонент с категориями в которую
перенес верстку с элементами переключенияя категорий, так же изменил тег обертки для эементов переключения категорий с **"nav"**
на **"section"** так как я допустил ошибку при первой верстке и неправильно определил функцию блока, а так же его местоположение, 
поэтому тег **"nav"** сюда не подходит семантически, так как блок не является элементом навигации, а просто переключает категории товаров;

* __Commit 6__ - прописал стили в "шапку" приложения под мобильные телефоны в компоненте _Header_;

* __Commit 7__ - прописал стили для панели выбора категорий под мобильные телефоны и планшеты в компоненте _Categories_;
* __Commit 7.1__ - добавил тень для панели категорий. Исправил баг с отступом снизу;

* __Commit 8__ - добавил дополнительный компонент в котором будет отображаться список продуктов выбранной категории;

* __Commit 9__ - прописал стили для блока фильтрации и сортировки под мобильные телефоны в компоненте _Filters_;

* __Commit 10__ - прописал стили для блока с названием выбранной категории под мобильные телефоны в компоненте _SelectedCategory_;

* __Commit 11__ - прописал стили для слайдера баннеров со скидками и акциями под мобильные телефоны в компоненте _DiscountsBunners_;

* __Commit 12__ - прописал стили для блока со ссылками на информацию об акциях, бонусах, доставке под мобильные телефоны в 
компоненте _Information_;

* __Commit 13__ - стилизовал основной блок со списком товаров под мобильные телефоны в компонентах _ProductListBlock_, _Button_,
_ProductBlock_ (переименовал компонент _RollSushiBlock_ в _ProductBlock_). Исправил неправильно написанный тег в компоненте _Filters_
(**"dif"** на **"div"**);

* __Commit 14__ - закончил общую стилизацию мобильной версии приложения. Добавил компонент _CartButton_, куда вынес верстку с кнопкой корзины.
Внес незначительные изменения в стили других коипонентов;

* __Commit 15__ - закончил общую стилизацию планшетной версии приложения;

* __Commit 16__ - сделал базовую стилизацию шапки, блока с категориями, фильтрами, блока с баннерами и информацией 
под десктопную версию приложения;

* __Commit 17__ - прописал базовые стили для списка продуктов под десктопную версию;

* __Commit 18__ - прописал базовые стили для компонента _OtherInformation_ в подвале сайта;

* __Commit 19__ - исправил ошибку в стилях с отображением иконки с корзиной в мобильной и десктопной версиях;

* __Commit 20__ - прописал базовую стилизацию для блока с контактами(иконками) в социальных сетях в подвале приложения
под десктопную версию;

* __Commit 21__ - написал дааные для серверной части со списком продуктов в _JSON_ формате и убрал категорию _Комбо_ из 
компонента _Categories_;

* __Commit 22__ - подключил ***Redux*** и протестировал получение списка продуктов с __json-server__ в хранилище состояния ***Redux***
и вывел полученный список из ***Redux*** в консоль;

* __Commit 23__ - настроил переключение категорий в компоненте _Categories_ с помощью ***Redux***;

* __Commit 24__ - сделал рендер списка продуктов полученных с сервера (пока без сортировки);

* __Commit 24.1__ - сделал рендер списка продуктов полученных с сервера согласно выбранной категории;

* __Commit 25__ - сделал экран загрузки для списка продуктов при помощи пакета ***react-content-loader*** (https://skeletonreact.com/);

* __Commit 25.1__ - исправил дергание блоков с продуктами, которое происходило из-за того, что картинка в _ProductBlock_ загружается
позже чем текстовая информация, так как картинки я беру по прямой ссылке с сайта "СушиМастер", поэтому до того как картинка загрузится
блок с картинкой схлопнут до "0", а после ее загрузки она сдвигает элементы ниже и из-за этого происходит дергание страницы. Данную 
проблемму я временно решил путем того, что задал для тега картинки размеры по дефолту в самом теге;

* __Commit 25.2__ - ограничил отображение состава продукта 50 символами и добавил "..." в конце текста с составом если символов больше 50;

* __Commit 26__ - сделал добавление продуктов в корзину в хранилище состояния ***Redux*** при нажатии на кнопку "В корзину";

* __Commit 26.1__ - сделал отображение общего количества добавленных в корзину продуктов и их общей цены на кнопке корзины;

* __Commit 27__ - добавил в базу данных список с "промо баннерами";

* __Commit 27.1__ - сделал сохранение массива со списком Промо-баннеров в хранилище ***Redux***;

* __Commit 27.2__ - сделал вывод кнопок переключения промо-баннеров, количество которых зависит от общего количества промо-баннеров полученнных с сервера. 
Добавил в ***Redux*** выбор индекса активного баннера при нажатии на круглые кнопки переключения этих баннеров;

* __Commit 27.3__ - прописал рендер промо-баннеров, при нажатии на кнопки переключения сделал показ нужного промо-баннера согласно нажатой кнопке.
Сами файлы изображений загрузил на wampi.ru и в JSON-файле базы данных прописал их ссылки (из-за этого есть небольшая задержка при переключении
изображений);

* __Commit 28__ - подключил маршрутизацию через библиотеку _react-router-dom_;

* __Commit 29__ - создал компонент _Cart_(страницу корзины пока без функционала), написал маршрутизацию между корзиной и главной страницей
(при нажатии на кнопку корзины переходим на страницу с выбранными товарами, а при нажатии на логотип переходим на главеую страницу);

* __Commit 30__ - создал компоненты _PromosInfoPage, BonusesPage, DeliveryInfoPage, AboutWebSitePage_ и настроил их маршрутизацию в десктопной версии
приложения;

* __Commit 30.1__ - настороил маршрутизацию под мобильную и планшетную версии приложения для компонентов _PromosInfoPage, BonusesPage, DeliveryInfoPage, AboutWebSitePage_;

* __Commit 31__ - создал компоненты _JobOpeningsPage, OurRestaurantsPage, PrivacyPolicyPage, PublicOfferPage_ и настроил их маршрутизацию в десктопной версии
приложения;

* __Commit 32__ - сделал предварительную верстку компонента _Cart_ (катрочку продуктов в корзине);

* __Commit 32.1__ - сделал рендер данных корзины из хранилища ***Redux*** на странице корзины, произвел некоторые изменения в стилях и верстке;

* __Commit 32.2__ - сделал верстку карточки продуктоа в корзине в компоненте _Cart_ для десктопной версии приложения;

* __Commit 32.3__ - подправил и добавил стили карточки продукта в корзине под все версии приложения (mobile, tablet, desctop);

* __Commit 32.4__ - сделал верстку и маршрутизацию для пустой корзины под мобильную и планшетную версии приложения;

* __Commit 32.5__ - сделал верстку для пустой корзины под десктопную версию приложения;

* __Commit 32.6__ - сделал заголовок, кнопку очистки корзины, кнопки оформления и возврата на главную страницу в корзине с добавленными продуктами
под все версии приложения, так же добавил им стили. Кнопки пока не рабочие;
* __Commit 32.6.1__ - добавил блок с итоговой стоимостью в корзине с добавленными продуктами;

* __Commit 32.7__ - сделал очистку корзины при нажатии на кнопку "Очистить корзину";

* __Commit 32.8__ - перенес верстку списка выбранных продуктов в корзине в отдельный компонент (_CartItem_), сделал удаление по отдельности каждого из элементов списка продуктов в корзине при нажатии на иконку мусорного контейнера;

* __Commit 32.9__ - сделал добавление либо уменьшение количества одного продукта в корзине при нажатии на кнопки "+" и "-";

* __Commit 33__ - создал компонент _PlaceOrderModal_: модальное окно которое отображается в корзине после нажатия на кнопку "Оформить закакз" и иммитирует отправку заказа на обработку.
В модальном окне при нажатии на кнопку "Отлично!" или на крестик закрытия модального окна происходит очистка списка продуктов в корзине, закрытие модального окна и перенаправление на главную страницу;

* __Commit 34__ - создал компонент _MobileFooterModal_: модальное окно которое открывается при нажатии на кнопку "бургер-меню" в нижней части экрана в мобильной и планшетной версии приложения. Модальное окно состоит из компонентов _OtherInformation, SocialNetworks_ и отображает размещенную в них информацию;

* __Commit 35__ - создал компонент _ProductIngridientsPopup_: модальное окно открывающееся при нажатии на кнопку в карточке продукта с информацией (i) и показывающее полную информацию о составе продукта, полносью настроил работоспособность этого модального окна;

* __Commit 36__ - сделал рабочим компонент со списком акций (_PromosInfoPage_). Для этого создал новый компонент _PromoItem_ который отображает информацию по одной из акций. Информация по списку акций загружается с JSON-сервера и сохраняется в ***Redux***, загрузку и сохранение списка акций в ***Redux*** настроил на этапе: __Commit 27.1__;

* __Commit 37__ - подключил сортировку к ***Redux***(y);

* __Commit 37.1__ - полностью реализовал сортировку списка продуктов. Сама сортировка происходит на стороне JSON-сервера;

