#### Компонент Filter

Этот документ предоставляет обзор функциональности фильтрации, реализованной для проекта. Решение включает различные компоненты, функции и хуки, которые вместе обеспечивают гибкий и многократно используемый механизм фильтрации.

##### Содержание
- [Основной элемент](#основной-элемент)
  - [filterConfig](#filterconfig)
- [Компоненты](#компоненты)
  - [FilterDropdown](#filterdropdown)
  - [FilterMain](#filtermain)
  - [FilterMenu](#filtermenu)
  - [FilterDate](#filterdate)
  - [FilterSearchInput](#filtersearchinput)
  - [FilterSelectInput](#filterselectinput)
  - [FilterSelectSwitch](#filterselectswitch)
- [Утилиты](#утилиты)
  - [initializeFilterMode](#initializefiltermode)
  - [getAvailableFilters](#getavailablefilters)
- [Хуки](#хуки)
  - [useDebounce](#usedebounce)
  - [useFetchData](#usefetchdata)
- [Взаимодействие со стором](#взаимодействие-со-стором)
  - [Формат хранения данных](#формат-хранения-данных)

##### Основной элемент

###### filterConfig.tsx

`filterConfig` является основным элементом управления, который определяет режимы фильтров и их связанные компоненты. Конфигурационный файл описывает доступные фильтры, их типы, начальные выбранные элементы и компоненты, которые используются для их визуализации.

- **label**: Название режима фильтра, отображаемое в интерфейсе.
- **typeFilter**: Тип фильтра, используемый для обработки данных (например, `in`, `eq`).
- **hidden**: Опциональное свойство, указывающее, скрыт ли данный режим фильтра.
- **types**: Массив допустимых типов данных для фильтра (например, `string`, `number`).
- **valueList**: Булевое значение, указывающее возможность полуить данные с сервера по конкретной колонке по эндпоинту `.../values/...`.
- **initialSelectedItems**: Массив начально выбранных элементов.
- **component**: Компонент, используемый для отображения фильтра.

##### Компоненты

###### FilterDropdown

Обрабатывает основной интерфейс выпадающего списка для выбора и применения фильтров.

  - Импортирует функции `initializeFilterMode` и `getAvailableFilters` из утилит.
  - Импортирует конфигурацию фильтров из `filterConfig`.
  - Использует `FilterMain` для отображения основного интерфейса фильтра.
  - Диспатчит действия `addFilter` и `removeFilter` в стор.

###### FilterMain

Управляет основным интерфейсом фильтра, включая заголовок и динамическое содержимое фильтра.

  - Импортирует конфигурацию фильтров из `filterConfig`.
  - Использует `FilterMenu` для отображения доступных режимов фильтрации.
  - Динамически рендерит компонент фильтра на основе текущего режима.

###### FilterMenu

Отображает меню для выбора режимов фильтра.

  - Импортирует конфигурацию фильтров из `filterConfig`.
  - Генерирует пункты меню на основе доступных режимов фильтра.

###### FilterDate

Обрабатывает выбор диапазона дат для фильтров.

  - Обновляет выбранные элементы при изменении даты.

###### FilterSearchInput

Управляет вводом для поиска в фильтре.

  - Обновляет выбранные элементы при изменении ввода.

###### FilterSelectInput

Обрабатывает ввод для выбора в фильтрах, включая поиск и динамическую загрузку.

  - Импортирует данные из стора и обновляет их при изменении фильтров.
  - Использует хуки `useDebounce` и `useFetchData` для реализации поиска и загрузки данных.
  - Обновляет выбранные элементы при выборе или отмене выбора элементов.
  - Подгружает значения текущей колонки для выбора, используя `Input` для фильтрации значений.
  - Отправляет запросы на получение актуальных данных с выбранными фильтрами.

###### FilterSelectSwitch

Предоставляет переключатель между типами ввода для фильтрации (список `Input`'ов / `TextArea`).

  - Управляет состоянием переключателя и динамически обновляет выбранные элементы.

##### Утилиты

###### initializeFilterMode

Инициализирует режим фильтра на основе типа данных столбца и списка значений.

###### getAvailableFilters

Получает доступные фильтры для заданного типа столбца и списка значений.

##### Хуки

###### useDebounce

Предоставляет версию значения или функции с задержкой.

###### useFetchData

Обрабатывает загрузку данных с поддержкой пагинации и фильтрации.

##### Взаимодействие со стором

###### Формат хранения данных

- **addFilter**: Добавляет фильтр в стор в формате `{ tableName, filter: { id, typeFilter, dataFilter } }`.
- **removeFilter**: Удаляет фильтр из стора по `tableName` и `id`.
- **filtersSlice**: Содержит логику редьюсеров для добавления и удаления фильтров.