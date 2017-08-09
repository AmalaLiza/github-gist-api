# Github Gist API

## Guide to run the app

1. Install Node.js
2. Clone the app
3. Install node modules
4. Run the app

### 1. Install Node.js:

##### Mac/Linux

Install nvm (Node Version Manager) using

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash
```
or <br/>
```sh
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash
```

Then restart the terminal and type
```sh
nvm install 6
```

This will install Node v6

### 2. Clone the repo 
```sh
git clone https://github.com/razorthinksoftware/github-gist-api.git
```

#### 3. Build
`cd` into the cloned repo dir
```
cd path-to-cloned-repo
```
Pull if you want to get latest changes
```
git pull
```
Then build the app
```
npm i
npm run clean
npm run build
```
Then go to `http://localhost:8080` to use the app.
