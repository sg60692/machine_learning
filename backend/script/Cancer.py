from os import write
import sys
import pickle
import sklearn
import numpy as np

features = np.array([int(feature) for feature in sys.argv[1].split(',')])

loaded_model = pickle.load(open('./script/kNeighborsClassifier.pkl', 'rb'))

result = loaded_model.predict(features.reshape(1, -1))

print(np.squeeze(result), end="")
