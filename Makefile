run:
	@docker compose up -d

stop:
	@docker compose down

run-test:
	@cd backend && \
		npm i && \
		npm run test && \
		cd ../frontend && \
		npm i && \
		npm run test-all