# CelebrateAI

## Overview

CelebrateAI is an intelligent SaaS-style web application designed to automatically celebrate your customers’ birthdays via email.  
It allows businesses to securely store customer information (name, email, date of birth) and ensures **personalized birthday greetings are sent only on the user’s birthday**, without any manual tracking.  

This ensures that customer engagement is maintained efficiently, strengthens brand loyalty, and saves time for business teams. CelebrateAI features a premium, investor-ready interface that works on **all devices**, from desktops to phones.

---

## Features

- **Beautiful, Responsive UI:** Works on desktop, tablet, and mobile.
- **Customer Management:** Add new customers with name, email, and date of birth.
- **Automated Birthday Checks:** Cron job runs daily at 7 AM to identify birthdays.
- **Targeted Email Notifications:** Sends HTML emails only to customers whose birthday is that day.
- **Privacy-Focused:** No spam, only personalized birthday messages.
- **Unique Emails:** Each email is personalized and unique to the user.

---

## Technology Stack

| Layer     | Technology                              |
|----------|----------------------------------------|
| Frontend | HTML, CSS, JavaScript                   |
| Backend  | Node.js, Express.js                      |
| Database | MongoDB Atlas (Cloud-hosted)             |
| Email    | Nodemailer with Gmail SMTP               |
| Scheduler| node-cron                               |
| Hosting  | Render (optional cloud deployment)       |

---

## Setup Instructions

### 1. Clone or Download the Project

```bash
git clone <your-repo-link>
cd celebrateAI

