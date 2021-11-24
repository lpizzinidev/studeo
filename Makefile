## DEVELOPMENT ##
build-dev:
	cd frontend && $(MAKE) build-dev
	cd backend && $(MAKE) build

run-dev:
	@NODE_ENV=development docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d

## PRODUCTION ##
build-prod:
	cd frontend && $(MAKE) build-prod
	cd backend && $(MAKE) build

run-prod:
	@NODE_ENV=production docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

list: 
	docker-compose ps

stop:
	docker-compose down

test:
	@NODE_ENV=test && \
		cd backend && \
		npm i && \
		npm run test && \
		cd ../frontend && \
		npm i && \
		npm run test-all

