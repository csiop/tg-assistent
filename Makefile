build:
	docker build -t my_bot .

run:
	docker run -d -p 3000:3000 --name my_bot --rm my_bot