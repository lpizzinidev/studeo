## Development
build-dev:
	cd frontend && $(MAKE) build-dev
	cd backend && $(MAKE) build

run-dev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d

run-dev-build:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build

## Production
build-prod:
	cd frontend && $(MAKE) build-prod
	cd backend && $(MAKE) build

run-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

run-prod-build:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

## Utils
list: 
	docker-compose ps

stop:
	docker-compose down

setup-env:
	cd backend && \
		echo 'MONGO_INITDB_ROOT_USERNAME=admin\nMONGO_INITDB_ROOT_PASSWORD=admin\nMONGO_INITDB_DATABASE=studeo\nJWT_TOKEN=secret_token' >> .env
