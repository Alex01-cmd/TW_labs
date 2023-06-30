import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';

// Шаг 3: Создание провайдера (Provider) для хранилища (Store)
const StoreContext = React.createContext(null);

// Шаг 6: Создание общих методов для сохранения данных в localStorage
const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const loadFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

// Шаг 4: Преобразование данных из локального состояния компонента в MobX хранилище
const MyStore = {
  data: [],

  // Шаг 5: Создание действия (action), изменяющего данные в хранилище или модели
  updateData: action(function (newData) {
    this.data = newData;
  }),
};

// Шаг 7: Персистентное сохранение данных в localStorage при первом запуске
const initialData = loadFromLocalStorage('myData');
if (!initialData) {
  saveToLocalStorage('myData', MyStore.data);
} else {
  MyStore.data = initialData;
}

const HomePage = observer(() => {
  // Шаг 2: Подключение MobX
  const store = MyStore;

  // Шаг 9: Получение исходных данных из localStorage через асинхронную функцию
  React.useEffect(() => {
    setTimeout(() => {
      const data = loadFromLocalStorage('myData');
      if (data) {
        store.updateData(data);
      }
    }, 2000);
  }, []);

  return (
    // Шаг 1: Создание ветки "Laboratorul_5"
    <div>
      <h1>Добро пожаловать на домашнюю страницу!</h1>
      <button onClick={() => alert('Клик!')}>Нажмите на меня</button>
    </div>
  );
});

const App = () => {
  return (
    // Шаг 3: Создание провайдера (Provider) для хранилища (Store)
    <StoreContext.Provider value={MyStore}>
      <HomePage />
    </StoreContext.Provider>
  );
};

export default App;
