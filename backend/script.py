from os import write
import  sys
import pickle
import numpy as np

example_measures = np.array([int(feature) for feature in sys.argv[1].split(',')])

loaded_model = pickle.load(open('kNeighborsClassifier.pkl', 'rb'))

result = loaded_model.predict(example_measures.reshape(1,-1))

print(result)