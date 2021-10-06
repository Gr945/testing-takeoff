В папке /back находится сервер. Для запуска сервера, нужно находять в папке back, введисти в терминале комманду  yarn start или npm start сервер запущен на 2224 порту сервер готов к запросам зависимости back "dependencies": { "cors": "^2.8.5", "express": "^4.17.1", "mongoose": "^6.0.4", "nodemon": "^2.0.12" }

Kлиентская часть на ReactJS Для запуска, нужно находять в папке testing-takeoff, введисти в терминале комманду yarn start или npm start зависимости front "dependencies": { "@testing-library/jest-dom": "^5.11.4", "@testing-library/react": "^11.1.0", "@testing-library/user-event": "^12.1.10", "react": "^17.0.2", "react-dom": "^17.0.2", "react-redux": "^7.2.4", "react-router-dom": "^5.2.1", "react-scripts": "4.0.3", "redux": "^4.1.1", "redux-devtools-extension": "^2.13.9", "redux-saga": "^1.1.3", "web-vitals": "^1.0.1" }
Для создания нового пользователя надо отправить POST запрос c имянем и паролью на http://localhost:2224.
Проэкт запущен
