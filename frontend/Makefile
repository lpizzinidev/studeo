## Development
build-dev: 
	docker build -t frontend-dev -f Dockerfile.dev .

run-dev:
	docker run frontend-dev

run-dev-it:
	docker run -it frontend-dev /bin/sh

## Production
build-prod:
	docker build -t frontend-prod -f Dockerfile.prod .

run-prod:
	docker run frontend-prod

run-prod-it:
	docker run -it frontend-prod /bin/sh

## Testing
run-unit-test:
	npm run test-all

run-e2e-test:
	cd .. && \
		make run-dev \
		cd frontend/e2e && \
		npx cypress run