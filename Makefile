start-dev:
	@NODE_ENV=development docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d

start-prod:
	@NODE_ENV=production docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d


stop:
	@docker-compose down

test:
	@cd backend && \
		npm i && \
		npm run test && \
		cd ../frontend && \
		npm i && \
		npm run test-all