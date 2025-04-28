from flask import Flask, request, jsonify
import joblib
import pandas as pd
from sklearn.preprocessing import StandardScaler
from flask_cors import CORS

# Initialize the Flask application
app = Flask(__name__)
CORS(app)

# Load the trained model and scaler
model = joblib.load('campaign_time_predictor.joblib')
scaler = joblib.load('campaign_scaler.joblib')

# Define the endpoint for prediction
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from the request
        data = request.get_json()

        # Prepare the data for prediction (similar to your example)
        example = pd.DataFrame([data])  # <-- ✅ met le dict dans une liste

        # Scale the features using the pre-trained scaler
        example_scaled = scaler.transform(example)

        # Get the prediction from the model
        prediction = model.predict(example_scaled)[0]

        # Return the prediction as JSON
        return jsonify({"predicted_days_to_target": prediction})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
