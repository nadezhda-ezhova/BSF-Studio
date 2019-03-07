cnf ?= config.env
include $(cnf)
export $(shell sed 's/=.*//' $(cnf))

dpl ?= deploy.env
include $(dpl)
export $(shell sed 's/=.*//' $(dpl))

# grep the version from the mix file
ifdef BUILD_NUMBER
	VERSION = BUILD_$(BUILD_NUMBER)
else
	VERSION=$(shell ./version.sh)
endif

# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

build: ## Build the container
	docker build -t $(APP_NAME) .

run-lint: ## Run ESLint from container
	docker run -i --rm --env-file=./config.env -p=$(PORT):$(PORT) --name="$(APP_NAME)" $(APP_NAME) yarn lint

run: ## Run container on port configured in `config.env`
	docker run -i -t --rm --env-file=./config.env -p=$(PORT):$(PORT) --name="$(APP_NAME)" $(APP_NAME)

publish-version: tag-version ## Publish the `{version}` taged container to Registry
	@echo 'publish $(VERSION) to $(DOCKER_REPO)'
	docker push $(DOCKER_REPO)/$(APP_NAME):$(VERSION)

tag-version: ## Generate container `latest` tag
	@echo 'create tag $(VERSION)'
	docker tag $(APP_NAME) $(DOCKER_REPO)/$(APP_NAME):$(VERSION)

version: ## Output the current version
	@echo $(VERSION)

deploy:
	cat kube.yml | sed "s/{{VERSION}}/${VERSION}/g" | kubectl apply -f -