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