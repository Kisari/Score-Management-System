# Score-Management-System

*Live Demo*: https://g-score.netlify.app/
**Important**: The response may take up to 1 mins


This is the instructions on how to set up the project locally

## Clone the project from source

```bash
git clone https://github.com/Kisari/Score-Management-System.git
```
Open the project in the root folder. Here is the backend folder

## Backend setup 

```bash
npm i
```

```bash
(windows)
copy .env.sample .env
```
Then modify the content of **.env** to fit with your **SQL database configuration**
Open the **src** folder and go to **config** -> **config.json**
Adjusting the content of **development** to fit with your **SQL database configuration**

![image](https://github.com/user-attachments/assets/5f30f060-4cb7-4610-81ea-0dc98ae47e06)

```bash
npm run db:setup
```
This command will export the **databse structure** and **mock data** for you

Make sure you install the Docker Desktop before running below command

**START THE LOCAL SERVER**
```bash
docker compose -f .\docker-compose.yml up --build
```
**STOP THE LOCAL SERVER**
```bash
docker compose -f .\docker-compose.yml down
```
## Frontend setup

Now open another terminal in the same root folder
Then navigate to the frontend

```bash
cd frontend
```
Install all the necessary package

```bash
npm install
```
Copy and modify the content of .env (if needed)

```bash
(windows)
copy .env.sample .env
```

**START THE LOCAL CLIENT**
```bash
npm run dev
```

UI references: https://dribbble.com/shots/22429297-School-Management-Dashboard
