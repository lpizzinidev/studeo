start-dev:
	@docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d

start-prod:
	@docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d


stop:
	@docker-compose down

test:
	@cd backend && \
		npm i && \
		npm run test && \
		cd ../frontend && \
		npm i && \
		npm run test-all