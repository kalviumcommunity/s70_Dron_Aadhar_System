# Aadhar-Linked Digital Health Record System

## Overview
The **Aadhar-Linked Digital Health Record System** is a secure and scalable platform designed to store, manage, and retrieve medical records efficiently. By integrating with **Aadhar authentication**, users can securely access their complete medical history, including past diagnoses, prescriptions, and test reports, while ensuring **privacy, security, and seamless healthcare provider access**.

## Problem Statement
Managing medical records across multiple hospitals and clinics is a significant challenge for patients. Important health data often gets lost, making it difficult for doctors to access complete patient history in emergencies. This project solves the issue by **securely storing medical records on a cloud-based system** that is accessible via **Aadhar-based authentication**, enabling healthcare providers to make informed decisions.

## Features
### 1. User Authentication & Aadhar Integration
- Users log in using **Aadhar number and OTP-based verification** via UIDAI API.
- **Role-based authentication** (User, Doctor, Admin) ensures secure access control.
- **Multi-Factor Authentication (MFA)** for additional security.

### 2. Health Record Storage & Management
- Users can **upload and store medical history, prescriptions, test reports, and vaccination records**.
- Categorized storage for easy retrieval (by **date, doctor, or medical condition**).
- **AI-based health insights** to assist users in understanding their medical data.


### 3. Doctor & Hospital Access (With Permission)
- Users can **grant access** to specific healthcare providers.
- **Temporary access links** can be shared with doctors.
- **Access logs** to track record usage.

### 4. Secure Cloud Storage & Data Encryption
- **AES-256 encryption** ensures medical records remain private.
- Data is stored securely on **AWS S3 / Firebase Storage**.
- **End-to-end encryption** prevents unauthorized access.

### 5. Notifications & Health Reminders
- **Automated reminders** for check-ups, vaccinations, and medication.
- AI-based recommendations for **preventive healthcare**.

### 6. Cross-Platform Accessibility
- **Web Application:** Built using **React.js** for easy access.
- **Mobile Application:** Developed using **Flutter / React Native** for seamless on-the-go access.

## Technology Stack
### **Frontend (Web & Mobile App)**
- **Framework:** React.js (Web), Flutter/React Native (Mobile)
- **UI/UX Design:** Figma for wireframing
- **State Management:** Redux
- **Security:** HTTPS for secure transmission

### **Backend**
- **Server-Side:** Node.js with Express.js / Django (Python)
- **Database:** MongoDB / PostgreSQL for structured data storage
- **Authentication:** UIDAI API integration for Aadhar-based login
- **Encryption:** AES-256 for data security, JWT for authentication
- **Cloud Storage:** AWS S3 / Firebase Storage
- **Access Control:** Role-based permissions for users and healthcare providers

## Installation & Setup
### Prerequisites:
- Node.js, Python, MongoDB/PostgreSQL, Firebase/AWS credentials.

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/Aadhar-Health-Record.git
   cd Aadhar-Health-Record
   ```
2. Install dependencies:
   ```sh
   npm install   # For frontend
   pip install -r requirements.txt  # For backend (if using Django)
   ```
3. Configure environment variables for Aadhar API and database connections.
4. Start the backend server:
   ```sh
   npm run dev   # For Node.js
   python manage.py runserver  # For Django
   ```
5. Start the frontend application:
   ```sh
   npm start
   ```
6. Deploy the application on **AWS / Firebase**.

## Expected Outcome
- **Secure Aadhar-Linked Digital Health Record System** for medical history storage.
- **Seamless medical record access** for both users and authorized doctors.
- **AI-powered health insights** and preventive healthcare suggestions.
- **Scalable infrastructure** for future integrations with hospitals and insurance providers.

## Future Enhancements
- **AI-driven diagnosis suggestions** based on patient history.
- **Integration with government healthcare schemes**.
- **Wearable device support** for real-time health tracking.


## Contact
For queries or contributions, contact **[jagerjackson001@gmail.com]** or open an issue in the repository.

## Codium Preview Enabled



## 🌐 Deployed Backend URL

The backend server is deployed and live at the following URL:

👉 [https://s70-dron-aadhar-system.onrender.com](https://s70-dron-aadhar-system.onrender.com)

Use this base URL to make API requests, such as:

- `GET /api/records`
- `POST /api/records`
- `PUT /api/records/:id`
- `DELETE /api/records/:id`

## NOTE : > Root route ("/") shows "Cannot GET /" because this is a backend API server. Please use API endpoints like `/api/records` to interact with the server.
 

