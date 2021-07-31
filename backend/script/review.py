from os import write
import sys
import pickle
import numpy as np

features = np.array([int(feature) for feature in sys.argv[1].split(',')])
features.resize(1, 13)

loaded_model = pickle.load(open('./script/RFR.pkl', 'rb'))

result = loaded_model.predict(features)

print(np.squeeze(result), end="")
