## Development
build-dev: 
	docker build -t frontend -f Dockerfile.dev .

run-dev:
	docker run frontend

run-dev-it:
	docker run -it frontend /bin/sh

## Production
build-prod:
	docker build -t frontend -f Dockerfile.prod .

run-prod:
	docker run frontend

run-prod-it:
	docker run -it frontend /bin/sh

## Testing
run-unit-test:
	npm run test-all

run-e2e-test:
	cd e2e && \
		npx cypress run