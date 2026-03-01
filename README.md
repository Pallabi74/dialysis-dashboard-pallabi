# dialysis-dashboard-pallabi
Real-time dialysis patient monitoring dashboard
Dialysis Patient Monitoring Dashboard
=====================================

DESCRIPTION
This project displays real-time dialysis patient data including pre/post 
weight measurements, blood pressure readings, ultrafiltration goals, and 
status indicators. High blood pressure patients are highlighted in red.

FEATURES
- Patient name and weight tracking (pre/post dialysis)
- Blood pressure monitoring with high BP alerts  
- UF Goal display
- Status column (Normal = Green, High BP = Red)
- Refresh functionality

SAMPLE DATA
Patient      Weight Pre→Post   BP          UF Goal   Status
--------     --------------   ---------   -------   ------------
John Doe     75→70kg          120/80mmHg  5.0L      Normal
Jane Smith   80→74kg          185/95mmHg  6.0L      High BP

TECHNICAL DETAILS
Frontend: React + Vite (localhost:5173)
Backend:  FastAPI + Python (localhost:8000)

RUN INSTRUCTIONS
Terminal 1:
uvicorn main:app --host 0.0.0.0 --port 8000 --reload

Terminal 2:  
cd frontend
npm run dev

AUTHOR
Pallabi
Undergraduate Engineering Student
Asansol, West Bengal

SUBMITTED: March 1, 2026
