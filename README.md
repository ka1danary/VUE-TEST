<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&duration=1000&pause=1000&color=36AFF7&random=false&width=435&lines=%D0%92%D0%B0%D0%BB%D1%8E%D1%82%D0%B0;%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5+%D0%B4%D0%BB%D1%8F+%D0%BE%D1%82%D1%81%D0%BB%D0%B5%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+%D0%B2%D0%B0%D0%BB%D1%8E%D1%82" alt="Typing SVG" /></a>

## Установка проекта
```
yarn install
```

### Компилировать и выполнить горячую перезагрузку для разработки
```
yarn serve
```

### Компилировать  для производства
```
yarn build
```

### Основной стек технологий 
- Vue 3
- Pinia
- Axios

### Дополнительные библиотеки
- epic-spinners

## Общая информация по проекту

#### Страницы
- *MainPage* - главная страница с валютами
  
- *SettingsPage* - страница настроек, можно выбрать валюты для отслеживания и настроить автоматическое обновление данных о валютах

#### Store
- *ValueStore* - хранит общие данные по валютам.

- *AutoUpdateStore* -  отвечает за хранение информации по автоматическому обновлению данных о валютах

- *HeaderStore* - хранит данные о состоянии иконок в компоненте `MeHeader.vue`
