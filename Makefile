start:
	@docker-compose up -d

stop:
	@docker-compose down

test:
	@cd backend && \
		npm i && \
		npm run test && \
		cd ../frontend && \
		npm i && \
		npm run test-all