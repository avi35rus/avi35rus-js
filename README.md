# Компонент Filter

Этот документ предоставляет обзор функциональности фильтрации, реализованной для проекта. Решение включает различные компоненты, функции, хуки и библиотеки для достижения гибкого и многократно используемого механизма фильтрации.

## Содержание
- [Компоненты](#компоненты)
  - [FilterDropdown](#filterdropdown)
  - [FilterMain](#filtermain)
  - [FilterMenu](#filtermenu)
  - [FilterDate](#filterdate)
  - [FilterSearchInput](#filtersearchinput)
  - [FilterSelectInput](#filterselectinput)
  - [FilterSelectSwitch](#filterselectswitch)
- [Утилиты](#утилиты)
  - [filterConfig](#filterconfig)
  - [initializeFilterMode](#initializefiltermode)
  - [getAvailableFilters](#getavailablefilters)
- [Хуки](#хуки)
  - [useDebounce](#usedebounce)
  - [useFetchData](#usefetchdata)

## Компоненты

### FilterDropdown

Этот компонент обрабатывает основной интерфейс выпадающего списка для выбора и применения фильтров.

- **Импортирует:**
  - `useDispatch` из `react-redux`
  - `Button` из `antd`
  - `addFilter`, `removeFilter` из `../../store/slices/filtersSlice`
  - `IconSearch` из `./icons`
  - `FilterMain` из `./FilterMain`
  - `{ FilterMode, filterConfig }` из `./filterConfig`
  - `{ getAvailableFilters, initializeFilterMode }` из `./utils`
  - `classNames` из `classnames/bind`
  - `styles` из `./FilterDropdown.scss`

- **Использование:**
  - Инициализирует режим фильтра и выбранные элементы на основе данных столбца.
  - Предоставляет обработчики для применения и сброса фильтров.
  - Отображает компонент `FilterMain` и кнопки действий.

### FilterMain

Этот компонент управляет основным интерфейсом фильтра, включая заголовок и динамическое содержимое фильтра.

- **Импортирует:**
  - `useState` из `react`
  - `Button`, `Popover` из `antd`
  - `IconArrowRight` из `../icons`
  - `FilterMenu` из `./FilterMenu`
  - `{ filterConfig, FilterMode }` из `../filterConfig`
  - `classNames` из `classnames/bind`
  - `styles` из `./FilterMain.scss`

- **Использование:**
  - Управляет состоянием режима фильтра и выбранными элементами.
  - Отображает меню фильтра и динамически рендерит соответствующий компонент фильтра.

### FilterMenu

Этот компонент отображает меню для выбора режимов фильтра.

- **Импортирует:**
  - `Menu` из `antd`
  - `{ filterConfig }` из `../../filterConfig`

- **Использование:**
  - Генерирует пункты меню на основе доступных режимов фильтра.
  - Обрабатывает выбор режима фильтра.

### FilterDate

Этот компонент обрабатывает выбор диапазона дат для фильтров.

- **Импортирует:**
  - `DatePicker` из `antd`

- **Использование:**
  - Предоставляет выбор диапазона дат и обновляет выбранные элементы при изменении даты.

### FilterSearchInput

Этот компонент управляет вводом для поиска в фильтре.

- **Импортирует:**
  - `useState`, `ChangeEvent` из `react`
  - `Input` из `antd`

- **Использование:**
  - Управляет состоянием ввода поиска и обновляет выбранные элементы при изменении ввода.

### FilterSelectInput

Этот компонент обрабатывает ввод для выбора в фильтрах, включая поиск и динамическую загрузку.

- **Импортирует:**
  - `useState`, `useEffect`, `useCallback`, `useRef`, `ChangeEvent` из `react`
  - `useSelector` из `react-redux`
  - `Input`, `Spin` из `antd`
  - `{ createURLPathParams }` из `../../utils/createURLPathParams`
  - `{ createAllQueryFilter }` из `../../utils/createAllQueryFilter`
  - `{ useFetchData, useDebounce }` из `../../hooks`
  - `FilterSelectList` из `./FilterSelectList`
  - `{ selectFiltersExcludingDataIndex }` из `../../../../store/selectors`
  - `{ RootState }` из `../../../../store/store`

- **Использование:**
  - Управляет состоянием ввода для выбора, задержкой поиска и динамической загрузкой данных.
  - Обрабатывает выбор и отмену выбора элементов.

### FilterSelectSwitch

Этот компонент предоставляет переключатель между типами ввода для фильтрации.

- **Импортирует:**
  - `useState`, `ChangeEvent`, `useRef` из `react`
  - `Input`, `Button`, `Switch`, `Select` из `antd`
  - `{ InputRef }` из `antd/lib/input`
  - `IconClose` из `../../icons`
  - `classNames` из `classnames/bind`
  - `styles` из `./FilterSelectSwitch.scss`

- **Использование:**
  - Управляет состоянием переключателя между типами ввода и динамически обновляет выбранные элементы.

## Утилиты

### filterConfig

Этот конфигурационный файл определяет различные режимы фильтров и их связанные компоненты.

- **Экспортирует:**
  - Конфигурации режимов фильтров, включая метки, типы, начальные выбранные элементы и компоненты.

### initializeFilterMode

Эта утилита инициализирует режим фильтра на основе типа данных столбца и списка значений.

- **Использование:**
  - Определяет начальный режим фильтра для заданного столбца.

### getAvailableFilters

Эта утилита получает доступные фильтры для заданного типа столбца и списка значений.

- **Использование:**
  - Предоставляет список применимых режимов фильтров для столбца.

## Хуки

### useDebounce

Этот пользовательский хук предоставляет версию значения или функции с задержкой.

- **Использование:**
  - Используется в `FilterSelectInput` для задержки ввода поиска.

### useFetchData

Этот пользовательский хук обрабатывает загрузку данных с поддержкой пагинации и фильтрации.

- **Использование:**
  - Используется в `FilterSelectInput` для динамической загрузки вариантов фильтров.

## Заключение

Этот механизм фильтрации разработан, чтобы быть гибким и расширяемым, позволяя легко интегрировать и настраивать его. Каждый компонент, функция и хук выполняет конкретную роль в общем решении, обеспечивая комплексный опыт фильтрации для пользователей.
