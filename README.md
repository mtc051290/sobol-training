# Crypto Prices WebSocket

Welcome to **Crypto Prices WebSocket**! 🚀

This microservice fetches historical price data for multiple assets, generates trading strategies, and leverages a neural network to determine **Buy**, **Hold**, and **Sell** signals.

---

## Features
- 📊 Fetch historical price data for various crypto assets.
- 📈 Generate trading strategies based on the data.
- 🤖 Utilize a neural network to evaluate market conditions.
- 🔗 WebSocket support for real-time updates.

---

## Prerequisites
Before running the project, ensure you have the following installed:

- [Python 3.8+](https://www.python.org/downloads/)
- [Pipenv](https://pipenv.pypa.io/en/latest/)
- Docker (optional for containerized deployment)

---

## Installation
Follow these steps to set up the project locally:

### 1. Clone the Repository


### 2. Install Dependencies
Using Pipenv:
```bash
pipenv install
```

Alternatively, with pip:
```bash
pip install -r requirements.txt
```

---

## Usage

### 1. Run the Service
Activate the virtual environment and start the service:
```bash
pipenv shell
python main.py
```

### 2. WebSocket Server
The WebSocket server will start at `ws://localhost:8000`. Connect your client to receive real-time updates.

### 3. Configuration
Adjust the configuration in `config.json` to set the desired assets, strategy parameters, and neural network options.

---

## Docker Deployment
To deploy the service in a container:

### 1. Build the Docker Image
```bash
docker build -t crypto-prices-websocket .
```

### 2. Run the Container
```bash
docker run -p 8000:8000 crypto-prices-websocket
```

---

## Project Structure
- `data/` - Historical data storage.
- `strategies/` - Trading strategy scripts.
- `models/` - Neural network models.
- `main.py` - Entry point of the service.
- `config.json` - Configuration file.

---

## Contributing
We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Disclaimer
This project is for educational purposes only. **Use at your own risk!**
