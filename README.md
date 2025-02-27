### Application
[Salt ID-Card generator](https://salt-community.github.io/salt-id-card/)


### Instruction how to generate new link
[Click here to follow visual instruction](https://youtu.be/Ra3fA3m0j_U)

If link is not valid you will end up on 404 page. 
There you can generate your own link by filling the form.
You may copy the link and paste it or directly click the button that will 
Redirect you to the right page.

### Process of generating card and applying for GH Student pack

#### Generating card:
1. Paste provided link in the browser you will end up on signing page.
2. Before Signing in make sure to upload gmail profile picture for @appliedtechnology.se email and select "Visibility to Anyone"
as that image will be used for your Salt ID card. 
3. Make sure to sign in with @appliedtechnology.se other emails will be denied.
4. Download your generated ID card.

#### Applying steps:
1. Entering page https://education.github.com/pack.
2. Click on *Sign up for Student Developer Pack*.
3. Scroll down to the section Application where you need to enter the name of the school (choose from the list) our case: Applied Technology - SALT.
4. Email from appliedtechnology.se has to be added to github in order to enable Continue.
5. Please enable 2FA before applying as it seems to be crucial. How to do that you can find in [here](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)
6. Upload proof of academic status either contract of student ID. For now we have only contract. Proccess application. With contract expected time of response is estimated to not more than 11 days.

[Click here to follow visual instruction](https://youtu.be/HPErznbVQiY)

### Excalidraw
[Simple view of the app](https://excalidraw.com/#json=bTwsnrCGFfx5t6UX28L74,IhnCz-hZiStd2vf0rz3djw)

---
# 📜 ID Card API Documentation

## 📌 Overview
This API provides endpoints for retrieving user ID card details using either an **email address** or a **UUID**.

- **Version**: v1

## 📌 API Endpoints

### 🆔 Retrieve ID Card by UUID
**Endpoint**: `/api/v1/id-cards/uuid/{uuid}`  
**Method**: `GET`  
**Tag**: `ID Card Controller`

Fetches user ID card details using a unique identifier (UUID).  

#### 🔹 Request Parameters
| Parameter | Type   | Required | Description |
|-----------|--------|----------|-------------|
| `uuid`    | string | ✅ Yes   | User UUID in UUID format |

#### 🔹 Response Examples
| Status Code | Description                     |
|-------------|---------------------------------|
| `200 OK`    | Successfully retrieved ID card |
| `400 Bad Request` | Invalid UUID format |
| `404 Not Found`   | User not found |
| `502 Bad Gateway` | Invalid value from Notion Proxy |

#### Example Response: (200 OK)

```json
{
  "uuid": "123e4567-e89b-12d3-a456-426614174000",
  "name": "John Doe",
  "course": "jfs-sthlm-2024-09-06",
  "endDate": "2026-09-06",
  "email": "johndoe@appliedtechnology.se",
  "image": "https://avatars.githubusercontent.com/johndoe"
}
```

### 2. Retrieve ID Card by Email

**Endpoint**: `/api/v1/id-cards/email/{email}`  
**Method**: `GET`  
**Tag**: `ID Card Controller`

#### 🔹 Request Parameters
| Parameter | Type   | Required | Description |
|-----------|--------|----------|-------------|
| `email`    | string | ✅ Yes   | User email address |

#### 🔹 Response Examples
| Status Code | Description                     |
|-------------|---------------------------------|
| `200 OK`    | Successfully retrieved ID card |
| `400 Bad Request` | Invalid UUID format |
| `404 Not Found`   | User not found |
| `502 Bad Gateway` | Invalid value from Notion Proxy |

#### Example Response: (200 OK)

```json
{
  "uuid": "123e4567-e89b-12d3-a456-426614174000",
  "name": "John Doe",
  "course": "jfs-sthlm-2024-09-06",
  "endDate": "2026-09-06",
  "email": "johndoe@appliedtechnology.se",
  "image": "https://avatars.githubusercontent.com/johndoe"
}
```

## 📌 Response Schema

### UserDto
The `UserDto` schema represents the details of the user associated with the ID card.

#### Properties
- **uuid** (string): The unique identifier for the user.
- **name** (string): The full name of the user.
- **course** (string): The course the user is enrolled in.
- **endDate** (string): The end date for the user's course.
- **email** (string): The email address of the user.
- **image** (string): A URL or base64 encoded string for the user's image.

#### Example
```json
{
  "uuid": "123e4567-e89b-12d3-a456-426614174000",
  "name": "John Doe",
  "course": "Computer Science",
  "endDate": "2025-05-31",
  "email": "johndoe@example.com",
  "image": "http://example.com/image.jpg"
}
```
---
## 📌 Running Locally

To run the `salt-id-card` project locally, follow the steps below. This project includes both a frontend and a backend, each requiring specific environment configurations.

### 1. Clone the Repository
First, clone the repository to your local machine:

```bash
git clone git@github.com:salt-community/salt-id-card.git
cd salt-id-card
```
## 2. Frontend Setup

The frontend requires some environment variables to be set in a `.env.local` file.

### a. Create `.env.local`
In the root of the frontend directory, create a `.env.local` file with the following content:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASE_URL=your_base_url
VITE_BACKEND_PATH=your_backend_path
```
- Replace `your_clerk_publishable_key` with your Clerk API publishable key.
- Replace `your_base_url` with the URL where your frontend will be served.
- Replace `your_backend_path` with the backend API url.

### b. Install Dependencies
Navigate to the frontend directory and install the necessary dependencies:

```bash
cd frontend
npm install
```

### c. Run the Frontend
Start the frontend application:

```bash
npm run dev
```
Your frontend should now be available at http://localhost:5173.

## 3. Backend Setup
The backend also requires environment variables to be set in a .env file.

## 3. Backend Setup (Spring Boot)

The backend requires some environment variables to be set in a `.env` file.

### a. Create `.env`
In the root of the backend directory, create a `.env` file with the following content:

```env
NOTION_PROXY_API_KEY=your_notion_proxy_api_key
NOTION_PROXY_API_KEY_HEADER=your_notion_proxy_api_key_header
NOTION_PROXY_URL=your_notion_proxy_api_url
```

- Replace your_notion_proxy_api_key with the API key for your Notion proxy.
- Replace your_notion_proxy_api_key_header with the API header for your Notion proxy.
- Replace your_notion_proxy_api_url with the API url for your Notion proxy.

### b. Run the Backend
To run your Spring Boot application, navigate to the backend directory and use Maven or Gradle to run the application.

For Maven, run:

```bash
mvn spring-boot:run
```

Your backend should now be running at http://localhost:8080.

### 4. Test Locally
The frontend should be accessible at http://localhost:5173.
The backend should be accessible at http://localhost:8080.
Ensure that both the frontend and backend are running concurrently to fully interact with the application.

---
## 📌 Contact & Support

If you have any questions or issues, feel free to open an issue on this repository. 🚀
