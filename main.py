from fastapi import FastAPI

app = FastAPI()

@app.get("/patients/{unit}")
def get_patients(unit: str):
    if unit == "A":
        return [
            {"name": "John Doe", "weight_pre": 75, "weight_post": 70, "bp": "120/80", "uf_goal": 5, "status": "✅ Normal"},
            {"name": "Jane Smith", "weight_pre": 80, "weight_post": 74, "bp": "185/95", "uf_goal": 6, "status": "❌ High BP"}
        ]
    return [
        {"name": "Bob Johnson", "weight_pre": 82, "weight_post": 77, "bp": "135/85", "uf_goal": 4.5, "status": "✅ Normal"},
        {"name": "Alice Brown", "weight_pre": 68, "weight_post": 65, "bp": "110/70", "uf_goal": 3, "status": "✅ Normal"}
    ]
