FROM registry.cn-hangzhou.aliyuncs.com/ax-image/node AS base

# 安装依赖阶段
FROM base AS deps

WORKDIR /app

# 将 package.json COPY 到容器,以便于安装依赖
COPY package.json .npmrc ./

# RUN \ 这个反斜杠是为了续行,在下一行继续
RUN \
    if [ -f package.json ]; then npm install; \
    fi


# 打包阶段
FROM base AS builder

WORKDIR /app
# --from=deps 表示: 从 deps 阶段将 /app/node_modules 复制到 ./node_modules
# 这段COPY代表 => 将 deps 阶段的 /app/node_modules 复制到当前目录下的 ./node_modules
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN \
    if [ -f package.json ]; then npm run build; \
    fi

# 运行阶段
FROM base AS runner

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# 暴露端口
EXPOSE 3000

CMD node server.js