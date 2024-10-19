# Этап сборки
FROM node:18-alpine AS builder

# Рабочая директория в контейнере
WORKDIR /usr/src/app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# Собираем проект
RUN npm run build

# Этап для запуска
FROM node:18-alpine

# Рабочая директория
WORKDIR /usr/src/app

# Копируем только необходимые файлы для запуска приложения
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY package*.json ./

# Expose порта
EXPOSE 3000

# Команда для запуска приложения
CMD ["node", "dist/src/main"]
