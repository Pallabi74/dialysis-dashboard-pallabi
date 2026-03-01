# Dialysis Patient Dashboard

## How it works
React frontend talks to FastAPI backend through HTTP calls. Data is hardcoded 
for demo. Simple architecture:


## Setup (3 min)
bash
git clone https://github.com/YOUR_USERNAME/dialysis-dashboard-pallabi.git
cd dialysis-dashboard-pallabi

# Backend - Terminal 1
pip install fastapi uvicorn
uvicorn main:app --host 0.0.0.0 --port 8000 --reload

# Frontend - Terminal 2  
cd frontend
npm install
npm run dev

Visit http://localhost:5173


Data
Two patients hardcoded:

John Doe: 75→70kg, 120/80, 5L (Normal)

Jane Smith: 80→74kg, 185/95, 6L (High BP alert)

What I decided
No database - demo only

BP>140/90 = red alert (medical standard)

Single unit A (unit B similar)

Inline styles for speed

Missing stuff
No real database

Manual refresh only

One unit view

No login

Next time
Add Postgres

Unit selector

Live updates

Test API: http://localhost:8000/patients/A






Pallabi
March 1, 2026
