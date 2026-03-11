from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import math

app = FastAPI(title="AdaptiveSensing.io IP Fortress")

# Configure CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://10.5.0.2:3000"], # Update with production URL later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Pydantic Models ---
class PlumeParams(BaseModel):
    wind_speed: float
    emission_rate: float
    target_distance: float
    stability_class: str # A-F

class FicksLawParams(BaseModel):
    data_points: list[float]
    membrane_thickness: float
    temperature: float

class SignalParams(BaseModel):
    noise_level: float
    sampling_frequency: float
    mode: str # "Standard" or "Gulp"

# --- Endpoints ---

@app.get("/")
def read_root():
    return {"status": "IP Fortress Active", "version": "1.0.0"}

@app.post("/api/dispersion")
def calculate_plume_dispersion(params: PlumeParams):
    """
    Simulates a 2D Gaussian plume dispersion model.
    Returns grid coordinates (x, y) and corresponding concentration values (z).
    """
    try:
        # Simplified Gaussian Plume Model (Placeholder for proprietary math)
        # Using numpy to generate a meshgrid for Plotly 3D Surface/Heatmap
        x = np.linspace(0, params.target_distance, 50)
        y = np.linspace(-params.target_distance/2, params.target_distance/2, 50)
        X, Y = np.meshgrid(x, y)

        # Fake dispersion logic affected by inputs
        wind_factor = max(0.1, params.wind_speed)
        spread = 10 if params.stability_class.upper() in ['A', 'B'] else 5
        
        # Z = concentration
        Z = (params.emission_rate / (math.pi * wind_factor * spread)) * np.exp(- (Y**2) / (2 * spread**2)) * np.exp(- X / 100)
        
        # Add some noise for realism
        noise = np.random.normal(0, np.max(Z)*0.05, X.shape)
        Z = np.abs(Z + noise) # Keep positive

        return {
            "x": x.tolist(),
            "y": y.tolist(),
            "z": Z.tolist()
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/ficks-law")
def calculate_ficks_law(params: FicksLawParams):
    """
    Computes steady-state predictive values from non-steady-state data points.
    """
    try:
         # Placeholder logic: Simulate an asymptotic curve approaching steady state
         time_steps = np.arange(len(params.data_points))
         raw_data = np.array(params.data_points)
         
         # The 'prediction' smooths the curve and projects the asymptote
         # Fick's law dictates flux J = -D(dc/dx). 
         # Here we just generate a visually distinct "predictive" curve.
         
         if len(raw_data) < 2:
             raise ValueError("Need at least 2 data points.")
             
         target_steady_state = raw_data[-1] * 1.5 # Arbitrary target for visual
         
         # Generate a smooth log curve
         predicted_curve = target_steady_state * (1 - np.exp(-0.1 * time_steps))
         
         return {
             "time": time_steps.tolist(),
             "raw_data": raw_data.tolist(),
             "predicted_data": predicted_curve.tolist()
         }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/signal-to-noise")
def simulate_signal_to_noise(params: SignalParams):
    """
    Simulates waveform data, demonstrating the 3.2x noise reduction in 'Gulp' mode.
    """
    try:
        # Generate time array based on frequency
        duration = 5 # seconds
        t = np.linspace(0, duration, int(duration * params.sampling_frequency))
        
        # Base signal (e.g. a small chemical peak at t=2.5s)
        signal = 10 * np.exp(-((t - 2.5) / 0.2)**2)
        
        # Apply noise reduction logic
        actual_noise_level = params.noise_level
        if params.mode.lower() == "gulp":
            actual_noise_level = params.noise_level / 3.2
            
        noise = np.random.normal(0, actual_noise_level, len(t))
        waveform = signal + noise
        
        return {
            "time": t.tolist(),
            "waveform": waveform.tolist(),
            "signal_base": signal.tolist() # Send clean signal for visual reference if needed
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
