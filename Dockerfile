# Stage 1: Build
FROM node:20-alpine AS builder

# 設置工作目錄
WORKDIR /app

# 複製 package 文件
COPY package*.json ./

# 安裝依賴（包含 devDependencies，因為構建需要 vite）
RUN npm ci --ignore-scripts

# 複製源代碼
COPY . .

# 構建生產版本
RUN npm run build

# Stage 2: Production
FROM nginx:alpine

# 安裝 wget（用於健康檢查）
RUN apk add --no-cache wget

# 刪除默認 Nginx 配置（避免端口衝突）
RUN rm -f /etc/nginx/conf.d/default.conf

# 複製構建產物到 Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# 複製自定義 Nginx 配置
COPY nginx-docker.conf /etc/nginx/conf.d/default.conf

# 暴露端口 8080（非特權端口）
EXPOSE 8080

# 健康檢查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:8080/ || exit 1

# 啟動 Nginx
CMD ["nginx", "-g", "daemon off;"]
