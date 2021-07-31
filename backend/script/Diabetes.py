import pickle
from sklearn.pipeline import Pipeline
import numpy as np
import sys
from tensorflow.keras.models import load_model
from tensorflow.keras.wrappers.scikit_learn import KerasClassifier

scale = pickle.load(open('./script/Scaler.pkl', 'rb'))
loaded_model = load_model('./script/neural_network_model.h5')

pipe = Pipeline([('scaler', scale), ('Neural-network', loaded_model)])

features = np.array([float(feature) for feature in sys.argv[1].split(',')])

prediction = pipe.predict(features.reshape(1, -1)).item()

print(round(prediction), end="")
